# onecfg-lib

> A collection of [onecfg](https://crates.io/crates/onecfg) files specifically designed to configure
> TypeScript, Rust, and Zig projects.

## Configuring ESLint

Since ESLint has switched to a JavaScript-only configuration format, it currently cannot be created
with onecfg. Therefore, I am sharing an ESLint configuration [here](eslint.config.js), which has to
be downloaded into the respective project:

```sh
curl -O https://raw.githubusercontent.com/clebert/onecfg-lib/main/eslint.config.js
```

The [ESLint onecfg file](lib/onecfg-eslint.json) only takes care of the VSCode integration and
should be added to your project's `onecfg.json` file together with the
[VSCode onecfg file](lib/onecfg-vscode.json):

```json
{
  "extends": [
    "https://raw.githubusercontent.com/clebert/onecfg-lib/main/lib/onecfg-eslint.json",
    "https://raw.githubusercontent.com/clebert/onecfg-lib/main/lib/onecfg-vscode.json"
  ]
}
```

Additionally, the following npm packages need to be imported into the `package.json`:

```json
{
  "devDependencies": {
    "@eslint/js": "*",
    "eslint": "*",
    "globals": "*",
    "typescript-eslint": "*"
  }
}
```
