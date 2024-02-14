# onecfg-lib

> A collection of [onecfg](https://crates.io/crates/onecfg) files specifically designed to configure
> TypeScript, Rust, and Zig projects.

## Configuring ESLint

Since ESLint has switched to a JavaScript-only configuration format, it currently cannot be created
with onecfg. Therefore, I am sharing an ESLint configuration [here](eslint.config.js), which has to
be manually copied into the respective project. The [ESLint onecfg file](lib/onecfg-eslint.json)
only takes care of the VSCode integration.

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
