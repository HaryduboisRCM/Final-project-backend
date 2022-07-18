const mongoose = require('mongoose');

const tdaSchema = mongoose.Schema({
  userName: String,
  password: String,
  token: String
})

module.exports.TDA = mongoose.model('TDA', tdaSchema, 'TDAs')