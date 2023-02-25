import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TeamsService } from '../teams.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, TeamsSchema } from '../teams.schema';
import { AuthModule } from '@/auth/auth.module';
import { TokensModule } from '@/tokens/tokens.module';
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

describe('TeamService', () => {
	let teamsService: TeamsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				/* Loading the environment variables from the .env file. */
				ConfigModule.forRoot({
					envFilePath: `.dev.env`,
				}),
				/* Connecting to the database. */
				// MongooseModule.forRoot(process.env.DB_URL),
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
			],
			providers: [TeamsService],
		}).compile();

		teamsService = module.get<TeamsService>(TeamsService);
	});

	it('should be defined', () => {
		expect(teamsService).toBeDefined();
	});

	afterAll(async () => {
		await closeInMongodConnection();
	});
});
