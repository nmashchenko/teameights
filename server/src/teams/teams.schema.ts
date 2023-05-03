import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

import { User } from '@/users/users.schema';

import { TeamType } from './types/teams.type';

export type TeamsDocument = HydratedDocument<Team>;

@Schema({ timestamps: true })
export class Team {
	_id: mongoose.Types.ObjectId;

	@ApiProperty({ example: 'The A-Team', description: 'Name of the team' })
	@Prop({ required: true })
	name: string;

	@ApiProperty({
		example: 'A group of skilled individuals who work together on projects',
		description: 'Description of the team',
	})
	@Prop({ required: false })
	description: string;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
	leader: User;

	@ApiProperty({
		example: ['5f6d8b6db0c6d71be6e0e071'],
		description: 'ID of the members of the team',
	})
	@Prop({
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'User',
		required: false,
	})
	members: [User];

	@ApiProperty({ example: 'Ukraine', description: 'Country of the team' })
	@Prop({ required: true })
	country: string;

	@ApiProperty({ example: 'KhaG', description: 'Unique TAG of the team' })
	@Prop({ required: true, unique: true, maxlength: 5, minlength: 1 })
	tag: string;

	// TODO:  add amount of tournaments played
	// @ApiProperty({
	// 	example: [Tournament],
	// 	description: 'Amount of tournaments played',
	// })
	// @Prop({ required: false })
	// tournaments: [Tournament];

	@ApiProperty({
		example: 'open',
		description: 'Type of invite',
	})
	@Prop({
		required: true,
		type: String,
		enum: TeamType,
		default: 'open',
	})
	type: string;

	@ApiProperty({
		example: 3,
		description: 'Number of tournaments that the team has won',
	})
	@Prop({ required: false })
	wins: number;

	@ApiProperty({
		example: 10,
		description: 'Number of points that the team has earned in the tournaments',
	})
	@Prop({ required: false })
	points: number;

	@ApiProperty({
		example: 'image/teams/uuid.png',
		description: 'Image of the team',
	})
	@Prop({ required: false })
	image: string;
}

export const TeamsSchema = SchemaFactory.createForClass(Team);
