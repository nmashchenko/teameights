// * Constants
const STATUS_CODES = require('../constants/statusCodes')

const middleware = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body)

    if (!error) {
      next()
    } else {
      return res.status(STATUS_CODES.badRequest).json({
        message: error.details[0].message,
        field: [`${error.details[0].context.key}`],
      })
    }
  }
}

module.exports = middleware