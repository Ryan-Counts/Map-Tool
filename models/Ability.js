var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Characters
var Ability = new Schema({
  abilityName: String,
  effect: String,
  levelDependant: Boolean,
  levelEffect: {displayText: String, mathValue: Number}
},{
	collection: 'Abilities'
});

module.exports = mongoose.model('Ability', Ability);
