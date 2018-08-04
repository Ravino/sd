"use strict";


const Redis = require ("ioredis");


const poolConnects = {
  "session": new Redis (),
  "pub": new Redis (),
  "sub": new Redis (),
};


module. exports = () => poolConnects;
