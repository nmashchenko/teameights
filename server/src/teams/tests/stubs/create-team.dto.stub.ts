import mongoose from 'mongoose';
import { uuid } from 'uuidv4';

import { CreateTeamDto } from '@/teams/dto/create-team.dto';
import { TeamType } from '@/teams/types/teams.type';

export const CreateTeamDtoStub = (
	leader: mongoose.Types.ObjectId,
	tag?: string,
	emails?: string[],
	ids?: mongoose.Types.ObjectId[],
): CreateTeamDto => {
	return {
		name: 'Test Team',
		description: 'David fans',
		leader: leader,
		country: 'Ukraine',
		type: TeamType.OPEN,
		tag: tag || uuid().substring(0, 5).toUpperCase(),
		members: {
			emails:
				emails ||
				[
					// uuid().substring(0, 7) + '@gmail.com',
					// uuid().substring(0, 7) + '@gmail.com',
				],
			ids: ids || [
				new mongoose.Types.ObjectId(),
				new mongoose.Types.ObjectId(),
			],
		},
	};
};
