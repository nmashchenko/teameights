import { Team } from '@/teams/teams.schema';
import { User } from '@/users/users.schema';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { activationEmail } from './templates/activation';
import { resetEmail } from './templates/reset';
import { teamInviteEmail } from './templates/team-invite';

@Injectable()
export class MailsService {
	constructor(private mailService: MailerService) {}

	async sendActivationMail(user: User, link: string) {
		try {
			const status = await this.mailService.sendMail({
				from: process.env.SMTP_USER,
				to: user.email,
				subject: 'Account activation on ' + process.env.API_URL,
				text: '',
				html: activationEmail(user, link),
			});

			console.log(status);
		} catch (err) {
			console.log(err.message);
		}
	}

	async sendResetEmail(user: User, link: string, ip: ParameterDecorator) {
		await this.mailService.sendMail({
			from: process.env.SMTP_USER,
			to: user.email,
			subject: 'Password reset on ' + process.env.API_URL,
			text: '',
			html: resetEmail(user, link, ip),
		});
	}

	async sendTeamInviteEmail(
		link: string,
		receiver: User,
		inviter: User,
		team: Team,
	) {
		try {
			const status = await this.mailService.sendMail({
				from: process.env.SMTP_USER,
				to: receiver.email,
				subject: 'You received team invite on ' + process.env.API_URL,
				text: '',
				html: teamInviteEmail(link, receiver, inviter, team),
			});

			console.log(status);
		} catch (err) {
			console.log(err.message);
		}
	}
}
