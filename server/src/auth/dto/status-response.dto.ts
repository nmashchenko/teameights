import { ApiProperty } from '@nestjs/swagger';

export class StatusResponseDto {
	@ApiProperty({
		example: '',
		description: `Deleted refresh token!'`,
	})
	status: string;
}
