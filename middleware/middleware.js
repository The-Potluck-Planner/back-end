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
function validEventID() {
    return(req, res, next) => {
        const id = req.params.id
        Events.getByID(id)
        .then(event => {
            if(event){
                req.event = event
            }else {
                res.status(400).json({
                    message: "Invalid event ID"
                })
            }
        })
        .catch(next)
    }
}