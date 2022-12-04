// * Modules
const nodemailer = require("nodemailer");

// * Config
const appConfig = require("../app/app.config");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: appConfig.SMTP_HOST,
      port: appConfig.SMTP_PORT,
      secure: true,
      auth: {
        user: appConfig.SMTP_USER,
        pass: appConfig.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: appConfig.SMTP_USER,
      to,
      subject: "Account activation on " + appConfig.API_URL,
      text: "",
      html: `
            <div>
              <h1>To activate account, click the link below:</h1>
              <a href="${link}">${link}</a>
            </div>
          `,
    });
  }

  async sendResetEmail(to, link) {
    await this.transporter.sendMail({
      from: appConfig.SMTP_USER,
      to,
      subject: "Reset password link on " + appConfig.API_URL,
      text: "",
      html: `
          <div>
            <h1>To reset password, click the link below:</h1>
            <a href="${link}">${link}</a>
          </div>
          `,
    });
  }
}

module.exports = new MailService();
