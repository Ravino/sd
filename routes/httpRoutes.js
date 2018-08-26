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
      { "path": "/public", "handler": require ("./httpRoutes/public.js") (), },
      { "path": "/private", "handler": require ("./httpRoutes/private.js") (), },
      { "path": "/api/internal", "handler": require ("./httpRoutes/apiInternal.js") (), },
    ],
  };

};
