"use strict";


const crypto = require ("crypto");
const hsc = require ("htmlspecialchars");
const trim = require ("trim");


const pattern = /^[^\n\r\s]{1,}$/;


module. exports = () => (pReq, pLogin, pPassword, pDone) => {

//  const req = pReq;
  let login = pLogin;
  let password = pPassword;
  const done = pDone;


  if (pattern. test (login) === false) {

    done (null, false, { "error": "incorrect login", });
    return false;

  }


  if (pattern. test (password) === false) {

    done (null, false, { "error": "incorrect password", });
    return false;

  }


  login = trim (login);
  password = trim (password);

  login = hsc (login);
  password = hsc (password);


  const transmitData = [
    login,
  ];


  global. pg. query ("select * from users where login = $1::varchar", transmitData). then ((resultQueryUser) => {

    if (!resultQueryUser. row [0]) {

      done (null, false, { "error": "incorrect data", });
      return false;

    }


    const hashSalt = resultQueryUser. row [0]. salt;
    const referenceHashSaltPassword = resultQueryUser. row [0]. password;

    const hashPassword = crypto. createHash ("sha512"). update (`${password + hashSalt}nekrasov.pw`). digest ("hex");
    const hashSaltPassword = crypto. createHash ("sha512"). update (`${hashPassword + hashSalt}nekrasov.pw`). digest ("hex");


    if (referenceHashSaltPassword !== hashSaltPassword) {

      done (null, false, { "error": "incorrect data", });
      return false;

    }

    done (null, hashSaltPassword. row [0]);
    return true;

  },


  (err) => {

    global. logger. error (err);

    done (err);
    return false;

  });

  return undefined;

};
