// 
import express from "express";
// const express=require("express");
const app = express();
app.use(express.json());

// Import route
import router from "../backend/routes/productRoute.js";
const product =router;
// const product =require("../backend/routes/productRoute");

app.use("/api/v1", product);



// module.exports = app;
export default app;