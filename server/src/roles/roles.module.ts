import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@Users/users.schema';

import { RolesController } from './roles.controller';
import { Role, RoleSchema } from './roles.schema';
import { RolesService } from './roles.service';

@Module({
	controllers: [RolesController],
	providers: [RolesService],
	exports: [RolesService],
	imports: [
		MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
	],
})
export class RolesModule {}
