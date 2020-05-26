const cors = require('cors')
const helmet = require('helmet')

const express = require('express')
const authRouter = require('../auth/auth-router')
const eventRouter = require('../events/events-router')
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
server.use('/api/events', eventRouter)
//other routes here

//error middleware
server.use((err, req, res, next) => {
    console.log({err})
    res.status(500).json({
        message: `There was an error retrieving this data: ${err.message}`
    })
})

module.exports = server;