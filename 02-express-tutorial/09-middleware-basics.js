const express = require('express');
const app = express();

// request --> middleware --> response

// middleware
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();

  console.log({ method, url, time });
  next();
};

app.get('/', logger, (req, res) => {
  res.status(200).send('Home Page');
});

app.get('/about', logger, (req, res) => {
  res.status(200).send('About Page');
});

app.all('*', (req, res) => {
  res.status(404).send('Resource Not Found');
});

app.listen(5000, () => console.log('Server listening on PORT: 5000'));
