module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
  ],
  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "shared-node-browser": true,
    "es6": true,
  },
  rules: {
    "consistent-return": 1,
    "sort-keys": 2,
    "semi": [2, "never"],
    "no-param-reassign": [2, {
      "props": false,
    }],
    "no-underscore-dangle": 1,
    "no-mixed-operators": 1,
    "space-before-function-paren": ["error", {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
    }],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never",
    }],
    "max-len": [1, 80],
    "class-methods-use-this": [1],

    "react/jsx-filename-extension": 0,
    "react/jsx-key": 2,
    "react/no-deprecated": 2,
    "react/no-multi-comp": 2,
    "react/no-set-state": 1,
    "react/require-default-props": 2,
    "react/forbid-prop-types": 0,
    "jsx-a11y/img-has-alt": [0],

    // False positive
    "jsx-a11y/img-redundant-alt": [0],

    // too many false positives
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,

    "import/named": 2,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
  },
  "settings": {
    "import/resolver": {
      "webpack": {},
    }
  }
};
