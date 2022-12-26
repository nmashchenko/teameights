// * Modules
import { isEqual } from 'lodash'
import { useNavigate } from 'react-router-dom'

// * Redux
import { useDispatch } from 'react-redux'

// * Constants
import ROUTES from '../constants/routes'

// * API
import authApi from '../api/endpoints/auth'

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
