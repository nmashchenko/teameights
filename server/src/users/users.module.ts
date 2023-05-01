import { AuthModule } from '@Auth/auth.module';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesModule } from '@Roles/roles.module';
import { Role, RoleSchema } from '@Roles/roles.schema';
import { TokensModule } from '@Tokens/tokens.module';

import { FileModule } from '@/files/file.module';
import { NotificationsModule } from '@/notifications/notifications.module';

import { UsersController } from './users.controller';
import { User, UserSchema } from './users.schema';
import { UsersService } from './users.service';

@Module({
	controllers: [UsersController],
	providers: [UsersService],
	imports: [
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
		NotificationsModule,
		forwardRef(() => AuthModule),
		RolesModule,
		TokensModule,
		FileModule,
	],
	exports: [UsersService],
})
export class UsersModule {}
