"use strict";

const router = require ("router") ();


router. use ("/register", require ("./apiInternal/register.js") ());


module. exports = () => router;
