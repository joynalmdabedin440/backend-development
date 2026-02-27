const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: String,
    img:String
})


const postModel = mongoose.model("posts", postSchema)

module.exports= postModel