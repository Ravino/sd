"use strict";


const router = require ("router") ();


router. get ("/", (req, res) => {

  if (!req. isAuthenticated ()) {

    res. redirect ("/");
    return false;

  }


  res. sendFile ("/www/sd-development/frontPrivate/build/development/index.htm");
  return true;

});


module. exports = () => router;
