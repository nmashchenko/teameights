// * Modules
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// * Screens
import Login from './screens/Forms/Login/Login'
import Registration from './screens/Forms/Registration/Registration';
import Temporary from './components/Temporary/Temporary'
import Confirmation from './screens/Forms/Confirmation/Confirmation';
import FinishRegistration from './screens/Forms/FinishRegistration/FinishRegistration';
import RecoverPassword from './components/Forms/RecoverPassword/RecoverPassword';
import RecoverConfirmation from './components/Forms/RecoverConfirmation/RecoverConfirmation'
import NewPassword from './components/Forms/NewPasswords/NewPasswords';

// * Constants
import ROUTES from './constants/routes';

export const useRoutes = () => {
  return (
    <Routes>
      {/* // * for authenticated user */}
      <Route path={ROUTES.temporary} element={<Temporary />} />

      {/* // * for not authenticated user */}
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.registration} element={<Registration />} />
      <Route path={ROUTES.confirmEmail} element={<Confirmation />}/>
      <Route path={ROUTES.finishRegistration} element={<FinishRegistration />}/>
      <Route path={ROUTES.passwordRecover} element={<RecoverPassword />} />
      <Route path={ROUTES.passwordRecoverConfirm} element={<RecoverConfirmation />} />
      <Route path={ROUTES.passwordRecoverSuccess} element={<NewPassword />} />

      <Route path="*" element={<Navigate to={ROUTES.login} replace />} />
    </Routes>
  )
}