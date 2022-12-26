// * Modules
// * Yup validation
// * Redux
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'

import yupValidation from '../../../../../../../schemas'
import { registrationAuth } from '../../../../../../../store/reducers/RegistrationAuth'

/**
 *
 * @param {String} github
 * @param {String} telegram
 * @param {String} linkedIn
 * @param {Function} setOpen
 * @param {Function} setErrors
 * @returns function
 *
 */

const useLinksSubmit = (github, telegram, linkedIn, setOpen, setErrors) => {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const { setActiveState, setStep, setUserLinks, setStageFiveCompleted } = registrationAuth.actions
  // * Redux

  const handleSubmit = (event) => {
    event.preventDefault()
    yupValidation.urlsSchema
      .validate({ github, telegram, linkedIn }, { abortEarly: false })
      .then(function () {
        dispatch(setUserLinks({ github, telegram, linkedIn }))
        dispatch(setActiveState('UserAvatar'))
        dispatch(setStageFiveCompleted(true))
        dispatch(setStep(6))
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

export default useLinksSubmit
