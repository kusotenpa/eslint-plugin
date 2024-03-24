import stylistic from '@stylistic/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import perfectionist from 'eslint-plugin-perfectionist'
import tsEslint from 'typescript-eslint'

import base from './base.js'

/* eslint-disable perfectionist/sort-objects */
export default tsEslint.config({
  files: [ '**/*.{ts,tsx}' ],
  extends: [
    ...base,
    ...tsEslint.configs.recommendedTypeChecked,
    ...tsEslint.configs.strict,
  ],
  plugins: {
    '@typescript-eslint': tsEslint.plugin,
    import: importPlugin,
    perfectionist,
    stylistic,
  },
  settings: {
    'import/extensions': [ '.ts', '.tsx' ],
    'import/parsers': { '@typescript-eslint/parser': [ '.ts', '.tsx' ] },
  },
  rules: {
    '@typescript-eslint/consistent-indexed-object-style': 2,
    '@typescript-eslint/consistent-type-definitions': [ 2, 'type' ],
    '@typescript-eslint/consistent-type-exports': [ 2, { fixMixedExportsWithInlineTypeSpecifier: true } ],
    '@typescript-eslint/consistent-type-imports': [ 2, { fixStyle: 'inline-type-imports' } ],
    '@typescript-eslint/naming-convention': [ 2, {
      selector: 'typeAlias',
      format: [ 'PascalCase' ],
    } ],
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-use-before-define': [ 2, { functions: false } ],
    '@typescript-eslint/sort-type-constituents': 2,

    '@stylistic/member-delimiter-style': [ 2, {
      multiline: { delimiter: 'none' },
      singleline: { delimiter: 'semi' },
    } ],
    '@stylistic/type-annotation-spacing': 2,

    'import/consistent-type-specifier-style': [ 2, 'prefer-inline' ],
    'import/no-duplicates': [ 2, { 'prefer-inline': true } ],

    'perfectionist/sort-object-types': 2,

    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
})
