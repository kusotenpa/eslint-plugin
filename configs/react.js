'use strict'

module.exports = {
  plugins: [
    'react',
    'react-hooks',
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: '2020',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/button-has-type': 2,
    'react/jsx-closing-bracket-location': [ 2, 'line-aligned' ],
    'react/jsx-equals-spacing': [ 2, 'never' ],
    'react/jsx-first-prop-new-line': [ 2, 'multiline' ],
    'react/jsx-indent': [ 2, 2 ],
    'react/jsx-max-props-per-line': [ 2, {
      maximum: 1,
    } ],
    'react/jsx-no-target-blank': 2,
    'react/jsx-one-expression-per-line': [ 2, {
      allow: 'single-child',
    } ],
    'react/jsx-sort-props': [ 2, {
      callbacksLast: true,
      shorthandFirst: true,
      reservedFirst: true,
    } ],
    'react/jsx-tag-spacing': [ 2, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
    } ],
    'react/no-this-in-sfc': 2,
    'react/self-closing-comp': 2,

    'react/prop-types': 0,
    'react/display-name': 0,
    'react/react-in-jsx-scope': 0,
  },
}
