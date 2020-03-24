module.exports = {
    parser: "babel-eslint",
    extends: ["airbnb", "plugin:react/recommended", "prettier"],
    plugins: ["prettier"],
    env: {
        browser: true,
        jest: true
    },
    settings: {
        react: {
            pragma: "React",
            version: "16.6"
        }
    },
    rules: {
        "prettier/prettier": [
            "error",
            {
                semi:true,
                tabWidth: 2,
                singleQuote: true,
                trailingComma: "es5",
                printWidth: 120,
                arrowParens: "always"
            }
        ],
        camelcase: "off",
        "no-undef": "error",
        "arrow-body-style": "off",
        "no-empty-pattern": "off",
        "consistent-return": "off",
        "no-mixed-operators": "off"
    }
}