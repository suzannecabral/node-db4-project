const db = require('../data/db-config');

module.exports = {
  async getRecipes(){
    // await console.log('Data model is connected');

    return db('recipes');
  },
  getShoppingList(recipe_id){},
  getInstructions(recipe_id){}
};
