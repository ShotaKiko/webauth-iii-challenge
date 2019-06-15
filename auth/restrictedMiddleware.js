const jwt = require('jsonwebtoken')

const secret = require('../config/secrets.js')

module.exports = (req, res, next) => {
    const token = req.headers.authorization

    if(token){
        jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
            if(err){
                res.status(401).json({ message: "You are not authorized NOT for YoU" })
            } else {
                req.decodedJWT = decodedToken //lookin into how this works in detail 
                next()
            }
        })
    } else {
        res.status(401).json({ message: "You shall not pass!!!" })
    }
}