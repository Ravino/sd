"use strict";

const router = require ("router") ();


router. use ("/register", require ("./apiInternal/register.js") ());
router. use ("/login", require ("./apiInternal/login.js") ());


module. exports = () => router;
