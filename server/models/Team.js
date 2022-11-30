// * Modules
const mongoose = require("mongoose");
const { Schema } = mongoose;

const modelName = "Team";

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    members: {
      type: [{ type: Schema.Types.ObjectId, required: true }],
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

module.exports = mongoose.model(modelName, TeamSchema, modelName); // * 1st - model name, 2nd - schema name, 3d - collection name
