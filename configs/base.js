'use strict'

module.exports = {
  plugins: [
    'import',
    'modules-newline',
    'destructuring-newline',
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: '2020',
  },
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    'import/extensions': [ '.js', '.jsx', '.ts', '.tsx' ],
  },
  rules: {
    'arrow-parens': [ 2, 'as-needed' ],
    'arrow-spacing': 2,
    'array-bracket-spacing': [ 2, 'always' ],
    'brace-style': 2,
    'comma-dangle': [ 2, 'always-multiline' ],
    'comma-spacing': [ 2, {
      before: false,
      after: true,
    } ],
    'computed-property-spacing': [ 2, 'always' ],
    eqeqeq: [ 2, 'always' ],
    'eol-last': 2,
    'func-call-spacing': 2,
    indent: [ 2, 2, {
      SwitchCase: 1,
      MemberExpression: 1,
    } ],
    'jsx-quotes': [ 2, 'prefer-single' ],
    'key-spacing': 2,
    'keyword-spacing': 2,
    'max-len': [ 2, {
      code: 100,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    } ],
    'new-cap': 2,
    'no-console': 1,
    'no-debugger': 1,
    'no-lonely-if': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [ 2, {
      max: 1,
      maxEOF: 0,
    } ],
    'no-param-reassign': 2,
    'no-promise-executor-return': 2,
    'no-self-compare': 2,
    'no-shadow': 2,
    'no-trailing-spaces': 2,
    'no-tabs': 2,
    'no-unneeded-ternary': 2,
    'no-var': 2,
    'object-curly-newline': [ 2, {
      ObjectExpression: {
        minProperties: 1,
      },
      ObjectPattern: {
        multiline: true,
      },
      ImportDeclaration: {
        multiline: true,
        minProperties: 2,
      },
    } ],
    'object-curly-spacing': [ 2, 'always' ],
    'object-property-newline': [ 2, {
      allowAllPropertiesOnSameLine: false,
    } ],
    'operator-linebreak': [ 2, 'before' ],
    'padded-blocks': [ 2, 'never' ],
    'prefer-const': 2,
    'padding-line-between-statements': [ 2,
      {
        blankLine: 'always',
        prev: [ 'const', 'let' ],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: [ '*' ],
        next: [ 'const', 'let' ],
      },
      {
        blankLine: 'never',
        prev: [ 'const', 'let' ],
        next: [ 'const', 'let' ],
      },
      {
        blankLine: 'always',
        prev: [ 'multiline-const' ],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: [ 'for', 'while', 'if', 'switch' ],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [ 'for', 'while', 'if', 'switch', 'return' ],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [ 'export' ],
      },
      {
        blankLine: 'any',
        prev: [ 'cjs-import' ],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: '*',
        next: 'cjs-import',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [ 'cjs-export' ],
      },
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },
    ],
    quotes: [ 2, 'single' ],
    'quote-props': [ 2, 'as-needed' ],
    semi: [ 2, 'never' ],
    'space-in-parens': 2,
    'space-before-function-paren': [ 2, 'never' ],
    'space-before-blocks': 2,
    'space-infix-ops': 2,

    'import/newline-after-import': 2,
    'import/order': [ 2, {
      alphabetize: {
        order: 'asc',
      },
      'newlines-between': 'always',
    } ],

    'destructuring-newline/object-property-newline': 2,

    'modules-newline/import-declaration-newline': 2,
  },
}
