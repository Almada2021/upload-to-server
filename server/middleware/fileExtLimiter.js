const path = require("path")
const fileExtLimiter = function (allowedExtArray) {
    return (req, res, next) =>{
        const files = req.files;
        const fileExtension = [];
        Object.keys(files).forEach(key =>{
            fileExtension.push(path.extname(files[key].name))

        })
        // Are the file extension allowed?
        const allowed = fileExtension.every(ext => allowedExtArray.includes(ext))
        if(!allowed) {
            const message = `Upload failed. Only ${allowedExtArray.toString()} files allowed`.replaceAll(",", ", ");
            return res.status(422).json({ status: "error", message})
        }
        next();
    }
}
module.exports = fileExtLimiter