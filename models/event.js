const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  userName: String,
  courseTitle: String,
  fullName: String,
  email: String,
  contactNumber: String,
  city: String,
  bio: String,
  skills: String,
  linkedIn: String,
  gitHub: String,
  portfolio: String
})

module.exports.Event = mongoose.model('Event', eventSchema, 'graduateprofiles') 