"use strict";

const Pg = require ("pg-pool");

const config = {
  "database": "sd",
  "user": "sd",
  "password": "1",
  "port": "5432",
  "ssl": true,
  "max": 20,
  "min": 4,
  "idleTimeoutMillis": 1000,
  "connectionTimeoutMillis": 1000,
};


module. exports = () => new Pg (config);
