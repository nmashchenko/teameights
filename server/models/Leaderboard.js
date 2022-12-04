// * Modules
const mongoose = require("mongoose");
const { Schema } = mongoose;

const modelName = "Leaderboard";

const LeaderboardSchema = new mongoose.Schema(
  {
    tournament_id: {
      type: Schema.Types.ObjectId,
      ref: "Tournament",
      required: true,
    },
    results: [
      {
        team_id: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        team_name: {
          type: String,
          required: true,
        },
        frontendScore: {
          type: Number,
        },
        backendScore: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model(modelName, LeaderboardSchema, modelName); // * 1st - model name, 2nd - schema name, 3d - collection name
