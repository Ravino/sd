"use strict";


const expressSession = require ("express-session");
const crypto = require ("crypto");


module. exports = () => expressSession ({
  "secret": "My fuck big",
  "resave": false,
  "saveUninitialized": false,
  "name": "SSIDMyFuck",
  "genid": (/* req */) => crypto. createHash ("sha512"). update (`${Date. now () + Math. random ()}My love`). digest ("hex"),
  "proxy": true,
});
