// * Modules
import * as yup from 'yup'

const regMatch =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']

const isDate = (_date) => {
  const _regExp = new RegExp(
    '^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$',
  )

  return _regExp.test(_date)
}

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
      fullName: yup
        .string()
        .required('Please input your name')
        .min(4, 'Full name should be at least 4 characters')
        .max(20, 'Full name should be at most 20 characters'),
      dateOfBirth: yup
        .string()
        .matches(
          /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19\d\d|20[01][0-9]|202[0-3])$/,
          'Invalid date format. Please enter a date in the format dd/mm/yyyy',
        )
        .test('valid-year', 'Year must be between 1901 and current year', function (value) {
          if (value) {
            const year = parseInt(value.split('/')[2])

            return year >= 1901 && year <= new Date().getFullYear()
          }

          return true
        })
        .required('Please input your birthday'),
      country: yup.string().required('Please choose your country!'),
      description: yup.string().when('description', (value) => {
        if (value) {
          return yup.string().max(230)
        } else {
          return yup.string().notRequired()
        }
      }),
      // description: yup.string().required('Please write something about you!').max(220),
    },
    [['description', 'description']],
  ),
  yup.object().shape({
    programmingLanguages: yup
      .array()
      .min(1, 'Select at least one language')
      .max(8, '8 lagnuages maximum'),
    frameworks: yup.array().min(1, 'Select at least one framework').max(6, '6 frameworks maximum'),
    concentration: yup.string().required('Select your concentration'),
  }),
  yup.object().shape({
    experience: yup.string().required('Please choose your experience'),
    leader: yup.string().required('Decide if you want to be a leader'),
  }),

  yup.object().shape({
    universityData: yup
      .array()
      .of(
        yup.object().shape({
          degree: yup
            .string()
            .when(['university', 'major', 'addmissionDate', 'graduationDate'], {
              is: (major, university, addmissionDate, graduationDate) =>
                !major && !university && !addmissionDate && !graduationDate,
              then: yup.string(),
              otherwise: yup.string().required('Please input your degree'),
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
            .matches(/^[a-zA-Z0-9\s]+$/, {
              message: 'Only alphabets and numbers are allowed for this field',
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
            .test('valid-year', 'Year must be between 1901 and current year', function (value) {
              if (value) {
                return value >= 1901 && value <= new Date().getFullYear()
              }

              return true
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
            .test(
              'valid-year',
              'Year must be from 1901 and bigger than addmission',
              function (value) {
                if (value) {
                  const { addmissionDate } = this.parent

                  if (value === '0') {
                    return true
                  }

                  return value >= 1901 && addmissionDate < value
                }

                return true
              },
            )
            .nullable(),
        }),
      )
      .min(0)
      .max(2),
  }),

  yup.object().shape({
    jobData: yup
      .array()
      .of(
        yup.object().shape({
          title: yup
            .string()
            .when(['company', 'startDate', 'endDate'], {
              is: (company, startDate, endDate) => !company && !startDate && !endDate,
              then: yup.string(),
              otherwise: yup.string().required('Please input your title'),
            })
            .matches(/^[a-zA-Z0-9\s]+$/, {
              message: 'Only alphabets and numbers are allowed for this field',
              excludeEmptyString: true,
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
            .matches(/^[a-zA-Z0-9\s]+$/, {
              message: 'Only alphabets and numbers are allowed for this field',
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
            .test('valid-year', 'Year must be between 1901 and current year', function (value) {
              if (value) {
                return value >= 1901 && value <= new Date().getFullYear()
              }

              return true
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
            .test(
              'valid-year',
              'Year must be from 1901 and bigger than addmission',
              function (value) {
                if (value) {
                  const { startDate } = this.parent

                  if (value === '0') {
                    return true
                  }

                  return value >= 1901 && startDate < value
                }

                return true
              },
            )
            .nullable(),
        }),
      )
      .min(0)
      .max(2),
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
    dateOfBirth: yup
      .string()
      .matches(
        /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19\d\d|20[01][0-9]|202[0-3])$/,
        'Invalid date format. Please enter a date in the format dd/mm/yyyy',
      )
      .test('valid-year', 'Year must be between 1901 and current year', function (value) {
        if (value) {
          const year = parseInt(value.split('/')[2])

          return year >= 1901 && year <= new Date().getFullYear()
        }

        return true
      })
      .required('Please input your birthday'),
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
      .min(0)
      .max(5),
    jobData: yup
      .array()
      .of(
        yup.object().shape({
          title: yup
            .string()
            .matches(/^[a-zA-Z0-9\s]+$/, {
              message: 'Only alphabets and numbers are allowed for this field',
              excludeEmptyString: true,
            })
            .required('Input your title!'),
          company: yup
            .string()
            .matches(/^[a-zA-Z0-9\s]+$/, {
              message: 'Only alphabets and numbers are allowed for this field',
              excludeEmptyString: true,
            })
            .required('Input your company!'),
          startDate: yup
            .string()
            .test('valid-year', 'Year must be between 1901 and current year', function (value) {
              /* Check if value is Date type that we got from backend */
              if (typeof value === 'string' && isDate(value)) {
                return true
              }

              /* Check if number is between specific range */
              return value >= 1901 && value <= new Date().getFullYear()
            })
            .required('Date is required'),
          endDate: yup
            .string()
            .test(
              'valid-year',
              'Year must be from 1901 and bigger than start date',
              function (value) {
                let { startDate } = this.parent

                /* Check if value is Date type that we got from backend */
                if (typeof value === 'string' && isDate(value)) {
                  return true
                }

                /* If startDate is of type string (and not number), convert it to number */
                if (isDate(startDate)) {
                  startDate = Number(startDate.slice(0, 4))
                }

                /* If startDate is of type null, return true as input might be empty */
                if (value === null) {
                  return true
                }

                /* Finally check if number is between specific range */
                return value >= 1901 && startDate <= value
              },
            )
            .nullable(),
        }),
      )
      .min(0)
      .max(2),
    universityData: yup
      .array()
      .of(
        yup.object().shape({
          major: yup.string().required('Input your major!'),
          degree: yup.string().required('Input your degree!'),
          university: yup.string().required('Input your university!'),
          addmissionDate: yup
            .string()
            .test('valid-year', 'Year must be between 1901 and current year', function (value) {
              /* Check if value is Date type that we got from backend */
              if (typeof value === 'string' && isDate(value)) {
                return true
              }

              /* Check if number is between specific range */
              return value >= 1901 && value <= new Date().getFullYear()
            })
            .required('Date is required'),
          graduationDate: yup
            .string()
            .test(
              'valid-year',
              'Year must be from 1901 and bigger than start date',
              function (value) {
                let { addmissionDate } = this.parent

                /* Check if value is Date type that we got from backend */
                if (typeof value === 'string' && isDate(value)) {
                  return true
                }

                /* If startDate is of type string (and not number), convert it to number */
                if (isDate(addmissionDate)) {
                  addmissionDate = Number(addmissionDate.slice(0, 4))
                }

                /* If startDate is of type null, return true as input might be empty */
                if (value === null) {
                  return true
                }

                /* Finally check if number is between specific range */
                return value >= 1901 && addmissionDate <= value
              },
            )
            .nullable(),
        }),
      )
      .min(0)
      .max(2),
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
