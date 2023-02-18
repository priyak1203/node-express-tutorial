const express = require('express');
const app = express();
require('dotenv').config();
require('express-async-errors');

// routers
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');

// error handlers
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// set up routes
app.get('/', (req, res) => {
  res.send('Jobster API');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

// set up error handlers
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
