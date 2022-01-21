const mongoose = require('mongoose')

const AppointmentSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  date: {
    type: Date,
  },
  time1: {
    type: String
  },
  time2: {
    type: String
  },
  time3: {
    type: String
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  status: {
    type: String,
    default: 'Pending'
  },
  approvedTime: {
    type: String,
    default: null
  }
})

module.exports = mongoose.model('appointment', AppointmentSchema)
