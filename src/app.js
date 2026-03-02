const express = require("express")
const multer = require("multer")
const uploadFile = require("./services/storage.service")
const postModel = require("./models/post.model")
const authRoutes = require('./routes/auth.routes')
const createPostRoutes = require("./routes/create-post.routes")
const cookies = require("cookie-parser")




const app = express()

app.use(express.json())
app.use(cookies())

// const upload = multer({ storage: multer.memoryStorage() })


app.use("/api/auth/", authRoutes)

app.use("/api/post/",createPostRoutes)


// app.post("/create-post",upload.single('image'), async (req, res) => {
   
//     const result = await uploadFile(req.file.buffer)
    
//     // console.log(result);
    
//     const post = await postModel.create({
//         title: req.body.title,
//         img:result.url
//     })
    

//     res.status(201).json({
//         msg: "post created",
//         post:post
//     })
    
// })

app.get("/posts", async (req, res) => {
    
    const posts = await postModel.find()

    res.send(posts)
})


module.exports=app