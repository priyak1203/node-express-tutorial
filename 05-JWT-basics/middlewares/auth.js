const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');
const { UnAuthenticated } = require('../errors');

const authentication = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnAuthenticated('No token provided');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnAuthenticated('Not authorized to access this route', 401);
  }
};

module.exports = authentication;
