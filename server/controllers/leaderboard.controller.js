const leaderboardService = require("../service/leaderboard.service");

class LeaderboardController {
  async updateLeaderboard(req, res, next) {
    try {
      const { t_id, submission } = req.body;
      const leaderboard = await leaderboardService.updateLeaderboard(
        t_id,
        submission
      );
      return res.json(leaderboard);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  async getLeaderboard(req, res, next) {
    try {
      const { t_id } = req.body;
      const leaderboard = await leaderboardService.getLeaderboard(t_id);
      return res.json(leaderboard);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = new LeaderboardController();
