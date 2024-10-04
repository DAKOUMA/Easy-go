import axios from "axios";
import dayjs from "dayjs";
import { create } from "zustand";



export const useProductStore = create((set) => ({

    products: [],
    productByDate: [],
    date: dayjs("2024-09-23"),
    dateSaved: '',
    setDate: (date) => set({ date }),
    setDateSaved: (dateSaved) => {
        const dateNow = new Date(dateSaved).toLocaleDateString("en-CA")
        set({ dateSaved: dateNow })
    },
    filterProductByDate: (products, dateSaved) => {
        const arrayByDate = products.filter((item) => item.date === dateSaved)

        const calculateBrand = arrayByDate.reduce((acc, product) => {
            acc[product.brand] = (acc[product.brand] || 0) + 1;
            return acc;
        }, [])

        const brandArray = Object.entries(calculateBrand).map(([brand, count]) => ({ brand, count }))
        brandArray.sort((a, b) => b.count - a.count)

        const topThreeBrands = brandArray.slice(0, 3);
        const otherBrandsCount = brandArray.slice(3).reduce((acc, item) => acc + item.count, 0);

        const finalBrandCount = topThreeBrands.reduce((acc, item) => {
            acc[item.brand] = item.count;
            return acc
        }, [])

        finalBrandCount['Other'] = otherBrandsCount;

        const RealyFinalBrandCount = Object.entries(finalBrandCount).map(([brand, count]) => ({ brand, count }))
        set({ productByDate: RealyFinalBrandCount })
        return RealyFinalBrandCount
    },
    setProducts: (products) => set({ products }),
    getProduct: () => {
        axios.get("http://localhost:5000/api/products")
            .then(response => {
                const result = response.data.data;
                set({ products: result })
            })
            .catch(error => {
                console.log(error);
            })
    },
    createProduct: async (newProduct) => {
        if (!newProduct.brand || !newProduct.price || !newProduct.date) {
            return { success: false, message: "Fill all in fields" }
        }

        await axios.post("http://localhost:5000/api/products", newProduct)
            .then(response => {
                set((state) => ({ products: [...state.products, response.data.data] }))
                return { success: true, message: "Product created successfully" }
            })
            .catch(error => {
                console.error("Error creating product:", error);
                return { success: false, message: "Error creating product" };
            });
    },
    // deleteProduct: async (id) => {
    //     if (!id) {
    //         return { success: false, message: "No ID error" }
    //     }
    //     axios.delete(`http://localhost:5000/api/products/${id}`)
    //         .then(response => {
    //             return { sucess: true, message: "productDeleted" }
    //         })
    //         .catch(error => {
    //             console.error("Error deleting product:", error)
    //             return { success: false, message: "Error Delete Product" }
    //         })
    // }
}))


