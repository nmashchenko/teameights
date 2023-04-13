import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { TokensModule } from './tokens/tokens.module';
import { MailsModule } from './mails/mails.module';
import * as path from 'path';
import { MailerModule } from '@nestjs-modules/mailer';
import { APP_FILTER } from '@nestjs/core';
import { NotificationsModule } from './notifications/notifications.module';
import { TeamsModule } from './teams/teams.module';
import { TournamentsModule } from './tournaments/tournaments.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { NotFoundExceptionFilter } from './exceptions/not-found-exception.filter';

@Module({
	imports: [
		/* Loading the environment variables from the .env file. */
		ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
		/* Connecting to the database. */
		MongooseModule.forRoot(process.env.DB_URL),
		/* Serving the static files. */
		ServeStaticModule.forRoot({
			rootPath: path.resolve(__dirname, 'static'),
			exclude: ['/api/(.*)'],
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
		UsersModule,
		AuthModule,
		RolesModule,
		TokensModule,
		MailsModule,
		NotificationsModule,
		TeamsModule,
		TournamentsModule,
		LeaderboardModule,
		MaintenanceModule,
	],
	controllers: [],
	providers: [
		// handle 404
		{
			provide: APP_FILTER,
			useClass: NotFoundExceptionFilter,
		},
	],
})
export class AppModule {}
