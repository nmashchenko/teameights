// * Constants
const STATUS_CODES = require('../constants/statusCodes')

module.exports = class ApiError extends Error {
  status;
  error;

  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new ApiError(STATUS_CODES.unauthorized, 'User is not authorized');
  }

  static BadRequest(message, errors = []) {
    return new ApiError(STATUS_CODES.badRequest, message, errors);
  }
}