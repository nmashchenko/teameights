// * Modules
const mongoose = require("mongoose");
const { Schema } = mongoose;

const modelName = "Leaderboard";

const LeaderboardSchema = new mongoose.Schema(
  {
    // Not needed since _id is already created
    // leaderboard_id: {
    //   type: Schema.Types.ObjectId,
    //   required: true,
    // },
    tournament_id: {
      type: Schema.Types.ObjectId,
      ref: "Tournament",
    },
    results: [
      {
        team_id: {
          type: Schema.types.ObjectId,
          required: true,
        },
        teamTotalScore: {
          type: Number,
          required: true,
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
