// * Modules
const mongoose = require("mongoose");
const { Schema } = mongoose;

const modelName = "Tournament";

const TournamentSchema = new mongoose.Schema(
  {
    tournament_id: {
      type: String,
      required: true,
    },
    tournament_name: {
      type: String,
      required: true,
    },
    tournament_participants: [
      {
        team_id: {
          type: String,
          required: true,
        },
        frontend_id: {
          type: String,
          required: true,
        },
        backend_id: {
          type: String,
          required: true,
        },
      },
    ],
    tournament_startTime: {
      type: String,
      required: true,
    },
    tournament_endTime: {
      type: String,
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

module.exports = mongoose.model(modelName, TournamentSchema, modelName); // * 1st - model name, 2nd - schema name, 3d - collection name
