var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Characters
var Skill = new Schema({
  name: String,
  abilityScore: {displayText: String, mathValue: Number},
  description: String
},{
	collection: 'Skills'
});

module.exports = mongoose.model('Skill', Skill);
