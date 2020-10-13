module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "eslint:recommended",
    // "prettier",
    "plugin:vue/recommended"
    // "plugin:prettier/recommended"
  ],
  plugins: ["vue", "prettier"],
  globals: {
    window: true
  },
  rules: {
    semi: ["error", "never"],
    "vue/max-attributes-per-line": "off",
    // v-htmlを利用する場合には `$sanitize(${文字列})`を必ず利用すること
    "vue/no-v-html": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always"
        }
      }
    ],
    "prettier/prettier": [
      "error",
      {
        semi: false,
        printWidth: 120
      }
    ]
  }
}
