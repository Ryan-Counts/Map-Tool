var express = require('express');
var app = express();
var ArchetypeRoutes = express.Router();

// Require Archetype model in our routes module
var Archetype = require('../models/Archetype');

// Defined store route
ArchetypeRoutes.route('/add').post(function (req, res) {
  var Archetype = new Archetype(req.body);
      Archetype.save()
    .then(Archetype => {
    res.status(200).json({'Archetype': 'Archetype added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
ArchetypeRoutes.route('/').get(function (req, res) {
  Archetype.find(function (err, Archetypes){
    if(err){
      console.log(err);
    }
    else {
      res.json(Archetypes);
    }
  });
});

// Defined edit route
ArchetypeRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Archetype.findById(id, function (err, Archetype){
      res.json(Archetype);
  });
});

//  Defined update route
ArchetypeRoutes.route('/update/:id').post(function (req, res) {
  Archetype.findById(req.params.id, function(err, Archetype) {
    if (!Archetype)
      return next(new Error('Could not load Document'));
    else {
      Archetype.name = req.body.name;
      Archetype.class = req.body.class;

      Archetype.save().then(Archetype => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
ArchetypeRoutes.route('/delete/:id').get(function (req, res) {
  Archetype.findByIdAndRemove({_id: req.params.id}, function(err, Archetype){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = ArchetypeRoutes;
