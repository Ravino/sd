"use strict";


const expressSession = require ("express-session");
const RedisStore = require ("connect-redis") (expressSession);
const crypto = require ("crypto");


module. exports = () => expressSession ({
  "secret": "My fuck big",
  "resave": false,
  "saveUninitialized": false,
  "name": "SSIDMyFuck",
  "genid": (/* req */) => crypto. createHash ("sha512"). update (`${Date. now () + Math. random ()}My love`). digest ("hex"),
  "proxy": true,
  "store": new RedisStore ({
    "client": global. redis. session,
  }),
});
