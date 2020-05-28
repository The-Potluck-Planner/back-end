const db = require("../data/db-config")

module.exports = {
    get,
    getByID,
    update,
    remove,
    getInvited
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

function getInvited(id) {
    return db.select("f.RSVP", "e.title", "e.description", "e.month", "e.day", "e.year", "e.time_From", "e.time_To", "e.location")
    .from("users as u")
    .join("friends as f", "f.userID", "=", "u.id")
    .join("events_friends as EF", "f.id", "=", "EF.friendsID")
    .join("events as e" ,"e.id", "=", "EF.eventsID")
    .where("f.userID", id)
}

// async function findById(id) {
//   const issue = await db("issues as i")
//     .where("i.id", id)
//     .leftJoin("users as u", "i.user_id", "u.id")
//     .leftJoin("hazard_levels as h", "i.hazard_level", "h.id")
//     .first(
//       "i.id",
//       "i.issue",
//       "i.issue_description",
//       "i.photo",
//       "h.hazard_level",
//       "i.city",
//       "i.state",
//       "i.zip_code",
//       "i.user_id",
//       "u.username",
//       "i.created_at"
//     );
//   const upvotesArr = await db("upvotes as up")
//     .where("up.issue_id", id)
//     .select("up.upvotes")
//     .orderBy("up.upvotes", "desc");
//   const total_upvotes = upvotesArr.length;
//   const upvotes = await db("issues as i")
//     .where("i.id", id)
//     .leftJoin("upvotes as up", "up.issue_id", "i.id")
//     .leftJoin("users as u", "up.user_id", "u.id")
//     .select("up.id as upvote_id", "up.user_id", "u.username")
//     .orderBy("up.user_id", "asc");
//   if (!upvotes[0].user_id) {
//     return { issue, total_upvotes: 0, upvotes: [] };
//   } else {
//     return { issue, total_upvotes, upvotes };
//   }
// }
