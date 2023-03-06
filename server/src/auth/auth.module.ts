import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '@Users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { RolesModule } from '@Roles/roles.module';
import { TokensModule } from '@Tokens/tokens.module';
import { MailsModule } from '@Mails/mails.module';

@Module({
	providers: [AuthService],
	controllers: [AuthController],
	imports: [
		forwardRef(() => UsersModule),
		JwtModule.register({
			secret: process.env.PRIVATE_KEY || 'SECRET_KEY',
			signOptions: {
				expiresIn: '24h',
			},
		}),
		forwardRef(() => TokensModule),
		MailsModule,
	],
	exports: [AuthService, JwtModule],
})
export class AuthModule {}
