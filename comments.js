// Create web server
// 1. Create a web server
// 2. Create a route
// 3. Create a route handler
// 4. Send a response

const express = require('express');
// const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/comments', (req, res) => {
  res.send('This is a comments page.');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});