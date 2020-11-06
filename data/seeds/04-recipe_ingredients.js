
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries

      //recipe_id
      //ingredients_id
      //ingredientQty

      return knex('recipe_ingredients').insert([
        {
          recipe_id:1,
          ingredient_id:1,
          ingredientQty:'3/4 cup',
        },
        {
          recipe_id:1,
          ingredient_id:2,
          ingredientQty:'1 cup, packed',
        },
        {
          recipe_id:1,
          ingredient_id:3,
          ingredientQty:'1',
        },
        {
          recipe_id:1,
          ingredient_id:4,
          ingredientQty:'1/4 cup',
        },
        {
          recipe_id:1,
          ingredient_id:5,
          ingredientQty:'2 1/4 cups',
        },
        {
          recipe_id:1,
          ingredient_id:6,
          ingredientQty:'2 teaspoons',
        },
        {
          recipe_id:1,
          ingredient_id:7,
          ingredientQty:'2 teaspoons',
        },
        {
          recipe_id:1,
          ingredient_id:8,
          ingredientQty:'1/2 teaspoon',
        },
        {
          recipe_id:1,
          ingredient_id:9,
          ingredientQty:'1 1/2 tablespoons, minced',
        },
        {
          recipe_id:1,
          ingredient_id:10,
          ingredientQty:'1/2 cup, chopped',
        },
        {
          recipe_id:2,
          ingredient_id:11,
          ingredientQty:'1 16-oz container, thawed',
        },
        {
          recipe_id:2,
          ingredient_id:12,
          ingredientQty:'1 5-oz package',
        },
        {
          recipe_id:2,
          ingredient_id:13,
          ingredientQty:'1 15-oz can',
        },
        {
          recipe_id:2,
          ingredient_id:14,
          ingredientQty:'1 teaspoon',
        },
        {
          recipe_id:3,
          ingredient_id:15,
          ingredientQty:'2 pounds',
        },
        {
          recipe_id:3,
          ingredient_id:16,
          ingredientQty:'2 tablespoons',
        },
        {
          recipe_id:3,
          ingredient_id:17,
          ingredientQty:'3',
        },
        {
          recipe_id:3,
          ingredient_id:18,
          ingredientQty:'1 pint',
        },
        {
          recipe_id:3,
          ingredient_id:2,
          ingredientQty:'2 cups, packed',
        },
        {
          recipe_id:3,
          ingredient_id:19,
          ingredientQty:'2 cups',
        },
        {
          recipe_id:4,
          ingredient_id:20,
          ingredientQty:'2 pounds, trimmed and cut into 2-inch pieces',
        },
        {
          recipe_id:4,
          ingredient_id:8,
          ingredientQty:'to taste',
        },
        {
          recipe_id:4,
          ingredient_id:21,
          ingredientQty:'to taste',
        },
        {
          recipe_id:4,
          ingredient_id:5,
          ingredientQty:'2 tablespoons',
        },
        {
          recipe_id:4,
          ingredient_id:22,
          ingredientQty:'5 tablespoons',
        },
        {
          recipe_id:4,
          ingredient_id:23,
          ingredientQty:'2 cups, diced',
        },
        {
          recipe_id:4,
          ingredient_id:24,
          ingredientQty:'1 1/2 cups, peeled',
        },
        {
          recipe_id:4,
          ingredient_id:25,
          ingredientQty:'1 cup, diced',
        },
        {
          recipe_id:4,
          ingredient_id:26,
          ingredientQty:'1 cup, diced',
        },
        {
          recipe_id:4,
          ingredient_id:27,
          ingredientQty:'1 cup, diced',
        },
        {
          recipe_id:4,
          ingredient_id:28,
          ingredientQty:'2 cloves, minced',
        },
        {
          recipe_id:4,
          ingredient_id:29,
          ingredientQty:'2 12-oz cans or bottles',
        },
        {
          recipe_id:4,
          ingredient_id:30,
          ingredientQty:'2 cups',
        },
        {
          recipe_id:4,
          ingredient_id:31,
          ingredientQty:'1 cup, diced',
        },
        {
          recipe_id:4,
          ingredient_id:32,
          ingredientQty:'1 tablespoon',
        },
        {
          recipe_id:4,
          ingredient_id:33,
          ingredientQty:'4 sprigs, chopped',
        },
        {
          recipe_id:4,
          ingredient_id:34,
          ingredientQty:'2 sprigs, chopped',
        },
      ]);
    });
};
