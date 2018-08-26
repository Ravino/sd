"use strict";


const router = require ("router") ();


router. get ("/", (req, res) => {

  req. logOut ();
  res. redirect ("/");
  return true;

});


module. exports = () => router;
