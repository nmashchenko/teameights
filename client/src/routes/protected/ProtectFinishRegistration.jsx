import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useCheckAuth } from '../../shared/api/hooks/auth/useCheckAuth'
import ROUTES from '../../shared/constants/routes'

const ProtectFinishRegistration = () => {
  const { data: user } = useCheckAuth()

  return user?.isRegistered || !localStorage.getItem('token') ? (
    <Navigate to={user?.isRegistered ? '/' : ROUTES.login} replace />
  ) : (
    <Outlet />
  )
}

export default ProtectFinishRegistration
