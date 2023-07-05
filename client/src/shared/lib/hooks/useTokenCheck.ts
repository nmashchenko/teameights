// * Modules
// * Redux
import { isEqual } from 'lodash'
import { useNavigate } from 'react-router-dom'

// * Hooks
// * Constants
import { AuthRoutePath } from 'shared/config/routes'

// * API
// const { mutate: logoutUser } = useLogoutUser()

const useTokenCheck = () => {
  const navigate = useNavigate()

  return () => {
    if (isEqual(localStorage.getItem('token'), null)) {
      // logoutUser()
      navigate(AuthRoutePath.login, { replace: true })
    }
  }
}

export default useTokenCheck
