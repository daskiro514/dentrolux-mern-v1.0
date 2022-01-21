const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
  date: {
    type: String,
  },
  subject: {
    type: String,
  },
  note: {
    type: String
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
})

module.exports = mongoose.model('note', NoteSchema)
