const db = require('../data/db-config')

module.exports = {
    find,
    findByID,
    add,
    update,
    remove,
}

function find() {
    return db("events")
}

function findByID(id) {
    return db("events").where({id}).first()
}

function add(event) {

}

function update(id) {

}

function remove(id) {

}