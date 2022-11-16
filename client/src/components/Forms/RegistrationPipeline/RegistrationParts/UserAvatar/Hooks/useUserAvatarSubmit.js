// * Modules
import registerAuthApi from '../../../../../../api/endpoints/registration-auth'
import { useNavigate } from 'react-router-dom'

// * Redux
import { useDispatch } from 'react-redux'

/**
 *
 * @param {Object} userData
 * @param {Function} setOpen
 * @param {Function} setErrors
 * @returns function
 *
 */

const useAvatarSubmit = (userData) => {
  const navigate = useNavigate()
  // * Redux
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    dispatch(registerAuthApi.finishRegistration(userData))
    navigate('/platform')
  }
  return handleSubmit
}

export default useAvatarSubmit
