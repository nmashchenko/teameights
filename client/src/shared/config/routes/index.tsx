// * Modules
import { Route, Routes } from 'react-router-dom'

// * Layouts
import AuthLayout from 'layouts/AuthLayout/AuthLayout'
import NavBarItemPageLayout from 'layouts/NavBarItemPageLayout/NavBarItemPageLayout'
import Screen404 from 'pages/404Screen/404Screen'
// * Screens
import ConfirmationScreen from 'pages/ConfirmationScreen/ConfirmationScreen'
import CreateTeamScreen from 'pages/CreateTeamScreen/CreateTeamScreen'
import FinishRegistrationScreen from 'pages/FinishRegistrationScreen/FinishRegistrationScreen'
import LoaderScreen from 'pages/LoaderScreen/LoaderScreen'
import LoginScreen from 'pages/LoginScreen/LoginScreen'
import NoTeamScreen from 'pages/NoTeamScreen/NoTeamScreen'
import ProfileScreen from 'pages/ProfileScreen/ProfileScreen'
import RegistrationScreen from 'pages/RegistrationScreen/RegistrationScreen'
import ResetNewPasswordsScreen from 'pages/ResetNewPasswordsScreen/ResetNewPasswordsScreen'
import ResetPasswordConfirmationScreen from 'pages/ResetPasswordConfirmationScreen/ResetPasswordConfirmationScreen'
import ResetPasswordScreen from 'pages/ResetPasswordScreen/ResetPasswordScreen'
import TeammatesScreen from 'pages/TeammatesScreen/TeammatesScreen'
import TeamScreen from 'pages/TeamScreen/TeamScreen'
import TeamsScreen from 'pages/TeamsScreen/TeamsScreen'
import TournamentsScreen from 'pages/TournamentsScreen/Tournaments'
// * Constants
import ROUTES from 'shared/constants/routes'

// * Protected
import ProtectFinishRegistration from './protected/ProtectFinishRegistration'

export const Routing = () => {
  return (
    <Routes>
      {/* // * for authenticated user */}
      <Route element={<NavBarItemPageLayout />}>
        <Route path={ROUTES.default} element={<TeammatesScreen />} />
        <Route path={ROUTES.profile} element={<ProfileScreen />} />
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
