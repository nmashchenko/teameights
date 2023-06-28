import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class BetaSignUpDto {
	@ApiProperty({ example: 'test@teameights.com', description: 'Email' })
	@IsString({ message: 'Email should be string' })
	@IsEmail({}, { message: 'Email is not correct' })
	readonly email: string;
}
