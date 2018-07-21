var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Define collection and schema for Characters
var Character = new Schema({
	//charID: Number,
	charName: String,
	classIDs: [{className: String, level: Number}],
	alignment: String,
	totalHD: Number,
	abilityScores: {}
	//tags: {charID: [Number], index: true}
},{
	collection: 'Characters'
});

module.exports = mongoose.model('Character', Character);
