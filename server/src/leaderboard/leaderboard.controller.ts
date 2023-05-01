import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LeaderboardService } from './leaderboard.service';

@ApiTags('Leaderboard')
@Controller('leaderboard')
export class LeaderboardController {
	constructor(private leaderboardService: LeaderboardService) {}
	@Get('/get-all')
	getAll() {
		return this.leaderboardService.getAll();
	}
}
