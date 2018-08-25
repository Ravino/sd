"use strict";

const router = require ("router") ();


router. post ("/local", global. passport. authenticate ("local", { "successRedirect": "/", "failureRedirect": "/", "failureFlash": true, }));

router. get ("/vkontakte", global. passport. authenticate ("vkontakte", { "successRedirect": "/", "failureRedirect": "/api/internal/error/vkontakte", }));


module. exports = () => router;
