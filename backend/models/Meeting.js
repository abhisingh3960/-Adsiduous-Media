const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  start: Number,
  end: Number
});

module.exports = mongoose.model('Meeting', meetingSchema);