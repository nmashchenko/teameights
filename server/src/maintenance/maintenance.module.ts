import { RolesModule } from '@/roles/roles.module';
import { UsersModule } from '@/users/users.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MaintenanceController } from './maintenance.controller';
import { MaintenanceService } from './maintenance.service';

@Module({
	controllers: [MaintenanceController],
	providers: [MaintenanceService],
	imports: [
		UsersModule,
		MongooseModule.forRoot(process.env.DB_URL),
		RolesModule,
	],
})
export class MaintenanceModule {}
