// * Modules
import { useSnackbar } from 'notistack'

// * Yup validation
import yupValidation from '../../../YupValidations/YupValidations'

// * Redux
import { useDispatch } from 'react-redux'
import { registrationAuth } from '../../../../../../store/reducers/RegistrationAuth'

/**
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
  const { setActiveState, setStep, setUserConcentration, setStageTwoCompleted } =
    registrationAuth.actions
  // * Redux

  const handleSubmit = (event) => {
    event.preventDefault()
    yupValidation.userConcentrationSchema
      .validate({ programmingLanguages, frameworks, concentration }, { abortEarly: false })
      .then(function () {
        dispatch(setUserConcentration({ programmingLanguages, frameworks, concentration }))
        dispatch(setActiveState('UserExperience'))
        dispatch(setStageTwoCompleted(true))
        dispatch(setStep(3))
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
