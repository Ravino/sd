"use strict";

const bodyParser = require ("body-parser");


module. exports = () => {

  return [
    bodyParser. json (),
    bodyParser. urlencoded ({ "extended": true }),
  ];
};
