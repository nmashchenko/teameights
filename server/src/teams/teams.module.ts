import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from '@/auth/auth.module';
import { FileModule } from '@/files/file.module';
import { MailsModule } from '@/mails/mails.module';
import { NotificationsModule } from '@/notifications/notifications.module';
import { TokensModule } from '@/tokens/tokens.module';
import { UsersModule } from '@/users/users.module';

import { TeamsController } from './teams.controller';
import { Team, TeamsSchema } from './teams.schema';
import { TeamsService } from './teams.service';

@Module({
	providers: [TeamsService],
	controllers: [TeamsController],
	imports: [
		MongooseModule.forFeature([{ name: Team.name, schema: TeamsSchema }]),
		AuthModule,
		TokensModule,
		UsersModule,
		FileModule,
		NotificationsModule,
		MailsModule,
	],
	exports: [TeamsService],
})
export class TeamsModule {}
