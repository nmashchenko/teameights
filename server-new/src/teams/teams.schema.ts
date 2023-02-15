import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '@/users/users.schema';

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
		example: ['5f6d8b6db0c6d71be6e0e071', '5f6d8b6db0c6d71be6e0e072'],
		description: 'IDs of the members of the team',
	})
	@Prop({
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'User',
		required: true,
	})
	members: [User];

	@ApiProperty({ example: 'Ukraine', description: 'Country of the team' })
	@Prop({ required: true })
	country: string;

	// TODO:  add amount of tournaments played
	// @ApiProperty({
	// 	example: [Tournament],
	// 	description: 'Amount of tournaments played',
	// })
	// @Prop({ required: false })
	// tournaments: [Tournament];

	// TODO:  add type of team ['invite-only', 'closed', 'open']

	@ApiProperty({
		example: 3,
		description: 'Number of tournaments that the team has won',
	})
	@Prop({ required: false })
	wins: Number;

	@ApiProperty({
		example: 10,
		description:
			'Number of points that the team has earned in the tournaments',
	})
	@Prop({ required: false })
	points: Number;

	@ApiProperty({
		example: 'image/teams/uuid.png',
		description: 'Image of the team',
	})
	@Prop({ required: false })
	image: string;
}

export const TeamsSchema = SchemaFactory.createForClass(Team);
