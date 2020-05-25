const configVars = require('../config/vars')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers.authorization

    if(token){
        const secret = configVars.jwtSecret

        jwt.verify(token, secret, (err) => {
            if(err){
                res.status(401).json({
                    message: "Ivalid username or password"
                })
            }else{
                next()
            }
        })
    }
}