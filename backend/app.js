// 
const express = require('express');
const app = express();
app.use(express.json());

// Import route
const router= require ("../backend/routes/productRoute.js");
const errorMiddleware = require("./middleware/error");
const product =router;

app.use("/api/v1", product);
// Middleware for Errors
app.use(errorMiddleware);


module.exports = app;
