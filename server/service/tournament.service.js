const Tournament = require("../models/Tournament");
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

  async addToTournament(t_id, team_id) {
    try {
      const checkTeam = await Team.findOne({
        _id: team_id,
      });

      if (checkTeam) {
        return {};
      }

      const tournament = await Tournament.findOneAndUpdate(
        {
          tournament_id: t_id,
        },
        {
          tournament_participants: {
            team_id: team_id,
          },
        },
        { new: true }
      );

      const foundTournament = await Tournament.updateOne(
        { tournament_id: t_id },
        {
          $push: {
            tournament_participants: {
              team_id: team_id,
            },
          },
        }
      );

      return tournament;
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new TournamentService();
