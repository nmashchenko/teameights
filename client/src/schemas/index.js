// * Modules
import * as yup from 'yup'

const regMatch =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']

const userFileValidation = yup.object().shape({
  file: yup
    .mixed()
    .notRequired()
    .test('fileSize', 'File too large', (value) => {
      if (!value) {
        return true
      }
      const stringLength = value.length - 'data:image/png;base64,'.length

      const sizeInBytes = 4 * Math.ceil(stringLength / 3) * 0.5624896334383812

      return sizeInBytes <= 1024 * 1024 * 10
    })
    .test('fileFormat', 'Unsupported Format', (value) => {
      if (!value) {
        return true
      }

      return SUPPORTED_FORMATS.includes(value.substring(value.indexOf(':') + 1, value.indexOf(';')))
    }),
})

export const finishRegistrationValidation = [
  yup.object().shape(
    {
      username: yup.string().required('Please input your username').max(20),
      fullName: yup.string().required('Please input your name').min(8).max(20),
      dateOfBirth: yup
        .string()
        .matches(
          /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
          'Invalid date format. Please enter a date in the format dd/mm/yyyy',
        )
        .required('Please input your birthday'),
      country: yup.string().required('Please choose your country!'),
      description: yup.string().when('description', (value) => {
        if (value) {
          return yup.string().max(200)
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
    degree: yup
      .string()
      .when(['university', 'major', 'addmissionDate', 'graduationDate'], {
        is: (major, university, addmissionDate, graduationDate) =>
          !major && !university && !addmissionDate && !graduationDate,
        then: yup.string(),
        otherwise: yup.string().required('Please input your degree'),
      })
      .matches(/^[aA-zZ\s]+$/, {
        message: 'Only alphabets are allowed for this field',
      })
      .nullable(),
    major: yup
      .string()
      .test('all-required', 'Please input your major', function () {
        const { major, degree, graduationDate, addmissionDate, university } = this.parent

        if (!degree && !addmissionDate && !university && !graduationDate) {
          return true
        } else if (major) {
          return true
        } else {
          return false
        }
      })
      .matches(/^[aA-zZ\s]+$/, {
        message: 'Only alphabets are allowed for this field',
        excludeEmptyString: true,
      })
      .nullable(),
    university: yup
      .string()
      .test('all-required', 'Please input your university', function () {
        const { major, degree, graduationDate, addmissionDate, university } = this.parent

        if (!degree && !major && !addmissionDate && !graduationDate) {
          return true
        } else if (university) {
          return true
        } else {
          return false
        }
      })
      .matches(/^[aA-zZ\s]+$/, {
        message: 'Only alphabets are allowed for this field',
        excludeEmptyString: true,
      })
      .nullable(),
    addmissionDate: yup
      .string()
      .test('all-required', 'Please input admission date', function () {
        const { major, degree, university, graduationDate, addmissionDate } = this.parent

        if (!degree && !major && !university && !graduationDate) {
          return true
        } else if (addmissionDate) {
          return true
        } else {
          return false
        }
      })
      .matches(/^[0-9]*$/, {
        message: 'Only numbers are allowed for this field',
        excludeEmptyString: true,
      })
      .nullable(),
    graduationDate: yup
      .string()
      .test('all-required', 'Please input graduation date', function () {
        const { major, degree, university, addmissionDate, graduationDate } = this.parent

        if (!degree && !major && !university && !addmissionDate) {
          return true
        } else if (graduationDate) {
          return true
        } else {
          return false
        }
      })
      .matches(/^[0-9]*$/, {
        message: 'Only numbers are allowed for this field',
        excludeEmptyString: true,
      })
      .nullable(),
  }),
  yup.object().shape({
    title: yup
      .string()
      .when(['company', 'startDate', 'endDate'], {
        is: (company, startDate, endDate) => !company && !startDate && !endDate,
        then: yup.string(),
        otherwise: yup.string().required('Please input your title'),
      })
      .matches(/^[aA-zZ\s]+$/, {
        message: 'Only alphabets are allowed for this field',
      })
      .nullable(),
    company: yup
      .string()
      .test('all-required', 'Please input your company', function () {
        const { title, company, startDate, endDate } = this.parent

        if (!title && !startDate && !endDate) {
          return true
        } else if (company) {
          return true
        } else {
          return false
        }
      })
      .matches(/^[aA-zZ\s]+$/, {
        message: 'Only alphabets are allowed for this field',
        excludeEmptyString: true,
      })
      .nullable(),
    startDate: yup
      .string()
      .test('all-required', 'Please input start date', function () {
        const { title, company, startDate, endDate } = this.parent

        if (!title && !company && !endDate) {
          return true
        } else if (startDate) {
          return true
        } else {
          return false
        }
      })
      .matches(/^[0-9]*$/, {
        message: 'Only numbers are allowed for this field',
        excludeEmptyString: true,
      })
      .nullable(),
    endDate: yup
      .string()
      .test('all-required', 'Please input end date', function () {
        const { title, company, startDate, endDate } = this.parent

        if (!title && !company && !startDate) {
          return true
        } else if (endDate) {
          return true
        } else {
          return false
        }
      })
      .matches(/^[0-9]*$/, {
        message: 'Only numbers are allowed for this field',
        excludeEmptyString: true,
      })
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
      behance: yup.string().when('behance', (value) => {
        if (value) {
          return yup
            .string()
            .required()
            .matches(regMatch, { message: 'Behance link should be a valid URL' })
        } else {
          return yup.string().notRequired()
        }
      }),
    },
    [
      ['github', 'github'],
      ['linkedIn', 'linkedIn'],
      ['telegram', 'telegram'],
      ['behance', 'behance'],
    ],
  ),
  userFileValidation,
]

export const createTeamValidation = [
  yup.object().shape(
    {
      name: yup.string().required('Please input team name').max(20),
      tag: yup.string().required('Please input team tag').max(5),
      type: yup.string().required('Please choose your country!'),
      country: yup.string().required('Please choose your country!'),
      description: yup.string().when('description', (value) => {
        if (value) {
          return yup.string().max(200)
        } else {
          return yup.string().notRequired()
        }
      }),
    },
    [
      ['tag', 'tag'],
      ['description', 'description'],
    ],
  ),
  yup.object().shape({
    members: yup.array().max(8),
  }),
  userFileValidation,
]

export const editProfileValidation = yup.object().shape(
  {
    fullName: yup.string().required('Please input your name').max(30),
    country: yup.string().required('Please choose your country!'),
    description: yup.string().when('description', (value) => {
      if (value) {
        return yup.string().max(230)
      } else {
        return yup.string().notRequired()
      }
    }),
    experience: yup.string().required('Please choose your experience'),
    programmingLanguages: yup
      .array()
      .min(1, 'Select at least one language')
      .max(8, '8 lagnuages maximum'),
    frameworks: yup.array().min(1, 'Select at least one framework').max(6, '6 frameworks maximum'),
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
    projectData: yup
      .array()
      .of(
        yup.object().shape({
          title: yup
            .string('Should be string!')
            .required('Required!')
            .trim()
            .min(1, 'Should not be empty!'),
          link: yup
            .string('Should be string!')
            .required('Required!')
            .trim()
            .min(1, 'Should not be empty!')
            .url('Should be valid URL!'),
        }),
      )
      .min(0),
  },
  [
    ['description', 'description'],
    ['github', 'github'],
    ['linkedIn', 'linkedIn'],
    ['telegram', 'telegram'],
  ],
)

export const editTeamValidation = yup.object().shape({
  name: yup.string().max(20, '20 characters max'),
  tag: yup.string().max(5),
})
