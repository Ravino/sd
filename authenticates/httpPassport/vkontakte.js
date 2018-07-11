"use strict";

const vk = require ("passport-vkontakte"). Strategy;

const config = require ("./vkontakte/config.js");
const  handler = require ("./vkontakte/handler.js");



module. exports = () => {
  return new vk (config (), handler ());
};
