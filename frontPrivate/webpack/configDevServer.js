"use strict";

const path = require ("path");
const friendlyErrorsWebpackPlugin = require ("friendly-errors-webpack-plugin");
const htmlWebpackPlugin = require ("html-webpack-plugin");
const notifierWebpackPlugin = require ("webpack-notifier");
const vueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require ("webpack");



const joinPath = (originPath) => {

  return path. join (path. resolve (), "./", originPath);

};



module. exports = () => {

  return {

    "mode": "development",


    "devtool": "cheap-module-source-map",


    "entry": {
      "build": joinPath ("src/index.js"),
    },


    "output": {
      "pathinfo": true,
      "filename": "[name].js",
      "path": joinPath ("build/development"),
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
          "test": /\.(svg|jpg|gif|jpeg)$/,
          "loader": "svg-sprite-loader",
          "exclude": /node_modules/,
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
          "test": /\.less$/,
          "use": [
            "vue-style-loader",
            "css-loader",
            "less-loader",
          ],
        },

        {
          "test": /\.sass$/,
          "use": [
            "vue-style-loader",
            "css-loader",
          ],
          "loader": "sass-loader",
          "options": {
            "indentedSyntax": true,
          },
        },

        {
          "test": /\.scss$/,
          "use": [
            "vue-style-loader",
            "css-loader",
            "sass-loader",
          ],
        },

        {
          "test": /\.css$/,
          "loader": "postcss-loader",
          "exclude": /node_modules/,
        },

        {
          "test": /\.(jpg|png|svg|gif|jpeg)/,
          "loader": "file-loader",
          "options": {
            "name": "[path][name].[ext]",
            "context": "",
//            "emitFile": false,
          },
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
        "template": joinPath ("src/index.htm"),
        "inject": true,
        "hash": true,
        "minify": true,
        "xhtml": true,
      }),
    ],
  };
};
