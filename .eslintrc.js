module.exports = {
  "env": {
    "amd": true,
    "node": true,
    "commonjs": true,
    "es6": true
  },
  "extends": [
    "airbnb-base",
  ],
  "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
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
    "func-names": ["error", "as-needed"],
    "arrow-body-style": ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
    "no-whitespace-before-property": "off",
    "global-require": "off",
    "no-spaced-func": "off",
    "no-new": "off",
    "no-continue": "off",
    "no-restricted-syntax": "off",
  }
};
