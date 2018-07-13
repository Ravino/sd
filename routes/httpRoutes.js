"use strict";

module. exports = (app) => {

  return {

    "initialization": function (routes) {

      for (const route of routes) {

        app. use (route. path, route. handler);

      }

    },


    "routes": () => [
      { "path": "/", "handler": require ("./httpRoutes/index.js") (), },
      { "path": "/public", "handler": require ("./httpRoutes/indexPublic.js") (), },
    ],
  };

};
