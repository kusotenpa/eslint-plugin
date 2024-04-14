import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import destructuringNewline from 'eslint-plugin-destructuring-newline'
import importPlugin from 'eslint-plugin-import'
import importNewlines from 'eslint-plugin-import-newlines'
import perfectionist from 'eslint-plugin-perfectionist'

/* eslint-disable perfectionist/sort-objects */
/** @type { import('eslint').Linter.FlatConfig[] } */
export default [
  js.configs.recommended,
  {
    linterOptions: { reportUnusedDisableDirectives: 2 },
    plugins: {
      '@stylistic': stylistic,
      'destructuring-newline': destructuringNewline,
      import: importPlugin,
      'import-newlines': importNewlines,
      perfectionist,
    },
    settings: { 'import/extensions': [ '.js', '.jsx' ] },
    rules: {
      eqeqeq: [ 2, 'always' ],
      'new-cap': 2,
      'no-console': 1,
      'no-debugger': 1,
      'no-lonely-if': 2,
      'no-param-reassign': 2,
      'no-promise-executor-return': 2,
      'no-self-compare': 2,
      'no-shadow': 2,
      'no-unused-private-class-members': 2,
      'no-unused-vars': 1,
      'no-unneeded-ternary': 2,
      'no-var': 2,
      'prefer-const': 2,
      'sort-imports': [ 2, { ignoreDeclarationSort: true } ],

      '@stylistic/array-bracket-newline': [ 2, { multiline: true } ],
      '@stylistic/array-bracket-spacing': [ 2, 'always' ],
      '@stylistic/array-element-newline': [
        2,
        {
          minItems: 3,
          multiline: true,
        },
      ],
      '@stylistic/arrow-parens': [ 2, 'as-needed' ],
      '@stylistic/arrow-spacing': 2,
      '@stylistic/brace-style': 2,
      '@stylistic/comma-dangle': [ 2, 'always-multiline' ],
      '@stylistic/comma-spacing': [
        2,
        {
          before: false,
          after: true,
        },
      ],
      '@stylistic/computed-property-spacing': [ 2, 'always' ],
      '@stylistic/eol-last': 2,
      '@stylistic/func-call-spacing': 2,
      '@stylistic/function-call-argument-newline': [ 2, 'consistent' ],
      '@stylistic/function-paren-newline': [ 2, 'multiline-arguments' ],
      '@stylistic/indent': [
        2,
        2,
        {
          SwitchCase: 1,
          MemberExpression: 1,
        },
      ],
      '@stylistic/jsx-quotes': [ 2, 'prefer-single' ],
      '@stylistic/key-spacing': 2,
      '@stylistic/keyword-spacing': 2,
      '@stylistic/max-len': [
        2,
        {
          code: 100,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      '@stylistic/max-statements-per-line': 2,
      '@stylistic/new-parens': 2,
      '@stylistic/no-multi-spaces': 2,
      '@stylistic/no-multiple-empty-lines': [
        2,
        {
          max: 1,
          maxEOF: 0,
          maxBOF: 0,
        },
      ],
      '@stylistic/no-tabs': 2,
      '@stylistic/no-trailing-spaces': 2,
      '@stylistic/no-whitespace-before-property': 2,
      '@stylistic/object-curly-newline': [
        2,
        {
          ObjectExpression: { multiline: true },
          ObjectPattern: { multiline: true },
          ImportDeclaration: {
            multiline: true,
            minProperties: 2,
          },
        },
      ],
      '@stylistic/object-curly-spacing': [ 2, 'always' ],
      '@stylistic/object-property-newline': [ 2, { allowAllPropertiesOnSameLine: false } ],
      '@stylistic/operator-linebreak': [ 2, 'before' ],
      '@stylistic/padded-blocks': [ 2, 'never' ],
      '@stylistic/padding-line-between-statements': [
        2,
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
          prev: [
            'for',
            'while',
            'if',
            'switch',
          ],
          next: '*',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: [
            'for',
            'while',
            'if',
            'switch',
            'return',
          ],
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
          blankLine: 'any',
          prev: [ 'require' ],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: '*',
          next: 'require',
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
      '@stylistic/quote-props': [ 2, 'as-needed' ],
      '@stylistic/quotes': [ 2, 'single' ],
      '@stylistic/semi': [ 2, 'never' ],
      '@stylistic/space-before-blocks': 2,
      '@stylistic/space-before-function-paren': [ 2, 'never' ],
      '@stylistic/space-in-parens': 2,
      '@stylistic/space-infix-ops': 2,

      'destructuring-newline/object-property-newline': 2,

      'import/newline-after-import': 2,
      'import/no-useless-path-segments': 2,
      'import/order': [
        2,
        {
          alphabetize: { order: 'asc' },
          'newlines-between': 'always',
        },
      ],

      'import-newlines/enforce': [
        2,
        {
          items: 1,
          semi: false,
          forceSingleLine: false,
        },
      ],

      'perfectionist/sort-objects': 2,
    },
  },
]
