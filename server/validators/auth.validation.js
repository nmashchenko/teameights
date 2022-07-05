// * Modules
const Joi = require('joi')

const registerValidationFields = {
  username: Joi.string().alphanum().min(3).max(30).required().messages({
    'string.empty': 'Username should not be empty!',
    'any.required': 'Username is a required field!',
    'string.min': 'Username should be minimum 3 characters!',
    'string.max': 'Username should be maximum 30 characters!',
    'string.alphanum': 'Username must only contain alpha-numeric characters',
  }),

  email: Joi.string().email().required().messages({
    'string.empty': 'Email should not be empty!',
    'any.required': 'Email is a required field!',
    'string.email': 'Email should be valid!',
  }),

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

const registerValidationSchema = Joi.object(registerValidationFields)

module.exports = {
  registerValidationSchema,
}