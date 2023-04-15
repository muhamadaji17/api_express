const multer = require('multer')
// const path = require('path')

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, 'public/image')
    },
    fileName:(req,file,cb) => {
        const timestamp = new Date().getTime()
        const originalname = file.originalname
        cb(null, `${timestamp}-${originalname}`)
    }
})

const upload = multer({storage: storage})

module.exports = upload