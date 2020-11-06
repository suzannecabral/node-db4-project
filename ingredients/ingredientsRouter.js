const express = require('express');
const Ingredients = require('./ingredientsModel');

const router = express.Router();

router.use(express.json());

// GET /api/ingredients/
router.get('/',(req,res,next)=>{
  Ingredients.getIngredients()
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      res.status(500).json({error:err})
    });
});

// GET /api/ingredients/:id
router.get('/:id',(req,res,next)=>{
  const { id } = req.params;
  Ingredients.getByIngredient(id)
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      res.status(500).json({error:err})
    });
});

module.exports = router;