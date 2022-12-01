const express = require('express');
const app = express();

const { products } = require('./data');

app.get('/', (req, res) => {
  res.status(200).json(products);
});

app.get('/users', (req, res) => {
  res.status(200).json([
    { id: 1, name: 'Susan' },
    { id: 2, name: 'John' },
  ]);
});

app.all('*', (req, res) => {
  res.status(404).send('Resource Not Found');
});

app.listen(5000, () => console.log('Server listening on PORT: 5000'));
