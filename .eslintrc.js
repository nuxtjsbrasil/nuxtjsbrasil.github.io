module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
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
