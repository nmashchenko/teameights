import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

import { Team } from '@/teams/teams.schema';
import { User } from '@/users/users.schema';

import { activationEmail } from './templates/activation';
import { resetEmail } from './templates/reset';
import { teamInviteEmail } from './templates/team-invite';

@Injectable()
export class MailsService {
	constructor(private mailService: MailerService) {}

	async sendActivationMail(user: User, link: string) {
		const status = await this.mailService.sendMail({
			from: process.env.SMTP_USER,
			to: user.email,
			subject: 'Account activation on ' + process.env.API_URL,
			text: '',
			html: activationEmail(user, link),
		});

		console.log(status);
	}

	async sendResetEmail(user: User, link: string, ip: ParameterDecorator) {
		const status = await this.mailService.sendMail({
			from: process.env.SMTP_USER,
			to: user.email,
			subject: 'Password reset on ' + process.env.API_URL,
			text: '',
			html: resetEmail(user, link, ip),
		});

		console.log(status);
	}

	async sendTeamInviteEmail(
		link: string,
		receiver: User,
		inviter: User,
		team: Team,
	) {
		console.log(process.env.API_URL + '/' + inviter.image);
		const status = await this.mailService.sendMail({
			from: process.env.SMTP_USER,
			to: receiver.email,
			subject: 'You received team invite on ' + process.env.API_URL,
			text: '',
			html: teamInviteEmail(link, receiver, inviter, team),
		});

		console.log(status);
	}
}
