const db = require("../data/db-config")

module.exports = {
    get,
    getByID,
    update,
    remove,
}

function get() {
    return db("users")
}

function getByID(id) {
    return db("users").where({id}).first()
}

function update(id, changes) {
    return db("users").where({id}).update(changes)
}

function remove(id) {
    return db("users").where({id}).del()
}