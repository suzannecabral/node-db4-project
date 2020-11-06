
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          recipe_id:1,
          order:1,
          instructions:'In a large bowl, cream together the butter and brown sugar until smooth. Beat in the egg and molasses.'
        },
        {
          recipe_id:1,
          order:2,
          instructions:'Combine the flour, ground ginger, baking soda, and salt; stir into the molasses mixture using a wooden spoon. Mix in the fresh and crystallized gingers.'
        },
        {
          recipe_id:1,
          order:3,
          instructions:'Cover, and refrigerate dough for at least 2 hours, or overnight.'
        },
        {
          recipe_id:1,
          order:4,
          instructions:'Preheat oven to 350 degrees F (175 degrees C). Shape dough into 1 inch balls, and place about 2 inches apart onto ungreased cookie sheet.'
        },
        {
          recipe_id:1,
          order:5,
          instructions:'Bake for 10 minutes in the preheated oven, or until lightly browned. Cool on wire racks.'
        },
        {
          recipe_id:2,
          order:1,
          instructions:'In a large bowl, mix together instant vanilla pudding mix, pumpkin and pumpkin pie spice. Fold in the thawed frozen whipped topping.'
        },
        {
          recipe_id:2,
          order:2,
          instructions:'Chill in the refrigerator until serving. Serve with cinnamon graham crackers.'
        },
        {
          recipe_id:3,
          order:1,
          instructions:'Place the cranberries, grated orange rind, cinnamon, orange juice, brown sugar and enough water to cover cranberries in a saucepan. Bring mixture to a boil over high heat. Immediately turn heat down and simmer for about 1 hour or until the sauce has thickened.'
        },
        {
          recipe_id:3,
          order:2,
          instructions:'Taste for sweetness and adjust with additional sugar if necessary. You can not overcook, so continue cooking until you have a good thick consistency. Let mixture cool a bit then refrigerate in a covered container.'
        },
        {
          recipe_id:4,
          order:1,
          instructions:'Place the brisket cubes into a mixing bowl, and season with salt and pepper. Sprinkle with flour, and toss until evenly coated.'
        },
        {
          recipe_id:4,
          order:2,
          instructions:'Heat the canola oil in a Dutch oven or large pot over high heat. Cook the meat in small batches until browned on all sides; about 5 minutes per batch. Set the meat aside as the batches are done.'
        },
        {
          recipe_id:4,
          order:3,
          instructions:'Once the meat has been browned and set aside, stir in the portobello mushrooms, and cook until browned, about 5 minutes. Remove the mushrooms, and set aside. '
        },
        {
          recipe_id:4,
          order:4,
          instructions:'Stir the pearl onions, carrot, celery root, and turnips into the pot. Cook and stir until the onions begin to turn light brown, about 5 minutes.'
        },
        {
          recipe_id:4,
          order:5,
          instructions:'Add the garlic, and continue cooking until the onions are golden brown, about 3 minutes more. Remove the vegetables and set aside.'
        },
        {
          recipe_id:4,
          order:6,
          instructions:'Return the beef to the pot, and pour in the beer. Bring to a boil, and cook until the beer has reduced to 1/3 of its original volume, about 8 minutes.'
        },
        {
          recipe_id:4,
          order:7,
          instructions:'Pour in the beef broth and return to a boil. Reduce heat to medium-low, cover, and simmer until the meat starts to become tender, about 1 hour.'
        },
        {
          recipe_id:4,
          order:8,
          instructions:'Return the browned vegetables to the pot along with the potatoes, recover, and cook 1 hour more.'
        },
        {
          recipe_id:4,
          order:9,
          instructions:'Stir in the reserved mushrooms, malt vinegar, thyme, and rosemary. Simmer a few minutes until heated through. Season to taste with salt and pepper before serving.'
        },
      ]);
    });
};
