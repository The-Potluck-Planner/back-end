const db = require('../data/db-config')

module.exports = {
    get,
    getByID,
    add,
    update,
    remove,
    getFoodList,
    getUserID,
    getInvited,
    addInvited,
}

function get() {
    return db.select("e.id", "u.name as organizer", "e.title", "e.description", "e.month", "e.day", "e.year", "e.time_From", "e.time_To", "e.location")
    .from("events as e")
    .join("users as u", "u.id", "=", "e.userID")
}

function getByID(id) {
    return db.select("e.id", "u.id", "u.name as organizer", "e.title", "e.description", "e.month", "e.day", "e.year", "e.time_From", "e.time_To", "e.location")
    .from("events as e")
    .join("users as u", "u.id", "=", "e.userID")
    .where("e.id", "=", `${id}`)
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
//get /events/users/:id
function getUserID(id){
    return db("events")
    .where({userID: id})
}
//GET /events/:id/invited
function getInvited(id){
    return db.select("e.title", "u.name", "u.username", "f.RSVP")
    .from("friends as f")
    .join("users as u", "u.id", "=", "f.userID")
    .join("events_friends as EF", "f.id", "=", "EF.friendsID")
    .join("events as e", "e.id", "=", "EF.eventsID")
    .where({eventsID: id})
}
//POST /events/:id/invited
async function addInvited(id, friend){
    const [newInvite] = await db.select("u.name", "u.username", "e.title")
    .from("friends as f")
    .join("users as u", "u.id", "=", "f.userID")
    .join("events_friends as ef", "f.id", "=", "ef.friendsID")
    .join("events as e", "e.id", "=", "ef.eventsID")
    .where({eventsID: id})
    .insert(friend, "*")
    return newInvite
}