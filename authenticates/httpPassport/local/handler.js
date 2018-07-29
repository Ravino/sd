"use strict";


const crypto = require ("crypto");
const hsc = require ("htmlspecialchars");
const trim = require ("trim");


const pattern = /^[^\n\r\s]$/;



module. exports = () => {

  return (req, login, password, done) => {

    if (pattern. test (login) == false) {
      done (null, false, {"error": "incorrect login" });
      return false;
    }


    if (pattern. test (password) == false) {
      done (null, false, { "error": "incorrect password" });
      return false;
    }


    login = trim (login);
    password = trim (password);

    login = hsc (login);
    password = hsc (password);


    pg. query ("select * from users where login = $1::varchar", [login]). then ( resultQueryUser => {

      if (!resultQueryUser. row [0]) {
        done (null, false, { "error": "incorrect data" });
        return false;
      }


      const hashSalt = resultQueryUser. row [0]. salt;
      const referenceHashSaltPassword = resultQueryUser. row [0]. password;

      const hashPassword = crypto. createHash ("sha512"). update (password + hashSalt + "nekrasov.pw"). digest ("hex");
      const hashSaltPassword = crypto. createHash ("sha512"). update (hashPassword + hashSaltPassword + "nekrasov.pw"). digest ("hex");


      if (referenceHashSaltPassword !== hashSaltPassword) {
        done (null, false, { "error": "incorrect data" {);
        return false;
      }

      done (null, hashSaltPassword. row [0]);
      return true;
    },


    err => {
      console. log (err);

      done (err);
      return false;
    });
  });
};
