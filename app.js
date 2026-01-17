import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app=express();
import router from "./routers/index.js"
import connectDB from "./middleware/DBConnection.js";
connectDB();
app.use(express.json({limit:'100mb'}));
app.use(express.urlencoded({extended:true}));
app.use(process.env.API_ROUTE,router)
export default app;