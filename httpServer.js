"use strict";


const app = require ("express") ();
const logger = require ("console-log-level");

const httpConfig = require ("./configs/httpConfig.js") (app);
const httpRoutes = require ("./routes/httpRoutes.js") (app);
const httpPassport = require ("./authenticates/httpPassport.js") ();

const redis = require ("./connectsPool/redis.js") ();
const pg = require ("./connectsPool/pg.js") ();


global. redis = redis;
global. logger = logger ({ "prefix": level => `${level}:${new Date (). toISOString ()}:`, });
global. passport = httpPassport;


httpConfig. settings ();
httpConfig. initialization (httpConfig. middlewares ());
httpRoutes. initialization (httpRoutes. routes ());


pg. connect (). then ((db) => {

  global. pg = db;

  app. listen (3000, () => {

    global. logger. info ("Start server running on port 3000");

  });

},

(err) => {

  global. logger. error (err);

});
