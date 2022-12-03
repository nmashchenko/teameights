const submissionService = require("../service/submission.service");

class SubmissionController {
    async createSubmission(req, res, next) {
        try {
            const { s_id, s_finalTime, s_parts, team_id, t_id } = req.body;
            const createdSubmission = await submissionService.createSubmission(
                s_id,
                s_finalTime,
                s_parts,
                team_id,
                t_id
            );
            return res.send(createdSubmission);
        } catch (err) {
            next(err);
        }
    }

    async getSubmissions(req, res, next) {
        try {
            const submissions = await submissionService.getSubmissions();
            return res.json(submissions);
        } catch (err) {
            next(err);
        }
    }

    async getSubmissionById(req, res, next) {
        try {
            const { s_id } = req.body;
            console.log(s_id);
            const submission = await submissionService.getSubmissionById(s_id);
            return res.json(submission)

        } catch (err) {
            next(err);
        }
    }
}

module.exports = new SubmissionController();