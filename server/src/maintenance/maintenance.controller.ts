import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SkipThrottle } from '@nestjs/throttler';
import mongoose from 'mongoose';

import { StatusResponseDto } from './dto/status-response.dto';
import { MaintenanceService } from './maintenance.service';

@ApiTags('Maintenance')
@SkipThrottle()
@Controller('maintenance')
export class MaintenanceController {
	constructor(private maintenanceService: MaintenanceService) {}

	@Get('/generate-users/:hash/:amount')
	async generateUsers(
		@Param('hash') hash: string,
		@Param('amount') amount: number,
	): Promise<StatusResponseDto> {
		if (hash === '0578c31575bd7b04ca526296db4ba1b73ffe8f8c55b491cf3409b244')
			return this.maintenanceService.generateUsers(amount);
		else return { status: 'Not authorized to make this request.' };
	}

	@Get('/generate-teams/:hash/:amount')
	async generateTeams(
		@Param('hash') hash: string,
		@Param('amount') amount: number,
	): Promise<StatusResponseDto> {
		if (hash === '0578c31575bd7b04ca526296db4ba1b73ffe8f8c55b491cf3409b244')
			return this.maintenanceService.generateTeams(amount);
		else return { status: 'Not authorized to make this request.' };
	}

	@Get('/teams/generate-users/:hash/:teamid/:amount')
	async generateUsersInTeam(
		@Param('hash') hash: string,
		@Param('teamid') teamid: mongoose.Types.ObjectId,
		@Param('amount') amount: number,
	): Promise<StatusResponseDto> {
		if (hash === '0578c31575bd7b04ca526296db4ba1b73ffe8f8c55b491cf3409b244')
			if (Number(amount) >= 1 && Number(amount) < 8)
				return this.maintenanceService.generateUsersInTeam(
					amount,
					teamid,
				);
			else return { status: 'Number should be between 1 and 7' };
		else return { status: 'Not authorized to make this request.' };
	}

	@Get('/generate-notifications/:hash/:userid/:amount')
	async generateNotifications(
		@Param('hash') hash: string,
		@Param('userid') userid: mongoose.Types.ObjectId,
		@Param('amount') amount: number,
	): Promise<StatusResponseDto> {
		if (hash === '0578c31575bd7b04ca526296db4ba1b73ffe8f8c55b491cf3409b244')
			return this.maintenanceService.generateNotifications(
				userid,
				amount,
			);
		else return { status: 'Not authorized to make this request.' };
	}

	@Get('/drop/:hash')
	async dropDatabase(
		@Param('hash') hash: string,
	): Promise<StatusResponseDto> {
		if (hash === '0578c31575bd7b04ca526296db4ba1b73ffe8f8c55b491cf3409b244')
			return this.maintenanceService.dropDatabase();
		else return { status: 'Not authorized to make this request.' };
	}
}
