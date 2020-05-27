const express = require('express')
const router = express.Router()
const Events = require('./events-model')
const restricted = require('../middleware/restricted-middleware')
const {validEventID, validNewEvent} = require('../middleware/middleware')

router.use(restricted)

//bringing in /api/events
router.get('/', (req, res, next) => {
    Events.get()
    .then(event => {
        res.status(200).json(event)
    })
    .catch(next)
})

router.get('/:id', validEventID, (req, res, next) => {
    const id = req.params.id
    Events.getByID(id)
    .then(event => {
        res.status(200).json(event)
    })
    .catch(next)
})

router.post('/', validNewEvent, (req, res, next) => {
    const newEvent = req.body
    Events.add(newEvent)
    .then(event => {
        res.status(201).json({
            message: `Event ${event.title} created`,
            event
        })
    })
    .catch(next)
})

router.put('/:id', validEventID, validNewEvent, (req, res, next) => {
    const id = req.params.id
    const changes = req.body
    Events.update(id, changes)
    .then(change => {
        if(change === 1){
            Events.getByID(id)
            .then(success => {
                res.status(200).json({
                    message: `Event ${success.title} updated`,
                    success
                })
            })
        }
    })
    .catch(next)
})

router.delete('/:id', validEventID, (req, res, next) => {
    const id = req.params.id
    Events.remove(id)
    .then(event => {
        if(event){
            res.status(200).json({
                message: 'Event deleted'
            })
        }
    })
    .catch(next)
})


module.exports = router