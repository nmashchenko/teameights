import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	UseGuards,
	UsePipes,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import mongoose from 'mongoose';

import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { RolesGuard } from '@/auth/guards/roles.guard';
import { Roles } from '@/auth/guards/roles-auth.decorator';
import { ValidationPipe } from '@/pipes/validation.pipe';

import { CreateTournamentDto } from './dto/create-tournament.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { Tournament } from './tournaments.schema';
import { TournamentsService } from './tournaments.service';

@ApiTags('Tournaments')
@Controller('tournaments')
export class TournamentsController {
	constructor(private tournamentsService: TournamentsService) {}

	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@UsePipes(ValidationPipe)
	@ApiOperation({
		summary: 'Create tournament',
	})
	@ApiResponse({ status: 200, type: Tournament })
	@Post('/create-tournament')
	createTournament(@Body() dto: CreateTournamentDto): Promise<Tournament> {
		return this.tournamentsService.createTournament(dto);
	}

	@UseGuards(JwtAuthGuard)
	@UsePipes(ValidationPipe)
	@ApiOperation({
		summary: 'Sign up for the tournament',
	})
	@ApiResponse({ status: 200, type: Tournament })
	@Post('/sign-up')
	signUp(@Body() dto: SignUpDto): Promise<Tournament> {
		return this.tournamentsService.signUp(dto);
	}

	@ApiOperation({
		summary: 'Get all tournaments in the form /check-existance/:tournament/:id',
	})
	@ApiResponse({ status: 200, type: Object })
	@Get('/check-existance/:tournament_id/:user_id')
	checkExistance(
		@Param('tournament_id') t_id: mongoose.Types.ObjectId,
		@Param('user_id') userid: mongoose.Types.ObjectId,
	): Promise<any> {
		return this.tournamentsService.checkExistance(t_id, userid);
	}

	@ApiOperation({
		summary: 'Get all tournaments',
	})
	@ApiResponse({ status: 200, type: [Tournament] })
	@Get('/get-tournaments')
	getTournament(): Promise<Tournament[]> {
		return this.tournamentsService.getTournaments();
	}

	@ApiOperation({
		summary: 'Get info about specific tournament',
	})
	@ApiResponse({ status: 200, type: Tournament })
	@Get('/get-tournament/:id')
	getTournamentById(
		@Param('id') t_id: mongoose.Types.ObjectId,
	): Promise<Tournament> {
		return this.tournamentsService.getTournamentById(t_id);
	}

	// add finish tournament function that would assign leaderboard to the winners and set status to finished

	// add lock tournament function that would change tournament status to going

	// add kick team function that would kick team out of tournament for violating the rules
}
