const express = require('express');
const app = express();
require('express-async-errors');
require('dotenv').config();
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');
const mainRouter = require('./routes/main');

// static
app.use(express.static('./public'));
// parse data
app.use(express.json());

// routes
app.use('/api/v1', mainRouter);

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
