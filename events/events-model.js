const db = require('../data/db-config')

module.exports = {
    get,
    getByID,
    add,
    update,
    remove,
}

function get() {
    return db("events")
}

function getByID(id) {
    return db("events").where({id}).first()
}

function add(event) {

}

function update(id) {

}

function remove(id) {

}