const express = require('express');
const app = express();
require('dotenv').config();
require('express-async-errors');

// extra security packages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

// Swagger UI
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

// database connection
const connectDB = require('./db/connect');

// user authentication
const authenticateUser = require('./middlewares/authentication');

// routers
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');

// error handlers
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

// middlewares
app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window`
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.get('/', (req, res) => {
  res.send('<h1>Jobs API</h1><a href="/api-docs">Documentation</a>');
});
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
// set up routes
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
