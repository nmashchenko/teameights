import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsMongoId, IsOptional } from 'class-validator';
import mongoose from 'mongoose';

class TournamentTeam {
	@ApiProperty({
		required: true,
		example: '5f6d70a6f0e8b23d6c82f6a1',
	})
	@IsMongoId()
	readonly team_id: mongoose.Types.ObjectId;

	@ApiProperty({
		required: true,
		example: 50,
	})
	@IsMongoId()
	@IsOptional()
	readonly frontendScore: number;

	@ApiProperty({
		required: true,
		example: 50,
	})
	@IsMongoId()
	readonly backendScore: number;
}

export class UpdateTournamentDto {
	@ApiProperty({
		required: true,
		example: '5f6d70a6f0e8b23d6c82f6a1',
	})
	@IsMongoId()
	readonly tournament_id: mongoose.Types.ObjectId;

	@ApiProperty({
		required: true,
		type: TournamentTeam,
		example: [
			{
				team_id: '5f6d70a6f0e8b23d6c82f6a1',
				frontendScore: 50,
				backendScore: 50,
			},
		],
	})
	@IsArray()
	readonly tournament_team: TournamentTeam;
}
