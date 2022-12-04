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
import NoTeamScreen from './screens/Forms/NoTeamScreen/NoTeamScreen'
import TeamScreen from './screens/Forms/TeamScreen/TeamScreen'
import Profile from './screens/Forms/Profile/Profile'
import CreateTeam from './screens/Forms/CreateTeam/CreateTeam'
import TeamsScreen from './screens/Forms/TeamsScreen/TeamsScreen'
import TournamentCodingScreen from './screens/Forms/TournamentCodingScreen/TournamentCodingScreen'
import TournamentInfo from './screens/Forms/TournamentInfo/TournamentInfo'
import Tournaments from './screens/Forms/Tournaments/Tournaments'
import LeaderboardScreen from './screens/Forms/LeaderboardScreen/LeaderboardScreen'

// * Constants
import ROUTES from './constants/routes'

export const useRoutes = () => {
  return (
    <Routes>
      {/* // * for authenticated user */}
      <Route path={ROUTES.temporary} element={<UsersList />} />
      <Route path={ROUTES.finishRegistration} element={<FinishRegistration />} />
      <Route path="/auth/verification" element={<LoaderScreen />} />
      <Route path="/team" element={<NoTeamScreen />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/myteam" element={<TeamScreen />} />
      <Route path="/create-team" element={<CreateTeam />} />
      <Route path="/tournament" element={<Tournaments />} />
      <Route path="/teams" element={<TeamsScreen />} />
      <Route path="/tournament-info" element={<TournamentInfo />} />
      <Route path="/coding" element={<TournamentCodingScreen />} />
      <Route path="/leaderboard" element={<LeaderboardScreen />} />

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
