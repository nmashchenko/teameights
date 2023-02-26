import { HttpException, HttpStatus, Injectable, Options } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { ClientSession, Model, Mongoose, ObjectId } from 'mongoose';
import { CreateTokenDto } from './dto/create-token.dto';
import { TokenPair } from './dto/token.dto';
import { Token, TokenDocument } from './tokens.schema';

@Injectable()
export class TokensService {
	constructor(
		@InjectModel(Token.name) private tokenModel: Model<TokenDocument>,
		private jwtService: JwtService,
	) {}

	/**
	 * It takes a payload, signs it with the access key, and returns an access token. It then signs the
	 * same payload with the refresh key, and returns a refresh token
	 * @param {CreateTokenDto} payload - CreateTokenDto
	 * @returns An object with two properties, accessToken and refreshToken.
	 */
	generateToken(payload: CreateTokenDto): TokenPair {
		const accessToken = this.jwtService.sign(payload, {
			secret: process.env.JWT_ACCESS_KEY,
			expiresIn: '24h',
		});
		const refreshToken = this.jwtService.sign(payload, {
			secret: process.env.JWT_REFRESH_KEY,
			expiresIn: '30d',
		});
		return {
			accessToken,
			refreshToken,
		};
	}

	/**
	 * It takes a payload, signs it with a secret key, and returns a token
	 * @param {CreateTokenDto} payload - CreateTokenDto - This is the payload that we will be sending to
	 * the user.
	 * @returns A string
	 */
	generateResetToken(payload: CreateTokenDto): string {
		const token = this.jwtService.sign(payload, {
			secret: process.env.JWT_SECURE_KEY,
			expiresIn: '15m',
		});

		return token;
	}

	/**
	 * It takes a token and a secret, and returns the decoded token if it's valid, or null if it's not
	 * @param {string} token - The token that you want to validate.
	 * @param {string} secret - The secret key used to sign the token.
	 * @returns The user data is being returned.
	 */
	validateToken(token: string, secret: string): CreateTokenDto | null {
		try {
			const userData = this.jwtService.verify(token, {
				secret: secret,
			});
			return userData;
		} catch (err) {
			return null;
		}
	}

	/**
	 * It saves the refresh token to the database
	 * @param userId - mongoose.Types.ObjectId,
	 * @param {string} refreshToken - string - the refresh token that we get from the client
	 * @param {ClientSession} [session] - This is the session that will be used for the transaction. Optional by default
	 * @returns return typeof session !== 'undefined' ? token[0] : token;
	 */
	async saveToken(
		userId: mongoose.Types.ObjectId,
		refreshToken: string,
		session?: ClientSession,
	): Promise<Token> {
		// * Important note: With this approach, for one user we will get only one token,
		// * so this basically means if user is logged in from his PC and will login from
		// * his Ipad, he will be automatically logged out on PC
		const tokenData =
			typeof session !== 'undefined'
				? await this.tokenModel
						.findOne({ user: userId })
						.session(session)
				: await this.tokenModel.findOne({ user: userId });
		if (tokenData) {
			tokenData.refreshToken = refreshToken;
			return typeof session !== 'undefined'
				? await tokenData.save({ session })
				: await tokenData.save();
		}

		const token =
			typeof session !== 'undefined'
				? await this.tokenModel.create(
						[
							{
								user: userId,
								refreshToken,
							},
						],
						{ session },
				  )
				: await this.tokenModel.create({
						user: userId,
						refreshToken,
				  });
		return typeof session !== 'undefined' ? token[0] : token;
	}

	// TODO: Check AND change return types later
	async removeToken(refreshToken: string): Promise<any> {
		const tokenData = await this.tokenModel.deleteOne({ refreshToken });
		return tokenData;
	}

	// TODO: Check AND change return types later
	async findToken(refreshToken: string): Promise<any> {
		const tokenData = await this.tokenModel.findOne({ refreshToken });
		return tokenData;
	}
}
