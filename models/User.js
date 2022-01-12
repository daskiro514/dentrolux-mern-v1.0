const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  type: {
    type: String,
    default: 'customer'
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  avatar: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  // CUSTOMER
  birth: {
    type: String,
  },
  age: {
    type: Number,
  },
  sex: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zip: {
    type: String,
  },
});

module.exports = mongoose.model('user', UserSchema);
