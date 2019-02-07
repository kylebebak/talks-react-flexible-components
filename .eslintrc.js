module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "globals": {
    "FileReader": true,
    "XMLHttpRequest": true,
    "FormData": true,
    "Image": true,
    "Audio": true,
    "document": true,
    "window": true,
  },
  "rules": {
    "camelcase": 1,
    "function-paren-newline": 0,
    "object-curly-newline": [2, { "consistent": true }],
    "max-len": [
      2,
      {
        "ignoreTrailingComments": true,
        "ignoreComments": true,
        "ignorePattern": '["`\']$',
        "tabWidth": 2,
        "code": 120,
      }
    ],
    "jsx-a11y/label-has-for": [ "error", {
      "required": {
        "some": [ "nesting", "id"  ]
      }
    }],
    "arrow-body-style": 0,
    "indent": [2, 2],
    "quotes": [2, "single"],
    "linebreak-style": [2, "unix"],
    "semi": [2, "never"],
    "comma-dangle": [2, "always-multiline"],
    "no-param-reassign": 0,
    "no-restricted-syntax": [0],
    "no-underscore-dangle": 0,
    "no-labels": 0,
    "no-continue": 0,
    "react/sort-comp": 0,
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "react/jsx-filename-extension": 0,
    "jsx-a11y/no-static-element-interactions": 0,
  },
};
