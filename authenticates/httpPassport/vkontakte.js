"use strict";

const Vk = require ("passport-vkontakte"). Strategy;

const config = require ("./vkontakte/config.js");
const handler = require ("./vkontakte/handler.js");


module. exports = () => new Vk (config (), handler ());
