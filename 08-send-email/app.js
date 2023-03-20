const express = require('express');
const app = express();

require('dotenv').config();
require('express-async-errors');

// error handlers
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

const sendEmail = require('./controllers/sendEmail');

// routes
app.get('/', (req, res) => {
  res.send('<h1>Sending Email Project</h1> <a href="/send">send email </a>');
});

app.get('/send', sendEmail);
// middlewares
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
