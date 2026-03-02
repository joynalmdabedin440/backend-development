const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: String,
    image:String
})


const postModel = mongoose.model("posts", postSchema)

module.exports= postModel 