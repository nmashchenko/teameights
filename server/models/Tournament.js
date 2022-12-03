// * Modules
const mongoose = require("mongoose");
const { Schema } = mongoose;

const modelName = "Tournament";

const TournamentSchema = new mongoose.Schema(
  {
    tournament_name: {
      type: String,
      required: true,
    },
    tournament_participants: [
      {
        team_id: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        frontend_id: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        backend_id: {
          type: Schema.Types.ObjectId,
          required: true,
        },
      },
    ],
    tournament_startTime: {
      type: Date,
      required: true,
    },
    tournament_endTime: {
      type: Date,
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
