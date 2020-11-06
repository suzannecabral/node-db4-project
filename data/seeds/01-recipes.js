
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Triple the Ginger Cookies'},
        {name: 'Pumpkin Fluff Dip'},
        {name:'Spiced Orange Cranberry Sauce'},
        {name: 'Beef Stew with Ale'},
      ]);
    });
};
