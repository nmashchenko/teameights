// * Modules
import * as yup from 'yup'

const regMatch =
  /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/

const userPersonalInfoNameSchema = yup.object().shape({
  name: yup.string().required('Please input your name').max(30),
  age: yup
    .number()
    .required('Please input your age')
    .typeError('Age must be a number')
    .positive('Age must be greater than zero'),
  country: yup.string().required('Please choose your country!'),
  description: yup.string().required('Please write something about you!').max(220),
})

const userPersonalInfoUsernameSchema = yup.object().shape({
  username: yup.string().required('Please input your username').max(30),
  age: yup
    .number()
    .required('Please input your age')
    .typeError('Age must be a number')
    .positive('Age must be greater than zero'),
  country: yup.string().required('Please choose your country!'),
  description: yup.string().required('Please write something about you!').max(220),
})

const userConcentrationSchema = yup.object().shape({
  programmingLanguages: yup.array().min(1, 'Select at least one language'),
  frameworks: yup.array().min(1, 'Select at least one framework'),
  concentration: yup.string().required('Select your concentration'),
})

const userExperienceSchema = yup.object().shape({
  experience: yup.string().required('Please choose your experience'),
  leader: yup.bool().required('Decide if you want to be a leader').nullable(),
})

const userEducationSchema = yup.object().shape({
  university: yup.string().matches(/^[aA-zZ\s]+$/, {
    message: 'Only alphabets are allowed for this field ',
    excludeEmptyString: true,
  }),
  major: yup.string().matches(/^[aA-zZ\s]+$/, {
    message: 'Only alphabets are allowed for this field ',
    excludeEmptyString: true,
  }),
  graduationDate: yup.number().positive().nullable(),
})

const urlsSchema = yup.object().shape({
  github: yup
    .string()
    .matches(regMatch, { message: 'Github link should be a valid URL', excludeEmptyString: true }),
  linkedIn: yup.string().matches(regMatch, {
    message: 'LinkedIn link should be a valid URL',
    excludeEmptyString: true,
  }),
  instagram: yup.string().matches(regMatch, {
    message: 'Instagram link should be a valid URL',
    excludeEmptyString: true,
  }),
  telegram: yup.string().matches(regMatch, {
    message: 'Telegram link should be a valid URL',
    excludeEmptyString: true,
  }),
})

const answerSchema = yup.object().shape({
  label: yup.string().required('You have to make a decision! 😁'),
  value: yup.string().required('You have to make a decision! 😁'),
})

const yupValidation = Object.freeze({
  userPersonalInfoNameSchema,
  userPersonalInfoUsernameSchema,
  userConcentrationSchema,
  userExperienceSchema,
  urlsSchema,
  answerSchema,
  userEducationSchema,
})

export default yupValidation
