// const express = require('express')
import express from 'express'
import dotenv from "dotenv"
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js"
import compression from 'compression';
import cors from "cors"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors(
    {
        origin: ["https://easy-2y7kluxli-dakoumas-projects.vercel.app/"],
        methods: ["POST", "GET"],
        credentials: true
    }
))
app.use(compression());
app.use(express.json()); // allow us to accept JSON data in the rea.body
app.get("/", (req, res) => res.status(200).send("HELLO WORLD"))

app.use("/api/products", productRoutes)

app.listen(PORT, () => {
    connectDB()
    console.log("Server started at http://localhost:" + PORT);

})