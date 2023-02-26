import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({})
export class SystemNotification {
	type: string;

	@ApiProperty({
		example: 'Welcome to teameights!',
		description: 'This is system notification',
	})
	@Prop({ required: true })
	system_message: string;
}

export const SystemNotificationSchema =
	SchemaFactory.createForClass(SystemNotification);
