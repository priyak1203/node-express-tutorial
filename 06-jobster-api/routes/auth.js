const { register, login, updateUser } = require('../controllers/auth');
const authenticateUser = require('../middleware/authentication');
const testUser = require('../middleware/testUser');
const apiLimiter = require('../middleware/apiLimiter');
const express = require('express');
const router = express.Router();

router.post('/register', apiLimiter, register);
router.post('/login', apiLimiter, login);
router.patch('/updateUser', authenticateUser, testUser, updateUser);

module.exports = router;
