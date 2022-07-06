const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  userName: String,
  courseTitle: String,
  fullName: String,
  email: String,
  contactNumber: String
})

module.exports.Event = mongoose.model('Event', eventSchema, 'graduateprofiles')