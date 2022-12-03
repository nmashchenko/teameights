const tournamentService = require("../service/tournament.service");
class TournamentController {
  async createTournament(req, res, next) {
    try {
      const { t_name, t_participants, t_startTime, t_endTime } = req.body;
      const createdTournament = await tournamentService.createTournament(
        t_name,
        t_participants,
        t_startTime,
        t_endTime
      );
      return res.send(createdTournament);
    } catch (err) {
      next(err);
    }
  }

  async getTournaments(req, res, next) {
    try {
      const tournaments = await tournamentService.getTournaments();
      return res.json(tournaments);
    } catch (err) {
      next(err);
    }
  }

  async getTournamentById(req, res, next) {
    try {
      const { t_id } = req.body;
      console.log(t_id);
      const tournament = await tournamentService.getTournamentbyId(t_id);
      return res.json(tournament);
    } catch (err) {
      next(err);
    }
  }

  async addToTournament(req, res, next) {
    try {
      const { t_id, team_id, frontend_id, backend_id } = req.body;
      console.log('adding team ', team_id, ' to tournament ', t_id);
      const tournament = await tournamentService.addToTournament(t_id, team_id, frontend_id, backend_id);
      return res.json(tournament);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new TournamentController();
