import { Navigate, Outlet } from 'react-router-dom'

import { AuthRoutePath } from 'shared/config/routes'
import { useCheckAuth } from '../../../shared/api/hooks/auth/useCheckAuth'

const ProtectFinishRegistration = () => {
  const { data: user } = useCheckAuth()

  return user?.isRegistered || !localStorage.getItem('token') ? (
    <Navigate to={user?.isRegistered ? '/' : AuthRoutePath.login} replace />
  ) : (
    <Outlet />
  )
}

export default ProtectFinishRegistration
