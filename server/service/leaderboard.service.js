const Tournament = require("../models/Tournament");
const Team = require("../models/Team");
const Leaderboard = require("../models/Leaderboard");
const isEqual = require("lodash/isEqual");

class LeaderboardService {
  async updateLeaderboard(t_id, submission) {
    const leaderboard = await Leaderboard.findOne({ tournament_id: t_id });
    if (!leaderboard) {
      const newEntry = await Leaderboard.create({
        tournament_id: t_id,
        results: [submission],
      });
      console.log(newEntry);
      return { status: "created successfully" };
    } else {
      const test = Leaderboard.findOne({
        "results.team_id": submission.team_id,
      });

      console.log(submission.frontendScore);
      const updated = await Leaderboard.updateOne(
        {
          "results.team_id": submission.team_id,
        },
        submission.frontendScore === undefined
          ? { $set: { "results.$.backendScore": submission.backendScore } }
          : { $set: { "results.$.frontendScore": submission.frontendScore } }
      );

      console.log(updated);
      return { status: "updated successfully" };
    }
  }

  async getLeaderboard(t_id) {
    const leaderboard = await Leaderboard.findOne({ tournament_id: t_id });
    return leaderboard.results;
  }
}

module.exports = new LeaderboardService();
