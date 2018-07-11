"use strict";

module. exports = (app) => {

  return {

    "initialization": function (routes) {
      for (let route in routes) {
        app. use (route, routes [route]);
      }
    },


    "routes": () => {

      return {
        "/": require ("./httpRoutes/index.js") (),
        "/public": require ("./httpRoutes/indexPublic.js") (),
      };
    },
  };
};
