var mongoose = require('mongoose');

//create Schema
var equipmentSchema = new mongoose.Schema({
  name: String,
  status: Boolean,
  description: String,
  type: String,
});

//create models
var Equipment = mongoose.model('Equipment', equipmentSchema, 'equipments')

module.exports = Equipment;