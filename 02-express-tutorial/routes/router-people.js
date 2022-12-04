const express = require('express');
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require('../controllers/people');

router.get('/', getPeople);

// javascript form
router.post('/', createPerson);

// postman post request
router.post('/postman', createPersonPostman);

// put request
router.put('/:id', updatePerson);

// delete request
router.delete('/:id', deletePerson);

module.exports = router;
