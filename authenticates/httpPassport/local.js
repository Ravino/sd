"use strict";

const Local = require ("passport-local"). Strategy;

const config = require ("./local/config.js");
const handler = require ("./local/handler.js");


module. exports = () => new Local (config (), handler ());
