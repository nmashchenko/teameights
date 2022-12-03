const { isEqual } = require("lodash");
const Submission = require("../models/Submission");

class SubmissionService {
    async createSubmission(s_id, s_finalTime, s_parts, team_id, t_id) {
        const checkExistence = await Submission.find({submission_id: s_id});

        if (isEqual(checkExistence, [])) {
            const submission = await Submission.create({
                submission_id: s_id,
                submission_final_time: s_finalTime,
                submission_parts: s_parts,
                team_id: team_id,
                tournament_id: t_id,
            });

            return "success!";
        } else {
            return {};
        }

    }

    async getSubmissions() {
        const foundSubmissions = await Submission.find({});
        return foundSubmissions;
    }

    async getSubmissionById(s_id) {
        const foundSubmission = await Submission.findONe({ _id: s_id });

        console.log(foundSubmission);
        return foundSubmission;
    }
}

module.exports = new SubmissionService();