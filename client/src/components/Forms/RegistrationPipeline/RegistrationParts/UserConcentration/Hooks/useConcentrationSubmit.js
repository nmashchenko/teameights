// * Modules
import { useSnackbar } from 'notistack'

// * Yup validation
import yupValidation from '../../../YupValidations/YupValidations'

// * Redux
import { useDispatch } from 'react-redux'
import { registrationAuth } from '../../../../../../store/reducers/RegistrationAuth'

/**
 *
 * This hook is used to validate and submit data to redux global store
 * Due to the approach with setting username for normal registration and full name for quick login via Google
 * We have to check it manually
 *
 * TODO: Find better solution before production
 *
 * @param {Array} programmingLanguages
 * @param {Array} frameworks
 * @param {String} concentration
 * @param {Function} setOpen
 * @param {Function} setErrors
 * @returns function
 *
 */

const useConcentrationSubmit = (
  programmingLanguages,
  frameworks,
  concentration,
  setOpen,
  setErrors,
) => {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const { setActiveState, setStep, setUserConcentration } = registrationAuth.actions
  // * Redux

  const handleSubmit = (event) => {
    event.preventDefault()
    yupValidation.userConcentrationSchema
      .validate({ programmingLanguages, frameworks, concentration }, { abortEarly: false })
      .then(function () {
        dispatch(setUserConcentration({ programmingLanguages, frameworks, concentration }))
        // dispatch(setActiveState('UserExperience'))
        dispatch(setStep(2))
      })
      .catch(function (err) {
        setOpen(true)
        setErrors([])
        err.inner.forEach((e) => {
          setErrors((prevErrors) => [...prevErrors, e.path])
          enqueueSnackbar(e.message, {
            preventDuplicate: true,
          })
        })
      })
  }
  return handleSubmit
}

export default useConcentrationSubmit
