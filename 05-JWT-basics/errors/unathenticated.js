const CustomAPIError = require('./custom-error');

class UnAuthenticated extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = UnAuthenticated;
