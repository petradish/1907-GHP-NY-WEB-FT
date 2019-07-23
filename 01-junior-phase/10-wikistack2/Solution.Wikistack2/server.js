const http = require('http');
const models = require('./models');
const app = require('./app');
const server = http.createServer(app);

const PORT = 3000;

const init = async () => {
  //sync creates the table if it does not exist. alter true creates the tables and makes any changes to keep the modules in sync
  await models.User.sync()
  await models.Page.sync() 
  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}

init();



