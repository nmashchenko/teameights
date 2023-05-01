import mongoose from 'mongoose';

import { InviteToTeamDto } from '@/teams/dto/invite-to-team.dto';

export const InviteToTeamDtoStub = (
	email: string,
	from_user_id: mongoose.Types.ObjectId,
	teamid: mongoose.Types.ObjectId,
): InviteToTeamDto => {
	return {
		email: email,
		from_user_id: from_user_id,
		teamid: teamid,
	};
};
