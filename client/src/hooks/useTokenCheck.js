// * Modules
// * Redux
import { useNavigate } from 'react-router-dom'
import { isEqual } from 'lodash'

// * Hooks
import { useLogoutUser } from '../api/hooks/useLogoutUser'
// * Constants
import ROUTES from '../constants/routes'

// * API
const { mutate: logoutUser } = useLogoutUser()

const useTokenCheck = () => {
  const navigate = useNavigate()

  return () => {
    if (isEqual(localStorage.getItem('token'), null)) {
      logoutUser()
      navigate(ROUTES.login, { replace: true })
    }
  }
}

export default useTokenCheck
