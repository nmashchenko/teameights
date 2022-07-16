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
  isRegistered: {
    type: Boolean,
    default: false
  },
  activationLink: {
    type: String
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
  // userUniversity: {
  //   type: String,
  //   required: false,
  // },
  userProgrammingLanguages: {
    type: Array,
  },
  userConcentration: {
    type: String,
  },
  // userDescription: {
  //   type: String,
  //   required: false
  // },
  userRealName: {
    type: String,
  },
  // userLanguages: {
  //   type: Array,
  //   required: false
  // },
  userLinks: {
    type: Object,
  },
  userExperience: {
    type: String,
  },
  // userAvatar: {
  //   type: String,
  //   required: false
  // },
  userRole: {
    type: String,
    required: false
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})

module.exports = mongoose.model(modelName, UserSchema, modelName) // * 1st - model name, 2nd - schema name, 3d - collection name