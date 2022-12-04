const { isEqual } = require("lodash");
const Submission = require("../models/Submission");

class SubmissionService {
  async makeSubmission(s_finalTime, s_parts, team_id, t_id) {
    const checkExistence = await Submission.findOne({ team_id: team_id });

    if (!checkExistence) {
      const submission = await Submission.create({
        submission_final_time: s_finalTime,
        submission_parts: s_parts,
        team_id: team_id,
        tournament_id: t_id,
      });

      return submission;
    } else {
      // Update the existing submission
      if (s_parts.frontend !== undefined) {
        const curSubmissionParts = checkExistence.submission_parts;
        console.log(curSubmissionParts);

        curSubmissionParts.frontend = s_parts.frontend;

        const updated = await Submission.updateOne(
          {
            _id: checkExistence._id,
          },
          {
            $set: {
              submission_parts: curSubmissionParts,
            },
          },
          { new: true }
        );

        return "Submission for frontend updated";
      } else if (s_parts.backend !== undefined) {
        const curSubmissionParts = checkExistence.submission_parts;
        console.log(curSubmissionParts);

        curSubmissionParts.backend = s_parts.backend;

        const updated = await Submission.updateOne(
          {
            _id: checkExistence._id,
          },
          {
            $set: {
              submission_parts: curSubmissionParts,
            },
          },
          { new: true }
        );

        return "Submission for backend updated";
      }
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
