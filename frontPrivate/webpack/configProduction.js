"use strict";

const path = require ("path");
const extractTextWebpackPlugin = require ("extract-text-webpack-plugin");
const faviconsWebpackPlugin = require ("favicons-webpack-plugin");
const friendlyErrorsWebpackPlugin = require ("friendly-errors-webpack-plugin");
const htmlWebpackPlugin = require ("html-webpack-plugin");
const notifierWebpackPlugin = require ("webpack-notifier");
const uglifyJsWebpackPlugin = require ("uglifyjs-webpack-plugin");
const vueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require ("webpack");



const joinPath = (originPath) => {

  return path. join (path. resolve (), "./", originPath);

};



module. exports = () => {

  return {

    "mode": "production",


    "entry": {
      "build": joinPath ("src/index.js"),
    },


    "output": {
      "pathinfo": true,
      "filename": "[name].js",
      "path": joinPath ("build/production"),
      "publicPath": "/",
      "sourceMapFilename": "[name].source.map",
//      "library": "[name]",
    },


    "resolve": {

      "extensions": [".js", ".json", ".vue", ".pug"],

      "alias": {
        "vue$": "vue/dist/vue.runtime.min.js",
        "vue-router$": "vue-router/dist/vue-router.min.js",
        "vue-resource$": "vue-resource/dist/vue-resource.min.js",
        "vuex$": "vuex/dist/vuex.min.js",
      },
    },


    "optimization": {
      "runtimeChunk": true,
      "splitChunks": {
        "chunks": "all",
      },
      "minimizer": [
        new uglifyJsWebpackPlugin ({
          "sourceMap": true,
          "uglifyOptions": {
            "compress": {
              "inline": false,
              "warnings": false,
              "drop_console": true,
              "unsafe": true,
            },
          },
        }),
      ],
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
          "test": /(sprite)\.svg$/,
          "loader": "svg-sprite-loader",
          "exclude": /node_modules/,
        },

        {
          "test": /\.vue$/,
          "loader": "vue-loader",
          "exclude": /node_modules/,
          "options": {
            "css": extractTextWebpackPlugin. extract ({
              "use": "css-loader",
              "fallback": "vue-style-loader",
            }),
            "postcss": {
              "plugins": {
                "cssnano": {},
              },
            },
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
          "test": /\.styl(us)?$/,
          "use": [
            "vue-style-loader",
            "css-loader",
            "stylus-loader",
          ],
          "exclude": /node_modules/,
        },

        {
          "test": /\.less$/,
          "use": [
            "vue-style-loader",
            "css-loader",
            "less-loader",
          ],
          "exclude": /node_modules/,
        },

        {
          "test": /\.sass$/,
          "use": [
            "vue-style-loader",
            "css-loader",
            {
              "loader": "sass-loader",
              "options": {
                "indentedSyntax": true,
              },
            },
          ],
          "exclude": /node_modules/,
        },

        {
          "test": /\.scss$/,
          "use": [
            "vue-style-loader",
            "css-loader",
            "sass-loader",
          ],
          "exclude": /node_modules/,
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
            "name": "/img/[hash].[ext]",
            "context": "",
//            "emitFile": false,
          },
          "exclude": /node_modules/,
        },

      ],
    },


    "plugins": [
      new vueLoaderPlugin (),

      new friendlyErrorsWebpackPlugin (),

      new extractTextWebpackPlugin ("style.css"),

      new notifierWebpackPlugin ({
        "title": "production",
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

      new faviconsWebpackPlugin ({
        "logo": joinPath ("src/favicon/logo.jpg"),
        "prefix": "favicon-[hash]/",
        "emitStats": true,
        "statsFilename": "favicon-[hash].json",
        "persistentCache": true,
        "inject": true,
        "background": "#fff",
        "title": "Space Dream",
        "icons": {
          "android": true,
          "appleIcon": true,
          "appleStartup": true,
          "coast": true,
          "favicons": true,
          "firefox": false,
          "opengraph": false,
          "twitter": false,
          "yandex": true,
          "windows": false,
        },
      }),
    ],
  };
};
