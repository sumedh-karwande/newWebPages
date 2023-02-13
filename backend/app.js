// 
const express = require('express');
const app = express();
app.use(express.json());

// Import route
const router= require ("../backend/routes/productRoute.js");
const product =router;

app.use("/api/v1", product);



module.exports = app;
