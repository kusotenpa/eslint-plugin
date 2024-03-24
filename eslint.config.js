import plugin from '@kusotenpa/eslint-plugin'
import globals from 'globals'

/** @type { import('eslint').Linter.FlatConfig[] } */
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
