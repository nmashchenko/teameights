import { TeamsService } from '@/teams/teams.service';
import { TournamentsService } from '@/tournaments/tournaments.service';
import { UsersService } from '@/users/users.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { Leaderboard, LeaderboardDocument } from './leaderboard.schema';

@Injectable()
export class LeaderboardService {
	constructor(
		@InjectModel(Leaderboard.name)
		private leaderboardModel: Model<LeaderboardDocument>,
		private readonly teamService: TeamsService,
	) {}

	/**
	 * It creates a new leaderboard for a tournament
	 * We are almost all time sure that tournament_id is valid (unless this function is used somewhere else)
	 * TODO: implement validation check for the real tournament
	 * @param tournament_id - The id of the tournament that the leaderboard is for.
	 * @returns A promise of a leaderboard
	 */
	async createLeaderboard(
		tournament_id: mongoose.Types.ObjectId,
	): Promise<Leaderboard> {
		return await this.leaderboardModel.create({
			tournament_id,
			tournament_teams: [],
		});
	}

	/**
	 * It returns a promise that resolves to an array of leaderboard objects
	 * @returns An array of Leaderboard objects.
	 */
	async getAll(): Promise<Leaderboard[]> {
		return await this.leaderboardModel.find();
	}

	/**
	 * It checks if the team exists in the leaderboard, if it does, it updates the score, if it doesn't, it
	 * adds the team to the leaderboard
	 * @param {UpdateTournamentDto} dto - UpdateTournamentDto
	 * @returns any for now
	 */
	async updateLeaderboard(dto: UpdateTournamentDto): Promise<Leaderboard> {
		const leaderboardCandidate = await this.leaderboardModel.findOne({
			tournament_id: new mongoose.Types.ObjectId(dto.tournament_id),
		});

		if (!leaderboardCandidate) {
			throw new HttpException(
				`Leaderboard for this tournament was not found`,
				HttpStatus.BAD_REQUEST,
			);
		}

		const teamCandidate = await this.teamService.getTeamById(
			dto.tournament_team.team_id,
		);

		if (!teamCandidate) {
			throw new HttpException(
				`Team was not found for this tournament`,
				HttpStatus.BAD_REQUEST,
			);
		}

		const teamIndex = leaderboardCandidate.tournament_teams.findIndex(
			(team) =>
				team.team_id.toString() ===
				dto.tournament_team.team_id.toString(),
		);

		if (teamIndex === -1) {
			leaderboardCandidate.tournament_teams.push(dto.tournament_team);
			await leaderboardCandidate.save();
		} else {
			if (dto.tournament_team.frontendScore !== undefined) {
				leaderboardCandidate.tournament_teams[teamIndex].frontendScore =
					dto.tournament_team.frontendScore;
			}
			if (dto.tournament_team.backendScore !== undefined) {
				leaderboardCandidate.tournament_teams[teamIndex].backendScore =
					dto.tournament_team.backendScore;
			}
		}

		const status = await this.leaderboardModel.findOneAndUpdate(
			{ tournament_id: new mongoose.Types.ObjectId(dto.tournament_id) },
			{ tournament_teams: leaderboardCandidate.tournament_teams },
			{ new: true },
		);

		return status;
	}
}
