// Server js file

import app from './app.js';
import dotenv from 'dotenv';
// const app = require("./app");
// const dotenv = require("dotenv");

// config
dotenv.config({path:'backend/config/config.env'})

app.listen(process.env.PORT,()=>{
console.log(`Server is working on http://localhost:${process.env.PORT}`);
});