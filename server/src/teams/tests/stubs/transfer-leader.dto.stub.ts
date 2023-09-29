import mongoose from 'mongoose';

import { TransferLeaderDto } from '@/teams/dto/transfer-leader.dto';

export const TransferLeaderDtoStub = (
	leader_id: mongoose.Types.ObjectId,
	new_leader_id: mongoose.Types.ObjectId,
	teamid: mongoose.Types.ObjectId,
): TransferLeaderDto => {
	return {
		leader_id: leader_id,
		new_leader_id: new_leader_id,
		teamid: teamid,
	};
};