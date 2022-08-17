// * Modules
import { isEqual } from 'lodash'

// * Yup validation
import yupValidation from '../../../YupValidations/YupValidations'

// * Redux
import { useDispatch } from 'react-redux'
import { registrationAuth } from '../../../../../../store/reducers/RegistrationAuth'
import registerAuthApi from '../../../../../../api/endpoints/registration-auth'

/**
 *
 * This hook is used to validate and submit data to redux global store
 * Due to the approach with setting username for normal registration and full name for quick login via Google
 * We have to check it manually
 *
 * TODO: Find better solution before production
 *
 * @param {Object} userData
 * @param {String} username
 * @param {String} name
 * @param {String} age
 * @param {String} country
 * @param {String} description
 * @param {Function} setOpen
 * @param {Function} setErrors
 * @returns function
 *
 */

const useInfoSubmit = (userData, username, name, age, country, description, setOpen, setErrors) => {
  const dispatch = useDispatch()
  const { setActiveState, setStep, setUserPersonalInfoWithName, setUserPersonalInfoWithUsername } =
    registrationAuth.actions
  // * Redux

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isEqual(userData.userUsername, '')) {
      yupValidation.userPersonalInfoUsername
        .validate(
          {
            username,
            age,
            country,
            description,
          },
          { abortEarly: false },
        )
        .then(async function () {
          const user = await registerAuthApi.validateUsername(username)
          if (!isEqual(user, null)) {
            setOpen(true)
            setErrors(['username', 'Username is already taken!'])
          } else {
            dispatch(setUserPersonalInfoWithUsername({ username, age, country, description }))
            dispatch(setActiveState('UserConcentration'))
            dispatch(setStep(1))
          }
        })
        .catch(function (err) {
          setOpen(true)
          setErrors([])
          err.inner.forEach((e) => {
            setErrors((prevErrors) => [...prevErrors, e.path])
          })
        })
    } else {
      yupValidation.userPersonalInfoName
        .validate({ name, age, country, description }, { abortEarly: false })
        .then(function () {
          dispatch(setUserPersonalInfoWithName({ name, age, country, description }))
          dispatch(setActiveState('UserConcentration'))
          dispatch(setStep(1))
        })
        .catch(function (err) {
          setOpen(true)
          setErrors([])
          err.inner.forEach((e) => {
            setErrors((prevErrors) => [...prevErrors, e.path])
          })
        })
    }
  }
  return handleSubmit
}

export default useInfoSubmit
