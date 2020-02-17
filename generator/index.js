module.exports = (api) => {
  api.extendPackage({
    scripts:{
      "uat": "vue-cli-service build --mode uat",
      "show:config": "vue-cli-service inspect",
      "dev": "npm run serve"
    },
    devDependencies:{
      "ghooks": "^2.0.4",
      "validate-commit-msg": "^2.14.0",
      "fis3": "^3.4.41",
      "babel-plugin-component":"^1.1.1",
      "lint-staged": "^8.1.5"
    },
    dependencies:{
      "lodash": "^4.17.15",
      "element-ui": "^2.13.0",
      "element-theme": "^2.0.1",
      "element-theme-chalk": "^2.13.0",
      "vue-router": "^3.1.3",
      "axios":"^0.19.2",
      "qs":"^6.9.1",
      "clipboard": "2.0.4",
    },
    config: {
        "ghooks": {
            "pre-commit": "lint-staged",
            "commit-msg": "validate-commit-msg"
        }
    },
    "lint-staged": {
      "src/**/*.{js,vue}": [
        "npm run lint",
        "git add"
      ]
    },
  });
  api.render('./template')

}


