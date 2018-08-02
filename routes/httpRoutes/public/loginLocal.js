"use strict";

const router = require ("router") ();


router. get ("/local", (req, res) => {

  if (req. isAuthenticated ()) {

    res. redirect ("/");
    return true;

  }


  res. render ("/loginLocal.pug");
  return false;

});


module. exports = () => router;
