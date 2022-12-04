const express = require('express');
const router = express.Router();

const { people } = require('../data');

router.get('/', (req, res) => {
  res.status(200).json({ succes: true, data: people });
});

// javascript form
router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'Please provide name value' });
  }
  res.status(201).json({ success: true, person: name });
});

// postman post request
router.post('/postman', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'Please provide the name' });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

// put request
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
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

module.exports = router;
