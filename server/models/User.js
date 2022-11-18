// * Modules
const mongoose = require("mongoose");

const modelName = "User";

const UserSchema = new mongoose.Schema(
  {
    userUsername: {
      type: String,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    isActivated: {
      type: Boolean,
      default: false,
    },
    isRegistered: {
      type: Boolean,
      default: false,
    },
    activationLink: {
      type: String,
    },
    userCountry: {
      type: String,
    },
    userAge: {
      type: String,
    },
    userLeader: {
      type: Boolean,
    },
    userUniversity: {
      type: String,
      required: false,
    },
    userMajor: {
      type: String,
      required: false,
    },
    userGraduationDate: {
      type: String,
      required: false,
    },
    userProgrammingLanguages: {
      type: Array,
    },
    userFrameworks: {
      type: Array,
    },
    userConcentration: {
      type: String,
    },
    userDescription: {
      type: String,
      required: false,
    },
    userRealName: {
      type: String,
    },
    userLinks: {
      type: Object,
    },
    userExperience: {
      type: String,
    },
    userPhoto: {
      type: String,
    },
    userRole: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model(modelName, UserSchema, modelName); // * 1st - model name, 2nd - schema name, 3d - collection name
