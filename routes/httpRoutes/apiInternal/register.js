"use strict";

const router = require ("router") ();
const handler = require ("./register/handler.js") ();



router. post ("register", (req, res) => {

  if (req. isAuthenticated ()) {

    res. redirect ("/");
    return true;

  }


  handler (req, res);
  return false;

});


module. exports = () => router;
