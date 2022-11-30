const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found</h1>');
});

app.listen(5000, () => console.log('Server listening on PORT: 5000'));
