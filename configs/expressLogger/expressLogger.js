"use strict";


const expressLogger = require ("express-logger");


module. exports = () => expressLogger ({ "path": "./logs/express.log", });
