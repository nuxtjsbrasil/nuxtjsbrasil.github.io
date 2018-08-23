module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'standard',
    'plugin:vue/essential'
  ],
  plugins: [
    'html',
    'vue'
  ],
  rules: {},
  globals: {}
}
