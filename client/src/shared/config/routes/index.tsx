// * Modules
import { RouteProps } from 'react-router-dom'

// * Layouts
import Screen404 from 'pages/404Screen/404Screen'
// * Screens
import ConfirmationScreen from 'pages/ConfirmationScreen/ConfirmationScreen'
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

// * Protected
import CreateTeamScreen from 'pages/CreateTeamScreen/CreateTeamScreen'

// ! Объявление самих роутов
export enum AppRoutes {
  CREATE_TEAM = 'createTeam',
  AUTH_VERIFICATION = 'authVerification',
  CONFIRM_EMAIL = 'confirmEmail',
  PASSWORD_RECOVER = 'passwordRecover',
  PASSWORD_RECOVER_CONFIRM = 'passwordRecoverConfirm',
  PASSWORD_RECOVER_SUCCESS = 'passwordRecoverSuccess',
  NOT_FOUND = 'not_found'
}

export enum MainRoutes {
  DEFAULT = 'default',
  PROFILE = 'profile',
  TOURNAMENTS = 'tournaments',
  SPECIFIC_TEAM = 'specific_team',
  NO_TEAM = 'no_team',
  ALL_TEAMS = 'all_teams',
}

export enum ProtectRoutes {
  FINISH_REGISTRATION = 'finish_registration'
}

export enum AuthRoutes {
  LOGIN = 'login',
  REGISTRATION = 'registration'
}

// ! Объявление путей для роутов
export const AppRoutePath: Record<AppRoutes, string> = {
  [AppRoutes.CREATE_TEAM]: '/teams/create',
  [AppRoutes.AUTH_VERIFICATION]: '/auth/verification',
  [AppRoutes.CONFIRM_EMAIL]: '/auth/confirm-email',
  [AppRoutes.PASSWORD_RECOVER]: '/auth/password-recover',
  [AppRoutes.PASSWORD_RECOVER_CONFIRM]: '/auth/password-recover-confirm',
  [AppRoutes.PASSWORD_RECOVER_SUCCESS]: '/auth/password-recover/:id/:token',
  [AppRoutes.NOT_FOUND]: '*'
}

export const MainRoutePath: Record<MainRoutes, string> = {
  [MainRoutes.DEFAULT]: '/',
  [MainRoutes.PROFILE]: '/profile/:id',
  [MainRoutes.TOURNAMENTS]: '/tournaments',
  [MainRoutes.SPECIFIC_TEAM]: '/team/:id',
  [MainRoutes.NO_TEAM]: '/team',
  [MainRoutes.ALL_TEAMS]: '/teams'
}

export const AuthRoutePath: Record<AuthRoutes, string> = {
  [AuthRoutes.LOGIN]: '/auth/login', 
  [AuthRoutes.REGISTRATION]: '/auth/registration'
}

export const ProtectedRoutePath: Record<ProtectRoutes, string> = {
  [ProtectRoutes.FINISH_REGISTRATION]: '/auth/finish-registration'
}

// ! Составление конфига с роутами и елементами в них
// * Для общего роутинга
export const AppRouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.CREATE_TEAM]: {
    path: AppRoutePath.createTeam,
    element: <CreateTeamScreen/>
  },
  [AppRoutes.AUTH_VERIFICATION]: {
    path: AppRoutePath.authVerification,
    element: <LoaderScreen/>
  },
  [AppRoutes.CONFIRM_EMAIL]: {
    path: AppRoutePath.confirmEmail,
    element: <ConfirmationScreen/>
  },
  [AppRoutes.PASSWORD_RECOVER]: {
    path: AppRoutePath.passwordRecover,
    element: <ResetPasswordScreen/>
  },
  [AppRoutes.PASSWORD_RECOVER_CONFIRM]: {
    path: AppRoutePath.passwordRecoverConfirm,
    element: <ResetPasswordConfirmationScreen/>
  },
  [AppRoutes.PASSWORD_RECOVER_SUCCESS]: {
    path: AppRoutePath.passwordRecoverSuccess,
    element: <ResetNewPasswordsScreen/>
  },
  [AppRoutes.NOT_FOUND]: {
    path: AppRoutePath.not_found,
    element: <Screen404/>
  },
}

// * Для авторизированного
export const MainRouteConfig: Record<MainRoutes, RouteProps> = {
  [MainRoutes.DEFAULT]: {
    path: MainRoutePath.default,
    element: <TeammatesScreen/>
  },
  [MainRoutes.PROFILE]: {
    path: MainRoutePath.profile,
    element: <ProfileScreen/>
  },
  [MainRoutes.TOURNAMENTS]: {
    path: MainRoutePath.tournaments,
    element: <TournamentsScreen/>
  },
  [MainRoutes.SPECIFIC_TEAM]: {
    path: MainRoutePath.specific_team,
    element: <TeamScreen/>
  },
  [MainRoutes.NO_TEAM]: {
    path: MainRoutePath.no_team,
    element: <NoTeamScreen/>
  },
  [MainRoutes.ALL_TEAMS]: {
    path: MainRoutePath.all_teams,
    element: <TeamsScreen/>
  }
}

// * Для незареганного чела
export const AuthRouteConfig: Record<AuthRoutes, RouteProps> = {
  [AuthRoutes.LOGIN]: {
    path: AuthRoutePath.login,
    element: <LoginScreen/>
  },
  [AuthRoutes.REGISTRATION]: {
    path: AuthRoutePath.registration,
    element: <RegistrationScreen/>
  }
}

export const ProtectedRouteConfig: Record<ProtectRoutes, RouteProps> = {
  [ProtectRoutes.FINISH_REGISTRATION]: {
    path: ProtectRoutes.FINISH_REGISTRATION,
    element: <FinishRegistrationScreen/>
  }
}

