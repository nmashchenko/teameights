// * Modules
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// * Components
import ProfileDetails from '../components/Profile/components/ProfileDetails/ProfileDetails'
import ProfileForm from '../components/Profile/components/ProfileForm'
// * Constants
import ROUTES from '../constants/routes'
// * Layouts
import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import NavBarItemPageLayout from '../layouts/NavBarItemPageLayout/NavBarItemPageLayout'
import Screen404 from '../screens/404Screen/404Screen'
// * Screens
import ConfirmationScreen from '../screens/ConfirmationScreen/ConfirmationScreen'
import CreateTeamScreen from '../screens/CreateTeamScreen/CreateTeamScreen'
import FinishRegistrationScreen from '../screens/FinishRegistrationScreen/FinishRegistrationScreen'
import LoaderScreen from '../screens/LoaderScreen/LoaderScreen'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import NoTeamScreen from '../screens/NoTeamScreen/NoTeamScreen'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen'
import RegistrationScreen from '../screens/RegistrationScreen/RegistrationScreen'
import ResetNewPasswordsScreen from '../screens/ResetNewPasswordsScreen/ResetNewPasswordsScreen'
import ResetPasswordConfirmationScreen from '../screens/ResetPasswordConfirmationScreen/ResetPasswordConfirmationScreen'
import ResetPasswordScreen from '../screens/ResetPasswordScreen/ResetPasswordScreen'
import TeammatesScreen from '../screens/TeammatesScreen/TeammatesScreen'
import TeamScreen from '../screens/TeamScreen/TeamScreen'
import TeamsScreen from '../screens/TeamsScreen/TeamsScreen'
import TournamentsScreen from '../screens/TournamentsScreen/Tournaments'

// * Protected
import ProtectFinishRegistration from './protected/ProtectFinishRegistration'

export const useRoutes = () => {
  return (
    <Routes>
      {/* // * for authenticated user */}
      <Route element={<NavBarItemPageLayout />}>
        <Route path={ROUTES.default} element={<TeammatesScreen />} />
        <Route
          path={ROUTES.profile}
          element={
            <ProfileScreen>
              <ProfileDetails />
            </ProfileScreen>
          }
        />
        <Route
          path={ROUTES.profileEdit}
          element={
            <ProfileScreen>
              <ProfileForm />
            </ProfileScreen>
          }
        />
        <Route path={ROUTES.tournaments} element={<TournamentsScreen />} />
        <Route path={ROUTES.specificTeam} element={<TeamScreen />} />
        <Route path={ROUTES.noTeam} element={<NoTeamScreen />} />
        <Route path={ROUTES.allTeams} element={<TeamsScreen />} />
      </Route>
      <Route element={<ProtectFinishRegistration />}>
        <Route path={ROUTES.finishRegistration} element={<FinishRegistrationScreen />} />
      </Route>
      <Route path={ROUTES.createTeam} element={<CreateTeamScreen />} />
      <Route path={ROUTES.authVerification} element={<LoaderScreen />} />

      {/* // * for not authenticated user */}
      <Route element={<AuthLayout />}>
        <Route path={ROUTES.login} element={<LoginScreen />} />
        <Route path={ROUTES.registration} element={<RegistrationScreen />} />
      </Route>
      <Route path={ROUTES.confirmEmail} element={<ConfirmationScreen />} />
      <Route path={ROUTES.passwordRecover} element={<ResetPasswordScreen />} />
      <Route path={ROUTES.passwordRecoverConfirm} element={<ResetPasswordConfirmationScreen />} />
      <Route path={ROUTES.passwordRecoverSuccess} element={<ResetNewPasswordsScreen />} />

      <Route path="*" element={<Screen404 />} />
    </Routes>
  )
}
