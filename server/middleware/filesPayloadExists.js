const filesPayloadExists = (req, res, next) =>{
    if(!req.files) return res.status(400).json({status: "error", message: "don't have data"})
    next()

}
module.exports = filesPayloadExists