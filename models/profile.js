const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
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
  portfolio: String,
  employed: Boolean,
  image: String,
  cv: String,
  accessLevel: String

})

module.exports.Profile = mongoose.model('Profile', profileSchema, 'graduateprofiles') 