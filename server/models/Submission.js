// * Modules
const mongoose = require("mongoose");
const { Schema } = mongoose;

const modelName = "Submission";

const SubmissionSchema = new mongoose.Schema(
  {
    submission_final_time: {
      type: Date,
    },
    submission_parts: {
      frontend: {
        submission_time: {
          type: Date,
        },
        points: {
          type: Number,
        },
      },
      backend: {
        submission_time: {
          type: Date,
        },
        points: {
          type: Number,
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