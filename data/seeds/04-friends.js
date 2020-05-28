
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('friends').del()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        {id: 1, userID: 2, RSVP: 'false'},
        {id: 2, userID: 3, RSVP: 'true'},
        {id: 3, userID: 4, RSVP: 'false'},
        {id: 4, userID: 5, RSVP: 'true'},

      ]);
    });
};

/*DATA REQUIRED: 
userID
RSVP
*/