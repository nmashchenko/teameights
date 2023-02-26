import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Role } from '@Roles/roles.schema';
import { ApiProperty } from '@nestjs/swagger';
import { Notifications } from '@Notifications/schemas/notifications.schema';
import { Team } from '@Teams/teams.schema';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
	_id: mongoose.Types.ObjectId;

	@ApiProperty({ example: 'teameights1@gmail.com', description: 'Email' })
	@Prop({ required: true, unique: true })
	email: string;

	@ApiProperty({ example: '12345678', description: 'Password' })
	@Prop({ required: true, unique: false })
	password: string;

	@ApiProperty({ example: 'teameights1', description: 'Username' })
	@Prop({ index: { unique: true, sparse: true } })
	username: string;

	@ApiProperty({ example: 'Nikita Mashchenko', description: 'Full Name' })
	@Prop()
	fullName: string;

	@ApiProperty({
		example: 'true',
		description: 'Did user click on confirmation email?',
	})
	@Prop()
	isActivated: Boolean;

	@ApiProperty({
		example: 'true',
		description: 'Did user complete the registration?',
	})
	@Prop()
	isRegistered: Boolean;

	@ApiProperty({
		example: 'true',
		description: 'Does user want to be leader of team?',
	})
	@Prop()
	isLeader: Boolean;

	@ApiProperty({
		example: 'zczx-324j-skdf-xxcd',
		description: 'Activation link that is sent to email',
	})
	@Prop()
	activationLink: string;

	@ApiProperty({ example: 'Ukraine', description: 'Country of user' })
	@Prop()
	country: string;

	@ApiProperty({ example: '17', description: 'Age of user' })
	@Prop()
	age: string;

	@ApiProperty({ example: 'UIC', description: 'University (if any)' })
	@Prop()
	university: string;

	@ApiProperty({
		example: 'Computer Science',
		description: 'Area of studies of user',
	})
	@Prop()
	major: string;

	@ApiProperty({
		example: 'UNIX Date',
		description: 'Date when user graudates',
	})
	@Prop()
	graduationDate: string;

	@ApiProperty({
		example: 'Frontend Developer',
		description: 'Concentration of user',
	})
	@Prop()
	concentration: string;

	@ApiProperty({
		example: '20 y.o. developer from Ukraine',
		description: 'Description of user',
	})
	@Prop()
	description: string;

	@ApiProperty({
		example: '0-1 years',
		description: 'How many years of experience user has',
	})
	@Prop()
	experience: string;

	@ApiProperty({
		example: '/image/zxce-23rw-sfsd-vvvc.jpg',
		description: 'Image of user',
	})
	@Prop()
	image: string;

	@ApiProperty({
		example: {
			github: 'https://github.com',
			linkedin: 'https://linkedin.com',
			instagram: 'https://instagram.com',
			telegram: 'https://telegram.com',
		},
		description: 'Links of the user',
	})
	@Prop({
		_id: false,
		type: {
			github: { type: String },
			linkedIn: { type: String },
			instagram: { type: String },
			telegram: { type: String },
		},
	})
	links: {
		github: string;
		linkedIn: string;
		instagram: string;
		telegram: string;
	};

	@ApiProperty({
		example: ['JS', 'C++'],
		description: 'Programming languages',
	})
	@Prop([String])
	programmingLanguages: string[];

	@ApiProperty({ example: ['NestJS', 'NodeJS'], description: 'Frameworks' })
	@Prop([String])
	frameworks: string[];

	@ApiProperty({
		example: ['USER', 'PREMIUM'],
		description: 'All roles that user has',
	})
	@Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Role' })
	roles: Role[];

	@ApiProperty({
		example: ['5f6d8b6db0c6d71be6e0e070', '5f6d8b6db0c2d71be6e0es70'],
		description: 'All notifications that user has',
	})
	@Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Notifications' })
	notifications: Notifications[];

	@ApiProperty({
		example: '5f6d8b6db0c6d71be6e0e070',
		description: 'Team of user',
	})
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Team' })
	team: Team;
}

export const UserSchema = SchemaFactory.createForClass(User);
