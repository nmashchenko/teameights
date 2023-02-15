import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class AuthUserDto {
	@ApiProperty({ example: 'test@teameights.com', description: 'Email' })
	@IsString({ message: 'Email should be string' })
	@IsEmail({}, { message: 'Email is not correct' })
	readonly email: string;

	@ApiProperty({ example: '12345678', description: 'Password' })
	@IsString({ message: 'Password should be string' })
	@Length(7, 20, {
		message: 'Password should be more than 7 and less than 20 characters',
	})
	readonly password: string;
}
