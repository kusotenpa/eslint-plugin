import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

/* eslint-disable perfectionist/sort-objects */
/** @type { import('eslint').Linter.Config[] } */
export default [
  {
    name: 'kusotenpa/react',
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    settings: {
      react: { version: 'detect' },
      'jsx-a11y': {
        polymorphicPropName: 'as',
      },
    },
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      'react/button-has-type': 2,
      'react/iframe-missing-sandbox': 2,
      'react/jsx-closing-bracket-location': [ 2, 'line-aligned' ],
      'react/jsx-equals-spacing': [ 2, 'never' ],
      'react/jsx-first-prop-new-line': [ 2, 'multiline' ],
      'react/jsx-indent': [ 2, 2 ],
      'react/jsx-max-props-per-line': [ 2, { maximum: 1 } ],
      'react/jsx-newline': [ 2, { prevent: true } ],
      'react/jsx-no-constructed-context-values': 2,
      'react/jsx-no-target-blank': 2,
      'react/jsx-one-expression-per-line': [ 2, { allow: 'single-child' } ],
      'react/jsx-sort-props': [
        2,
        {
          callbacksLast: true,
          shorthandFirst: true,
          reservedFirst: true,
        },
      ],
      'react/jsx-tag-spacing': [
        2,
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
        },
      ],
      'react/no-invalid-html-attribute': 2,
      'react/no-this-in-sfc': 2,
      'react/self-closing-comp': 2,

      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
    },
  },
]
