
exports.seed = function(knex) {
  return knex('events').del()
    .then(function () {
      return knex('events').insert([
        {id: 1, title: "BBQ Bash", description: "Join us for some great BBQ and summer fun!", month: "June", day: "22", year: "2020", time_From: "6", time_To: "8", location: "123 E Coconut Drive, Seattle, WA"},
      ]);
    });
};

/*DATA REQUIRED: 
title
description (optional)
month
day
year
time_From
time_To
location
*/