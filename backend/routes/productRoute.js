// 
import express from "express";
import  getAllProducts  from "../controllers/productController.js";
// const express =require("express");
// const getAllProducts =require("../controllers/productController");
// const {
//     getAllProducts,
//   } = require("../controllers/productController");


const router = express.Router();

router.route("/products").get(getAllProducts);

// module.exports = router;
export default router;