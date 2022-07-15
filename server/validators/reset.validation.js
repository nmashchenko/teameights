// * Modules
const Joi = require('joi')

const resetValidationFields = {
  id: Joi.string(),
  token: Joi.string(),
  password: Joi.string().min(8).required().messages({
    'string.empty': 'Password should not be empty!',
    'any.required': 'Password is a required field!',
    'string.min': 'Password should be minimum 8 characters!',
  }),

  repeatPassword: Joi.any().equal(Joi.ref('password')).required().messages({ 
    'any.only': 'Passwords does not match',
    'any.required': 'Repeat password is a required field!',
  }),
}

const resetValidationSchema = Joi.object(resetValidationFields)

module.exports = {
  resetValidationSchema,
}