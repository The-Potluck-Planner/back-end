const Events = require('../events/events-model')

module.exports = {
    isValidReg,
    isValidLogin,
    validEventID
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
    
}