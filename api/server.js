const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const authRouter = require('../auth/auth-router')
//other routes here

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({
        api: "Running Successfully!"
    })
})

server.use('/auth', authRouter)
//other routes here

module.exports = server;