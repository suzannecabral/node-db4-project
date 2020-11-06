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
  getInstructions(recipe_id){}
};
