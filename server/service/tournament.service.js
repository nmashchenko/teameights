const Tournament = require("../models/Tournament");
const Team = require("../models/Team");
const isEqual = require("lodash/isEqual");

class TournamentService {
  async createTournament(t_name, t_participants, t_startTime, t_endTime) {
    const tournament = await Tournament.create({
      tournament_name: t_name,
      tournament_participants: t_participants,
      tournament_startTime: t_startTime,
      tournament_endTime: t_endTime,
    });

    return tournament;
  }

  async getTournaments() {
    const foundTournaments = await Tournament.find({});
    return foundTournaments;
  }

  async getTournamentbyId(t_id) {
    const foundTournament = await Tournament.findOne({ _id: t_id });

    console.log(foundTournament);
    return foundTournament;
  }

  async addToTournament(t_id, team_id, frontend_id, backend_id) {
    const checkTeam = await Team.findOne({
      _id: team_id,
    });

    if (!checkTeam) {
      return {
        error: "Team not found",
      };
    }

    // Check if team is already added to the tournament
    const checkTeamTournamentExists = await Tournament.findOne(
      {
        _id: t_id,
      },
      { tournament_participants: { $elemMatch: { team_id: team_id } } }
    );

    if (!isEqual(checkTeamTournamentExists.tournament_participants, [])) {
      return { error: `Team ${team_id} already exists in this tournament!` };
    }

    const tournament = await Tournament.findOneAndUpdate(
      {
        _id: t_id,
      },
      {
        $push: {
          tournament_participants: {
            team_id: team_id,
            frontend_id: frontend_id,
            backend_id: backend_id,
          },
        },
      },
      { new: true }
    );

    return tournament;
  }

  async userExistsInTournament(userId) {
    // Check if user already exists as a frontend OR backend competitor
    const checkUserFrontEnd = await Tournament.findOne({
      tournament_participants: { $elemMatch: { frontend_id: userId } },
    });
    const checkUserBackEnd = await Tournament.findOne({
      tournament_participants: { $elemMatch: { backend_id: userId } },
    });

    if (checkUserFrontEnd) {
      return {
        exists: true,
        role: "frontend",
      };
    } else if (checkUserBackEnd) {
      return {
        exists: true,
        role: "backend",
      };
    } else {
      return {
        exists: false,
      };
    }
  }
}

module.exports = new TournamentService();
