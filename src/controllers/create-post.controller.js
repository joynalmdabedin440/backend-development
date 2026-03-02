const postModel = require("../models/post.model")
const uploadFile = require("../services/storage.service")




async function createPost(req, res) {
    const result = uploadFile(req.file.buffer)

    const post = postModel.create({
        title: req.body.title,
        image: result.url
    })

    res.status(201).json({
        msg: "post created",
        post: post
    })

}

module.exports= {createPost}