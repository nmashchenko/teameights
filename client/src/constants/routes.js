const ROUTES = Object.freeze({
  login: '/auth/login',
  registration: '/auth/registration',
  confirmEmail: '/auth/confirm-email',
  finishRegistration: '/auth/finish-registration',
  passwordRecover: '/auth/password-recover',
  passwordRecoverConfirm: '/auth/password-recover-confirm',
  passwordRecoverSuccess: '/auth/password-recover/:id/:token',
  temporary: '/platform',
  Profile: '/profile'
})

export default ROUTES
