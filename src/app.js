const express = require("express")
const multer = require("multer")
const uploadFile = require("./services/storage.service")


const app = express()

app.use(express.json())

const upload = multer({storage: multer.memoryStorage()})

app.post("/create-post",upload.single('image'), async (req, res) => {
    // const post = req.body
    // console.log(post);
    // console.log(req.file);

    const result = await uploadFile(req.file.buffer)
    
    console.log(result);
    

    res.status(201).json({
        msg:"post created"
    })
    
})


module.exports=app