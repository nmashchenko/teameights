import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { HydratedDocument } from 'mongoose';

import { Team } from '@/teams/teams.schema';

export type TournamentDocument = HydratedDocument<Tournament>;

class TournamentParticipants {
	@ApiProperty({
		required: true,
		example: '5f6d70a6f0e8b23d6c82f6a1',
	})
	@Prop({ required: true })
	team_id: mongoose.Types.ObjectId;

	@ApiProperty({
		required: true,
		example: '5f6d70a6f0e8b23d6c82f6a2',
	})
	@Prop({ required: true })
	frontend_id: mongoose.Types.ObjectId;

	@ApiProperty({
		required: true,
		example: '5f6d70a6f0e8b23d6c82f6a3',
	})
	@Prop({ required: true })
	backend_id: mongoose.Types.ObjectId;
}

@Schema({ timestamps: true })
export class Tournament {
	@ApiProperty({
		required: true,
		example: 'Tournament 1',
	})
	@Prop({ required: true })
	tournament_name: string;

	@ApiProperty({
		required: true,
		type: [TournamentParticipants],
		example: [
			{
				team_id: '5f6d70a6f0e8b23d6c82f6a1',
				frontend_id: '5f6d70a6f0e8b23d6c82f6a2',
				backend_id: '5f6d70a6f0e8b23d6c82f6a3',
			},
		],
	})
	@Prop({ required: true })
	tournament_participants: [TournamentParticipants];

	@ApiProperty({
		required: true,
		example: '2021-08-01T10:00:00.000Z',
	})
	@Prop({ required: true })
	tournament_startTime: Date;

	@ApiProperty({
		required: true,
		example: '2021-08-01T17:00:00.000Z',
	})
	@Prop({ required: true })
	tournament_endTime: Date;

	@ApiProperty({
		example: 'upcoming',
		description: 'Status of tournament',
	})
	@Prop({
		required: true,
		type: String,
		enum: ['upcoming', 'going', 'finished'],
		default: 'upcoming',
	})
	status: string;

	@ApiProperty({
		example: '5f6d8b6db0c6d71be6e0e070',
		description: 'ID of team that won in tournament',
		required: true,
	})
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Team' })
	winner: Team;

	// @ApiProperty({
	// 	required: true,
	// 	example: '10 Teamcoins',
	// })
	// @Prop({ required: true })
	// tournament_prize: Number;
}

export const TournamentSchema = SchemaFactory.createForClass(Tournament);
