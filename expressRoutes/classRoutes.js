var express = require('express');
var app = express();
var ClassRoutes = express.Router();

// Require Class model in our routes module
var CharClass = require('../models/Class');
var Archetype = require('../models/Archetype');

// Defined store route
ClassRoutes.route('/add').post(function (req, res) {
  var charClass = new CharClass(req.body);
      charClass.save()
    .then(Class => {
    res.status(200).json({'Class': 'Class added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
ClassRoutes.route('/').get(function (req, res) {
  CharClass.find(function (err, Classes){
    if(err){
      console.log(err);
    }
    else {
      res.json(Classes);
    }
  });
});

// Defined edit route
ClassRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  CharClass.findById(id, function (err, Class){
      res.json(Class);
  });
});

//  Defined update route
ClassRoutes.route('/update/:id').post(function (req, res) {
  CharClass.findById(req.params.id, function(err, Class) {
    if (!CharClass)
      return next(new Error('Could not load Document'));
    else {
      CharClass.name = req.body.name;
      CharClass.class = req.body.class;

      CharClass.save().then(CharClass => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
ClassRoutes.route('/delete/:id').get(function (req, res) {
  CharClass.findByIdAndRemove({_id: req.params.id}, function(err, CharClass){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = ClassRoutes;
