import * as yup from 'yup'

const newPasswordValidation = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .test('uppercase', 'Password must contain at least one uppercase letter', (value) => {
      return /[A-Z]/.test(value)
    })
    .test('lowercase', 'Password must contain at least one lowercase letter', (value) => {
      return /[a-z]/.test(value)
    })
    .test('digit', 'Password must contain at least one digit', (value) => {
      return /\d/.test(value)
    })
    .test('specialChar', 'Password must contain at least one special character', (value) => {
      return /[@$!%*?&]/.test(value)
    }),

  confirmPassword: yup
    .string()
    .required('Confirm is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export default newPasswordValidation
