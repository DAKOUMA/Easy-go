import { mongoose } from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}); // passing an empty brackets {} fetch all products
        res.status(200).json({ success: true, data: products })
    } catch (error) {
        console.error("Error in Fetching products", error.message);
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

export const postProducts = async (req, res) => {
    const product = req.body; // user will send this data

    if (!product.brand || !product.date || !product.price) {
        return res.status(400).json({ success: false, message: "Please provide all fields" })
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(200).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in Create product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const putProducts = async (req, res) => {
    const { id } = req.params;

    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ success: false, message: "Invalid Product id" })
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true })
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error("Error im Update product", error.message);
        res.status(500).json({ success: false, message: "Server error" })
    }
}

export const deleteProducts = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ success: false, message: "Invalid Product id" })
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" });
    } catch (error) {
        console.error("Error in Delete product", error.message);
        res.status(500).json({ success: false, message: "Server Error" })
    }
}