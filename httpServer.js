"use strict";


const app = require ("express") ();
const logger = require ("console-log-level");

const httpConfig = require ("./configs/httpConfig.js") (app);
const httpRoutes = require ("./routes/httpRoutes.js") (app);

const pg = require ("./connectsPool/pg.js") ();
const httpPassport = require ("./authenticates/httpPassport.js") ();


global. logger = logger ({ "prefix": level => `${level}:${new Date (). toISOString ()}:`, });


httpConfig. settings ();
httpConfig. initialization (httpConfig. middlewares ());
httpRoutes. initialization (httpRoutes. routes ());


pg. connect (). then ((db) => {

  global. pg = db;
  global. httpPassport = httpPassport;

  app. listen (3000, () => {

    global. logger. info ("Start server running on port 3000");

  });

},

(err) => {

  global. logger. error (err);

});
