const mongoose = require('mongoose')

const ToWatchSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  platform: {
    type: String
  },
  logoURL:{
    type: String
  },
  watched: {
    type: Boolean,
    // required: true,
    default: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('ToWatch', ToWatchSchema)
