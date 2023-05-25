// * Modules
import * as yup from 'yup'

const emailValidation = yup.object().shape({
  email: yup.string().required('You forgot to input email 😁').email('Email is not valid.'),
})

export default emailValidation
