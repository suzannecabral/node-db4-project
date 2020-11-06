const express = require('express');
const Recipes = require('./recipesModel');

const router = express.Router();

router.use(express.json);


router.get('/',(req,res,next)=>{
  Recipes.get()
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      res.status(500).json({error:err})
    });
});


module.exports = router;