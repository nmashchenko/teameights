import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '@Users/users.schema';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type TokenDocument = HydratedDocument<Token>;

@Schema({ timestamps: true })
export class Token {
	@ApiProperty({
		example: '63a1dd6aa8e9973fd36e0a46',
		description: 'User that has this token',
	})
	@Prop({
		required: true,
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	})
	user: User;

	@ApiProperty({
		example:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Inp4YzUiLCJpZCI6IjYzYTIwZjRiZjdhMmY0ZDdiMmEwZTRmOSIsImVtYWlsIjoienhjNUB0ZWFtZWlnaHRzLmNvbSIsInJvbGVzIjpbeyJfaWQiOiI2M2ExZTE2ODdjYTY2N2E3N2NmNDI2NTQiLCJ2YWx1ZSI6IlVTRVIiLCJkZXNjcmlwdGlvbiI6ImRlZmF1bHQgdXNlciIsImNyZWF0ZWRBdCI6IjIwMjItMTItMjBUMTY6MjM6MDQuMjkwWiIsInVwZGF0ZWRBdCI6IjIwMjItMTItMjBUMTY6MjM6MDQuMjkwWiIsIl9fdiI6MH1dLCJpYXQiOjE2NzE1NjUxMzEsImV4cCI6MTY3MTY1MTUzMX0.P_gHGS-qKGZ8JZfGkGQfMAnUvblpR8--yc7mpmuyTWA',
		description: 'Refresh token that server generate',
	})
	@Prop({ required: true })
	refreshToken: string;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
