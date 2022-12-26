// * Modules
// * Redux
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { isEqual } from 'lodash'

// * API
import authApi from '../api/endpoints/auth'
// * Constants
import ROUTES from '../constants/routes'

const useTokenCheck = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return () => {
    if (isEqual(localStorage.getItem('token'), null)) {
      dispatch(authApi.logoutUser())
      navigate(ROUTES.login, { replace: true })
    }
  }
}

export default useTokenCheck
