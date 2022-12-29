import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useCheckAuth } from '../../api/hooks/useCheckAuth'
import ROUTES from '../../constants/routes'

const ProtectFinishRegistration = () => {
  const { data: userData } = useCheckAuth()
  const user = userData?.data

  return user?.isRegistered || !localStorage.getItem('token') ? (
    <Navigate to={user?.isRegistered ? '/' : ROUTES.login} replace />
  ) : (
    <Outlet />
  )
}

export default ProtectFinishRegistration
