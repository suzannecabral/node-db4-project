const express = require('express');
const Recipes = require('./recipesModel');

const router = express.Router();

router.use(express.json());

// GET /api/recipes/
router.get('/',(req,res,next)=>{
  Recipes.getRecipes()
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      res.status(500).json({error:err})
    });
});

//GET /api/recipes/:id/shoppingList
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

// GET /api/recipes/:id/instructions
router.get('/:id/instructions',(req,res,next)=>{
  const { id } = req.params;
  Recipes.getInstructions(id)
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      res.status(500).json({error:err})
    });
});

module.exports = router;