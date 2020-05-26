const Events = require('../events/events-model')

module.exports = {
    isValidReg,
    isValidLogin,
    validEventID,
    validNewEvent,
    
}
//auth
function isValidReg(user) {
    return Boolean(user.name && user.username && user.password)
}

function isValidLogin(user) {
    return Boolean(user.username && user.password)
}

//events
function validEventID(req, res, next) {
    Events.getByID(req.params.id)
    .then(event => {
        if(event){
            req.event = event
            next()
        }else {
            res.status(400).json({
                message: "Invalid event ID"
            })
        }
    })
    .catch(next)
}

function validNewEvent(req, res, next) {
    const event = req.body
    if(!event){
        res.status(400).json({
            message: "Missing event data"
        })
    }else if(!event.userID){
        res.status(400).json({
            message: "Missing required userID field"
        })
    }else if(!event.title){
        res.status(400).json({
            message: "Missing required title field"
        })
    }else if(!event.month){
        res.status(400).json({
            message: "Missing required month field"
        })
    }else if(!event.day){
        res.status(400).json({
            message: "Missing required day field"
        })
    }else if(!event.year){
        res.status(400).json({
            message: "Missing required year field"
        })
    }else if(!event.time_From){
        res.status(400).json({
            message: "Missing required time_From field"
        })
    }else if(!event.time_To){
        res.status(400).json({
            message: "Missing required time_To field"
        })
    }else if(!event.location){
        res.status(400).json({
            message: "Missing required location field"
        })
    }else{
        next()
    }
}