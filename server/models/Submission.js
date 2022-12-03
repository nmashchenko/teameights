// * Modules
const mongoose = require("mongoose");
const { Schema } = mongoose;

const modelName = "Submission";

const SubmissionSchema = new mongoose.Schema(
  {
    // not needed -- _id

    // submission_id: {
    //   type: Schema.Types.ObjectId,
    //   required: true,
    // },
    submission_final_time: {
      type: String,
      required: true,
    },
    submission_parts: {
      frontend: {
        submission_time: {
          type: String,
          required: true,
        },
        points: {
          type: Number,
          required: true,
        },
      },
      backend: {
        submission_time: {
          type: String,
          required: true,
        },
        points: {
          type: Number,
          required: true,
        },
      },
    },
    team_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    tournament_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model(modelName, SubmissionSchema, modelName); // * 1st - model name, 2nd - schema name, 3d - collection name
