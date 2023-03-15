const express = require('express');
const app = express();

require('dotenv').config();
require('express-async-errors');

const fileUpload = require('express-fileupload');

// database connection
const connectDB = require('./db/connect');

// routers
const productRouter = require('./routes/productRoutes');

// error handlers
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

// middlewares
app.use(express.static('./public'));
app.use(express.json());
app.use(fileUpload());

app.get('/', (req, res) => {
  res.send('<h1>File Upload Project </h1>');
});

// set up routes
app.use('/api/v1/products', productRouter);

// setup error handlers
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
