//* Models
const Team = require("../models/Team");
const User = require("../models/User");
const isEqual = require("lodash/isEqual");
const includes = require("lodash/includes");

class TeamService {
  async createTeam(teamName, teamCountry, teamMembers) {
    const checkExistence = await Team.find({ members: teamMembers[0] });

    if (isEqual(checkExistence, [])) {
      const team = await Team.create({
        name: teamName,
        country: teamCountry,
        points: 0,
        members: teamMembers,
      });

      const user = await User.findOneAndUpdate(
        {
          _id: { $in: teamMembers },
        },
        { userTeam: team._id }
      );

      return team;
    } else {
      return {};
    }
  }

  async getTeams() {
    try {
      const foundTeams = await Team.find({});
      return foundTeams;
    } catch (err) {
      next(err);
    }
  }

  async addToTeam(teamId, userId) {
    try {
      const checkUserTeam = await User.findOne({
        _id: userId,
        userTeam: { $exists: true },
      });

      if (checkUserTeam) {
        return {};
      }

      await User.findOneAndUpdate(
        {
          _id: userId,
        },
        { userTeam: teamId }
      );

      const foundTeams = await Team.updateOne(
        { _id: teamId },
        { $push: { members: userId } }
      );

      /* TODO: Add limit for 8 users in 1 team */
      return foundTeams;
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new TeamService();
