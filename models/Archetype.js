var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Characters
var Archetype = new Schema({
  archetypeName: String,
  changes: [{displayText: String, mathValue: Number}],
  linkedClass: String
},{
	collection: 'Archetypes'
});

module.exports = mongoose.model('Archetype', Archetype);
