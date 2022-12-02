const express = require('express');
const app = express();

const { people } = require('./data');

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.all('*', (req, res) => {
  res.status(404).send('Resource Not Found');
});

app.listen(5000, () => console.log('Server listening on PORT: 5000'));
