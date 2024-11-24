# @kusotenpa/eslint-plugin

## 💿 Installation

```
npm install --save-dev eslint @kusotenpa/eslint-plugin
```

## Usage

```ts
import plugin from '@kusotenpa/eslint-plugin'

export default [
  ...plugin.configs.js.map(config => ({
    ...config,
    files: [ '**/*.js' ],
  })),
  ...plugin.configs.ts.map(config => ({
    ...config,
    files: [ '**/*.{ts,tsx}' ],
  })),
  ...plugin.configs.react.map(config => ({
    ...config,
    files: [ '**/*.{jsx,tsx}' ],
  })),
]
```
