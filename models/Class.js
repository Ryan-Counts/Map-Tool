var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Characters
var Class = new Schema({
	className: String,
	hitDice: {displayText: String, mathValue: Number},
	startingWealth: {displayText: String, mathValue: Number},
	classSkills: [{skillName: String}],
	skillRanks: {displayText: String, mathValue: Number},
	babType: {displayText: String, mathValue: Number},
	baseSaves: [{displayText: String, mathValue: Number}],
	proficiencies: [{displayText: String, proficient: Boolean, idValue: Number}],
	levelAbilities: [{level: Number, abilityName: String}]
},{
	collection: 'Classes'
});

module.exports = mongoose.model('Class', Class);
