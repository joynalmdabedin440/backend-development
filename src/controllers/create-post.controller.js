const postModel = require("../models/post.model")
const uploadFile = require("../services/storage.service")
const jwt = require("jsonwebtoken")




async function createPost(req, res) {

    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            msg: "Unauthorized"
        })
    }

    try {
        const deconde = jwt.verify(token, process.env.JWT_SECRET)
        const result = await uploadFile(req.file.buffer)

        const post = await postModel.create({
            title: req.body.title,
            image: result.url
        })

        res.status(201).json({
            msg: "post created",
            post: post
        })


    } catch (error) {

        res.status(401).json({
            msg:"Token is invalid"
        })

    }





}

module.exports = { createPost }