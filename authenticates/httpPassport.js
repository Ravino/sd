"use strict";

const passport = require ("passport");
const strategys = require ("./httpPassport/strategys.js") ();


passport. serializeUser ((user, done) => {
  done (null, user);
});


passport. deserializeUser ((user, done) => {
  done (null, user);
});



for (let strategy in strategys) {
  passport. use (strategys [strategy]);
}



module. exports = () => {
  return passport;
};
