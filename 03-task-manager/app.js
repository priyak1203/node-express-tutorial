const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

// middlewares
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Task Manager App');
});

// routes
app.use('/api/v1/tasks', tasksRouter);

const port = 5000;

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
