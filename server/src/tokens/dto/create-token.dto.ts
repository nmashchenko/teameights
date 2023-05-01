import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

import { Role } from '@/roles/roles.schema';
import { User } from '@/users/users.schema';

export class CreateTokenDto {
	@ApiProperty({ example: 'teameights@help.com', description: `Email` })
	readonly email: string;
	@ApiProperty({
		example: '63a1dd6aa8e9973fd36e0a46',
		description: `ObjectId`,
	})
	readonly id: mongoose.Types.ObjectId;
	@ApiProperty({
		example: '63a1dd6aa8e9973fd36e0a46',
		description: JSON.stringify([Role]),
	})
	readonly roles: Role[];

	constructor(model: User) {
		this.email = model.email;
		this.id = model._id;
		this.roles = model.roles;
	}
}
