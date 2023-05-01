import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Leaderboard } from './leaderboard.schema';
import { LeaderboardService } from './leaderboard.service';

@ApiTags('Leaderboard')
@Controller('leaderboard')
export class LeaderboardController {
	constructor(private leaderboardService: LeaderboardService) {}
	@Get('/get-all')
	getAll(): Promise<Leaderboard[]> {
		return this.leaderboardService.getAll();
	}
}
