const express = require('express')
const router = express.Router()
const Events = require('./events-model')
const restricted = require('../middleware/restricted-middleware')

router.use(restricted)
//bringing in /api/events
router.get('/', (req, res, next) => {
    Events.find()
    .then(event => {
        res.status(200).json(event)
    })
    .catch(next)
})

router.get('/:id', (req, res) => {})

router.post('/', (req, res) => {})

router.put('/:id', (req, res) => {})

router.delete('/:id', (req, res) => {})


module.exports = router