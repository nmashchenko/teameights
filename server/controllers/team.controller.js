// * Services
const teamService = require("../service/team.service");

// * Exception
const ApiError = require("../exceptions/api.error");

class TeamController {
  async createTeam(req, res, next) {
    try {
      const { teamName, teamCountry, teamMembers } = req.body;
      const createdTeam = await teamService.createTeam(
        teamName,
        teamCountry,
        teamMembers
      );

      return res.json(createdTeam);
    } catch (err) {
      next(err);
    }
  }

  async getTeams(req, res, next) {
    try {
      const createdTeam = await teamService.getTeams();

      return res.json(createdTeam);
    } catch (err) {
      next(err);
    }
  }

  async addToTeam(req, res, next) {
    try {
      const { teamId, userId } = req.body;
      const createdTeam = await teamService.addToTeam(teamId, userId);

      return res.json(createdTeam);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new TeamController();
