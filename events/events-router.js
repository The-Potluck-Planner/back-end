const express = require('express')
const router = express.Router()
const Events = require('./events-model')
const restricted = require('../middleware/restricted-middleware')
const {validEventID} = require('../middleware/middleware')

router.use(restricted)
//bringing in /api/events
router.get('/', (req, res, next) => {
    Events.get()
    .then(event => {
        res.status(200).json(event)
    })
    .catch(next)
})

router.get('/:id', validEventID(), (req, res, next) => {
    const id = req.params.id
    Events.getByID(id)
    .then(event => {
        res.status(200).json(event)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {})

router.put('/:id', (req, res, next) => {})

router.delete('/:id', (req, res, next) => {})


module.exports = router