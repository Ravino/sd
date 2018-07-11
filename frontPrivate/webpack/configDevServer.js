"use strict";

const path = require ("path");
const friendlyErrorsWebpackPlugin = require ("friendly-errors-webpack-plugin");
const htmlWebpackPlugin = require ("html-webpack-plugin");
const notifierWebpackPlugin = require ("webpack-notifier");
const vueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require ("webpack");



module. exports = () => {

  return {

    "mode": "development",


    "devtool": "cheap-module-source-map",


    "entry": {
      "build": "/www/project/frontPrivate/src/index.js",
    },


    "output": {
      "pathinfo": true,
      "filename": "[name].js",
      "path": "/www/project/frontPrivate/build/development",
      "publicPath": "/dev/",
      "sourceMapFilename": "[name].source.map",
//      "library": "[name]",
    },


    "resolve": {

      "extensions": [".js", ".json", ".vue", ".pug"],

      "alias": {
        "vue$": "vue/dist/vue.runtime.js",
        "vue-router$": "vue-router/dist/vue-router.js",
      },
    },


    "devServer": {

      "overlay": true,
      "open": true,
      "hot": true,
      "hotOnly": true,
//      "https": true,
      "historyApiFallback": true,
      "compress": true,
      "watchContentBase": true,
      "contentBase": "/dev",
      "index": "index.htm",
      "publicPath": "/dev/",
      "openPage": "dev/",
      "port": 8080,
      "watchOptions": {
        "poll": true,
        "aggregateTimeout": 100,
      },
      "proxy": {
        "/api/inner": "http://localhost:3000",
      },
    },

    "module": {

      "rules": [

        {
          "enforce": "pre",
          "test": /\.vue$/,
          "loader": "eslint-loader",
          "exclude": /node_modules/,
          "options": {
            "fix": true,
          },
        },

        {
          "enforce": "pre",
          "test": /\.js$/,
          "loader": "eslint-loader",
          "exclude": /node_modules/,
          "options": {
            "fix": true,
          },
        },

        {
          "test": /\.vue$/,
          "loader": "vue-loader",
          "exclude": /node_modules/,
          "options": {
            "loaders": {
              "pug": "pug-plain-loader",
            },
          },
        },

        {
          "test": /\.js$/,
          "loader": "babel-loader",
          "exclude": /node_modules/,
        },

        {
          "test": /\.pug$/,
          "loader": "pug-plain-loader",
          "exclude": /node_modules/,
        },

        {
          "test": /\.css$/,
          "loader": "postcss-loader",
          "exclude": /node_modules/,
        },
      ],
    },


    "plugins": [
      new vueLoaderPlugin (),

      new webpack. HotModuleReplacementPlugin (),

      new friendlyErrorsWebpackPlugin (),

      new notifierWebpackPlugin ({
        "title": "devServer",
        "alwaysNotify": true,
      }),

      new htmlWebpackPlugin ({
        "filename": "index.htm",
        "template": "/www/project/frontPrivate/src/index.htm",
        "inject": true,
        "hash": true,
        "minify": true,
        "xhtml": true,
      }),
    ],
  };
};
