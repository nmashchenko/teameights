// * Modules
// * Redux
import { useDispatch } from 'react-redux'
import { isEqual } from 'lodash'

import registerAuthApi from '../../../../../../api/endpoints/registration-auth'
import { registrationAuth } from '../../../../../../store/reducers/RegistrationAuth'
// import { useSnackbar } from 'notistack'
// * Yup validation
import yupValidation from '../../../YupValidations/YupValidations'

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
  // const { enqueueSnackbar } = useSnackbar()
  const { setActiveState, setStep, setUserPersonalInfo, setStageOneCompleted } =
    registrationAuth.actions
  // * Redux

  const handleSubmit = (event) => {
    event.preventDefault()
    yupValidation.userPersonalInfoSchema
      .validate(
        {
          name,
          username,
          age,
          country,
          description,
        },
        { abortEarly: false },
      )
      .then(async function () {
        const user = await registerAuthApi.validateUsername(username, userData.email)

        if (!isEqual(user, null)) {
          setOpen(true)
          setErrors(['username', 'Username is already taken!'])
        } else {
          dispatch(setUserPersonalInfo({ username, name, age, country, description }))
          dispatch(setActiveState('UserConcentration'))
          dispatch(setStep(2))
          dispatch(setStageOneCompleted(true))
        }
      })
      .catch(function (err) {
        setOpen(true)
        setErrors([])
        err.inner.forEach((e) => {
          setErrors((prevErrors) => [...prevErrors, e.path])
          // enqueueSnackbar(e.message, {
          //   preventDuplicate: true,
          // })
        })
      })
  }

  return handleSubmit
}

export default useInfoSubmit
