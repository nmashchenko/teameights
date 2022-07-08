// * Modules
const mongoose = require('mongoose')

const modelName = 'User'

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isActivated: {
    type: Boolean,
    default: false,
  },
  activationLink: {
    type: String
  },
  userCountry: {
    type: String,
    required: false
  },
  userAge: {
    type: Number,
    required: false
  },
  userUniversity: {
    type: String,
    required: false,
  },
  userProgrammingLanguages: {
    type: Array[String],
    required: false
  },
  userConcentration: {
    type: String,
    required: false
  },
  userDescription: {
    type: String,
    required: false
  },
  userRealName: {
    type: String,
    required: false
  },
  userLanguages: {
    type: Array[String],
    required: false
  },
  userLinks: {
    type: Object,
    required: false
  },
  userExperience: {
    type: Number,
    required: false
  },
  userAvatar: {
    type: String,
    required: false
  },
  userRole: {
    type: String,
    required: false
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})

module.exports = mongoose.model(modelName, UserSchema, modelName) // * 1st - model name, 2nd - schema name, 3d - collection name