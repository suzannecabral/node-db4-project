const db = require('../data/db-config');

module.exports = {
  getRecipes(){
    return {message:"recipesModel is working"};
  },
  getShoppingList(recipe_id){},
  getInstructions(recipe_id){}
};
