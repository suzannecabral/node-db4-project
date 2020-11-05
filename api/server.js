const express = require('express');

const server = express();

server.use(express.json);

server.get('/', (req,res)=>{
  res.status(200).json({message:`Server is running, better go catch it`});
});

server.get('/api', (req,res)=>{
  res.status(200).json({message:`Welcome to the api, please use an endpoint`});
});

module.exports = server;