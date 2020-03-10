var mongoose = require('mongoose');

//create Schema
var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
});

// create models
var User = mongoose.model('User',userSchema, 'users');

module.exports = User;