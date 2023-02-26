import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { NotificationDto } from './notification.dto';

export class SystemNotificationDto extends NotificationDto {
	constructor() {
		super();
	}

	@ApiProperty({
		example: 'Welcome to teameights!',
		description: 'This is system notification',
	})
	@IsString()
	system_message: string;
}
