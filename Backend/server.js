// const express = require('express')
import express from 'express'
import dotenv from "dotenv"
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js"
import cors from "cors"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json()); // allow us to accept JSON data in the rea.body
app.get("/", (req, res) => res.status(200).json({ message: "hello world" }))

app.use("/api/products", productRoutes)

app.listen(PORT, () => {
    connectDB()
    console.log("Server started at http://localhost:" + PORT);

})