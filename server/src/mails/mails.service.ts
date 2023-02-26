import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailsService {
	constructor(private mailService: MailerService) {}

	async sendActivationMail(to: string, link: string) {
		await this.mailService.sendMail({
			from: process.env.SMTP_USER,
			to,
			subject: 'Account activation on ' + process.env.API_URL,
			text: '',
			html: `
            <div>
							<h1>Welcome to teameights ❤️</h1>
              <h2>To activate account, click the link below:</h2>
              <a href="${link}">${link}</a>
            </div>
          `,
		});
	}

	async sendResetEmail(to: string, link: string) {
		await this.mailService.sendMail({
			from: process.env.SMTP_USER,
			to,
			subject: 'Password reset on ' + process.env.API_URL,
			text: '',
			html: `
            <div>
							<h1>Dear user,</h1>
              <h2>To reset password to your account, click the link below:</h2>
              <a href="${link}">${link}</a>

							<h3>The link is valid for 15 minutes ❤️</h3>
            </div>
          `,
		});
	}

	async sendTeamInviteEmail(to: string) {
		await this.mailService.sendMail({
			from: process.env.SMTP_USER,
			to,
			subject: 'You received team invite!' + process.env.API_URL,
			text: '',
			html: `
					<div>
					<h1>Dear user,</h1>
					<h2>You were invited to the team.</h2>
					<h2>Get to platform ASAP!</h2>
					<h3>Teams will allow you to participate in tournaments, get mentorship and more! ❤️</h3>
					</div>
          `,
		});
	}
}
