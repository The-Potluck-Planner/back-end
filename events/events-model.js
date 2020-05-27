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

async function add(event) {
    const [newEvent] = await db("events").insert(event, "*")
    return newEvent
}

function update(id, changes) {
    return db("events").where({id}).update(changes)
}

function remove(id) {
    return db("events").where({id}).del()
}
