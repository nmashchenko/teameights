import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { passwordStrength } from 'check-password-strength';
import { OAuth2Client } from 'google-auth-library';
import mongoose from 'mongoose';
import * as uuid from 'uuid';

import { MailsService } from '@/mails/mails.service';
import { CreateTokenDto } from '@/tokens/dto/create-token.dto';
import { TokensService } from '@/tokens/tokens.service';
import { AuthUserDto } from '@/users/dto/auth-user.dto';
import { RegisterUserDto } from '@/users/dto/register-user.dto';
import { ResetUserDto } from '@/users/dto/reset-user.dto';
import { UsersService } from '@/users/users.service';

import { AuthResponseDto } from './dto/auth-response.dto';
import { StatusResponseDto } from './dto/status-response.dto';

@Injectable()
export class AuthService {
	constructor(
		private userService: UsersService,
		private tokensService: TokensService,
		private mailsService: MailsService,
		@InjectConnection() private readonly connection: mongoose.Connection,
	) {}

	/**
	 * It creates a user, generates a token for it, sends an email with an activation link, and saves the
	 * refresh token in the database
	 * @param {CreateUserDto} dto - CreateUserDto - the data transfer object that contains the user's data.
	 * @returns an object with the access token, refresh token and the user.
	 */
	async registration(
		dto: RegisterUserDto,
		oauth?: boolean,
	): Promise<AuthResponseDto> {
		const session = await this.connection.startSession();
		session.startTransaction();

		try {
			/* Checking if the user already exists. */
			const candidate = await this.userService.getUserByEmail(
				dto.email,
				session,
			);
			if (candidate) {
				throw new HttpException(
					`User with this email: ${dto.email} already exists`,
					HttpStatus.BAD_REQUEST,
				);
			}

			/* TODO: add check for medium/strong password */
			// const security = passwordStrength(dto.password).value;

			// console.log(security);

			/* Hashing the password. */
			const hashPassword = await bcrypt.hash(dto.password, 5);

			/* Creating a user. */
			const user = await this.userService.createUser(
				{
					...dto,
					password: hashPassword,
				},
				session,
				typeof oauth !== 'undefined' ? true : undefined,
			);

			/* Creating a new instance of the CreateTokenDto class. */
			const userDto = new CreateTokenDto(user);

			/* Generating a token for the user. */
			const tokens = this.tokensService.generateToken({ ...userDto });

			/* Sending an email to the user with a link to activate the account. */
			if (typeof oauth === 'undefined') {
				await this.mailsService.sendActivationMail(
					user,
					`${process.env.API_URL}/api/auth/activate/${user.activationLink}`,
				);
			}

			/* Saving the refresh token in the database. */
			await this.tokensService.saveToken(user._id, tokens.refreshToken);

			await session.commitTransaction();
			return { ...tokens, user };
		} catch (err) {
			await session.abortTransaction();
			throw err;
		} finally {
			session.endSession();
		}
	}

	/**
	 * We're getting the user by the email, checking if the password is correct, generating a token for the
	 * user, saving the refresh token in the database, and returning the access and refresh tokens, and the
	 * user
	 * @param {AuthUserDto} dto - AuthUserDto - the object that contains the user's email and password.
	 * @returns { ...tokens, user }
	 */
	async login(dto: AuthUserDto): Promise<AuthResponseDto> {
		const user = await this.userService.getUserByEmail(dto.email);
		if (!user) {
			throw new HttpException(
				`User with this email: ${dto.email} doesn't exists`,
				HttpStatus.BAD_REQUEST,
			);
		}

		const isPassEquals = await bcrypt.compare(dto.password, user.password);
		if (!isPassEquals) {
			throw new HttpException(
				`Password doesn't match. Try another one`,
				HttpStatus.BAD_REQUEST,
			);
		}

		/* Creating a new instance of the CreateTokenDto class. */
		const userDto = new CreateTokenDto(user);

		/* Generating a token for the user. */
		const tokens = this.tokensService.generateToken({ ...userDto });

		/* Saving the refresh token in the database. */
		await this.tokensService.saveToken(user._id, tokens.refreshToken);

		return { ...tokens, user }; // return access&refresh tokens, and user
	}

	/**
	 * It verifies the token, gets the user by email, if the user doesn't exist, it creates a new user with
	 * a random password, generates a token for the user, and saves the refresh token in the database
	 * @param {string} token - The token that we get from the frontend.
	 * @returns It returns the access and refresh tokens, and the user.
	 */
	async googleAuth(token: string): Promise<AuthResponseDto> {
		try {
			/* Creating a new instance of the OAuth2Client class. */
			const client = new OAuth2Client(
				process.env.GOOGLE_CLIENT_ID,
				process.env.GOOGLE_CLIENT_SECRET,
			);

			/* It verifies the token and returns the payload. */
			const ticket = await client.verifyIdToken({
				idToken: token,
				audience: process.env.GOOGLE_CLIENT_ID,
			});

			/* It returns the payload of the token. */
			const payload = ticket.getPayload();

			/* Getting the user by email. */
			const user = await this.userService.getUserByEmail(payload.email);

			/* If the user doesn't exist, it creates a new user with a random password. */
			if (!user) {
				const pass = uuid.v4();

				const user = await this.registration(
					{
						email: payload.email,
						password: pass,
						repeatPassword: pass,
					},
					true,
				);
				return user;
			}

			/* Creating a new instance of the CreateTokenDto class. */
			const userDto = new CreateTokenDto(user);

			/* Generating a token for the user. */
			const tokens = this.tokensService.generateToken({ ...userDto });

			/* Saving the refresh token in the database. */
			await this.tokensService.saveToken(user._id, tokens.refreshToken);

			return { ...tokens, user }; // return access&refresh tokens, and user
		} catch (err) {
			throw new HttpException(
				`Error during google sign in: ${err.message}`,
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	/**
	 * It's checking if the user & token exists, get new data about user if something changed since last
	 * login, create userDto, get tokens, save refresh token into the database, and return access&refresh
	 * tokens, and user
	 * @param {string} refreshToken - string - the refresh token that was sent in the request
	 * @returns { ...tokens, user }
	 */
	async refresh(refreshToken: string): Promise<AuthResponseDto> {
		if (!refreshToken) {
			throw new HttpException(
				`No refresh token was found in the request`,
				HttpStatus.UNAUTHORIZED,
			);
		}

		const userData = this.tokensService.validateToken(
			refreshToken,
			process.env.JWT_REFRESH_KEY,
		);
		const tokenFromDb = await this.tokensService.findToken(refreshToken);

		/* It's checking if the user & token exists. */
		if (!userData || !tokenFromDb) {
			throw new HttpException(
				`User or token was not found`,
				HttpStatus.UNAUTHORIZED,
			);
		}

		/* get new data about user if something changed since last login */
		const user = await this.userService.getUserByEmail(userData.email);

		const userDto = new CreateTokenDto(user); // create userDto
		const tokens = this.tokensService.generateToken({ ...userDto }); // get tokens
		await this.tokensService.saveToken(userDto.id, tokens.refreshToken); // save refresh token into the database
		return { ...tokens, user }; // return access&refresh tokens, and user
	}

	/**
	 * It's activating account of user when he clicks on email link
	 * @param {string} activationLink - string - The activation link that was sent to the user's email.
	 */
	async activate(activationLink: string): Promise<void> {
		const user = await this.userService.verifyActivationLink(
			activationLink,
		);

		/* It's checking if the user exists. */
		if (!user) {
			throw new HttpException(
				`Incorrect activation link`,
				HttpStatus.BAD_REQUEST,
			);
		}
	}

	/**
	 * It's checking if the refresh token was deleted from the database and logs out user
	 * @param {string} refreshToken - string - the refresh token that was sent from the client.
	 * @returns It's returning the status of the refresh token deletion.
	 */
	async logout(refreshToken: string): Promise<StatusResponseDto> {
		const token = await this.tokensService.removeToken(refreshToken); // remove refresh token from DB if user logs out

		/* It's checking if the refresh token was deleted from the database. */
		if (token?.deletedCount > 0) {
			return { status: 'Deleted refresh token!' };
		} else {
			throw new HttpException(
				`Nothing was deleted, check if user has refresh token in cookies`,
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	/**
	 * It takes an email as an argument, finds the user with that email, generates a reset token, and sends
	 * an email with a link to reset the password
	 * @param {string} email - The email of the user who wants to reset their password.
	 * @returns return { status: 'reset email successfuly sent' };
	 */
	async resetPassword(
		email: string,
		ip: ParameterDecorator,
	): Promise<StatusResponseDto> {
		const user = await this.userService.getUserByEmail(email);

		if (!user) {
			throw new HttpException(
				`User with this email: ${email} not found`,
				HttpStatus.BAD_REQUEST,
			);
		}
		const userDto = new CreateTokenDto(user);

		const token = this.tokensService.generateResetToken({ ...userDto });

		await this.mailsService.sendResetEmail(
			user,
			`${process.env.API_URL}/api/auth/verify-reset/${userDto.email}/${token}`,
			ip,
		); // send activation email

		return { status: 'Reset email successfuly sent' };
	}

	/**
	 * It verifies that the user exists and that the token is valid
	 * @param {string} email - The email of the user who requested the password reset.
	 * @param {string} token - The token that was sent to the user's email.
	 */
	async verifyReset(email: string, token: string): Promise<any> {
		const user = await this.userService.getUserByEmail(email);

		if (!user) {
			throw new HttpException(
				`User with this email: ${email} not found`,
				HttpStatus.BAD_REQUEST,
			);
		}

		/* It's checking if the token is valid and throws error if not */
		const validation = this.tokensService.validateToken(
			token,
			process.env.JWT_SECURE_KEY,
		);
		if (!validation) {
			throw new HttpException(`Jwt token expired`, HttpStatus.FORBIDDEN);
		}
	}

	/**
	 * It takes a ResetUserDto object, finds the user by email, validates the token, hashes the password,
	 * and updates the user's password
	 * @param {ResetUserDto} dto - ResetUserDto - this is the data transfer object that we will use to send
	 * the data to the server.
	 */
	async updatePassword(dto: ResetUserDto): Promise<void> {
		const user = await this.userService.getUserByEmail(dto.email);

		if (!user) {
			throw new HttpException(
				`User with this email: ${dto.email} not found`,
				HttpStatus.BAD_REQUEST,
			);
		}

		const validation = this.tokensService.validateToken(
			dto.token,
			process.env.JWT_SECURE_KEY,
		);
		if (!validation) {
			throw new HttpException(`Jwt token expired`, HttpStatus.FORBIDDEN);
		}

		const hashPassword = await bcrypt.hash(dto.password, 3); // hash password
		await this.userService.updateUserPassword(hashPassword, dto.email);
	}
}
