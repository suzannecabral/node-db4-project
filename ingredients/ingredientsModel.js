const db = require('../data/db-config');

module.exports = {
  async getIngredients(){
    return db('ingredients');
  },
  async getByIngredient(id){
    //make sure ingredient exists
    const foundIngredient = await db('ingredients').where('id',id);

    if(foundIngredient){
      return db('recipe_ingredients as ri')
        .join('recipes as r','ri.recipe_id','r.id')
        .select('r.name')
        .where('ri.ingredient_id',id);
    }else{
      return Promise.resolve(null);
    }
  }
}