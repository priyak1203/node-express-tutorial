const express = require('express');
const app = express();
require('dotenv').config();
require('express-async-errors');

// other packages
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

// database connection
const connectDB = require('./db/connect');

// routers
const authRouter = require('./routes/authRoutes');

// error handler middlewares
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

// setup middlewares
app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('e-commerce api');
});

app.get('/api/v1', (req, res) => {
  console.log(req.cookies);
  res.send('e-commerce-api');
});

// setup routes
app.use('/api/v1/auth', authRouter);

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
