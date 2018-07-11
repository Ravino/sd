"use strict";

const passport = require ("passport");


module. exports = () => {

  return [
    passport. initialize (),
    passport. session (),
  ];
};
