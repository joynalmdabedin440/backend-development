const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect("mongodb+srv://backend-full-flaw:pfqlOqbsmF1n7WpA@cluster0.xwror.mongodb.net/post-management")

    console.log("mongodb connected successfully");
    
}

module.exports=connectDB