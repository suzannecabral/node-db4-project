const express = require('express');
const recipesRouter = require('../recipes/recipesRouter');
const ingredientsRouter = require('../ingredients/ingredientsRouter');

//NEW SERVER
const server = express();
// console.log('Server is connected');

// //my default logger function
const logger = (req,res,next) => {
  const ts = new Date();

  console.log(`-------------------`);
  console.log(`[${ts.toLocaleTimeString()}] Server Request: `);
  console.log(`${req.method} ${req.url}`);
  console.log(`-------------------`);
  next();
}

//USE MIDDLEWARE
server.use(express.json());
server.use(logger);

//ROUTERS
server.use('/api/recipes', recipesRouter);
server.use('/api/ingredients', ingredientsRouter);


//DEFAULT RESPONSE
server.get('/', (req,res)=>{
  res.status(200).json({message:`Server is running, better go catch it`});
});

server.get('/api', (req,res)=>{
  res.status(200).json({message:`Welcome to the api, please use an endpoint`});
});

//EXPORT
module.exports = server;