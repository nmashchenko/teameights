import { MailsModule } from '@Mails/mails.module';
import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TokensModule } from '@Tokens/tokens.module';
import { UsersModule } from '@Users/users.module';

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
