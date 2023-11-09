const express = require('express');
const jsonServer = require('json-server');

const app = express();
const router = jsonServer.router({
  db: './db.json',
});

app.use('/', router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});