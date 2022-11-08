// * Modules
import { useSnackbar } from 'notistack'

// * Yup validation
import yupValidation from '../../../YupValidations/YupValidations'

// * Redux
import { useDispatch } from 'react-redux'
import { registrationAuth } from '../../../../../../store/reducers/RegistrationAuth'

/**
 *
 * @param {String} experience
 * @param {Boolean} leader
 * @param {Function} setOpen
 * @param {Function} setErrors
 * @returns function
 *
 */

const useConcentrationSubmit = (experience, leader, setOpen, setErrors) => {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const { setActiveState, setStep, setUserExperience } = registrationAuth.actions
  // * Redux

  const handleSubmit = (event) => {
    event.preventDefault()
    yupValidation.userExperienceSchema
      .validate({ experience, leader }, { abortEarly: false })
      .then(function () {
        dispatch(setUserExperience({ experience, leader }))
        // dispatch(setActiveState('UserExperience'))
        dispatch(setStep(4))
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
