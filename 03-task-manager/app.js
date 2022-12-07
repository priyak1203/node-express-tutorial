const express = require('express');
const app = express();

const tasksRouter = require('./routes/tasks');

// middlewares
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Task Manager App');
});

// routes
app.use('/api/v1/tasks', tasksRouter);

const port = 5000;
app.listen(port, () => console.log(`Server is listening on PORT: ${port}`));
