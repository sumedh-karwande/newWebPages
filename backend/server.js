// Server js file

import app from './app.js';
import dotenv from 'dotenv';
import connectDatabase from './config/database.js';

// config
dotenv.config({path:'backend/config/config.env'})

// database connection

connectDatabase();

app.listen(process.env.PORT,()=>{
console.log(`Server is working on http://localhost:${process.env.PORT}`);
});