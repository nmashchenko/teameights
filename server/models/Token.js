// * Modules
const mongoose = require('mongoose')
const { Schema } = mongoose;

const modelName = 'Token'

const TokenSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  refreshToken: {
    type: String,
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})

module.exports = mongoose.model(modelName, TokenSchema, modelName) // * 1st - model name, 2nd - schema name, 3d - collection name