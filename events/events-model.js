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
    return db("events")
    .insert(event)
    .then(ids => {
        return getByID(ids[0])
    })
}

function update(id, changes) {
    return db("events").where({id}).update(changes)
}

function remove(id) {
    return db("events").where({id}).del()
}