import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	Req,
	Res,
	UsePipes,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { RegisterUserDto } from '@/users/dto/register-user.dto';
import { ResetUserDto } from '@Users/dto/reset-user.dto';
import { AuthService } from './auth.service';
import { AuthResponseDto } from './dto/auth.dto';
import { AuthUserDto } from '@/users/dto/auth-user.dto';
import { ValidationPipe } from '@Pipes/validation.pipe';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@ApiOperation({
		summary:
			'Registrer user in the system and returns access/refresh tokens pair & user object',
	})
	@ApiResponse({ status: 200, type: AuthResponseDto })
	@Post('/registration')
	@UsePipes(ValidationPipe)
	async registration(
		@Body() dto: RegisterUserDto,
		@Res({ passthrough: true }) res: Response,
	): Promise<AuthResponseDto> {
		const data = await this.authService.registration(dto);
		res.cookie('refreshToken', data.refreshToken, {
			maxAge: 30 * 24 * 60 * 60 * 1000,
			httpOnly: true,
			secure: true,
			sameSite: 'none',
		}); // httpOnly to prevent changing the cookie from browser (JS), we will also need to add flag secure for https
		return data;
	}

	@ApiOperation({
		summary:
			'Login user in the system and return access/refresh tokens pair & user object',
	})
	@ApiResponse({ status: 200, type: AuthResponseDto })
	@Post('/login')
	@UsePipes(ValidationPipe)
	async login(
		@Body() dto: AuthUserDto,
		@Res({ passthrough: true }) res: Response,
	): Promise<AuthResponseDto> {
		const data = await this.authService.login(dto);
		res.cookie('refreshToken', data.refreshToken, {
			maxAge: 30 * 24 * 60 * 60 * 1000,
			httpOnly: true,
			secure: true,
			sameSite: 'none',
		}); // httpOnly to prevent changing the cookie from browser (JS), we will also need to add flag secure for https
		return data;
	}

	@ApiOperation({
		summary:
			'Get token that we receieve from google on frontend (res.credential) and login / register user',
	})
	@ApiResponse({ status: 200, type: AuthResponseDto })
	@Get('/google/:token')
	async googleAuth(
		@Param('token') token: string,
		@Res({ passthrough: true }) res: Response,
	): Promise<AuthResponseDto> {
		const data = await this.authService.googleAuth(token);
		res.cookie('refreshToken', data.refreshToken, {
			maxAge: 30 * 24 * 60 * 60 * 1000,
			httpOnly: true,
			secure: true,
			sameSite: 'none',
		}); // httpOnly to prevent changing the cookie from browser (JS), we will also need to add flag secure for https
		return data;
	}

	@ApiOperation({
		summary: 'Activate account',
	})
	@ApiResponse({
		status: 200,
		description: 'Redirects to the last registration part',
	})
	@ApiResponse({ status: 400, description: 'Incorrect activation link' })
	@Get('/activate/:token')
	async activate(
		@Param('token') token: string,
		@Res({ passthrough: true }) res: Response,
	) {
		await this.authService.activate(token);
		return res.redirect(process.env.COMPLETE_REGISTRATION_URL);
	}

	@ApiOperation({
		summary: 'Logout user',
	})
	@ApiResponse({
		status: 200,
		description: 'Successfuly logged out user and cleared refresh cookie',
	})
	@Get('/logout')
	async logout(
		@Req() req: Request,
		@Res({ passthrough: true }) res: Response,
	): Promise<Object> {
		const { refreshToken } = req.cookies;
		const token = await this.authService.logout(refreshToken);
		res.clearCookie('refreshToken');
		return token;
	}

	@ApiOperation({
		summary: 'Refresh token for user',
	})
	@ApiResponse({
		status: 200,
		description: 'Successfuly refreshed cookie for user',
		type: AuthResponseDto,
	})
	@Get('/refresh')
	async refresh(
		@Req() req: Request,
		@Res({ passthrough: true }) res: Response,
	): Promise<AuthResponseDto> {
		const { refreshToken } = req.cookies;
		const data = await this.authService.refresh(refreshToken);
		res.cookie('refreshToken', data.refreshToken, {
			maxAge: 30 * 24 * 60 * 60 * 1000,
			httpOnly: true,
			secure: true,
			sameSite: 'none',
		}); // httpOnly to prevent changing the cookie from browser (JS), we will also need to add flag secure for https
		return data;
	}

	@ApiOperation({
		summary: 'Generate password reset link for user that he gets on email',
	})
	@ApiResponse({
		status: 200,
		description: 'Generated link',
	})
	@Get('/reset-password/:email')
	async resetPassword(@Param('email') email: string): Promise<Object> {
		return await this.authService.resetPassword(email);
	}

	@ApiOperation({
		summary: 'Validates token and id to allow user reset password',
	})
	@ApiResponse({
		status: 200,
		description: 'Redirected user to reset form on frontend',
	})
	@Get('/verify-reset/:email/:token')
	async verifyReset(
		@Param('email') email: string,
		@Param('token') token: string,
		@Res() res: Response,
	): Promise<void> {
		await this.authService.verifyReset(email, token);
		return res.redirect(
			`${process.env.CLIENT_URL}/auth/password-recover/${email}/${token}`,
		);
	}

	@ApiOperation({
		summary:
			'Resets password for user after token was verified in /verify-reset',
	})
	@ApiResponse({
		status: 200,
		description: 'Updates password for the user',
	})
	@UsePipes(ValidationPipe)
	@Get('/update-password')
	async updatePassword(
		@Body() dto: ResetUserDto,
		@Res() res: Response,
	): Promise<Response> {
		await this.authService.updatePassword(dto);
		return res.send(`password for ${dto.email} was updated`);
	}
}
