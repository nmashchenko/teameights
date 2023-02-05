import { MailsService } from '@Mails/mails.service';
import { TokensService } from '@Tokens/tokens.service';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '@Users/users.service';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';
import mongoose from 'mongoose';

describe('AuthController', () => {
	let authController: AuthController;
	let authService : AuthService;
	let usersService: UsersService;
	let tokenService: TokensService
	let mailService: MailsService;
	let connection: mongoose.Connection;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [AuthController],
        providers: [AuthService, UsersService, TokensService, MailsService, mongoose.Connection],
      }).compile();

			authService = moduleRef.get<AuthService>(AuthService);
    	authController = moduleRef.get<AuthController>(AuthController);
  });

	it('should be defined', () => {
		expect(authController).toBeDefined();
	});
});
