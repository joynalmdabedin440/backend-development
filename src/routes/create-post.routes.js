const express = require("express")
const multer = require("multer")
const postController = require("../controllers/create-post.controller")

const router = express.Router()

const upload = multer({storage:multer.memoryStorage()})


router.post("/create-post", upload.single("image"), postController.createPost)

module.exports = router