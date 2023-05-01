import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from '@/auth/auth.module';
import { FileModule } from '@/files/file.module';
import { LeaderboardModule } from '@/leaderboard/leaderboard.module';
import { NotificationsModule } from '@/notifications/notifications.module';
import { TeamsModule } from '@/teams/teams.module';
import { TokensModule } from '@/tokens/tokens.module';
import { UsersModule } from '@/users/users.module';

import { TournamentsController } from './tournaments.controller';
import { Tournament, TournamentSchema } from './tournaments.schema';
import { TournamentsService } from './tournaments.service';

@Module({
	providers: [TournamentsService],
	controllers: [TournamentsController],
	imports: [
		MongooseModule.forFeature([
			{ name: Tournament.name, schema: TournamentSchema },
		]),
		AuthModule,
		TokensModule,
		UsersModule,
		FileModule,
		NotificationsModule,
		TeamsModule,
		LeaderboardModule,
	],
	exports: [TournamentsService],
})
export class TournamentsModule {}
