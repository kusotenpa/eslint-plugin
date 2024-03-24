# @kusotenpa/eslint-plugin

## 💿 Installation

```
npm install --save-dev eslint @kusotenpa/eslint-plugin
```

## Usage

```ts
import plugin from '@kusotenpa/eslint-plugin'

export default [
  ...plugin.configs.js,
  ...plugin.configs.ts,
  ...plugin.configs.react,
]
```
