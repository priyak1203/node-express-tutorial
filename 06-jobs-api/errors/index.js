const BadRequestError = require('./bad-request');
const CustomAPIError = require('./custom-error');
const NotFoundError = require('./not-found');
const UnAuthenticatedError = require('./unauthenticated');

module.exports = {
  BadRequestError,
  CustomAPIError,
  NotFoundError,
  UnAuthenticatedError,
};
