// Models are fancy constructors compiled from Schema definitions. An instance of a model is called a document. 
// Models are responsible for creating and reading documents from the underlying MongoDB database.
var mongoose = require('mongoose');

//create Schema
var equipmentSchema = new mongoose.Schema({
  // name: {type: String, unique: true, required: true, trim: true},
  // status: {type: Boolean, required: true, trim: true},
  // description: {type: String, required: true, trim: true, minlength: 6},
  // type: {type: String, required: true, trim: true},
  name: { type: String, required: true },
  status: { type: Boolean, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  userSelectedId: { type: String },
});

//create models
var Equipment = mongoose.model('Equipment', equipmentSchema, 'equipments')

module.exports = Equipment;