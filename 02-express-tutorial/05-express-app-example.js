const express = require('express');
const path = require('path');
const app = express();

// setup static and middleware
// by convention is it set in public folder
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource Not Found</h1>');
});

app.listen(5000, () => console.log('Server listening on PORT: 5000'));
