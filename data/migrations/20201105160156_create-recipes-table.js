
exports.up = function(knex) {
  return knex.schema
  //recipes table
  //---------------------

  .createTable('recipes', tbl=>{
    tbl.increments();

    //title
    //req, text, 128

  })

  //ingredients table
  //---------------------
  .createTable('ingredients', tbl=>{
    tbl.increments();

    //name
    //req, text, 128

  })

  //steps table
  //---------------------
  .createTable('steps', tbl=>{
    tbl.increments();

    //recipe_id
    //req, from recipes, integer, non-negative
    
    //order
    //req, integer, non-negative

    //instructions
    //req, text, 280

  })

  //recipe_ingredients
  //---------------------
  .createTable('recipe_ingredients', tbl=>{
    tbl.increments();

    //recipes_id 
    //req, from recipes, integer, non-negative

    //ingredients_id
    //req, from ingredients table, integer, non-negative

    //ingredientQty
    //req, text, 128


  })
};

exports.down = function(knex) {
  
};
