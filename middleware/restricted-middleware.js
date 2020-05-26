const configVars = require('../config/vars')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers.authorization

    if(token){
        const secret = configVars.jwtSecret

        jwt.verify(token, secret, (err) => {
            if(err){
                res.status(400).json({
                    message: "Access denied"
                })
            }else{
                next()
            }
        })
    }else {
        res.status(401).json({
            message: "Please provide your credentials"
        })
    }
}