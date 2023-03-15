import { Controller, Get, Param, Post } from '@nestjs/common';
import mongoose from 'mongoose';
import { MaintenanceService } from './maintenance.service';

@Controller('maintenance')
export class MaintenanceController {
	constructor(private maintenanceService: MaintenanceService) {}

	@Get('/generate-users/:hash/:amount')
	generateUsers(
		@Param('hash') hash: string,
		@Param('amount') amount: number,
	) {
		if (hash === '0578c31575bd7b04ca526296db4ba1b73ffe8f8c55b491cf3409b244')
			return this.maintenanceService.generateUsers(amount);
		else return { status: 'not authorized' };
	}

	@Get('/generate-teams/:hash/:amount')
	generateTeams(
		@Param('hash') hash: string,
		@Param('amount') amount: number,
	) {
		if (hash === '0578c31575bd7b04ca526296db4ba1b73ffe8f8c55b491cf3409b244')
			return this.maintenanceService.generateTeams(amount);
		else return { status: 'not authorized' };
	}

	@Get('/teams/generate-users/:hash/:teamid/:amount')
	generateUsersInTeam(
		@Param('hash') hash: string,
		@Param('teamid') teamid: mongoose.Types.ObjectId,
		@Param('amount') amount: number,
	) {
		if (hash === '0578c31575bd7b04ca526296db4ba1b73ffe8f8c55b491cf3409b244')
			if (Number(amount) >= 1 && Number(amount) < 8)
				return this.maintenanceService.generateUsersInTeam(
					amount,
					teamid,
				);
			else return { status: 'number should be between 1 and 7' };
		else return { status: 'not authorized' };
	}

	@Get('/drop/:hash')
	dropDatabase(@Param('hash') hash: string) {
		if (hash === '0578c31575bd7b04ca526296db4ba1b73ffe8f8c55b491cf3409b244')
			return this.maintenanceService.dropDatabase();
		else return { status: 'not authorized' };
	}
}
