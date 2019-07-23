const express = require('express');
const path = require('path'); // from node

const app = express();

// my custom logging middleware
app.use((req, res, next) => {
  console.log('Client requested: ', req.method, req.url);
  next(); // continue on and check other routes
});

// OLD WAY
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/index.html'));
// });
// app.get('/index.js', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/index.js'));
// });
// app.get('/index.css', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/index.css'));
// });

// NEW WAY - express static middleware
app.use(express.static(path.join(__dirname, '/client')));

// OLD WAY
// app.get('/1', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/bun1.jpg'));
// });
// app.get('/2', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/bun2.jpg'));
// });
// app.get('/3', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/bun3.jpg'));
// });

app.get('/secret-page', (req, res) => {
  // res.status(222);
  throw new Error();
  // res.send(`<h1>WELCOME to the secret page!!!</h1>`);
});

// NEW WAY - URL params
app.get('/:num', (req, res) => {
  console.log('params: ', req.params);
  // const numClientRequested = req.params.num;
  res.sendFile(path.join(__dirname, '/client/bun' + req.params.num + '.jpg'));
});


app.listen(5000, () => console.log('server is listening on port 5000'));
