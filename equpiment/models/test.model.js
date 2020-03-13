var mongoose = require('mongoose');

var nameSchema = new mongoose.Schema({
  firstName: String,
  lastNameName: String
 });

var Test = mongoose.model("Test", nameSchema);

module.exports = Test;