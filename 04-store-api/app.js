const express = require('express');
const errorHandler = require('./middlewares/error-handler');
const app = express();
require('dotenv').config();

const notFound = require('./middlewares/not-found');

// routes
app.get('/', (req, res) => {
  res
    .status(200)
    .send(
      '<h1>Store API - App</h1><a href="/api/v1/products">Products Route</a>'
    );
});

// not found
app.use(notFound);
// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const start = () => {
  app.listen(PORT, console.log(`Server is listening on PORT: ${PORT}`));
};

start();
