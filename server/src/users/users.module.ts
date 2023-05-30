import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from '@/auth/auth.module';
import { FileModule } from '@/files/file.module';
import { NotificationsModule } from '@/notifications/notifications.module';
import { RolesModule } from '@/roles/roles.module';
import { Role, RoleSchema } from '@/roles/roles.schema';
import { TokensModule } from '@/tokens/tokens.module';

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
