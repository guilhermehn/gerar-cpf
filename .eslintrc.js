module.exports = {
  extends: 'eslint:recommended',
  plugins: ['jest'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    'jest/globals': true
  },
  parserOptions: {
    sourceType: 'module'
  }
};
