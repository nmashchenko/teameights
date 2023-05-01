import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { MailsModule } from '@/mails/mails.module';
import { TokensModule } from '@/tokens/tokens.module';
import { UsersModule } from '@/users/users.module';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

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
