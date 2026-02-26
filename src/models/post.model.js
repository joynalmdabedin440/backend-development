const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: String,
    caption: String,
    img:String
})


const postModel = model("posts", postSchema)

module.exports= postModel