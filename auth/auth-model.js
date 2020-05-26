const db = require('../data/db-config')

module.exports = {
    add,
    findByID,
    findBy,
}

function add(user) {
    return db("users").insert(user)
    .then(show => {
        return findByID(show[0])
    })
}

function findByID(id) {
    return db("users").where({id}).first()
}

function findBy(filter){
    return db("users").where(filter)
}