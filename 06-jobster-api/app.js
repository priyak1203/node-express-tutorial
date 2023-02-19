const express = require('express');
const app = express();
require('dotenv').config();
require('express-async-errors');

// extra security packages
const helmet = require('helmet');
const xss = require('xss-clean');

// database connection
const connectDB = require('./db/connect');

// user authentication
const authenticateUser = require('./middleware/authentication');

// routers
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');

// error handlers
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middlewares
app.use(express.json());
app.use(helmet());
app.use(xss());

// set up routes
app.get('/', (req, res) => {
  res.send('Jobster API');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);

// set up error handlers
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
