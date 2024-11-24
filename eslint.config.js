import globals from 'globals'

import plugin from './configs/index.js'

/** @type { import('eslint').Linter.Config[] } */
export default [
  ...plugin.configs.js.map(config => ({
    ...config,
    files: [ '**/*.js' ],
  })),
  ...plugin.configs.ts.map(config => ({
    ...config,
    files: [ 'local/**/*.{ts,tsx}' ],
  })),
  ...plugin.configs.react.map(config => ({
    ...config,
    files: [ 'local/**/*.{jsx,tsx}' ],
  })),
  {
    files: [ 'configs/**/*.js' ],
    languageOptions: { globals: { ...globals.node } },
  },
  {
    files: [ 'local/**/*.{ts,tsx}' ],
    languageOptions: { parserOptions: { project: 'tsconfig.json' } },
  },
]
