import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TeamsModule } from '@/teams/teams.module';

import { LeaderboardController } from './leaderboard.controller';
import { Leaderboard, LeaderboardSchema } from './leaderboard.schema';
import { LeaderboardService } from './leaderboard.service';

@Module({
	controllers: [LeaderboardController],
	providers: [LeaderboardService],
	exports: [LeaderboardService],
	imports: [
		MongooseModule.forFeature([
			{ name: Leaderboard.name, schema: LeaderboardSchema },
		]),
		TeamsModule,
	],
})
export class LeaderboardModule {}
