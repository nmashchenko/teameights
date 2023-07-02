import * as yup from 'yup'

const newPasswordValidation = yup.object().shape({
  password: yup
    .string()
    .required('Must be at least 8 characters')
    .min(8, 'Must be at least 8 characters'),
})

export default newPasswordValidation
