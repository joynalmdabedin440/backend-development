const mongoose = require("mongoose")
require('dotenv').config()

const DB_URI = process.env.DB_URI



async function connectDB() {
    try {
        await mongoose.connect(`${DB_URI}`)
        console.log("mongodb connected successfully");
        
    } catch (error) {
        console.error("Database connection error",error);
        
    }

    
    
}

module.exports=connectDB