import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RolesModule } from '@/roles/roles.module';
import { TeamsModule } from '@/teams/teams.module';
import { UsersModule } from '@/users/users.module';

import { MaintenanceController } from './maintenance.controller';
import { MaintenanceService } from './maintenance.service';
import { NotificationsModule } from '@/notifications/notifications.module';

@Module({
	controllers: [MaintenanceController],
	providers: [MaintenanceService],
	imports: [
		UsersModule,
		MongooseModule.forRoot(process.env.DB_URL),
		RolesModule,
		TeamsModule,
		NotificationsModule,
	],
})
export class MaintenanceModule {}
