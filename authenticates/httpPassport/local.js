"use strict";

const local = require ("passport-local"). Strategy;

const config = require ("./local/config.js");
const handler = require ("./local/handler.js");


module. exports = () => {
  retirn new local (config (), handler ());
};
