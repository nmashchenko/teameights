import { ValidationPipe } from '@/pipes/validation.pipe';
import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
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
