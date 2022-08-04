// * Modules
import * as yup from 'yup'

const regMatch =
  /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/

const nameSchema = yup.object().shape({
  name: yup.string().required('Please input your name').max(30),
})

const countrySchema = yup.object().shape({
  label: yup.string().required('Please choose your country!'),
  value: yup.string().required('Please choose your country!'),
})

const ageSchema = yup.object().shape({
  ageNumber: yup
    .number()
    .required('Please input your age')
    .typeError('Age must be a number')
    .positive('Age must be greater than zero'),
})

const programmingLanguagesSchema = yup.object().shape({
  programmingLanguages: yup.array().min(1, 'Select at least one language 👅'),
})

const concentrationSchema = yup.object().shape({
  label: yup.string().required('Please choose your concentration 🎓'),
  value: yup.string().required('Please choose your concentration 🎓'),
})

const experienceSchema = yup.object().shape({
  experienceNumber: yup
    .number()
    .required('Please input your experience')
    .typeError('Experience must be a number')
    .positive('Experience must be greater than zero'),
})

const urlsSchema = yup.object().shape({
  github: yup
    .string()
    .matches(regMatch, { message: 'Github link should be a valid URL', excludeEmptyString: true }),
  linkedIn: yup
    .string()
    .matches(regMatch, {
      message: 'LinkedIn link should be a valid URL',
      excludeEmptyString: true,
    }),
  instagram: yup
    .string()
    .matches(regMatch, {
      message: 'Instagram link should be a valid URL',
      excludeEmptyString: true,
    }),
  telegram: yup
    .string()
    .matches(regMatch, {
      message: 'Telegram link should be a valid URL',
      excludeEmptyString: true,
    }),
})

const answerSchema = yup.object().shape({
  label: yup.string().required('You have to make a decision! 😁'),
  value: yup.string().required('You have to make a decision! 😁'),
})

const yupValidation = Object.freeze({
  nameSchema,
  countrySchema,
  ageSchema,
  programmingLanguagesSchema,
  concentrationSchema,
  experienceSchema,
  urlsSchema,
  answerSchema,
})

export default yupValidation
