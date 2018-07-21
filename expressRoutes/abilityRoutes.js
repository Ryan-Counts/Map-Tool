var express = require('express');
var app = express();
var AbilityRoutes = express.Router();

// Require Ability model in our routes module
var Ability = require('../models/Ability');

// Defined store route
AbilityRoutes.route('/add').post(function (req, res) {
  var Ability = new Ability(req.body);
      Ability.save()
    .then(Ability => {
    res.status(200).json({'Ability': 'Ability added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
AbilityRoutes.route('/').get(function (req, res) {
  Ability.find(function (err, Abilities){
    if(err){
      console.log(err);
    }
    else {
      res.json(Abilities);
    }
  });
});

// Defined edit route
AbilityRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Ability.findById(id, function (err, Ability){
      res.json(Ability);
  });
});

//  Defined update route
AbilityRoutes.route('/update/:id').post(function (req, res) {
  Ability.findById(req.params.id, function(err, Ability) {
    if (!Ability)
      return next(new Error('Could not load Document'));
    else {
      Ability.name = req.body.name;
      Ability.class = req.body.class;

      Ability.save().then(Ability => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
AbilityRoutes.route('/delete/:id').get(function (req, res) {
  Ability.findByIdAndRemove({_id: req.params.id}, function(err, Ability){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = AbilityRoutes;
