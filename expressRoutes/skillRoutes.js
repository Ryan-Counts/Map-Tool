var express = require('express');
var app = express();
var SkillRoutes = express.Router();

// Require Skill model in our routes module
var Skill = require('../models/Skill');

// Defined store route
SkillRoutes.route('/add').post(function (req, res) {
  var Skill = new Skill(req.body);
      Skill.save()
    .then(Skill => {
    res.status(200).json({'Skill': 'Skill added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
SkillRoutes.route('/').get(function (req, res) {
  Skill.find(function (err, Skills){
    if(err){
      console.log(err);
    }
    else {
      res.json(Skills);
    }
  });
});

// Defined edit route
SkillRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Skill.findById(id, function (err, Skill){
      res.json(Skill);
  });
});

//  Defined update route
SkillRoutes.route('/update/:id').post(function (req, res) {
  Skill.findById(req.params.id, function(err, Skill) {
    if (!Skill)
      return next(new Error('Could not load Document'));
    else {
      Skill.name = req.body.name;
      Skill.class = req.body.class;

      Skill.save().then(Skill => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
SkillRoutes.route('/delete/:id').get(function (req, res) {
  Skill.findByIdAndRemove({_id: req.params.id}, function(err, Skill){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = SkillRoutes;
