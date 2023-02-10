// 
// import express from "express";
// import { Router } from "express";
// import { getAllProducts } from "../controllers/productController";
const express =require("express");
// const getAllProducts =require("../controllers/productController");
const {
    getAllProducts,
  } = require("../controllers/productController");


const router = express.Router();

router.route("/products").get(getAllProducts);

module.exports = router;