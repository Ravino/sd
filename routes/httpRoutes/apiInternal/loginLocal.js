"use strict";

const router = require ("router") ();


router. post ("/", global. passport. authenticate ("local", { "failureRedirect": "/", "successRedirect": "/", }));


module. exports = () => router;
