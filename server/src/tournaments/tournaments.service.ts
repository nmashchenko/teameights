import { FileService } from '@/files/file.service';
import { LeaderboardService } from '@/leaderboard/leaderboard.service';
import { NotificationsService } from '@/notifications/notifications.service';
import { TeamsService } from '@/teams/teams.service';
import { UsersService } from '@/users/users.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isEqual } from 'lodash';
import mongoose, { Model } from 'mongoose';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { Tournament, TournamentDocument } from './tournaments.schema';

@Injectable()
export class TournamentsService {
	constructor(
		@InjectModel(Tournament.name)
		private tournamentModel: Model<TournamentDocument>,
		private readonly userService: UsersService,
		private readonly filesService: FileService,
		private readonly notificationsService: NotificationsService,
		private readonly teamService: TeamsService,
		private readonly leaderboardService: LeaderboardService,
	) {}

	/**
	 * It creates a new tournament
	 * @param {CreateTournamentDto} dto - CreateTournamentDto - This is the data transfer object that we
	 * created earlier.
	 * @returns A tournament object
	 */
	async createTournament(dto: CreateTournamentDto): Promise<Tournament> {
		/* It checks if the tournament start time is in the past. */
		if (new Date(dto.tournament_startTime) < new Date()) {
			throw new HttpException(
				`Tournament date can't be in the past`,
				HttpStatus.BAD_REQUEST,
			);
		}

		/* It checks if the tournament end time is later than the start time. */
		if (
			new Date(dto.tournament_endTime) <
			new Date(dto.tournament_startTime)
		) {
			throw new HttpException(
				`Start time can't be later than end time`,
				HttpStatus.BAD_REQUEST,
			);
		}

		/* It creates a new tournament. */
		const tournament = await this.tournamentModel.create({
			tournament_name: dto.tournament_name,
			tournament_participants: dto.tournament_participants,
			tournament_startTime: dto.tournament_startTime,
			tournament_endTime: dto.tournament_endTime,
			status: dto.status,
		});

		// create leaderboard
		await this.leaderboardService.createLeaderboard(tournament._id);

		return tournament;
	}

	/**
	 * "Get all tournaments from the database and return them as an array of Tournament objects."
	 *
	 * The `async` keyword tells TypeScript that this function will return a promise. The `await` keyword
	 * tells TypeScript that the function will wait for the promise to resolve before continuing
	 * @returns An array of tournaments
	 */
	async getTournaments(): Promise<Tournament[]> {
		return await this.tournamentModel.find();
	}

	/**
	 * "Get a tournament by its id."
	 *
	 * The first line of the function is the function signature. It's a promise that returns a tournament
	 * @param t_id - mongoose.Types.ObjectId
	 * @returns A tournament object
	 */
	async getTournamentById(
		t_id: mongoose.Types.ObjectId,
	): Promise<Tournament> {
		return await this.tournamentModel.findById(t_id);
	}

	async checkExistance(
		t_id: mongoose.Types.ObjectId,
		userid: mongoose.Types.ObjectId,
	): Promise<Object> {
		const candidateTournament = await this.getTournamentById(t_id);

		/* It checks if the tournament exists. */
		if (!candidateTournament) {
			throw new HttpException(
				`Tournament was not found`,
				HttpStatus.BAD_REQUEST,
			);
		}
		// Check if user already exists as a frontend OR backend competitor
		const checkUserFrontEnd = await this.tournamentModel.findOne({
			tournament_participants: { $elemMatch: { frontend_id: userid } },
		});
		const checkUserBackEnd = await this.tournamentModel.findOne({
			tournament_participants: { $elemMatch: { backend_id: userid } },
		});

		if (checkUserFrontEnd) {
			return {
				exists: true,
				role: 'frontend',
			};
		} else if (checkUserBackEnd) {
			return {
				exists: true,
				role: 'backend',
			};
		} else {
			return {
				exists: false,
			};
		}
	}

	/**
	 * It checks if the team exists, if the tournament exists, if the tournament has already started, if
	 * the team is already signed up for the tournament, and if not, it adds the team to the tournament
	 * @param {SignUpDto} dto - SignUpDto - this is the data transfer object that we will use to pass the
	 * data to the function.
	 * @returns The updated tournament
	 */
	async signUp(dto: SignUpDto): Promise<Tournament> {
		const candidateTeam = await this.teamService.getTeamById(dto.team_id);

		/* It checks if the team exists. */
		if (!candidateTeam) {
			throw new HttpException(
				`Team was not found`,
				HttpStatus.BAD_REQUEST,
			);
		}

		const candidateTournament = await this.getTournamentById(dto.t_id);

		/* It checks if the tournament exists. */
		if (!candidateTournament) {
			throw new HttpException(
				`Tournament was not found`,
				HttpStatus.BAD_REQUEST,
			);
		}

		/* It checks if the tournament has already started. */
		if (new Date() >= new Date(candidateTournament.tournament_startTime)) {
			throw new HttpException(
				`Can't signup for tournament that already started`,
				HttpStatus.BAD_REQUEST,
			);
		}

		/* It checks if the team is already signed up for the tournament. */
		const checkTeamInTournament = await this.tournamentModel.findOne(
			{
				_id: dto.t_id,
			},
			{
				tournament_participants: {
					$elemMatch: { team_id: dto.team_id },
				},
			},
		);

		/* If team is already signed up for the tournament, update the participants, otherwise push new team*/
		if (isEqual(checkTeamInTournament.tournament_participants, [])) {
			return await this.tournamentModel.findOneAndUpdate(
				{
					_id: dto.t_id,
				},
				{
					$push: {
						tournament_participants: {
							team_id: dto.team_id,
							frontend_id: dto.frontend_id,
							backend_id: dto.backend_id,
						},
					},
				},
				{ new: true },
			);
		} else {
			/* It's filtering the participants array and pushing the new participant to the array. */
			const filtered =
				checkTeamInTournament.tournament_participants.filter(
					(participant) => participant.team_id !== dto.team_id,
				);
			const newParticipants = {
				team_id: dto.team_id,
				frontend_id: dto.frontend_id,
				backend_id: dto.backend_id,
			};

			filtered.push(newParticipants);

			return await this.tournamentModel.findOneAndUpdate(
				{
					_id: dto.t_id,
				},
				{
					tournament_participants: filtered,
				},
				{ new: true },
			);
		}
	}
}
