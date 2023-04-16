import { UpdateTeamDto } from '@/teams/dto/update-team.dto';
import { TeamType } from '@/teams/types/teams.type';
import mongoose from 'mongoose';

export const UpdateTeamDtoStub = (
	teamid: mongoose.Types.ObjectId,
): UpdateTeamDto => {
	return {
		teamid: teamid,
		name: 'Changed name',
		description: 'I changed name here',
		country: 'USA',
		type: TeamType.CLOSED,
		tag: 'BEST',
		wins: 200,
		points: 20000,
	};
};
