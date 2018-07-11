"use strict";

module. exports = (app) => {

  return {

    "initialization": function (middlewares) {

      for (let middleware in middlewares) {

        if (typeof middlewares [middleware] == "function") {
          this. initialization (middlewares [middleware]);
          continue;
        }

        app. use (middlewares [middleware]);
      }
    },



    "settings": () => {
      app. set ("view engine", "pug");
      app. set ("views", "/www/project/frontPublic");
    },



    "middlewares": () => {
      return [
        require ("./cookieParser/cookieParser.js") (),
        require ("./bodyParser/bodyParser.js") (),
        require ("./passport/passport.js") (),
      ];
    },
  };
};
