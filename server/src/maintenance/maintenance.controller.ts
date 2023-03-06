import { Controller, Get, Param, Post } from '@nestjs/common';
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

	@Get('/drop/:hash')
	dropDatabase(@Param('hash') hash: string) {
		if (hash === '0578c31575bd7b04ca526296db4ba1b73ffe8f8c55b491cf3409b244')
			return this.maintenanceService.dropDatabase();
		else return { status: 'not authorized' };
	}
}
