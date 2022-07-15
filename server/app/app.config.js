require('dotenv').config({ path: __dirname + '/../.env' })

const appConfig = {
  API_URL: process.env.API_URL,
  CLIENT_URL: process.env.CLIENT_URL,
  DB_URL: process.env.DB_URL,
  PORT: process.env.PORT || 5000,
  JWT_REFRESH_KEY: process.env.JWT_REFRESH_KEY,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT || 587,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD, 
  JWT_ACCESS_KEY: process.env.JWT_ACCESS_KEY, 
  JWT_SECURE_KEY: process.env.JWT_SECURE_KEY,
  COMPLETE_REGISTRATION_URL: process.env.COMPLETE_REGISTRATION_URL,
  CLIENT_RESET_URL: process.env.CLIENT_RESET_URL,
}

module.exports = appConfig
