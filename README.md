# onecfg-lib

A collection of [onecfg](https://crates.io/crates/onecfg) config files for
quickly setting up TypeScript or Rust projects.

## [EditorConfig](https://editorconfig.org)

<details>
  <summary>onecfg config file</summary>

```json
{
  "extends": [
    "https://raw.githubusercontent.com/clebert/onecfg-lib/main/std/onecfg-editorconfig.json"
  ]
}
```

</details>

## [ESLint](https://eslint.org)

The rules are designed for ECMAScript modules and prohibit CommonJS.

<details>
  <summary>onecfg config file</summary>

```json
{
  "extends": [
    "https://raw.githubusercontent.com/clebert/onecfg-lib/main/std/onecfg-eslint.json"
  ]
}
```

</details>

<details>
  <summary>npm dependencies</summary>

- [`eslint`](https://www.npmjs.com/package/eslint)
- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import)
- [`eslint-plugin-markdown`](https://www.npmjs.com/package/eslint-plugin-markdown)

</details>

<details>
  <summary>npm scripts</summary>

- **lint**: `eslint .`

</details>

## [Git](https://git-scm.com)

<details>
  <summary>onecfg config file</summary>

```json
{
  "extends": [
    "https://raw.githubusercontent.com/clebert/onecfg-lib/main/std/onecfg-git.json"
  ]
}
```

</details>

## [Jest](https://jestjs.io)

The config is designed for ECMAScript modules and requires the
`--experimental-vm-modules` Node.js flag.

<details>
  <summary>onecfg config file</summary>

```json
{
  "extends": [
    "https://raw.githubusercontent.com/clebert/onecfg-lib/main/std/onecfg-jest.json"
  ]
}
```

</details>

<details>
  <summary>npm dependencies</summary>

- [`jest`](https://www.npmjs.com/package/jest)
- [`@jest/globals`](https://www.npmjs.com/package/@jest/globals)

</details>

<details>
  <summary>npm scripts</summary>

- **test**: `NODE_OPTIONS=--experimental-vm-modules jest --silent`

</details>

## [Node.js](https://nodejs.org/en/)

Version 18.

<details>
  <summary>onecfg config file</summary>

```json
{
  "extends": [
    "https://raw.githubusercontent.com/clebert/onecfg-lib/main/std/onecfg-node.json"
  ]
}
```

</details>

## [Preact](https://preactjs.com)

Unlike React, Preact requires patches to the TypeScript and SWC configurations.

<details>
  <summary>onecfg config file</summary>

```json
{
  "extends": [
    "https://raw.githubusercontent.com/clebert/onecfg-lib/main/std/onecfg-preact.json"
  ]
}
```

</details>

<details>
  <summary>npm dependencies</summary>

- [`preact`](https://www.npmjs.com/package/preact)

</details>

## [Prettier](https://prettier.io)

<details>
  <summary>onecfg config file</summary>

```json
{
  "extends": [
    "https://raw.githubusercontent.com/clebert/onecfg-lib/main/std/onecfg-prettier.json"
  ]
}
```

</details>

<details>
  <summary>npm dependencies</summary>

- [`prettier`](https://www.npmjs.com/package/prettier)
- [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier)
  (if `.eslintrc.json` is defined)

</details>

<details>
  <summary>npm scripts</summary>

- **check**: `prettier --check .`
- **format**: `prettier --write .`

</details>

## [Rust](https://www.rust-lang.org)

<details>
  <summary>onecfg config file</summary>

```json
{
  "extends": [
    "https://raw.githubusercontent.com/clebert/onecfg-lib/main/std/onecfg-rust.json"
  ]
}
```

</details>

## [SWC](https://swc.rs)

A config for ES2022 and ECMAScript modules.

<details>
  <summary>onecfg config file</summary>

```json
{
  "extends": [
    "https://raw.githubusercontent.com/clebert/onecfg-lib/main/std/onecfg-swc.json"
  ]
}
```

</details>

<details>
  <summary>npm dependencies</summary>

- [`@swc/core`](https://www.npmjs.com/package/@swc/core)

</details>

## [TypeScript](https://www.typescriptlang.org)

A strict config for ES2022 and ECMAScript modules.

<details>
  <summary>onecfg config file</summary>

```json
{
  "extends": [
    "https://raw.githubusercontent.com/clebert/onecfg-lib/main/std/onecfg-typescript.json",
    "https://raw.githubusercontent.com/clebert/onecfg-lib/main/std/onecfg-typescript-emit.json",
    "https://raw.githubusercontent.com/clebert/onecfg-lib/main/std/onecfg-typescript-eslint.json"
  ]
}
```

</details>

<details>
  <summary>npm dependencies</summary>

- [`typescript`](https://www.npmjs.com/package/typescript)
- [`@swc/jest`](https://www.npmjs.com/package/@swc/jest) (if `jest.config.json`
  is defined)
- [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
  (if `.eslintrc.json` is defined)
- [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser)
  (if `.eslintrc.json` is defined)

</details>

<details>
  <summary>npm scripts</summary>

- **check**: `tsc`
- **emit**: `tsc --project tsconfig.emit.json`

</details>

## [Visual Studio Code](https://code.visualstudio.com)

<details>
  <summary>onecfg config file</summary>

```json
{
  "extends": [
    "https://raw.githubusercontent.com/clebert/onecfg-lib/main/std/onecfg-vscode.json"
  ]
}
```

</details>
