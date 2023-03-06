import { CreateTeamDto } from '@/teams/dto/create-team.dto';
import { TeamType } from '@/teams/types/teams.type';
import mongoose from 'mongoose';

export const CreateTeamDtoStub = (
	leader: mongoose.Types.ObjectId,
): CreateTeamDto => {
	return {
		name: 'Test Team',
		description: 'David fans',
		leader: leader,
		country: 'Ukraine',
		type: TeamType.OPEN,
	};
};
