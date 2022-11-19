// * Modules
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// * Screens
import Login from './screens/Forms/Login/Login'
import Registration from './screens/Forms/Registration/Registration'
import Confirmation from './screens/Forms/Confirmation/Confirmation'
import FinishRegistration from './screens/Forms/FinishRegistration/FinishRegistration'
import ResetPassword from './screens/Forms/ResetPassword/ResetPassword'
import ResetPasswordConfirmation from './screens/Forms/ResetPasswordConfirmation/ResetPasswordConfirmation'
import ResetNewPasswords from './screens/Forms/ResetNewPasswords/ResetNewPasswords'
import UsersList from './screens/UsersList/UsersList'
import LoaderScreen from './screens/Forms/LoaderScreen/LoaderScreen'
import Profile from './screens/Forms/Profile/Profile'

// * Constants
import ROUTES from './constants/routes'

export const useRoutes = () => {
  return (
    <Routes>
      {/* // * for authenticated user */}
      <Route path={ROUTES.temporary} element={<UsersList />} />
      <Route path={ROUTES.finishRegistration} element={<FinishRegistration />} />
      <Route path="/auth/verification" element={<LoaderScreen />} />
      <Route path="/profile" element={<Profile/>} />

      {/* // * for not authenticated user */}
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.registration} element={<Registration />} />
      <Route path={ROUTES.confirmEmail} element={<Confirmation />} />
      <Route path={ROUTES.passwordRecover} element={<ResetPassword />} />
      <Route path={ROUTES.passwordRecoverConfirm} element={<ResetPasswordConfirmation />} />
      <Route path={ROUTES.passwordRecoverSuccess} element={<ResetNewPasswords />} />

      <Route path="*" element={<Navigate to={ROUTES.login} replace />} />
    </Routes>
  )
}
