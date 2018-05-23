module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:lodash/recommended',
    'plugin:css-modules/recommended',
    'plugin:vue/recommended',
  ],

  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 2018,
    parser: 'babel-eslint',
    sourceType: 'module',
  },

  plugins: [
    'babel',
    'compat',
    'css-modules',
    'eslint-comments',
    'html',
    'jest',
    'jsdoc',
    'json',
    'lodash',
    'no-use-extend-native',
    'prefer-object-spread',
    'prettier',
    'promise',
    'sort-class-members',
    'vue',
  ],

  root: true,

  settings: {
    'html/html-extensions': [
      '.erb',
      '.handlebars',
      '.hbs',
      '.htm',
      '.html',
      '.mustache',
      '.nunjucks',
      '.php',
      '.tag',
      '.twig',
      '.we',
    ],
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
};
