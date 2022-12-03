const tournamentService = require("../service/tournament.service");
class TournamentController {
  async createTournament(req, res, next) {
    try {
      const { t_id, t_name, t_participants, t_startTime, t_endTime } = req.body;
      const createdTournament = await tournamentService.createTournament(
        t_id,
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
}

module.exports = new TournamentController();
