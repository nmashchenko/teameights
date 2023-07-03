const ROUTES = Object.freeze({
  default: '/',
  login: '/auth/login',
  registration: '/auth/registration',
  confirmEmail: '/auth/confirm-email',
  authVerification: '/auth/verification',
  finishRegistration: '/auth/finish-registration',
  passwordRecover: '/auth/password-recover',
  passwordRecoverConfirm: '/auth/password-recover-confirm',
  passwordRecoverSuccess: '/auth/password-recover/:id/:token',
  profile: '/profile/:id',
  tournaments: '/tournaments',
  specificTeam: '/team/:id',
  noTeam: '/team',
  allTeams: '/teams',
  createTeam: '/teams/create',
})

export default ROUTES
