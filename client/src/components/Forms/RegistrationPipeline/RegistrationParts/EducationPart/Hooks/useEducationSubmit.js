// * Modules
import { useSnackbar } from 'notistack'

// * Yup validation
import yupValidation from '../../../YupValidations/YupValidations'

// * Redux
import { useDispatch } from 'react-redux'
import { registrationAuth } from '../../../../../../store/reducers/RegistrationAuth'

/**
 *
 * @param {String} university
 * @param {String} major
 * @param {String} graduationDate
 * @param {Function} setOpen
 * @param {Function} setErrors
 * @returns function
 *
 */

const useConcentrationSubmit = (university, major, graduationDate, setOpen, setErrors) => {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const { setActiveState, setStep, setUniversityInfo } = registrationAuth.actions
  // * Redux

  const handleSubmit = (event) => {
    event.preventDefault()
    yupValidation.userEducationSchema
      .validate({ university, major, graduationDate }, { abortEarly: false })
      .then(function () {
        dispatch(setUniversityInfo({ university, major, graduationDate }))
        dispatch(setActiveState('Links'))
        dispatch(setStep(5))
      })
      .catch(function (err) {
        setOpen(true)
        setErrors([])
        err.inner.forEach((e) => {
          console.log(e.path)
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
