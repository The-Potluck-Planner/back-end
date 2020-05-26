
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, name: "Rachele", username: "lambda", password: "$2a$10$atZ61ga6YEgot.aEqJhFReD5xg34.QeZiG8oCq1zCObQy8PRW9AK2"},
        {id: 2, name: "Buddy", username: "buddy", password: "$2a$10$LXUFzYNKHNL9uixmvKtdEuNh8wtRroiBZvyM4SLksAdVo3gF0HRu."},
        {id: 3, name: "Ian", username: "mcelroyian", password: "$2a$10$hDt3vfoTAkHcX6PBQ5/mZeRBx3ixdn8syHIisjjhVEYTMcsxia0XO"},
        {id: 4, name: "Wei", username: "weipeluso", password: "$2a$10$Gyg8xADW9qOa9bImYr0lwu/.TcvUG40AyHMJYjp1Xfr4Jn6JwSLp2"},
        {id: 5, name: "Harper", username: "hnetty", password: "$2a$10$pdnkbNCSC6.h5PBxSdYk3uYZRB4s9r.0f9GMh193EG2oDzuzbZdxu"},
      ]);
    });
};
/*DATA REQUIRED: 
name
username
password
*/