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
      const teams = await teamService.getTeams();
      return res.json(teams);
    } catch (err) {
      next(err);
    }
  }

  async getTeamById(req, res, next) {
    try {
      const { teamId } = req.body;
      console.log(teamId);
      const team = await teamService.getTeamById(teamId);
      return res.json(team);
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

  /* TODO: Change for actual invite to the notification box later instead of instantly adding to team */
  async inviteByEmail(req, res, next) {
    try {
      const { email, teamId } = req.body;
      const invitedUser = await teamService.inviteByEmail(email, teamId);
      return res.json(invitedUser);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new TeamController();
