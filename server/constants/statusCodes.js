const STATUS_CODES = Object.freeze({
  ok: 200,
  created: 201,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  conflict: 409,
  unprocessableEntity: 422,
  tooManyRequests: 429,
  incompleteProfile: 430,
  internalServerError: 500,
})

module.exports = STATUS_CODES