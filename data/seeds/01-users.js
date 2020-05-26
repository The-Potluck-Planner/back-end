
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, name: "Rachele", username: "lambda", password: "$2a$10$atZ61ga6YEgot.aEqJhFReD5xg34.QeZiG8oCq1zCObQy8PRW9AK2"},
      ]);
    });
};
