import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { User, UserSchema } from '@/users/users.schema';

import { RolesController } from './roles.controller';
import { Role, RoleSchema } from './roles.schema';
import { RolesService } from './roles.service';

import { TokensModule } from '@/tokens/tokens.module';

@Module({
	controllers: [RolesController],
	providers: [RolesService],
	exports: [RolesService],
	imports: [
		MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		TokensModule,
	],
})
export class RolesModule {}
