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
// * Screens
import Confirmation from '../screens/Confirmation/Confirmation'
import CreateTeam from '../screens/CreateTeam/CreateTeam'
import FinishRegistration from '../screens/FinishRegistration/FinishRegistration'
import Form404 from '../screens/Form404/Form404'
import LeaderboardScreen from '../screens/LeaderboardScreen/LeaderboardScreen'
import LoaderScreen from '../screens/LoaderScreen/LoaderScreen'
import Login from '../screens/Login/Login'
import NoTeamScreen from '../screens/NoTeamScreen/NoTeamScreen'
import ProfilePage from '../screens/Profile/Profile'
import Registration from '../screens/Registration/Registration'
import ResetNewPasswords from '../screens/ResetNewPasswords/ResetNewPasswords'
import ResetPassword from '../screens/ResetPassword/ResetPassword'
import ResetPasswordConfirmation from '../screens/ResetPasswordConfirmation/ResetPasswordConfirmation'
import TeammatesScreen from '../screens/TeammatesScreen/TeammatesScreen'
import TeamScreen from '../screens/TeamScreen/TeamScreen'
import TeamsScreen from '../screens/TeamsScreen/TeamsScreen'
import TournamentInfo from '../screens/TournamentInfo/TournamentInfo'
import Tournaments from '../screens/Tournaments/Tournaments'

// * Protected
import ProtectFinishRegistration from './protected/ProtectFinishRegistration'

export const useRoutes = () => {
  return (
    <Routes>
      {/* // * for authenticated user */}
      <Route element={<NavBarItemPageLayout />}>
        <Route path="/" element={<TeammatesScreen />} />
        <Route
          path="/profile"
          element={
            <ProfilePage>
              <ProfileDetails />
            </ProfilePage>
          }
        />
        <Route
          path="/profile-edit"
          element={
            <ProfilePage>
              <ProfileForm />
            </ProfilePage>
          }
        />
        <Route path="/tournament" element={<Tournaments />} />
        <Route path="/myteam" element={<TeamScreen />} />
        <Route path="/team" element={<NoTeamScreen />} />
        <Route path="/teams" element={<TeamsScreen />} />
      </Route>
      <Route element={<ProtectFinishRegistration />}>
        <Route path={ROUTES.finishRegistration} element={<FinishRegistration />} />
      </Route>
      <Route path="/auth/verification" element={<LoaderScreen />} />
      <Route path="/create-team" element={<CreateTeam />} />
      <Route path="/tournament-info" element={<TournamentInfo />} />
      <Route path="/leaderboard" element={<LeaderboardScreen />} />

      {/* // * for not authenticated user */}
      <Route element={<AuthLayout />}>
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.registration} element={<Registration />} />
      </Route>
      <Route path={ROUTES.confirmEmail} element={<Confirmation />} />
      <Route path={ROUTES.passwordRecover} element={<ResetPassword />} />
      <Route path={ROUTES.passwordRecoverConfirm} element={<ResetPasswordConfirmation />} />
      <Route path={ROUTES.passwordRecoverSuccess} element={<ResetNewPasswords />} />

      <Route path="*" element={<Form404 />} />
    </Routes>
  )
}
