module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
  },
  extends: [
    'plugin:prettier/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/vue',
    'prettier/standard',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {},
}
