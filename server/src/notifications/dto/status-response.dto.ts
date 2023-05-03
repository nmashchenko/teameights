import { ApiProperty } from '@nestjs/swagger';

export class StatusResponseDto {
	@ApiProperty({
		example: '',
		description: `Deleted refresh token!'`,
	})
	status: string;

	@ApiProperty({
		example: '',
		description: `Deleted refresh token!'`,
		required: false,
	})
	errors?: string;
}
