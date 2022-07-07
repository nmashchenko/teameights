// * Modules
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// * Screens
import Login from './screens/Forms/Login/Login'
import Temporary from './components/Temporary/Temporary'

// * Constants
import ROUTES from './constants/routes';

export const useRoutes = () => {
  return (
    <Routes>
      {/* // * for authenticated user */}
      <Route path={ROUTES.temporary} element={<Temporary />} />

      {/* // * for not authenticated user */}
      <Route path={ROUTES.login} element={<Login />} />

      <Route path="*" element={<Navigate to={ROUTES.login} replace />} />
    </Routes>
  )
}