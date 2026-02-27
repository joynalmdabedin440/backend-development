const  ImageKit = require('@imagekit/nodejs');

const imagekit = new ImageKit({
    privateKey: `${process.env.IMAGEKIT_PRIVATE_KEY}`, // This is the default and can be omitted
    
    
});



async function uploadFile(buffer) {
    
    // console.log(buffer);
    
    const res = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName:"img.jpg"
    })

    return res
}

module.exports = uploadFile;
