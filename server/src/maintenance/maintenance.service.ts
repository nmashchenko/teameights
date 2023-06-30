import { faker } from '@faker-js/faker';
import { Inject, Injectable } from '@nestjs/common';
import { getConnectionToken } from '@nestjs/mongoose';
import mongoose, { Connection } from 'mongoose';
import { performance } from 'perf_hooks';
import { uuid } from 'uuidv4';

import { FileService } from '@/files/file.service';
import { NotificationsService } from '@/notifications/notifications.service';
import { RolesService } from '@/roles/roles.service';
import { CreateTeamDto } from '@/teams/dto/create-team.dto';
import { TeamsService } from '@/teams/teams.service';
import { RegisterUserDto } from '@/users/dto/register-user.dto';
import { UpdateUserDto } from '@/users/dto/update-user.dto';
import { UsersService } from '@/users/users.service';

import { StatusResponseDto } from './dto/status-response.dto';
import {
	avatar_blue,
	avatar_green,
	avatar_orange,
	avatar_pink,
	avatar_purple,
	avatar_yellow,
	team_avatar_blue,
	team_avatar_green,
	team_avatar_orange,
	team_avatar_pink,
	team_avatar_purple,
	team_avatar_yellow,
} from './maintenance.data';

@Injectable()
export class MaintenanceService {
	constructor(
		private usersService: UsersService,
		@Inject(getConnectionToken()) private readonly connection: Connection,
		private rolesService: RolesService,
		private teamsService: TeamsService,
		private notificationsService: NotificationsService,
		private filesService: FileService,
	) {}

	programmingLanguages: string[] = [
		'JS',
		'C++',
		'C',
		'Python',
		'Swift',
		'Ruby',
		'Scala',
		'PHP',
		'Go',
		'C#',
		'Java',
		'HTML/CSS',
		'Dart',
		'Perl',
		'SQL',
	];

	frameworks: string[] = [
		'NodeJS',
		'Ruby',
		'Angular',
		'Android',
		'IOS',
		'Hadoop',
		'Ember',
		'Django',
		'Redux',
		'React',
		'Spring',
		'Spark',
		'Backbone',
		'Figma',
		'Photoshop',
	];

	images: string[] = [
		avatar_blue,
		avatar_green,
		avatar_pink,
		avatar_purple,
		avatar_orange,
		avatar_yellow,
	];

	team_images: string[] = [
		team_avatar_blue,
		team_avatar_green,
		team_avatar_pink,
		team_avatar_purple,
		team_avatar_orange,
		team_avatar_yellow,
	];

	private getRandomEntries(arr: string[]): string[] {
		const numEntries = Math.floor(Math.random() * 7) + 1;
		const shuffled = arr.sort(() => 0.5 - Math.random());
		return shuffled.slice(0, numEntries);
	}

	private generateDescription(length: number): string {
		let description = faker.lorem.sentence();

		while (description.length < length) {
			description += ' ' + faker.lorem.sentence();
		}
		return description.slice(0, length);
	}

	private generateTeam(leader: mongoose.Types.ObjectId): any {
		const dto = new CreateTeamDto();

		type RemoveReadonly = {
			-readonly [key in keyof CreateTeamDto]: CreateTeamDto[key];
		};

		const team: RemoveReadonly = dto;

		team.name = faker.internet.userName();
		team.description = this.generateDescription(230);
		team.leader = leader;
		team.country = faker.address.country();
		team.type = 'open';
		team.tag = uuid().substring(0, 5).toUpperCase();

		return team;
	}

	private generateInitialUser(): RegisterUserDto {
		const dto = new RegisterUserDto();
		type RemoveReadonly = {
			-readonly [key in keyof RegisterUserDto]: RegisterUserDto[key];
		};

		const initialUser: RemoveReadonly = dto;

		initialUser.email = faker.internet.email();
		initialUser.password = faker.internet.password();
		initialUser.repeatPassword = initialUser.password;

		return dto;
	}

	private updateGeneratedUser(email: string): UpdateUserDto {
		const dto = new UpdateUserDto();
		type RemoveReadonly = {
			-readonly [key in keyof UpdateUserDto]: UpdateUserDto[key];
		};

		const initialUser: RemoveReadonly = dto;
		initialUser.email = email;
		initialUser.username = faker.internet.userName();
		initialUser.fullName = faker.name.fullName();
		(initialUser.dateOfBirth = faker.date.birthdate({
			min: 18,
			max: 65,
			mode: 'age',
		})),
			(initialUser.description = this.generateDescription(230));
		initialUser.concentration = faker.name.jobTitle();
		initialUser.country = faker.address.country();
		initialUser.experience = `${faker.datatype.number({
			min: 0,
			max: 10,
		})}-${faker.datatype.number({ min: 1, max: 10 })} years`;
		initialUser.isLeader = faker.datatype.boolean();
		initialUser.links = {
			github: 'https://github.com',
			linkedIn: 'https://www.linkedin.com/',
			instagram: 'https://www.instagram.com/',
			telegram: 'https://www.telegram.com/',
		};
		initialUser.programmingLanguages = this.getRandomEntries(
			this.programmingLanguages,
		);
		initialUser.frameworks = this.getRandomEntries(this.frameworks);

		initialUser.universityData = [
			{
				university: faker.random.words(2),
				major: faker.random.words(2),
				degree: 'Bachelor',
				addmissionDate: new Date(),
				graduationDate: new Date(),
			},
		];

		initialUser.jobData = [
			{
				title: faker.random.words(2),
				company: faker.company.name(),
				startDate: new Date(),
				endDate: new Date(),
			},
		];

		return initialUser;
	}

	async generateUsers(amount: number): Promise<StatusResponseDto> {
		const startTime = performance.now();

		const roleCheck = await this.rolesService.getRoleByValue('USER');

		if (!roleCheck) {
			await this.rolesService.createRole({
				value: 'USER',
				description: 'Default use role',
			});
		}

		for (let i = 0; i < amount; i++) {
			const newUser = this.generateInitialUser();
			const user = await this.usersService.createUser(newUser);
			const update = this.updateGeneratedUser(user.email);

			const randomIndex = Math.floor(Math.random() * this.images.length);
			await this.usersService.updateAvatar({
				email: user.email,
				image: this.images[randomIndex],
			});
			await this.usersService.updateUser(update);
		}

		const endTime = performance.now();

		return {
			status: `generated ${amount} users and took ${
				endTime - startTime
			} milliseconds`,
		};
	}

	async generateTeams(amount: number): Promise<StatusResponseDto> {
		const startTime = performance.now();

		for (let i = 0; i < amount; i++) {
			const newUser = this.generateInitialUser();
			const user = await this.usersService.createUser(newUser);
			const update = this.updateGeneratedUser(user.email);

			const randomUserIndex = Math.floor(
				Math.random() * this.images.length,
			);
			await this.usersService.updateAvatar({
				email: user.email,
				image: this.images[randomUserIndex],
			});
			await this.usersService.updateUser(update);

			const team = this.generateTeam(user._id);

			const createdTeam = await this.teamsService.createTeam(team);

			const randomTeamIndex = Math.floor(
				Math.random() * this.images.length,
			);
			await this.teamsService.updateTeamAvatar({
				teamID: createdTeam._id,
				image: this.team_images[randomTeamIndex],
			});
		}

		const endTime = performance.now();
		return {
			status: `generated ${amount} teams and took ${
				endTime - startTime
			} milliseconds`,
		};
	}

	async generateUsersInTeam(
		amount: number,
		teamid: mongoose.Types.ObjectId,
	): Promise<StatusResponseDto> {
		const startTime = performance.now();

		for (let i = 0; i < amount; i++) {
			const newUser = this.generateInitialUser();
			const user = await this.usersService.createUser(newUser);
			const update = this.updateGeneratedUser(user.email);

			const randomIndex = Math.floor(Math.random() * this.images.length);
			await this.usersService.updateAvatar({
				email: user.email,
				image: this.images[randomIndex],
			});
			await this.usersService.updateUser(update);

			const joinDto = {
				user_id: user._id,
				teamid,
			};
			await this.teamsService.joinTeam(joinDto);
		}

		const endTime = performance.now();

		return {
			status: `added ${amount} users successfuly and took ${
				endTime - startTime
			} milliseconds`,
		};
	}

	async generateNotifications(
		userid: mongoose.Types.ObjectId,
		amount: number,
	): Promise<StatusResponseDto> {
		const startTime = performance.now();

		const userCheck = await this.usersService.getUserById(userid);

		if (!userCheck) {
			return { status: 'User was not found' };
		}

		for (let i = 0; i < amount; i++) {
			const notification =
				await this.notificationsService.createSystemNotification({
					userid: userCheck._id,
					system_message: `Testing notification #${i}`,
				});

			await this.usersService.addNotification(userid, notification._id);
		}

		const endTime = performance.now();

		return {
			status: `generated ${amount} notifications for user ${
				userCheck._id
			} and took ${endTime - startTime} milliseconds`,
		};
	}

	async dropDatabase(): Promise<StatusResponseDto> {
		const startTime = performance.now();

		await this.connection.dropDatabase();

		await this.filesService.deleteFolderFromS3('image', 'teameights');

		await this.rolesService.createRole({
			value: 'USER',
			description: 'Default user role',
		});

		const endTime = performance.now();

		return {
			status: `dropped successfuly and took ${
				endTime - startTime
			} milliseconds`,
		};
	}
}
