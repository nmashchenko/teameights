import { forwardRef } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { Test, TestingModule } from '@nestjs/testing';
import { MailerModule } from '@nestjs-modules/mailer';
import * as path from 'path';

import { AuthModule } from '@/auth/auth.module';
import { FileModule } from '@/files/file.module';
import { FileService } from '@/files/file.service';
import { NotificationsModule } from '@/notifications/notifications.module';
import { NotificationsService } from '@/notifications/notifications.service';
import { RolesModule } from '@/roles/roles.module';
import { Role, RoleSchema } from '@/roles/roles.schema';
import { RolesService } from '@/roles/roles.service';
import {
	closeMongoConnection,
	healthCheck,
	rootMongooseTestModule,
} from '@/test-utils/MongooseTestModule';
import { TokensModule } from '@/tokens/tokens.module';
import { TokensService } from '@/tokens/tokens.service';
import { UsersService } from '@/users/users.service';

import { User, UserSchema } from '../users.schema';
import { RegisterUserDtoStub } from './stubs/register-user.dto.stub';

describe('UserService', () => {
	let userService: UsersService;
	let filesService: FileService;
	let tokenService: TokensService;
	let rolesService: RolesService;
	let notificationService: NotificationsService;

	beforeAll(done => {
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
					{ name: User.name, schema: UserSchema },
				]),
				MongooseModule.forFeature([
					{ name: Role.name, schema: RoleSchema },
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
				NotificationsModule,
				forwardRef(() => AuthModule),
				RolesModule,
				TokensModule,
				FileModule,
			],
			providers: [UsersService],
		}).compile();

		userService = module.get<UsersService>(UsersService);
		filesService = module.get<FileService>(FileService);
		tokenService = module.get<TokensService>(TokensService);
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

	async function createUser(email = 'test@example.com'): Promise<User> {
		await rolesService.createRole({
			value: 'USER',
			description: 'User role',
		});

		return await userService.createUser(RegisterUserDtoStub(email));
	}

	it('should be defined', () => {
		console.log('user service');
		expect(userService).toBeDefined();
	});

	it('should create user', async () => {
		const user = await createUser();
		expect(user.email).toBe('test@example.com');
	});

	it('should create user and update birthday date', async () => {
		const user = await createUser();
		expect(user.email).toBe('test@example.com');

		const updateBirthdayData = {
			email: 'test@example.com',
			birthDate: new Date(2002, 0),
		};
		// @ts-ignore
		const updateUser = await userService.updateUser(updateBirthdayData);
		expect(updateUser.birthDate).toEqual(updateBirthdayData.birthDate);
	});

	it('should create user and then update university fields', async () => {
		const user = await createUser();
		expect(user.email).toBe('test@example.com');

		const updateUniversityData = {
			email: 'test@example.com',
			universityData: {
				university: 'UIC',
				degree: `Bachelor's degree`,
				major: 'Computer Science',
				addmissionDate: new Date(),
				graduationDate: new Date(),
			},
		};

		// @ts-ignore
		const updateUser = await userService.updateUser(updateUniversityData);

		// compare all fields
		expect(updateUser.universityData[0].university).toBe(
			updateUniversityData.universityData.university,
		);
		expect(updateUser.universityData[0].degree).toBe(
			updateUniversityData.universityData.degree,
		);
		expect(updateUser.universityData[0].major).toBe(
			updateUniversityData.universityData.major,
		);
		expect(updateUser.universityData[0].addmissionDate).toEqual(
			updateUniversityData.universityData.addmissionDate,
		);
		expect(updateUser.universityData[0].graduationDate).toEqual(
			updateUniversityData.universityData.graduationDate,
		);
	});

	it('should create user and then update job fields', async () => {
		const user = await createUser();
		expect(user.email).toBe('test@example.com');

		const updateJobData = {
			email: 'test@example.com',
			jobData: {
				title: 'SWE',
				company: `Spotify`,
				startDate: new Date(2017, 0),
				endDate: new Date(2022, 0),
			},
		};

		// @ts-ignore
		const updateUser = await userService.updateUser(updateJobData);

		// compare all fields
		expect(updateUser.jobData[0].title).toBe(updateJobData.jobData.title);

		expect(updateUser.jobData[0].company).toBe(
			updateJobData.jobData.company,
		);

		expect(updateUser.jobData[0].startDate).toEqual(
			updateJobData.jobData.startDate,
		);

		expect(updateUser.jobData[0].endDate).toEqual(
			updateJobData.jobData.endDate,
		);
	});
});
