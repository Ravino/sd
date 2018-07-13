"use strict";


const app = require ("express") ();

const httpConfig = require ("./configs/httpConfig.js") (app);
const httpRoutes = require ("./routes/httpRoutes.js") (app);

const pg = require ("./connectsPool/pg.js") ();
const httpPassport = require ("./authenticates/httpPassport.js") ();


httpConfig. settings ();
httpConfig. initialization (httpConfig. middlewares ());
httpRoutes. initialization (httpRoutes. routes ());


pg. connect (). then ((db) => {

  global. pg = db;
  global. httpPassport = httpPassport;

  app. listen (3000);

},

(err) => {

  console. log (err);

});
