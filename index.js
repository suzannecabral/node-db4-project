const server = require('./api/server.js');

const PORT=8000;

server.listen(PORT, ()=>{
  console.log(`Server is listening on ${PORT}`);
});