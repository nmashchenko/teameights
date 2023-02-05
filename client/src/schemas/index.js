// * Modules
import * as yup from 'yup'

const regMatch =
  /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']

export const finishRegistrationValidation = [
  yup.object().shape(
    {
      username: yup.string().required('Please input your username').max(30),
      fullName: yup.string().required('Please input your name').max(30),
      age: yup
        .number()
        .required('Please input your age')
        .typeError('Age must be a number')
        .positive('Age must be greater than zero'),
      country: yup.string().required('Please choose your country!'),
      description: yup.string().when('description', (value) => {
        if (value) {
          return yup.string().max(220)
        } else {
          return yup.string().notRequired()
        }
      }),
      // description: yup.string().required('Please write something about you!').max(220),
    },
    [['description', 'description']],
  ),
  yup.object().shape({
    programmingLanguages: yup.array().min(1, 'Select at least one language'),
    frameworks: yup.array().min(1, 'Select at least one framework'),
    concentration: yup.string().required('Select your concentration'),
  }),
  yup.object().shape({
    experience: yup.string().required('Please choose your experience'),
    leader: yup.string().required('Decide if you want to be a leader'),
  }),
  yup.object().shape({
    university: yup
      .string()
      .required('Please input your educational institution')
      .matches(/^[aA-zZ\s]+$/, {
        message: 'Only alphabets are allowed for this field ',
      }),
    major: yup
      .string()
      .required('Please input your major')
      .matches(/^[aA-zZ\s]+$/, {
        message: 'Only alphabets are allowed for this field ',
        excludeEmptyString: true,
      }),
    graduationDate: yup
      .number()
      .required('Please input your graduation date')
      .positive()
      .nullable(),
  }),
  yup.object().shape(
    {
      github: yup.string().when('github', (value) => {
        if (value) {
          return yup
            .string()
            .required()
            .matches(regMatch, { message: 'Github link should be a valid URL' })
        } else {
          return yup.string().notRequired()
        }
      }),
      linkedIn: yup.string().when('linkedIn', (value) => {
        if (value) {
          return yup
            .string()
            .required()
            .matches(regMatch, { message: 'LinkedIn link should be a valid URL' })
        } else {
          return yup.string().notRequired()
        }
      }),
      telegram: yup.string().when('telegram', (value) => {
        if (value) {
          return yup
            .string()
            .required()
            .matches(regMatch, { message: 'Telegram link should be a valid URL' })
        } else {
          return yup.string().notRequired()
        }
      }),
      // instagram: yup.string().matches(regMatch, {//   message: 'Instagram link should be a valid URL',
      //   excludeEmptyString: true,
      // }),
    },
    [
      ['github', 'github'],
      ['linkedIn', 'linkedIn'],
      ['telegram', 'telegram'],
    ],
  ),
  yup.object().shape({
    file: yup
      .mixed()
      .notRequired()
      .test('fileSize', 'File too large', (value) => {
        if (!value) {
          return true
        }

        return atob(value.substr(22)).length <= 1024 * 1024 * 10
      })
      .test('fileFormat', 'Unsupported Format', (value) => {
        if (!value) {
          return true
        }

        return SUPPORTED_FORMATS.includes(
          value.substring(value.indexOf(':') + 1, value.indexOf(';')),
        )
      }),
  }),
]

export const editProfileValidation = yup.object().shape(
  {
    fullName: yup.string().required('Please input your name').max(30),
    country: yup.string().required('Please choose your country!'),
    description: yup.string().when('description', (value) => {
      if (value) {
        return yup.string().max(220)
      } else {
        return yup.string().notRequired()
      }
    }),
    experience: yup.string().required('Please choose your experience'),
    programmingLanguages: yup.array().min(1, 'Select at least one language'),
    frameworks: yup.array().min(1, 'Select at least one framework'),
    concentration: yup.string().required('Select your concentration'),
    github: yup.string().when('github', (value) => {
      if (value) {
        return yup
          .string()
          .required()
          .matches(regMatch, { message: 'Github link should be a valid URL' })
      } else {
        return yup.string().notRequired()
      }
    }),
    linkedIn: yup.string().when('linkedIn', (value) => {
      if (value) {
        return yup
          .string()
          .required()
          .matches(regMatch, { message: 'LinkedIn link should be a valid URL' })
      } else {
        return yup.string().notRequired()
      }
    }),
    telegram: yup.string().when('telegram', (value) => {
      if (value) {
        return yup
          .string()
          .required()
          .matches(regMatch, { message: 'Telegram link should be a valid URL' })
      } else {
        return yup.string().notRequired()
      }
    }),
  },
  [
    ['description', 'description'],
    ['github', 'github'],
    ['linkedIn', 'linkedIn'],
    ['telegram', 'telegram'],
  ],
)
