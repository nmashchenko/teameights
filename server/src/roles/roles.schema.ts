import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type RoleDocument = HydratedDocument<Role>;

@Schema({ timestamps: true })
export class Role {
	_id: mongoose.Types.ObjectId;

	@ApiProperty({ example: 'ADMIN', description: 'Role of the user' })
	@Prop({ required: true, unique: true })
	value: string;

	@ApiProperty({
		example: 'Admin allows user to create/delete tournaments',
		description: 'Description of the functionality',
	})
	@Prop({ required: true })
	description: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
