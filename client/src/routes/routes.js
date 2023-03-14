// * Modules
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ProfileDetails from '../components/Profile/components/ProfileDetails/ProfileDetails'
import ProfileForm from '../components/Profile/components/ProfileForm'
// * Constants
import ROUTES from '../constants/routes'
import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import NavBarItemPageLayout from '../layouts/NavBarItemPageLayout/NavBarItemPageLayout'
import Confirmation from '../screens/Forms/Confirmation/Confirmation'
import CreateTeam from '../screens/Forms/CreateTeam/CreateTeam'
import FinishRegistration from '../screens/Forms/FinishRegistration/FinishRegistration'
import Form404 from '../screens/Forms/Form404/Form404'
import LeaderboardScreen from '../screens/Forms/LeaderboardScreen/LeaderboardScreen'
import LoaderScreen from '../screens/Forms/LoaderScreen/LoaderScreen'
// * Screens
import Login from '../screens/Forms/Login/Login'
import NoTeamScreen from '../screens/Forms/NoTeamScreen/NoTeamScreen'
import ProfilePage from '../screens/Forms/Profile/Profile'
import Registration from '../screens/Forms/Registration/Registration'
import ResetNewPasswords from '../screens/Forms/ResetNewPasswords/ResetNewPasswords'
import ResetPassword from '../screens/Forms/ResetPassword/ResetPassword'
import ResetPasswordConfirmation from '../screens/Forms/ResetPasswordConfirmation/ResetPasswordConfirmation'
import TeamScreen from '../screens/Forms/TeamScreen/TeamScreen'
import TeamsScreen from '../screens/Forms/TeamsScreen/TeamsScreen'
import TournamentCodingScreen from '../screens/Forms/TournamentCodingScreen/TournamentCodingScreen'
import TournamentInfo from '../screens/Forms/TournamentInfo/TournamentInfo'
import Tournaments from '../screens/Forms/Tournaments/Tournaments'
import UsersList from '../screens/UsersList/UsersList'

import ProtectFinishRegistration from './protected/ProtectFinishRegistration'

export const useRoutes = () => {
  return (
    <Routes>
      {/* // * for authenticated user */}
      <Route path="/" element={<UsersList />} />
      <Route element={<ProtectFinishRegistration />}>
        <Route path={ROUTES.finishRegistration} element={<FinishRegistration />} />
      </Route>
      <Route path="/auth/verification" element={<LoaderScreen />} />
      <Route element={<NavBarItemPageLayout />}>
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
        {/* <Route path="/teams" element={<TeamScreen />} /> */}
        <Route path="/teams" element={<TeamsScreen />} />
      </Route>
      <Route path="/create-team" element={<CreateTeam />} />
      {/* <Route path="/teams" element={<TeamsScreen />} /> */}
      <Route path="/tournament-info" element={<TournamentInfo />} />
      <Route path="/coding" element={<TournamentCodingScreen />} />
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
