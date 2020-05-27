const db = require('../data/db-config')

module.exports = {
    get,
    getByID,
    add,
    update,
    remove,
    getFoodList,
}

function get() {
    return db.select("e.id", "u.name as Organizer", "e.title", "e.description", "e.month", "e.day", "e.year", "e.time_From", "e.time_To", "e.location")
    .from("events as e")
    .join("users as u", "u.id", "=", "e.userID")
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
//get /events/:id/food
function getFoodList(id){
    return db.select("f.id", "f.eventID", "e.title as event_name", "f.userID", "f.category", "f.quantity", "f.name", "f.assigned")
    .from("food as f")
    .join("events as e", "e.id", "=", "f.eventID")
    .where({eventID: id})
}