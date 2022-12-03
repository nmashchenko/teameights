const { isEqual } = require("lodash");
const Submission = require("../models/Submission");

class SubmissionService {
  async makeSubmission(s_finalTime, s_parts, team_id, t_id) {
    const checkExistence = await Submission.find({ team_id: team_id });

    if (isEqual(checkExistence, [])) {
      if (s_finalTime && s_parts) {
        const submission = await Submission.create({
          submission_final_time: s_finalTime,
          submission_parts: s_parts,
          team_id: team_id,
          tournament_id: t_id,
        });
      } else {
        const submission = await Submission.create({
          team_id: team_id,
          tournament_id: t_id,
        });
      }

      return "Created new submission";
    } else {
      // Update the existing submission
      if (s_finalTime && s_parts) {
        const submission = await Submission.create({
          submission_final_time: s_finalTime,
          submission_parts: s_parts,
          team_id: team_id,
          tournament_id: t_id,
        });
      } else {
        const submission = await Submission.create({
          team_id: team_id,
          tournament_id: t_id,
        });
      }

      return "Submission updated";
    }
  }

  async getSubmissions() {
    const foundSubmissions = await Submission.find({});
    return foundSubmissions;
  }

  async getSubmissionById(s_id) {
    const foundSubmission = await Submission.findOne({ _id: s_id });

    console.log(foundSubmission);
    return foundSubmission;
  }
}

module.exports = new SubmissionService();
