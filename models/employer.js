const mongoose = require('mongoose');

const employerSchema = mongoose.Schema({
  userName: String,
  password: String,
  token: String
})

module.exports.Employer = mongoose.model('Employer', employerSchema, 'Employers')