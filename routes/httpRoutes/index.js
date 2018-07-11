"use strict";

const router = require ("router") ();


router. get ("/", (req, res) => {

  if (!req. isAuthenticated ()) {
    res. redirect ("/public");
    return false;
  }

  res. redirect ("/private");
  return true;
});


module. exports = () => {
  return router;
};
