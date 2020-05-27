
exports.seed = function(knex) {
  return knex('food').del()
    .then(function () {
      return knex('food').insert([
        {id: 1, eventID: 1, category: "Main", quantity: "20 patties", name: "Hamburgers"},
        {id: 2, eventID: 1, category: "Side", quantity: "1", name: "potato salad"},
        {id: 3, eventID: 1, category: "Beverage", quantity: "2, 2 liter", name: "soda"},
      ]);
    });
};

/*DATA REQUIRED: 
eventID
userID (optional-defaults to null)
category
quantity
name
assigned (optional--defaults to false)
*/