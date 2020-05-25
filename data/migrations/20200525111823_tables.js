
exports.up = function(knex) {
  return knex.schema
  .createTable("users", users => {
      users.increments()
      users.string("name").notNullable()
      users.string("username").notNullable().unique()
      users.string("password").notNullable()
  })
  .createTable("events", events => {
      events.increments()
      events.string("title").notNullable()
      events.string("description")
      events.date("month").notNullable()
      events.date("day").notNullable()
      events.date("year").notNullable()
      events.time("time_From").notNullable()
      events.time("time_To").notNullable()
      events.string("location").notNullable()
  })
  .createTable("friends", friends => {
      friends.increments()
      friends.integer("userID")
        .unsigned()
        .notNullable()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
      friends.boolean("RSVP").defaultTo(false)
  })
  .createTable("events_friends", events_friends => {
      events_friends.increments()
      events_friends.integer("eventsID")
        .unsigned()
        .notNullable()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
      events_friends.integer("friendsID")
        .unsigned()
        .notNullable()
        .references("friends.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("events_friends")
  .dropTableIfExists("friends")
  .dropTableIfExists("events")
  .dropTableIfExists("users")
};
