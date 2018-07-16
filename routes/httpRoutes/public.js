"use strict";

const router = require ("router") ();


router. get ("/", (req, res) => {

  if (req. isAuthenticated ()) {
    res. redirect ("/");
    return true;
  }


  res. render ("index.pug");
  return false;
});



router. get ("/register", (req, res) => {

  if (req. isAuthenticated ()) {
    res. redirect ("/");
    return true;
  }


  res. render ("register.pug");
  return false;
});


module. exports = () => router;
