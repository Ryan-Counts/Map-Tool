const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('./config/DB'),
      characterRoutes = require('./expressRoutes/characterRoutes');
      classRoutes = require('./expressRoutes/classRoutes');
      abilityRoutes = require('./expressRoutes/abilityRoutes');
      archetypeRoutes = require('./expressRoutes/archetypeRoutes');
      skillRoutes = require('./expressRoutes/skillRoutes');
      spellRoutes = require('./expressRoutes/spellRoutes');


      mongoose.Promise = global.Promise;
      mongoose.connect(config.DB).then(
          () => {console.log('Database is connected') },
          err => { console.log('Can not connect to the database'+ err)}
        );

      const app = express();
      app.use(express.static('public'));
      app.use(bodyParser.json());
      app.use(cors());
      app.use('/character', characterRoutes);
      app.use('/class', classRoutes);
      app.use('/ability', abilityRoutes);
      app.use('/archetype', archetypeRoutes);
      app.use('/skill', skillRoutes);
      app.use('/spell', spellRoutes);
      const port = process.env.PORT || 4000;

      const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
      });
