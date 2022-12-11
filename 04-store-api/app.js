const express = require('express');
const app = express();
require('dotenv').config();
require('express-async-errors');
const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');
const errorHandler = require('./middlewares/error-handler');
const notFound = require('./middlewares/not-found');

// routes
app.get('/', (req, res) => {
  res
    .status(200)
    .send(
      '<h1>Store API - App</h1><a href="/api/v1/products">Products Route</a>'
    );
});

// products route
app.use('/api/v1/products', productsRouter);

// not found
app.use(notFound);
// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

// start the server only after connection to db is established
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening on PORT: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
