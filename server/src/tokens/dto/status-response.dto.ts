import { ApiProperty } from '@nestjs/swagger';

export class StatusResponseDto {
	@ApiProperty({
		example: '',
		description: `Deleted refresh token!'`,
	})
	status: string;

	@ApiProperty({
		example: 1,
		description: `Deleted count'`,
		required: false,
	})
	deletedCount?: number;
}
