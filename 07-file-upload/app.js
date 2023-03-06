const express = require('express');
const app = express();

require('dotenv').config();
require('express-async-errors');

// error handlers
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

app.get('/', (req, res) => {
  res.send('<h1>File Upload Project </h1>');
});

// setup error handlers
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

const start = () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server is listening on PORT : ${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
