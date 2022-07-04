// * Modules
const nodemailer = require('nodemailer');

// * Config
const appConfig = require('../app/app.config')

class MailService {

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: appConfig.SMTP_HOST,
      port: appConfig.SMTP_PORT,
      secure: false,
      auth: {
        user: appConfig.SMTP_USER,
        pass: appConfig.SMTP_PASSWORD,
      }
    })
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: appConfig.SMTP_USER,
      to,
      subject: 'Account activation on ' + appConfig.API_URL,
      text: '',
      html: 
          `
            <div>
              <h1>Для активации перейдите по ссылке</h1>
              <a href="${link}">${link}</a>
            </div>
          `
    })
  }
}

module.exports = new MailService();