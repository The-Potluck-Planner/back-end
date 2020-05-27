const express = require('express')
const router = express.Router()
const Users = require('./users-model')
const restricted = require('../middleware/restricted-middleware')

router.use(restricted)