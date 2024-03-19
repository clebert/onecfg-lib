# onecfg-lib

> A collection of [onecfg](https://crates.io/crates/onecfg) files specifically designed to configure
> TypeScript, Rust, and Zig projects.

## Configuring ESLint

`eslint.config.js`:

```js
import { createConfigs } from 'onecfg-lib-eslint';

export default [
  { ignores: [`dist/`, `lib/`] },

  ...createConfigs({
    browser: true,
    node: true,
  }),
];
```

`package.json`:

```json
{
  "type": "module",
  "scripts": {
    "lint": "eslint ."
  },
  "devDependencies": {
    "onecfg-lib-eslint": "^1.0.0"
  }
}
```

`onecfg.json`:

```json
{
  "extends": [
    "https://raw.githubusercontent.com/clebert/onecfg-lib/main/lib/onecfg-eslint.json",
    "https://raw.githubusercontent.com/clebert/onecfg-lib/main/lib/onecfg-vscode.json"
  ]
}
```
