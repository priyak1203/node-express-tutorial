const express = require('express');
const app = express();
require('dotenv').config();

// database connection
const connectDB = require('./db/connect');

app.get('/', (req, res) => {
  res.send('Home Page');
});

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
