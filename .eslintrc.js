module.exports = {
  "extends": "airbnb-base",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "browser": true
  },
  "rules": {
    "import/no-unresolved": [2]
  },
  "globals": {
    "Phaser": true
  },
  "settings": {
    "import/core-modules": ["phaser", "pixi", "p2"]
  }
};
