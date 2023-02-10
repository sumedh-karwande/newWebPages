// 
// import express from "express";
const express=require("express");
const app = express();
app.use(express.json());

// Import route
// import product from "../backend/routes/productRoute";
const product =require("../backend/routes/productRoute");

app.use("/api/v1", product);



module.exports = app;