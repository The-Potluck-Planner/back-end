const bcrypt = require('bcryptjs')
const router = require('express')
const Users = require('./auth-model')
const {isValidReg, isValidLogin} = require('./middleware')
const generateToken = require('./generateToken')

//bringing in /auth
router.post('/register', (req, res) => {
    const creds = req.body

    if(isValidReg(creds)){
        const rounds = process.env.BCRYPT_ROUNDS || 10
        const hash = bcrypt.hashSync(creds.password, rounds)

        creds.password = hash
        
        Users.add(creds)
        .then(user => {
            res.status(201).json({
                message: "User created",
                data: user
            })
        })
        .catch(err => {
            console.log({err})
            res.status(500).json({
                message: `There was an error: ${err.message}`
            })
        })
    }else {
        res.status(400).json({
            message: "Please provide valid name, username and password."
        })
    }
})

router.post('/login', (req, res) => {
    const {username, password} = req.body

    if(isValidLogin(req.body)) {
        Users.findBy({username: username})
        .then(([user]) => {
            if(user && bcrypt.compareSync(password, user.password)){
                const token = generateToken(user)

                res.status(200).json({
                    message: `Welcome, ${user.name}`,
                    token: token
                })
            }else {
                res.status(401).json({
                    message: "Invalid username or password"
                })
            }
        })
        .catch(err => {
            console.log({err})
            res.status(500).json({
                message: `There was an error: ${err.message}`
            })
        })
    }else {
        res.status(401).json({
            message: "Invalid username or password"
        })
    }
})

module.exports = router;