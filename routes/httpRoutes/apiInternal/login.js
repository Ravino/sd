"use strict";

const router = require ("router") ();


router. get ("/vkontakte", global. passport. authenticate ("vkontakte", { "successRedirect": "/", "failureRedirect": "/api/internal/error/vkontakte", }));


module. exports = () => router;
