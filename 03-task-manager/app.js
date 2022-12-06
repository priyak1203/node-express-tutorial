const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Task Manager App');
});

const port = 5000;

app.listen(port, () => console.log(`Server is listening on PORT: ${port}`));
