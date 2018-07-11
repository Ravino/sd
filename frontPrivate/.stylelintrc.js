{

  "processors": ["stylelint-processor-styled-components"],

  "plugins": ["stylelint-order"],

  "extends": [
    "stylelint-config-standard",
    "stylelint-config-styled-components"
],

  "rules": {

    "selector-list-comma-newline-after": null,

    "declaration-empty-line-before": null,

    "at-rule-empty-line-before": null,

    "no-descending-specificity": null,

    "rule-empty-line-before": null,

    "at-rule-no-unknown": [true,

      {
        "ignoreAtRules": [
          "util"
        }
      }
    ],

    "order/order": [

{

"type": "at-rule",

"hasBlock": false

},

"custom-properties",

"declarations",

"rules",

{

"type": "at-rule",

"hasBlock": true

}

]

}

}
