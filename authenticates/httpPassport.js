"use strict";

const passport = require ("passport");
const strategys = require ("./httpPassport/strategys.js") ();


passport. serializeUser ((user, done) => {

  done (null, user);

});


passport. deserializeUser ((user, done) => {

  done (null, user);

});


for (const strategy of strategys) {

  passport. use (strategy);

}


module. exports = () => passport;
