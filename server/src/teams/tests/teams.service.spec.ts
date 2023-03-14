import { HttpException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TeamsService } from '../teams.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, TeamsSchema } from '../teams.schema';
import { UsersModule } from '@/users/users.module';
import { FileModule } from '@/files/file.module';
import { NotificationsModule } from '@/notifications/notifications.module';
import {
	closeMongoConnection,
	healthCheck,
	rootMongooseTestModule,
} from '@/test-utils/MongooseTestModule';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { CreateTeamDtoStub } from './stubs/create-team.dto.stub';
import { UsersService } from '@/users/users.service';
import { RegisterUserDtoStub } from '@/users/tests/stubs/register-user.dto.stub';
import { RolesService } from '@/roles/roles.service';
import { uuid } from 'uuidv4';
import { User } from '@/users/users.schema';
import { UpdateTeamAvatarDtoStub } from './stubs/update-team-avatar.dto.stub';
import { InviteToTeamDtoStub } from './stubs/invite-to-team.dto.stub';
import { MailsModule } from '@/mails/mails.module';
import { NotificationsService } from '@/notifications/notifications.service';

describe('TeamService', () => {
	let teamsService: TeamsService;
	let userService: UsersService;
	let rolesService: RolesService;
	let notificationService: NotificationsService;

	beforeAll((done) => {
		done();
	});

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				/* Loading the environment variables from the .env file. */
				ConfigModule.forRoot({
					envFilePath: `.dev.env`,
				}),
				rootMongooseTestModule(),
				MongooseModule.forFeature([
					{ name: Team.name, schema: TeamsSchema },
				]),
				/* Serving the static files. */
				ServeStaticModule.forRoot({
					rootPath: path.resolve(__dirname, 'static'),
				}),
				/* Configuring the mailer module. */
				MailerModule.forRoot({
					transport: {
						host: process.env.SMTP_HOST,
						port: process.env.SMTP_PORT,
						requireTLS: true,
						secure: false,
						auth: {
							user: process.env.SMTP_USER,
							pass: process.env.SMTP_PASS,
						},
					},
				}),
				UsersModule,
				FileModule,
				NotificationsModule,
				MailsModule,
			],
			providers: [TeamsService],
		}).compile();

		teamsService = module.get<TeamsService>(TeamsService);
		userService = module.get<UsersService>(UsersService);
		rolesService = module.get<RolesService>(RolesService);
		notificationService =
			module.get<NotificationsService>(NotificationsService);
	});

	afterEach(async () => {
		await closeMongoConnection();
		healthCheck();
	});

	afterAll(async () => {
		// Closing the DB connection allows Jest to exit successfully.
		await closeMongoConnection();
		// done();
	});

	async function createUser(email: string = 'test@example.com') {
		await rolesService.createRole({
			value: 'USER',
			description: 'User role',
		});

		return await userService.createUser(RegisterUserDtoStub(email));
	}

	async function createMultipleUsers(amount: number) {
		await rolesService.createRole({
			value: 'USER',
			description: 'User role',
		});
		let users = new Array<User>();

		for (let i = 0; i < amount; i++) {
			const user = await userService.createUser(
				RegisterUserDtoStub(uuid() + '@gmail.com'),
			);

			users.push(user);
		}

		return users;
	}

	it('should be defined', () => {
		expect(teamsService).toBeDefined();
	});

	it(`should return HttpException since this user doesn't exist`, async () => {
		await expect(
			teamsService.createTeam(
				CreateTeamDtoStub('63f9a2817d74b8446c82d0a0' as any),
			),
		).rejects.toThrow(HttpException);
	});

	it('should create role, user and team successfully', async () => {
		const user = await createUser();

		const team = await teamsService.createTeam(CreateTeamDtoStub(user._id));

		expect(team.name).toBe(CreateTeamDtoStub(user._id).name);
	});

	it('should create team and then find it by id', async () => {
		const user = await createUser();

		const team = await teamsService.createTeam(CreateTeamDtoStub(user._id));

		const search = await teamsService.getTeamById(team._id);

		expect(search._id).toEqual(team._id);
	});

	it('should return HttpException and not allow to create team for the same user', async () => {
		const user = await createUser();

		await teamsService.createTeam(CreateTeamDtoStub(user._id));

		// call it again to reproduce error
		await expect(
			teamsService.createTeam(CreateTeamDtoStub(user._id)),
		).rejects.toThrow(HttpException);
	});

	it('should create 300 users and 300 teams', async () => {
		let users = await createMultipleUsers(300);

		for (let i = 0; i < users.length; i++) {
			await teamsService.createTeam(CreateTeamDtoStub(users[i]._id));
		}

		expect((await teamsService.getAllTeams()).length).toBe(300);
	});

	it('should create user, give him role, create team, double check that it is created without image, make request to update image and double check that image link was given', async () => {
		const user = await createUser();

		const team = await teamsService.createTeam(CreateTeamDtoStub(user._id));

		// make sure image was not added
		expect(team.image).toBe(undefined);

		const updatedTeam = await teamsService.updateTeamAvatar(
			UpdateTeamAvatarDtoStub(team._id),
		);

		// make sure image was added
		expect(updatedTeam.image).toBeDefined();
	});

	// ! Having error with this test case,  connect ECONNREFUSED 127.0.0.1:587 when trying to send email notification to user about invite in:
	// ! teams.service.ts => line 217
	it('should create user, give him role, create team, then create another user invite him to team and double check everything was updated', async () => {
		const user1 = await createUser();

		const team = await teamsService.createTeam(
			CreateTeamDtoStub(user1._id),
		);

		const user2 = await userService.createUser(
			RegisterUserDtoStub('mmashc2@uic.edu'),
		);

		const info = await teamsService.inviteToTeam(
			InviteToTeamDtoStub(user2.email, user1._id, team._id),
		);

		const updatedUser2 = await userService.getUserById(user2._id);

		expect(updatedUser2.notifications[1]._id).toStrictEqual(
			info.notificationID,
		);
	});

	it('should create user, give him role, create team and then delete it immidiately', async () => {
		const user = await createUser();

		const team = await teamsService.createTeam(CreateTeamDtoStub(user._id));

		expect((await teamsService.getAllTeams()).length).toBe(1);

		await teamsService.deleteTeam(team._id);

		expect((await teamsService.getAllTeams()).length).toBe(0);
	});

	it('should create user, give him role, create team and then fail to create another team with the same tag', async () => {
		const user = await createUser();

		const team = await teamsService.createTeam(CreateTeamDtoStub(user._id));

		// call it again to reproduce error
		await expect(
			teamsService.createTeam(CreateTeamDtoStub(user._id, team.tag)),
		).rejects.toThrow(HttpException);
	});

	it('should create 5 users, give them role, one user should create team and then invite other users into it', async () => {
		const users = await createMultipleUsers(5);

		const leader = users.shift();

		let members = {
			emails: [],
			ids: [],
		};

		for (let i = 0; i < users.length; i++) {
			members.emails.push(users[i].email);
			members.ids.push(users[i]._id);
		}

		const team = await teamsService.createTeam(
			CreateTeamDtoStub(leader._id, null, members.emails, members.ids),
		);

		/* Checking if the team is defined. */
		expect(team).toBeDefined();

		for (let i = 0; i < users.length; i++) {
			let notification =
				await notificationService.getTeamNotificationsForUser(
					users[i]._id,
				);

			/* Checking if the notification is defined. */
			expect(notification[0]).toBeDefined();

			/* Checking if the notification is defined. */
			expect(notification[0].from_user_id).toStrictEqual(leader._id);
		}
	});
});
