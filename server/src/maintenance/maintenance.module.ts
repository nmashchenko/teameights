import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FileModule } from '@/files/file.module';
import { NotificationsModule } from '@/notifications/notifications.module';
import { RolesModule } from '@/roles/roles.module';
import { TeamsModule } from '@/teams/teams.module';
import { UsersModule } from '@/users/users.module';

import { MaintenanceController } from './maintenance.controller';
import { MaintenanceService } from './maintenance.service';

@Module({
	controllers: [MaintenanceController],
	providers: [MaintenanceService],
	imports: [
		UsersModule,
		MongooseModule.forRoot(process.env.DB_URL),
		RolesModule,
		TeamsModule,
		NotificationsModule,
		FileModule,
	],
})
export class MaintenanceModule {}
