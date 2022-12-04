const express = require('express');
const app = express();

const { people } = require('./data');

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.get('/api/people', (req, res) => {
  res.status(200).json({ succes: true, data: people });
});

// javascript form
app.post('/api/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'Please provide name value' });
  }
  res.status(201).json({ success: true, person: name });
});

// traditional form
app.post('/login', (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  return res.status(401).send('Please provide credentials');
});

// postman post request
app.post('/api/postman/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'Please provide the name' });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

// put request
app.put('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id : ${id}` });
  }

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'Please provide valid name' });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: true, data: newPeople });
});

// delete request
app.delete('/api/people/:id', (req, res) => {
  const { id } = req.params;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id : ${id}` });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));
  res.status(200).json({ status: true, data: newPeople });
});

app.all('*', (req, res) => {
  res.status(404).send('Resource Not Found');
});

app.listen(5000, () => console.log('Server listening on PORT: 5000'));
