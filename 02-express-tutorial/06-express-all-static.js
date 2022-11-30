const express = require('express');
const app = express();

// setup static and middleware
app.use(express.static('./navbar-app'));

app.all('*', (req, res) => {
  res.status(404).send('Resource Not Found');
});

app.listen(5000, () => console.log('Server listening on PORT: 5000'));
