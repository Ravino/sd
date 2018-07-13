"use strict";

const router = require ("router") ();


router. get ("/", (req, res) => {

  res. render ("index.pug");

});


module. exports = () => router;
