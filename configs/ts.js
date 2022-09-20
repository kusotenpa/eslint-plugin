'use strict'

module.exports = {
  plugins: [
    'import',
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/strict',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/brace-style': 2,
    '@typescript-eslint/comma-spacing': [ 2, {
      before: false,
      after: true,
    } ],
    '@typescript-eslint/consistent-indexed-object-style': 2,
    '@typescript-eslint/consistent-type-exports': 2,
    '@typescript-eslint/consistent-type-definitions': [ 2, 'type' ],
    '@typescript-eslint/consistent-type-imports': 2,
    '@typescript-eslint/func-call-spacing': 2,
    '@typescript-eslint/indent': [ 2, 2, {
      SwitchCase: 1,
      MemberExpression: 1,
    } ],
    '@typescript-eslint/keyword-spacing': 2,
    '@typescript-eslint/member-delimiter-style': [ 2, {
      multiline: {
        delimiter: 'none',
      },
      singleline: {
        delimiter: 'semi',
      },
    } ],
    '@typescript-eslint/naming-convention': [ 2, {
      selector: 'typeAlias',
      format: [ 'PascalCase' ],
    } ],
    '@typescript-eslint/no-use-before-define': [ 2, {
      functions: false,
    } ],
    '@typescript-eslint/object-curly-spacing': [ 2, 'always' ],
    '@typescript-eslint/padding-line-between-statements': [ 2,
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
        prev: [ 'interface', 'type' ],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: [ 'interface', 'type' ],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [ 'interface', 'type' ],
      },
      {
        blankLine: 'never',
        prev: [ 'interface', 'type' ],
        next: [ 'interface', 'type' ],
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
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },
    ],
    '@typescript-eslint/quotes': [ 2, 'single' ],
    '@typescript-eslint/type-annotation-spacing': 2,
    '@typescript-eslint/semi': [ 2, 'never' ],
    '@typescript-eslint/sort-type-union-intersection-members': 2,
    '@typescript-eslint/space-before-blocks': 2,
    '@typescript-eslint/space-before-function-paren': [ 2, 'never' ],
    '@typescript-eslint/space-infix-ops': 2,

    'brace-style': 0,
    'comma-spacing': 0,
    'func-call-spacing': 0,
    indent: 0,
    'keyword-spacing': 0,
    'no-unused-vars': 0,
    'object-curly-spacing': 0,
    'padding-line-between-statements': 0,
    quotes: 0,
    semi: 0,
    'space-before-blocks': 0,
    'space-before-function-paren': 0,
    'space-infix-ops': 0,

    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
}
