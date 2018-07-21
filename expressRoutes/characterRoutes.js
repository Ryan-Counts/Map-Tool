var express = require('express');
var app = express();
var CharacterRoutes = express.Router();

// Require Character model in our routes module
var Character = require('../models/Character');
var Class = require('../models/Class');
var Ability = require('../models/Ability');
var Archetype = require('../models/Archetype');
var Skill = require('../models/Skill');
var Spell = require('../models/Spell');

// Defined store route
CharacterRoutes.route('/add').post(function (req, res) {
  var character = new Character(req.body);
      character.save()
    .then(Character => {
    res.status(200).json({'Character': 'Character added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
CharacterRoutes.route('/').get(function (req, res) {
  Character.find(function (err, Characters){
    if(err){
      console.log(err);
    }
    else {
      res.json(Characters);
    }
  });
});

// Defined edit route
CharacterRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Character.findById(id, function (err, Character){
      res.json(Character);
  });
});

//  Defined update route
CharacterRoutes.route('/update/:id').post(function (req, res) {
  Character.findById(req.params.id, function(err, Character) {
    if (!Character)
      return next(new Error('Could not load Document'));
    else {
      Character.name = req.body.name;
      Character.class = req.body.class;

      Character.save().then(Character => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
CharacterRoutes.route('/delete/:id').get(function (req, res) {
  Character.findByIdAndRemove({_id: req.params.id}, function(err, Character){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = CharacterRoutes;
