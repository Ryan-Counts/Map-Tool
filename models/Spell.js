var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Characters
var Spell = new Schema({
  name: String,
  spellLists: [{className: String, spellLevel: Number}],
  school: String,
  subSchool: [{name: String}],
  range: {displayText: String, mathValue: Number},
  target: {displayText: String, mathValue: Number},
  area: {displayText: String, mathValue: Number},
  duration: {displayText: String, mathValue: Number},
  saveThrow: {displayText: String, mathValue: Number, special: Boolean},
  spellResistance: Boolean,
  effect: {fullDisplay: String, shortDisplay: String}
},{
	collection: 'Spells'
});

module.exports = mongoose.model('Spell', Spell);
