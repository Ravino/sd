module.exports = {
  "env": {
    "node": true,
    "commonjs": true,
    "es6": true
  },
  "extends": [
    "airbnb-base",
    "node",
  ],
  "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
      "import",
      "promise",
    ],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "strict": "off",
    "quote-props": ["error", "always"],
    "comma-dangle": ["error", "always"],
    "func-call-spacing": ["error", "always"],
    "padded-blocks": ["error", "always"],
    "arrow-body-style": ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
    "no-whitespace-before-property": "off",
    "global-require": "off",
    "no-spaced-func": "off",
    "no-new": "off",
  }
};
