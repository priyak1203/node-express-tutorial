const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');
require('dotenv').config();

// static
app.use(express.static('./public'));
// middlewares
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasksRouter);

// 404 route
app.use(notFound);
// error handler
app.use(errorHandler);

const port = process.env.PORT || 3000;

// start the server only after connection to db is established
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on PORT: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
