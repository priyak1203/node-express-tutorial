const express = require('express');
const errorHandler = require('./middlewares/error-handler');
const app = express();
require('dotenv').config();
const notFound = require('./middlewares/not-found');

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
