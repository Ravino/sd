"use strict";

const router = require ("router") ();


router. get ("/i", (req, res) => {
  res. send ("hello");
});


router. use ("*", (req, res) => {
  res. send (404);
});


module. exports = () => router;
