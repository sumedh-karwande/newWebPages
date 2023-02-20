// 
const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cookieParser());

// Import route
const router= require ("../backend/routes/productRoute.js");
const user = require("../backend/routes/userRoute");
const errorMiddleware = require("./middleware/error");
const product =router;

app.use("/api/v1", product);
app.use("/api/v1" ,user)
// Middleware for Errors
app.use(errorMiddleware);


module.exports = app;
