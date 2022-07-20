const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  userName: String,
  password: String,
  token: String,
  roles: String
})

module.exports.User = mongoose.model('User', userSchema, 'Users')