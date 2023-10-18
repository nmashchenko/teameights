/**
 * Represents the necessary data to reset a user's password.
 */
export interface IResetPassword {
  /** The new password the user wishes to set. */
  password: string;
  /** A unique validation token to authenticate the reset password request. */
  hash: string;
}

/**
 * Represents the data required for a user's registration or login.
 */
export interface IRegisterLogin {
  /** User's email address. */
  email: string;
  /** User's password. */
  password: string;
}

/**
 * Represents the data for logging in or registering via GitHub.
 */
export interface IGithubLogin {
  /** The unique code returned by GitHub after user authorization. */
  code: string;
}

/**
 * Represents the data for logging in or registering via Google.
 */
export interface IGoogleLogin {
  /** A token that serves as proof of the user's identity, provided by Google. */
  idToken: string;
}

/**
 * Data structure for a forgotten password request.
 */
export interface IForgotPassword {
  /** The email address of the user requesting a password reset. */
  email: string;
}

/**
 * Represents the data to confirm a user's email address.
 */
export interface IConfirmEmail {
  /** A unique validation token for confirming the email address. */
  hash: string;
}
