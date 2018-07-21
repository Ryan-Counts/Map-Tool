var express = require('express');
var app = express();
var SpellRoutes = express.Router();

// Require Spell model in our routes module
var Spell = require('../models/Spell');

// Defined store route
SpellRoutes.route('/add').post(function (req, res) {
  var Spell = new Spell(req.body);
      Spell.save()
    .then(Spell => {
    res.status(200).json({'Spell': 'Spell added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
SpellRoutes.route('/').get(function (req, res) {
  Spell.find(function (err, Spells){
    if(err){
      console.log(err);
    }
    else {
      res.json(Spells);
    }
  });
});

// Defined edit route
SpellRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Spell.findById(id, function (err, Spell){
      res.json(Spell);
  });
});

//  Defined update route
SpellRoutes.route('/update/:id').post(function (req, res) {
  Spell.findById(req.params.id, function(err, Spell) {
    if (!Spell)
      return next(new Error('Could not load Document'));
    else {
      Spell.name = req.body.name;
      Spell.class = req.body.class;

      Spell.save().then(Spell => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
SpellRoutes.route('/delete/:id').get(function (req, res) {
  Spell.findByIdAndRemove({_id: req.params.id}, function(err, Spell){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = SpellRoutes;
