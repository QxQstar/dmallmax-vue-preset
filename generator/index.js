module.exports = (api) => {
    api.extendPackage({
        scripts:{
            "uat": "vue-cli-service build --mode uat",
            "show:config": "vue-cli-service inspect",
            "dev": "npm run serve"
        },
        devDependencies:{
            "ghook": "^2.0.4",
            "validate-commit-msg": "^2.14.0",
            "fis3": "^3.4.41",
            "babel-plugin-component":"^1.1.1"
        },
        dependencies:{
            "element-ui": "^2.12.0",
        },
        config: {
            "ghooks": {
                "commit-msg": "validate-commit-msg"
            }
        },
    });
    api.render('./template')

}


