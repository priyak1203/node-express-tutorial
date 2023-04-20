const express = require('express');
const app = express();
require('dotenv').config();
require('express-async-errors');

// other packages
const morgan = require('morgan');

// database connection
const connectDB = require('./db/connect');

// error handler middlewares
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

// setup middlewares
app.use(morgan('tiny'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('e-commerce api');
});

// setup error handlers
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
