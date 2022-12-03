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
        { userTeam: team._id },
        { new: true }
      );

      return user;
    } else {
      return {};
    }
  }

  async getTeams() {
    const foundTeams = await Team.find({});
    return foundTeams;
  }

  async getTeamById(teamId) {
    const foundTeams = await Team.findOne({ _id: teamId });

    console.log(foundTeams);
    return foundTeams;
  }

  async addToTeam(teamId, userId) {
    const checkUserTeam = await User.findOne({
      _id: userId,
      userTeam: { $exists: true },
    });

    if (checkUserTeam) {
      return {};
    }

    const user = await User.findOneAndUpdate(
      {
        _id: userId,
      },
      { userTeam: teamId },
      { new: true }
    );

    const foundTeams = await Team.updateOne(
      { _id: teamId },
      { $push: { members: userId } }
    );

    /* TODO: Add limit for 8 users in 1 team */
    return user;
  }

  /* TODO: Change for actual invite to the notification box later instead of instantly adding to team */
  async inviteByEmail(email, teamId) {
    const user = await User.findOne({
      email: email,
    });

    if (user === null) {
      return {
        error: "User doesn't exist",
      };
    }

    if (user.userTeam) {
      return {
        error: "User already in team",
      };
    }

    await User.findOneAndUpdate(
      {
        email: email,
      },
      { userTeam: teamId }
    );

    const updatedTeam = await Team.updateOne(
      { _id: teamId },
      { $push: { members: user._id } }
    );

    /* TODO: Add limit for 8 users in 1 team */
    return {
      status: "success",
    };
  }

  async getTeamMembers(teamMembers) {
    const users = await User.find({
      _id: { $in: teamMembers },
    });

    return users;
  }
}

module.exports = new TeamService();
