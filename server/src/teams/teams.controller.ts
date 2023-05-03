import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	UseGuards,
	UsePipes,
	Query,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TeamsService } from './teams.service';
import mongoose from 'mongoose';

import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { ValidationPipe } from '@/pipes/validation.pipe';

import { CreateTeamDto } from './dto/create-team.dto';
import { InviteToTeamDto } from './dto/invite-to-team.dto';
import { InviteToTeamResponseDto } from './dto/invite-to-team.response.dto';
import { TeamMembershipDTO } from './dto/membership.dto';
import { StatusResponseDto } from './dto/status-response.dto';
import { TeamSearchDto } from './dto/team-search.dto';
import { TransferLeaderDto } from './dto/transfer-leader.dto';
import { Results } from './dto/results.dto';
import * as qs from 'qs';
import { Team } from './teams.schema';
import { UpdateTeamAvatarDto } from './dto/update-team-avatar.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@ApiTags('Teams')
@Controller('/teams')
export class TeamsController {
	constructor(private teamsService: TeamsService) {}

	@UseGuards(JwtAuthGuard)
	@UsePipes(ValidationPipe)
	@ApiOperation({
		summary: 'Create team',
	})
	@ApiResponse({ status: 200, type: Team })
	@Post('/create')
	createTeam(@Body() dto: CreateTeamDto): Promise<Team> {
		return this.teamsService.createTeam(dto);
	}

	@ApiOperation({ summary: 'Get teams by page' })
	@ApiResponse({ status: 200, type: Results })
	@ApiQuery({
		name: 'page',
		description: 'The page number to get',
		required: false,
		type: Number,
	})
	@Get()
	getTeamsByPage(@Query('page') pageNumber?: number) {
		/* A way to check if the pageNumber is a number or not. If it is not a number, it will return 1. */
		const page: number = parseInt(pageNumber as any) || 1;
		const limit: number = 9;
		return this.teamsService.getTeamsByPage(page, limit);
	}

	@ApiOperation({ summary: 'Get filtered teams by page' })
	@ApiResponse({ status: 200, type: Results })
	@ApiQuery({
		name: 'page',
		description: 'The page number to get',
		required: false,
		type: Number,
	})
	@ApiQuery({
		name: 'filtersQuery',
		description: `The filters that we get front end, don't forget to use let queryString = qs.stringify(filtersQuery) before sending to backend. If you pass members inside filters, make sure it's either [number] OR [number, number]`,
		required: true,
		type: String,
	})
	@Get('/filtered')
	getFilteredTeamsByPage(
		@Query('filtersQuery') filtersQuery: string,
		@Query('page') pageNumber?: number,
	) {
		const page: number = parseInt(pageNumber as any) || 1;
		const limit: number = 9;
		/* Parsing the query string into an object. */
		const parsedQuery = qs.parse(filtersQuery);

		return this.teamsService.getFilteredTeamsByPage(
			page,
			limit,
			parsedQuery,
		);
	}

	@ApiOperation({
		summary: 'Get team by id',
	})
	@ApiResponse({ status: 200, type: Team })
	@Get('/:id')
	getTeam(@Param('id') id: mongoose.Types.ObjectId) {
		return this.teamsService.getTeamById(id);
	}

	@UseGuards(JwtAuthGuard)
	@UsePipes(ValidationPipe)
	@ApiOperation({
		summary: 'Update avatar of the team',
	})
	@ApiResponse({ status: 200, type: Team })
	@Put('/update-avatar')
	updateTeamAvatar(@Body() dto: UpdateTeamAvatarDto): Promise<Team> {
		return this.teamsService.updateTeamAvatar(dto);
	}

	@UsePipes(ValidationPipe)
	@UseGuards(JwtAuthGuard)
	@ApiOperation({
		summary: 'Update team details',
	})
	@ApiResponse({ status: 200, type: Team })
	@Put('/update-team')
	updateUser(@Body() dto: UpdateTeamDto): Promise<Team> {
		return this.teamsService.updateTeam(dto);
	}

	@UsePipes(ValidationPipe)
	@UseGuards(JwtAuthGuard)
	@ApiOperation({
		summary: 'Remove specific member from the team',
	})
	@ApiResponse({ status: 200, type: Team })
	@Put('/remove-member')
	removeMember(@Body() dto: TeamMembershipDTO): Promise<Team> {
		return this.teamsService.removeMember(dto);
	}

	@UseGuards(JwtAuthGuard)
	@UsePipes(ValidationPipe)
	@ApiOperation({
		summary: 'Invite user to team',
	})
	@ApiResponse({ status: 200, type: InviteToTeamResponseDto })
	@Post('/invite')
	inviteToTeam(
		@Body() dto: InviteToTeamDto,
	): Promise<InviteToTeamResponseDto> {
		return this.teamsService.inviteToTeam(dto);
	}

	@UseGuards(JwtAuthGuard)
	@ApiOperation({
		summary: 'Accept invite from user to team',
	})
	@ApiResponse({ status: 200, type: Object })
	@Put('/invite-accept/:notificationid')
	acceptInvite(
		@Param('notificationid') notificationid: mongoose.Types.ObjectId,
	): Promise<StatusResponseDto> {
		return this.teamsService.acceptInvite(notificationid);
	}

	@UseGuards(JwtAuthGuard)
	@ApiOperation({
		summary: 'Reject invite from user to team',
	})
	@ApiResponse({ status: 200, type: Object })
	@Put('/invite-reject/:notificationid')
	rejectInvite(
		@Param('notificationid') notificationid: mongoose.Types.ObjectId,
	): Promise<StatusResponseDto> {
		return this.teamsService.rejectTeamInvite(notificationid);
	}

	@UseGuards(JwtAuthGuard)
	@UsePipes(ValidationPipe)
	@ApiOperation({
		summary: 'Join the open team',
	})
	@ApiResponse({ status: 200, type: Team })
	@Put('/join')
	joinTeam(@Body() dto: TeamMembershipDTO): Promise<Team> {
		return this.teamsService.joinTeam(dto);
	}

	@UseGuards(JwtAuthGuard)
	@UsePipes(ValidationPipe)
	@ApiOperation({
		summary: 'Leave the team',
	})
	@ApiResponse({ status: 200, type: Team })
	@Put('/leave')
	leaveTeam(@Body() dto: TeamMembershipDTO): Promise<Team> {
		return this.teamsService.leaveTeam(dto);
	}

	@UseGuards(JwtAuthGuard)
	@ApiOperation({
		summary: 'Delete the team',
	})
	@ApiResponse({ status: 200, type: Team })
	@Delete('/delete/:teamid')
	deleteTeam(
		@Param('teamid') teamId: mongoose.Types.ObjectId,
	): Promise<StatusResponseDto> {
		return this.teamsService.deleteTeam(teamId);
	}

	@UseGuards(JwtAuthGuard)
	@UsePipes(ValidationPipe)
	@ApiOperation({
		summary: 'Transfer leadership for the team',
	})
	@ApiResponse({ status: 200, type: Team })
	@Put('/leader/transfer')
	transferLeader(@Body() dto: TransferLeaderDto): Promise<Team> {
		return this.teamsService.transferLeader(dto);
	}
}
