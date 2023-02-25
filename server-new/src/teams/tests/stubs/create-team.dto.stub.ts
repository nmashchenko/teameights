import { CreateTeamDto } from '@/teams/dto/create-team.dto';
import { TeamType } from '@/teams/types/teams.type';
import mongoose from 'mongoose';

export const CreateTeamDtoStub = (
	leaderId: mongoose.Types.ObjectId,
): CreateTeamDto => {
	return {
		name: 'Test Team',
		description: 'David fans',
		leader: leaderId,
		country: 'Ukraine',
		type: TeamType.OPEN,
	};
};
