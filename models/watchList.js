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
  watched: {
    type: Boolean,
    required: true,
    default: false
  },
  dateAdded: {
    type: Date,
    required: true,
    default: Date.now
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('ToWatch', ToWatchSchema)
