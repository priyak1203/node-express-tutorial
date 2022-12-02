const express = require('express');
const app = express();

const { logger } = require('./logger');
const authorize = require('./authorize');

// middleware
// app.use(logger); // applied to all the routes
// app.use([logger, authorize]); // applied to all the routes
app.use('/api', [authorize, logger]); // applied to routes starting with /api

app.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.get('/api/products', (req, res) => {
  res.status(200).send('Products');
});

app.get('/api/users', (req, res) => {
  console.log(req.user);
  res.status(200).send('Users');
});

app.all('*', (req, res) => {
  res.status(404).send('Resource Not Found');
});

app.listen(5000, () => console.log('Server listening on PORT: 5000'));
