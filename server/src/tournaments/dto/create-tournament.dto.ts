import { Team } from '@/teams/teams.schema';
import { User } from '@/users/users.schema';
import { ApiProperty } from '@nestjs/swagger';
import {
	IsArray,
	IsDate,
	IsDateString,
	IsMongoId,
	IsOptional,
	IsString,
} from 'class-validator';
import mongoose from 'mongoose';

class TournamentParticipantsDto {
	@ApiProperty({
		required: true,
		example: '5f6d70a6f0e8b23d6c82f6a1',
	})
	@IsMongoId()
	readonly team_id: mongoose.Types.ObjectId;

	@ApiProperty({
		required: true,
		example: '5f6d70a6f0e8b23d6c82f6a2',
	})
	@IsMongoId()
	readonly frontend_id: mongoose.Types.ObjectId;

	@ApiProperty({
		required: true,
		example: '5f6d70a6f0e8b23d6c82f6a3',
	})
	@IsMongoId()
	readonly backend_id: mongoose.Types.ObjectId;
}

export class CreateTournamentDto {
	@ApiProperty({
		required: true,
		example: 'Tournament 1',
	})
	@IsString()
	readonly tournament_name: string;

	@ApiProperty({
		required: true,
		type: [TournamentParticipantsDto],
		example: [
			{
				team_id: '5f6d70a6f0e8b23d6c82f6a1',
				frontend_id: '5f6d70a6f0e8b23d6c82f6a2',
				backend_id: '5f6d70a6f0e8b23d6c82f6a3',
			},
		],
	})
	@IsArray()
	readonly tournament_participants: TournamentParticipantsDto[];

	@ApiProperty({
		required: true,
		example: '2021-08-01T10:00:00.000Z',
	})
	@IsDateString()
	readonly tournament_startTime: Date;

	@ApiProperty({
		required: true,
		example: '2021-08-01T17:00:00.000Z',
	})
	@IsDateString()
	readonly tournament_endTime: Date;

	@ApiProperty({
		example: 'upcoming',
		description: 'Status of tournament',
		enum: ['upcoming', 'going', 'finished'],
		default: 'upcoming',
	})
	@IsString()
	readonly status: string;

	@ApiProperty({
		example: '5f6d8b6db0c6d71be6e0e070',
		description: 'ID of team that won in tournament',
	})
	@IsOptional()
	readonly winner: Team;
}
