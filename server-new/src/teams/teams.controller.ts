import { JwtAuthGuard } from '@Auth/guards/jwt-auth.guard';
import { ValidationPipe } from '@Pipes/validation.pipe';
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
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import mongoose from 'mongoose';
import { Team } from './teams.schema';
import { UpdateTeamAvatarDto } from './dto/update-team-avatar.dto';
import { InviteToTeamDto } from './dto/invite-to-team.dto';

@ApiTags('Teams')
@Controller('/teams')
export class TeamsController {
	constructor(private teamsService: TeamsService) {}

	@UseGuards(JwtAuthGuard)
	@UsePipes(ValidationPipe)
	@ApiOperation({
		summary: 'Create team',
	})
	@ApiResponse({ status: 200, type: String })
	@Post('/create-team')
	createTeam(@Body() dto: CreateTeamDto) {
		return this.teamsService.createTeam(dto);
	}

	@UseGuards(JwtAuthGuard)
	@UsePipes(ValidationPipe)
	@ApiOperation({
		summary: 'Update avatar of the team',
	})
	@ApiResponse({ status: 200 })
	@Post('/update-avatar')
	updateTeamAvatar(@Body() dto: UpdateTeamAvatarDto) {
		return this.teamsService.updateTeamAvatar(dto);
	}

	@ApiOperation({
		summary: 'Get team by id',
	})
	@ApiResponse({ status: 200, type: Team })
	@Get('/get-team/:id')
	getTeam(@Param('id') id: mongoose.Types.ObjectId) {
		return this.teamsService.getTeamById(id);
	}

	@ApiOperation({
		summary: 'Get all teams',
	})
	@ApiResponse({ status: 200, type: [Team] })
	@Get('/get-teams')
	getAllTeams() {
		return this.teamsService.getAllTeams();
	}

	@UseGuards(JwtAuthGuard)
	@UsePipes(ValidationPipe)
	@ApiOperation({
		summary: 'Invite user to team',
	})
	@ApiResponse({ status: 200, type: Team })
	@Post('/invite')
	inviteToTeam(@Body() dto: InviteToTeamDto) {
		return this.teamsService.inviteToTeam(dto);
	}

	// @UseGuards(JwtAuthGuard)
	// @UsePipes(ValidationPipe)
	// @ApiOperation({
	// 	summary: 'Invite user to team',
	// })
	// @ApiResponse({ status: 200, type: Team })
	// @Get('/invite-accept/:notificationid')
	// acceptInvite(@Param('notificationid') notificationid: mongoose.Types.ObjectId) {
	// 	return this.teamsService.acceptInvite(notificationid);
	// }
}
