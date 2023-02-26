import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, TeamsSchema } from './teams.schema';
import { AuthModule } from '@/auth/auth.module';
import { TokensModule } from '@/tokens/tokens.module';
import { UsersModule } from '@/users/users.module';
import { FileModule } from '@/files/file.module';
import { NotificationsModule } from '@/notifications/notifications.module';

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
	],
	exports: [TeamsService],
})
export class TeamsModule {}
