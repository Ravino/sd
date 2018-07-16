"use strict";

const crypto = require ("crypto");
const hsc = require ("htmlspecialchars");
const trim = require ("trim");
const uuidV4 = require ("uuid/v4");
const uuidV5 = require ("uuid/v5");


const addStr = "My love ";
const pattern = /^[^\n\s\r]{1,}$/;



module. exports = () => {

  return (req, res) => {

    if (pattern. test (req. body. login) == false) {
      res. send ("Login incorrect");
      return false;
    }


    if (pattern. test (req. body. password) == false) {
      res. send ("Password incorrect");
      return false;
    }


    if (req. body. password !== req. body. repeatPassword) {
      res. send ("Password do not match");
      return false;
    }


    if (pattern. test (req. body. name) == false) {
      res. send ("Name incorrect");
      return false;
    }



    let login = trim (req. body. login);
    let password = trim (req. body. password);
    let name = trim (req. body. name);


    login = hsc (login);
    password = hsc (password);
    name = hsc (name);



    const salt = crypto. createHash ("sha512"). update (login + Math. random () + "nekrasov.pw"). digest ("hex");
    const hashPassword = crypto. createHash ("sha512"). update (password + salt + "nekrasov.pw"). digest ("hex");
    const saltHashPassword = crypto. createHash ("sha512"). update (hashPassword + salt + "nekrasov.pw"). digest ("hex");
    const strUuid = uuidV4 ();
    const userUuid = uuidV5 (addStr, strUuid);
    const namePage = "/" + login;


    const insertUserData = [
      userUuid,
      login,
      saltHashPassword, salt,
      name,
      namePage,
    ];



    pg. query ("select insertUser ($1::uuid, $2::varchar, $3::varchar, $4::varchar, $5::varchar, $6::varchar)", insertUserData). then ( statusInsertUserData => {
      console. log (statusInsertUserData);
    });
  };
};
