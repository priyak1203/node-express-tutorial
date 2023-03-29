const express = require('express');
const app = express();

require('dotenv').config();
require('express-async-errors');

// controllers
const stripeController = require('./controllers/stripeController');

// error handler
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

app.use(express.json());
app.use(express.static('./public'));

app.post('/stripe', stripeController);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

const start = () => {
  try {
    app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
