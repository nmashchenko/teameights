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
import { TransferLeaderDtoStub } from './stubs/transfer-leader.dto.stub';
import { UpdateTeamDtoStub } from './stubs/update-team.dto.stub';
import { TokensModule } from '@/tokens/tokens.module';
import { AuthModule } from '@/auth/auth.module';
import { UpdateUserAvatarDtoStub } from '@/users/tests/stubs/update-avatar.dto.stub';

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
						// requireTLS: true,
						secure: false,
						auth: {
							user: process.env.SMTP_USER,
							pass: process.env.SMTP_PASS,
						},
					},
				}),
				AuthModule,
				TokensModule,
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
		console.log(process.env.SMTP_HOST);
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

	it('should create 100 users and 100 teams', async () => {
		let users = await createMultipleUsers(100);

		for (let i = 0; i < users.length; i++) {
			await teamsService.createTeam(CreateTeamDtoStub(users[i]._id));
		}

		expect((await teamsService.getTeamsByPage()).total).toBe(100);
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

	it('should create user, give him role, create team, then create another user invite him to team and double check everything was updated', async () => {
		const user1 = await createUser();

		const team = await teamsService.createTeam(
			CreateTeamDtoStub(user1._id),
		);

		await userService.updateAvatar(UpdateUserAvatarDtoStub(user1.email, 1));

		const user2 = await userService.createUser(
			RegisterUserDtoStub('mmashc2@uic.edu'),
		);

		const info = await teamsService.inviteToTeam(
			InviteToTeamDtoStub(user2.email, user1._id, team._id),
		);

		await userService.updateAvatar(UpdateUserAvatarDtoStub(user2.email, 2));

		const updatedUser2 = await userService.getUserById(user2._id);

		console.log(updatedUser2);

		expect(updatedUser2.notifications[1]._id).toStrictEqual(
			info.notificationID,
		);
	});

	it('should create user, give him role, create team, then create another user invite him to team and double check invite has image field', async () => {
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

		// @ts-ignore
		expect(updatedUser2.notifications[1].image).toBeDefined();
	});

	it('should create user, give him role, create team and then delete it immidiately', async () => {
		const user = await createUser();

		const team = await teamsService.createTeam(CreateTeamDtoStub(user._id));

		expect((await teamsService.getTeamsByPage()).total).toBe(1);

		await teamsService.deleteTeam(team._id);

		expect((await teamsService.getTeamsByPage()).total).toBe(0);
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

	// todo add more tests to cover edge cases

	// create 2 users, one should create a team and another should join, then leader should transfer ownership to newly joined user
	it('should create 2 users, one should create a team and another should join, then leader should transfer ownership to newly joined user', async () => {
		const users = await createMultipleUsers(2);

		const leader = users.shift();

		const team = await teamsService.createTeam(
			CreateTeamDtoStub(leader._id, null, [], []),
		);

		/* Checking if the team is defined. */
		expect(team).toBeDefined();

		const teamAfterJoin = await teamsService.joinTeam({
			user_id: users[0]._id,
			teamid: team._id,
		});

		/* Checking if the teamAfterJoin is defined. */
		expect(teamAfterJoin).toBeDefined();

		// make sure we got 2 people inside
		expect(teamAfterJoin.members.length).toBe(2);

		// make sure leader is the same
		expect(teamAfterJoin.leader._id).toEqual(leader._id);

		const updatedTeam = await teamsService.transferLeader(
			TransferLeaderDtoStub(leader._id, users[0]._id, team._id),
		);

		// make sure leader was transferred
		expect(updatedTeam.leader._id).toEqual(users[0]._id);
	});

	// todo add more tests to cover edge cases for transfer

	it('should create user, then create team and then update the fields in team', async () => {
		const user = await createUser();

		const team = await teamsService.createTeam(CreateTeamDtoStub(user._id));

		const incoming_update_data = UpdateTeamDtoStub(team._id);

		const updatedTeam = await teamsService.updateTeam(incoming_update_data);

		expect(updatedTeam.name).toEqual(incoming_update_data.name);
		expect(updatedTeam.description).toEqual(
			incoming_update_data.description,
		);
		expect(updatedTeam.country).toEqual(incoming_update_data.country);
		expect(updatedTeam.tag).toEqual(incoming_update_data.tag);
		expect(updatedTeam.type).toEqual(incoming_update_data.type);
		expect(updatedTeam.wins).toEqual(incoming_update_data.wins);
		expect(updatedTeam.points).toEqual(incoming_update_data.points);
	});

	it('should create user, then create team and then call updateTeam with only required teamid', async () => {
		const user = await createUser();

		const team = await teamsService.createTeam(CreateTeamDtoStub(user._id));

		const updatedTeam = await teamsService.updateTeam({ teamid: team._id });

		expect(team.name).toEqual(updatedTeam.name);
		expect(team.description).toEqual(updatedTeam.description);
		expect(team.country).toEqual(updatedTeam.country);
		expect(team.tag).toEqual(updatedTeam.tag);
		expect(team.type).toEqual(updatedTeam.type);
		expect(team.wins).toEqual(updatedTeam.wins);
		expect(team.points).toEqual(updatedTeam.points);
	});

	it('should create user, then create team and then call updateTeam without required teamid', async () => {
		const user = await createUser();

		const team = await teamsService.createTeam(CreateTeamDtoStub(user._id));

		// @ts-ignore
		await expect(teamsService.updateTeam({})).rejects.toThrow(
			HttpException,
		);
	});

	it('should create user, then create team and then call updateTeam with only required teamid', async () => {
		const user = await createUser();

		const team = await teamsService.createTeam(CreateTeamDtoStub(user._id));

		const updatedTeam = await teamsService.updateTeam({
			teamid: team._id,
			name: 'test name',
			wins: 1,
		});

		expect(updatedTeam.name).toEqual('test name');
		expect(updatedTeam.wins).toEqual(1);

		expect(updatedTeam.description).toEqual(team.description);
		expect(updatedTeam.country).toEqual(team.country);
		expect(updatedTeam.tag).toEqual(team.tag);
		expect(updatedTeam.type).toEqual(team.type);
		expect(updatedTeam.points).toEqual(team.points);
	});

	it('should create 5 users and 5 teams', async () => {
		let users = await createMultipleUsers(5);

		await teamsService.createTeam(CreateTeamDtoStub(users[0]._id, 'TEG1'));
		await teamsService.createTeam(CreateTeamDtoStub(users[1]._id, 'TEG2'));
		await teamsService.createTeam(CreateTeamDtoStub(users[2]._id, 'TEG3'));
		await teamsService.createTeam(CreateTeamDtoStub(users[3]._id, 'BEG1'));
		await teamsService.createTeam(CreateTeamDtoStub(users[4]._id, 'BEG2'));

		expect(
			(
				await teamsService.getFilteredTeamsByPage(1, 9, {
					tag: { $regex: 'TEG', $options: 'i' },
				})
			).total,
		).toBe(3);
	});

	it('should create 10 users and 10 teams, make 1 team have 3 players and filter by team with 3 players', async () => {
		let users = await createMultipleUsers(10);

		let team: Team;

		for (let i = 0; i < 7; i++) {
			team = await teamsService.createTeam(
				CreateTeamDtoStub(users[i]._id),
			);
		}

		await teamsService.joinTeam({
			user_id: users[8]._id,
			teamid: team._id,
		});

		await teamsService.joinTeam({
			user_id: users[9]._id,
			teamid: team._id,
		});

		expect(
			(await teamsService.getFilteredTeamsByPage(1, 9, { members: [3] }))
				.total,
		).toBe(1);
	});

	it('should create 10 users and 10 teams, make 1 team have 3 players and 1 team 4 players and filter by team with 3 players', async () => {
		let users = await createMultipleUsers(10);

		let team1: Team;
		let team2: Team;

		team1 = await teamsService.createTeam(CreateTeamDtoStub(users[0]._id));

		team2 = await teamsService.createTeam(CreateTeamDtoStub(users[1]._id));

		// add 3 members to team1
		for (let i = 2; i < 4; i++) {
			await teamsService.joinTeam({
				user_id: users[i]._id,
				teamid: team1._id,
			});
		}

		// add 4 members to team2
		for (let i = 4; i < 7; i++) {
			await teamsService.joinTeam({
				user_id: users[i]._id,
				teamid: team2._id,
			});
		}

		expect(
			(
				await teamsService.getFilteredTeamsByPage(1, 9, {
					members: [3, 4],
				})
			).total,
		).toBe(2);
	});
});
