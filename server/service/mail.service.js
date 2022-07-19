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

  async sendResetEmail(to, link) {
    await this.transporter.sendMail({
      from: appConfig.SMTP_USER,
      to,
      subject: 'Reset password link on ' + appConfig.API_URL,
      text: '',
      html: 
          `
          <div style="margin: 0;padding: 0;height: 100vh;display: flex;justify-content: center;align-items: center;background: rgb(231, 231, 231);">
            <div class="container" style="width: 900px;height: 570px;border-radius: 16px;background: white;">
              <div class="topContent" style="width: 100%;height: 20%;border-radius: 8px 8px 0 0;background: #E0FF00;display: flex;justify-content: center;align-items: center;">
                <h3 style="font-family: 'Montserrat';font-weight: 700;font-size: 30px;">Welcome to Teameights!</h3>
              </div>
              <div class="middleContent" style="width: 100%;display: flex;flex-direction: column;justify-content: center;align-items: center;">
                  <h4 style="font-family: 'Montserrat';font-weight: 400;font-size: 25px;text-align: center;margin: 20px 0 20px 0;">Hi, <strong>Oleg! </strong>✨</h4>
                  <div class="textContainer" style="max-width: 70%;">
                    <h4 style="font-family: 'Montserrat';font-weight: 400;font-size: 25px;text-align: center;margin: 20px 0 20px 0;">To complete your registration, please comfirm that this email <strong>dlfkgfpogpfof@gmail.com</strong> belongs to you by clicking the button below:</h4>   
                  </div>
                    <a href="${link}" style="width: 35%;padding: 20px 5px;background: #000000;border-radius: 49px;margin: 32px 0 50px 0;color: white;font-family: 'Montserrat';font-weight: 700;font-size: 25px;text-align: center;">CONFIRM</a>
                  <div class="botTextContainer" style="max-width: 60%;width: 100%;">
                    <h5 style="font-family: 'Montserrat';font-weight: 400;font-size: 21px;text-align: center;margin: 20px 0 20px 0;">Need help? Please send any reports to the bugteam8s@gmail.com</h5>
                  </div>
              </div>
            </div>
          </div>
          `
    })
  }
}

module.exports = new MailService();