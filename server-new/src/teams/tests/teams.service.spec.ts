import { HttpException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TeamsService } from '../teams.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, TeamsSchema } from '../teams.schema';
import { UsersModule } from '@/users/users.module';
import { FileModule } from '@/files/file.module';
import { NotificationsModule } from '@/notifications/notifications.module';
import {
	closeInMongodConnection,
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
import { RolesModule } from '@/roles/roles.module';
import { uuid } from 'uuidv4';
import { User } from '@/users/users.schema';

describe('TeamService', () => {
	let teamsService: TeamsService;
	let userService: UsersService;
	let rolesService: RolesService;

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
				RolesModule,
			],
			providers: [TeamsService],
		}).compile();

		teamsService = module.get<TeamsService>(TeamsService);
		userService = module.get<UsersService>(UsersService);
		rolesService = module.get<RolesService>(RolesService);
	});

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
		await rolesService.createRole({
			value: 'USER',
			description: 'User role',
		});

		const user = await userService.createUser(
			RegisterUserDtoStub('test@test.com'),
		);

		const team = await teamsService.createTeam(CreateTeamDtoStub(user._id));

		expect(team.name).toBe(CreateTeamDtoStub(user._id).name);
	});

	it('should create team and then find it by id', async () => {
		await rolesService.createRole({
			value: 'USER',
			description: 'User role',
		});
		const user = await userService.createUser(
			RegisterUserDtoStub('test@test.com'),
		);

		const team = await teamsService.createTeam(CreateTeamDtoStub(user._id));

		const search = await teamsService.getTeamById(team._id);

		expect(search._id).toEqual(team._id);
	});

	it('should not allow to create team for the same user', async () => {
		await rolesService.createRole({
			value: 'USER',
			description: 'User role',
		});
		const user = await userService.createUser(
			RegisterUserDtoStub('test@test.com'),
		);

		await teamsService.createTeam(CreateTeamDtoStub(user._id));

		// call it again to reproduce error
		await expect(
			teamsService.createTeam(CreateTeamDtoStub(user._id)),
		).rejects.toThrow(HttpException);
	});

	it('should create 500 users and 500 teams', async () => {
		await rolesService.createRole({
			value: 'USER',
			description: 'User role',
		});
		let users = new Array<User>();

		for (let i = 0; i < 500; i++) {
			const user = await userService.createUser(
				RegisterUserDtoStub(uuid() + '@gmail.com'),
			);

			users.push(user);
		}

		for (let i = 0; i < users.length; i++) {
			await teamsService.createTeam(CreateTeamDtoStub(users[i]._id));
		}

		expect((await teamsService.getAllTeams()).length).toBe(500);
	});
});
