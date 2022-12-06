const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Task Manager App');
});

// general routes
// app.get('/api/v1/tasks')             -- get all the tasks
// app.post('/api/v1/tasks')            -- create a new task
// app.get('/api/v1/tasks/:id')         -- get a single task
// app.patch('/api/v1/tasks/:id')       -- update a task
// app.delete('/api/v1/tasks/:id')      -- delete a task

const port = 5000;

app.listen(port, () => console.log(`Server is listening on PORT: ${port}`));
