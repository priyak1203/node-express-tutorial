const jwt = require('jsonwebtoken');
const { UnAuthenticatedError } = require('../errors');

const authentication = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnAuthenticatedError('Authentication Invalid');
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const { userId, name } = payload;
    // attach the user to the job routes
    req.user = { userId, name };

    next();
  } catch (error) {
    throw new UnAuthenticatedError('Not authorized to access this route');
  }
};

module.exports = authentication;
