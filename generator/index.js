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
      "babel-plugin-component":"^1.1.1"
    },
    dependencies:{
      "lodash": "^4.17.15",
      "element-ui": "^2.12.0",
      "vue-router": "^3.1.3",
    },
    config: {
        "ghooks": {
            "commit-msg": "validate-commit-msg"
        }
    },
  });
  api.render('./template')

}


