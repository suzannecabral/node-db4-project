
exports.up = function(knex) {
  return knex.schema
    //recipes table
    //---------------------

    .createTable('recipes', tbl=>{
      tbl.increments();

      //title: text 128
      tbl.text('name',128)
        //req, unique
        .unique()
        .notNullable();
    })

    //ingredients table
    //---------------------
    .createTable('ingredients', tbl=>{
      tbl.increments();

      //name: text, 128
      tbl.text('name',128)
        //req
        .notNullable();

    })

    //steps table
    //---------------------
    .createTable('steps', tbl=>{
      tbl.increments();

      //recipe_id: integer
      tbl.integer('recipe_id')
        //req, non-negative
        .unsigned()
        .notNullable()

        //from recipes table
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      //order: integer
      tbl.integer('order')
        //req, non-negative
        .unsigned
        .notNullable
        
      //instructions: text 280
      tbl.text('instructions', 280)
        //req
        .notNullable()
  })

  //recipe_ingredients
  //---------------------
  .createTable('recipe_ingredients', tbl=>{
    tbl.increments();

    //recipes_id: integer
    tbl.integer('recipe_id')
      //req, non-negative
      .unsigned()
      .notNullable()

      //from recipes table
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    //ingredients_id: integer
    tbl.integer('ingredient_id')
      //req, non-negative
      .unsigned()
      .notNullable()

      //from ingredients table
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    //ingredientQty: text, 128
    tbl.text('ingredientQty', 128)
      //req
      .notNullable

  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
