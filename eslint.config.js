import globals from 'globals'

import plugin from './configs/index.js'

/** @type { import('eslint').Linter.Config[] } */
export default [
  ...plugin.configs.js,
  ...plugin.configs.ts,
  ...plugin.configs.react,
  {
    files: [ 'configs/**/*.js' ],
    languageOptions: { globals: { ...globals.node } },
  },
  {
    files: [ 'local/**/*.{ts,tsx}' ],
    languageOptions: { parserOptions: { project: 'tsconfig.json' } },
  },
]
