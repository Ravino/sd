"use strict";

module. exports = (app) => {

  return {

    "initialization": function (middlewares) {

      for (const middleware of middlewares) {

        if (typeof middleware === "object") {

          this. initialization (middleware);
          continue;

        }

        app. use (middleware);

      }

    },


    "settings": () => {

      app. set ("view engine", "pug");
      app. set ("views", "/www/project/frontPublic");

    },


    "middlewares": () => [
      require ("./cookieParser/cookieParser.js") (),
      require ("./bodyParser/bodyParser.js") (),
      require ("./passport/passport.js") (),
    ],
  };

};
