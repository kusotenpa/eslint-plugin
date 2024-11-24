import _next from '@next/eslint-plugin-next'
import stylistic from '@stylistic/eslint-plugin'
import destructuringNewline from 'eslint-plugin-destructuring-newline'
import importPlugin from 'eslint-plugin-import'
import importNewlines from 'eslint-plugin-import-newlines'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import perfectionist from 'eslint-plugin-perfectionist'
import _react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tsEslint from 'typescript-eslint'

import base from './base.js'
import next from './next.js'
import react from './react.js'
import ts from './ts.js'

export default {
  configs: {
    js: base,
    next,
    react,
    ts,
  },
  internalPlugins: {
    destructuringNewline,
    importNewlines,
    importPlugin,
    jsxA11y,
    next: _next,
    perfectionist,
    react: _react,
    reactHooks,
    stylistic,
    tsEslint,
  },
}
