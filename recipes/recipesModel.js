const db = require('../data/db-config');

module.exports = {
  async getRecipes(){
    // await console.log('Data model is connected');

    return db('recipes');
  },
  async getShoppingList(recipe_id){
    //make sure recipe exists
    const foundRecipe = await db('recipes').where('id',recipe_id);

    if(foundRecipe){
      return db('recipe_ingredients as ri')
        .join('recipes as r', 'ri.recipe_id', 'r.id')
        .join('ingredients as i', 'ri.ingredient_id', 'i.id')
        .select('i.name as Ingredient', 'ri.ingredientQty as Amount')
        .where('ri.recipe_id',recipe_id)
    }else{
      return Promise.resolve(null);
    }
  },
  async getInstructions(recipe_id){
    //make sure recipe exists
    const foundRecipe = await db('recipes').where('id',recipe_id);

    if(foundRecipe){
      return db('steps as s')
        .join('recipes as r', 's.recipe_id', 'r.id')
        .select('s.instructions')
        .where('s.recipe_id',recipe_id)
        .orderBy('s.order')
    }else{
      return Promise.resolve(null);
    }
  }
};
