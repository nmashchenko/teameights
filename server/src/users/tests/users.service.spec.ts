import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
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
import { UsersService } from '@/users/users.service';
import { RolesService } from '@/roles/roles.service';
import { NotificationsService } from '@/notifications/notifications.service';
import { AuthModule } from '@/auth/auth.module';
import { forwardRef } from '@nestjs/common';
import { User, UserSchema } from '../users.schema';
import { Role, RoleSchema } from '@/roles/roles.schema';
import { RolesModule } from '@/roles/roles.module';
import { TokensModule } from '@/tokens/tokens.module';
import { FileService } from '@/files/file.service';
import { TokensService } from '@/tokens/tokens.service';
import { RegisterUserDtoStub } from './stubs/register-user.dto.stub';

describe('UserService', () => {
	let userService: UsersService;
	let filesService: FileService;
	let tokenService: TokensService;
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

	async function createUser(email: string = 'test@example.com') {
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
});
