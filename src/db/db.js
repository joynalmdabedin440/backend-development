const mongoose = require("mongoose")
require('dotenv').config()

const DB_URI = process.env.DB_URI



async function connectDB() {
    await mongoose.connect(`${DB_URI}`)

    console.log("mongodb connected successfully");
    
}

module.exports=connectDB