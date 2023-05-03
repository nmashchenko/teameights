import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { HydratedDocument } from 'mongoose';

export type LeaderboardDocument = HydratedDocument<Leaderboard>;

class TournamentTeam {
	@ApiProperty({
		required: true,
		example: '5f6d70a6f0e8b23d6c82f6a1',
	})
	@Prop({ required: true })
	team_id: mongoose.Types.ObjectId;

	@ApiProperty({
		required: true,
		example: 50,
	})
	@Prop({ required: true })
	frontendScore: number;

	@ApiProperty({
		required: true,
		example: 50,
	})
	@Prop({ required: true })
	backendScore: number;
}

@Schema({ timestamps: true })
export class Leaderboard {
	@ApiProperty({
		required: true,
		example: '5f6d70a6f0e8b23d6c82f6a1',
	})
	@Prop({ required: true })
	tournament_id: mongoose.Types.ObjectId;

	@ApiProperty({
		required: true,
		type: [TournamentTeam],
		example: {
			team_id: '5f6d70a6f0e8b23d6c82f6a1',
			frontendScore: 50,
			backendScore: 50,
		},
	})
	@Prop({ required: true })
	tournament_teams: TournamentTeam[];
}

export const LeaderboardSchema = SchemaFactory.createForClass(Leaderboard);
