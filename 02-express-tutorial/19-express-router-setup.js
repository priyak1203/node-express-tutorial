const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');
const authRouter = require('./routes/auth');

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

// setting up routers
app.use('/api/people', peopleRouter);
app.use('/login', authRouter);

app.all('*', (req, res) => {
  res.status(404).send('Resource Not Found');
});

app.listen(5000, () => console.log('Server listening on PORT: 5000'));
