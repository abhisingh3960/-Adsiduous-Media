const mongoose = require('mongoose');

const requestLogSchema = new mongoose.Schema({
  userId: String,
  timestamp: Number
});

module.exports = mongoose.model('RequestLog', requestLogSchema);