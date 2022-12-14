const express = require('express');
const app = express();
require('express-async-errors');
require('dotenv').config();
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');

// static
app.use(express.static('./public'));

// not found
app.use(notFound);
// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
const start = () => {
  try {
    app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
