import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsJWT, IsString, Length } from 'class-validator';

export class ResetUserDto {
	@ApiProperty({ example: 'test@teameights.com', description: 'Email' })
	@IsString({ message: 'Should be string' })
	@IsEmail({}, { message: 'Email is not correct' })
	readonly email: string;

	@ApiProperty({
		example:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1tYXNoYzJAdWljLmVkdSIsImlkIjoiNjNhYjM1YjExNTViMGRlMjdmNTMzNGE0Iiwicm9sZXMiOlt7Il9pZCI6IjYzYTFlMTY4N2NhNjY3YTc3Y2Y0MjY1NCIsInZhbHVlIjoiVVNFUiIsImRlc2NyaXB0aW9uIjoiZGVmYXVsdCB1c2VyIiwiY3JlYXRlZEF0IjoiMjAyMi0xMi0yMFQxNjoyMzowNC4yOTBaIiwidXBkYXRlZEF0IjoiMjAyMi0xMi0yMFQxNjoyMzowNC4yOTBaIiwiX192IjowfV0sImlhdCI6MTY3MjI1NTU0NCwiZXhwIjoxNjcyMjU2NDQ0fQ.e9G0TyEGkFlLqj64lDqRzGM1s0lG34CfhjdNZj6GtBA',
		description: 'JWT token that is valid for 15 minutes',
	})
	@IsString({ message: 'Should be string' })
	@IsJWT({ message: 'Should be JWT token' })
	readonly token: string;

	@ApiProperty({ example: '12345678', description: 'Password' })
	@IsString({ message: 'Should be string' })
	@Length(7, 20, {
		message: 'Should be more than 7 and less than 20 characters',
	})
	readonly password: string;
}
