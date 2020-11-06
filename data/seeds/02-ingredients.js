
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name:'butter'},
        {name:'brown sugar'},
        {name:'egg'},
        {name:'molasses'},
        {name:'all-purpose flour'},
        {name:'ground ginger'},
        {name:'baking soda'},
        {name:'salt'},
        {name:'fresh ginger'},
        {name:'crystallized ginger'},
        {name:'frozen cool whip'},
        {name:'instant vanilla pudding mix'},
        {name:'solid pack pumpkin'},
        {name:'pumpkin pie spice'},
        {name:'fresh cranberries'},
        {name:'orange zest'},
        {name:'cinnamon sticks'},
        {name:'orange juice'},
        {name:'water'},
        {name:'beef brisket'},
        {name:'black pepper'},
        {name:'canola oil'},
        {name:'portobello mushroom caps'},
        {name:'red pearl onions, peeled'},
        {name:'carrot'},
        {name:'celery root'},
        {name:'turnip'},
        {name:'garlic'},
        {name:'brown lager beer'},
        {name:'beef broth'},
        {name:'potato'},
        {name:'malt vinegar'},
        {name:'fresh thyme'},
        {name:'fresh rosemary'},
      ]);
    });
};
