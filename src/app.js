const express = require("express")
const multer = require("multer")
const uploadFile = require("./services/storage.service")
const postModel = require("./models/post.model")


const app = express()

app.use(express.json())

const upload = multer({storage: multer.memoryStorage()})

app.post("/create-post",upload.single('image'), async (req, res) => {
   
    const result = await uploadFile(req.file.buffer)
    
    // console.log(result);
    
    const post = await postModel.create({
        title: req.body.title,
        img:result.url
    })
    

    res.status(201).json({
        msg: "post created",
        post:post
    })
    
})

app.get("/posts", async (req, res) => {
    
    const posts = await postModel.find()

    res.send(posts)
})


module.exports=app