'use strict'

module.exports = {
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/consistent-indexed-object-style': 2,
    '@typescript-eslint/consistent-type-definitions': [ 2, 'type' ],
    '@typescript-eslint/consistent-type-imports': 2,
    '@typescript-eslint/indent': [ 2, 2, {
      SwitchCase: 1,
      MemberExpression: 1,
    } ],
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
    '@typescript-eslint/type-annotation-spacing': 2,
    '@typescript-eslint/semi': [ 2, 'never' ],

    'no-unused-vars': 0,
    indent: 0,
    semi: 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
}
