const express = require('express');
const Recipes = require('./recipesModel');

const router = express.Router();

router.use(express.json());

router.get('/',(req,res,next)=>{
  Recipes.getRecipes()
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      res.status(500).json({error:err})
    });
});

// :8000/api/recipes/:id/shoppingList
router.get('/:id/shoppingList',(req,res,next)=>{
  const { id } = req.params;
  Recipes.getShoppingList(id)
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      res.status(500).json({error:err})
    });
});


module.exports = router;