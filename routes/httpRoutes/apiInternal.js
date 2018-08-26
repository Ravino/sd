"use strict";

const router = require ("router") ();


router. use ("/register", require ("./apiInternal/register.js") ());

router. use ("/login", require ("./apiInternal/login.js") ());

router. use ("/logout", require ("./apiInternal/logout.js") ());


module. exports = () => router;
