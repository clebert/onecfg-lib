# onecfg-lib

> A collection of [onecfg](https://crates.io/crates/onecfg) files for quickly
> setting up TypeScript or Rust projects.

## Example projects

- https://github.com/clebert/aws-simple/blob/master/onecfg.json
- https://github.com/clebert/bookmark.wtf/blob/main/onecfg.json
- https://github.com/clebert/onecfg-rust/blob/main/onecfg.json

## [onecfg-editorconfig.json](https://raw.githubusercontent.com/clebert/onecfg-lib/main/lib/onecfg-editorconfig.json)

This onecfg file sets up an `.editorconfig` file and related settings for Visual
Studio Code. The main aspects are:

1. Defines the `.editorconfig` file with standard formatting settings.
1. Recommends the `editorconfig.editorconfig` extension for Visual Studio Code
   in the `.vscode/extensions.json` file.
1. Enables auto-formatting on save and excludes the `.editorconfig` file from
   the file explorer in Visual Studio Code settings.

## [onecfg-eslint.json](https://raw.githubusercontent.com/clebert/onecfg-lib/main/lib/onecfg-eslint.json)

This onecfg file sets up ESLint-related settings for a project. The main aspects
are:

1. Defines `.eslintignore` and `.eslintrc.json` files.
1. Configures ESLint rules in the `.eslintrc.json` file, including parser
   options, plugins, and specific rules for code quality, imports, and
   formatting.
1. Provides overrides for different file types in the `.eslintrc.json` file.
1. Adds the `.eslintrc.json` file to the `.prettierignore` file.
1. Recommends the `dbaeumer.vscode-eslint` extension for Visual Studio Code in
   the `.vscode/extensions.json` file.
1. Enables ESLint code actions on save and excludes `.eslintignore` and
   `.eslintrc.json` files from the file explorer in Visual Studio Code settings.

### Required npm dependencies

```json
{
  "eslint": "^8.36.0",
  "eslint-plugin-import": "^2.27.5",
  "eslint-plugin-markdown": "^3.0.0"
}
```

## [onecfg-git.json](https://raw.githubusercontent.com/clebert/onecfg-lib/main/lib/onecfg-git.json)

This onecfg file sets up a `.gitignore` file and related settings for Visual
Studio Code. The main aspects are:

1. Defines the `.gitignore` file.
1. Excludes the `.gitignore` file from the file explorer in Visual Studio Code
   settings.

## [onecfg-jest.json](https://raw.githubusercontent.com/clebert/onecfg-lib/main/lib/onecfg-jest.json)

This onecfg file sets up a `jest.config.json` file for Jest testing
configurations and related settings for other tools, such as TypeScript, ESLint,
Git, Prettier, and Visual Studio Code. The main aspects are:

1. Defines the `jest.config.json` file with specific settings for test matching,
   clearing and restoring mocks, collecting coverage, and coverage thresholds.
1. Adds an `exclude` entry for the `coverage` folder to the `tsconfig.json`
   file.
1. Adds the `coverage` folder to the `.eslintignore`, `.gitignore`, and
   `.prettierignore` files.
1. Excludes the `jest.config.json` file from the file explorer in Visual Studio
   Code settings.

### Required npm dependencies

```json
{
  "jest": "^29.5.0",
  "@jest/globals": "^29.5.0"
}
```

## [onecfg-node.json](https://raw.githubusercontent.com/clebert/onecfg-lib/main/lib/onecfg-node.json)

This onecfg file sets up a `.node-version` file and related settings for Node.js
projects and other tools like Git, Prettier, and Visual Studio Code. The main
aspects are:

1. Defines the `.node-version` file containing the Node.js version (18).
1. Adds the `node_modules` folder to the `.gitignore` file.
1. Adds the `package-lock.json` file to the `.prettierignore` file.
1. Recommends the `eg2.vscode-npm-script` extension for Visual Studio Code in
   the `.vscode/extensions.json` file.
1. Excludes the `.node-version` file from the file explorer in Visual Studio
   Code settings.

## [onecfg-preact.json](https://raw.githubusercontent.com/clebert/onecfg-lib/main/lib/onecfg-preact.json)

This onecfg file sets up a TypeScript project to use Preact with React JSX
syntax by modifying the `tsconfig.base.json` file and providing the necessary
settings for the SWC compiler in the `.swcrc` file. The main aspects are:

1. Adds the `jsx` and `jsxImportSource` properties to the `compilerOptions`
   section of the `tsconfig.base.json` file to enable React JSX syntax and set
   the import source to Preact.
1. Configures the SWC compiler in the `.swcrc` file to use Preact as the import
   source and enable the automatic JSX runtime.

## [onecfg-prettier.json](https://raw.githubusercontent.com/clebert/onecfg-lib/main/lib/onecfg-prettier.json)

This onecfg file sets up Prettier, a code formatter, for a project. It defines
and configures `.prettierignore` and `.prettierrc.json` files, integrates with
ESLint, and updates the Visual Studio Code settings for various file types. The
main aspects are:

1. Defines `.prettierignore` and `.prettierrc.json` files..
1. Sets up the `.prettierignore` file with some ignored files (e.g.,
   `.prettierrc.json`, `LICENSE*`).
1. Configures the Prettier settings in the `.prettierrc.json` file, such as
   `bracketSpacing`, `printWidth`, `proseWrap`, `quoteProps`, `singleQuote`, and
   `trailingComma`.
1. Extends the ESLint configuration in the `.eslintrc.json` file to use the
   Prettier rules.
1. Recommends the Prettier extension for Visual Studio Code in the
   `.vscode/extensions.json` file.
1. Updates the Visual Studio Code settings in the `.vscode/settings.json` file
   to set Prettier as the default formatter for various file types, enable
   format on save, set a ruler at 80 characters, and exclude the Prettier files
   from the file explorer.

### Required npm dependencies

```json
{
  "prettier": "^2.8.4",
  "eslint-config-prettier": "^8.7.0"
}
```

## [onecfg-rust.json](https://raw.githubusercontent.com/clebert/onecfg-lib/main/lib/onecfg-rust.json)

This onecfg file sets up Rust code formatting and linting tools, as well as
Visual Studio Code settings for a Rust project. The main aspects are:

1. Defines the `rustfmt.toml` file.
1. Configures Rust formatting settings in the `rustfmt.toml` file, such as
   `edition`, `match_block_trailing_comma`, `max_width`, `newline_style`,
   `use_field_init_shorthand`, `use_small_heuristics`, and `use_try_shorthand`.
1. Updates the `.editorconfig` file to specify an indentation size of `4` for
   Rust files (`\*.rs`).
1. Adds the `target` folder to the `.gitignore` and `.prettierignore` files.
1. Recommends Rust Analyzer and Even Better TOML extensions for Visual Studio
   Code in the `.vscode/extensions.json` file.
1. Updates the Visual Studio Code settings in the `.vscode/settings.json` file
   to set Rust Analyzer as the default formatter for Rust files and Even Better
   TOML for TOML files, enable format on save, set a ruler at 120 characters,
   exclude the `rustfmt.toml` file from the file explorer, and configure Rust
   Analyzer settings such as enabling clippy, check features, check on save, and
   disabling inlay hints.

## [onecfg-rust-github.json](https://raw.githubusercontent.com/clebert/onecfg-lib/main/lib/onecfg-rust-github.json)

This onecfg file sets up a Continuous Integration (CI) pipeline for a Rust
project using GitHub Actions. The main aspects are:

1. Defines the `.github/workflows/ci.yml` file.
1. Configures the CI pipeline in the `.github/workflows/ci.yml` file with the
   following features:
   - Triggers the CI on `push` and `pull_request` events.
   - Defines a CI job that runs on the latest version of Ubuntu.
   - Sets the `CARGO_TERM_COLOR` environment variable to `always`.
   - Specifies the steps for the CI job, which include:
     - Checking out the repository using the `actions/checkout@v3` action.
     - Disabling auto-self-update for Rustup.
     - Installing the stable Rust toolchain with the minimal profile.
     - Caching Rust dependencies using the `Swatinem/rust-cache@v2` action.
     - Running `cargo check`, `cargo test`, `cargo fmt --all -- --check`, and
       `cargo clippy --all-targets --all-features`.
1. Adds the `.github/workflows/ci.yml` file to the `.prettierignore` file.
1. Updates the Visual Studio Code settings in the `.vscode/settings.json` file
   to exclude the `.github` folder and the `.github/workflows/ci.yml` file from
   the file explorer.

## [onecfg-swc.json](https://raw.githubusercontent.com/clebert/onecfg-lib/main/lib/onecfg-swc.json)

This onecfg file sets up SWC, a super-fast JavaScript and TypeScript compiler,
by defining and modifying the `.swcrc file`. The main aspects are:

1. Defines the `.swcrc` file.
1. Configures the SWC settings in the `.swcrc` file with the following features:
   - Sets the target JavaScript version to `es2022` for the `jsc` property.
   - Configures the module type to `es6`.
   - Enables source maps.
1. Adds the `.swcrc` file to the `.prettierignore` file.
1. Updates the Visual Studio Code settings in the `.vscode/settings.json` file
   to exclude the `.swcrc` file from the file explorer.

### Required npm dependencies

```json
{
  "@swc/core": "^1.3.41"
}
```

## [onecfg-typescript.json](https://raw.githubusercontent.com/clebert/onecfg-lib/main/lib/onecfg-typescript.json)

This onecfg file sets up TypeScript and related settings for your project. The
main aspects are:

1. Defines the `tsconfig.base.json` file with strict options, module resolution
   settings, and JSX support. It targets the `es2022` output.
1. Defines the `tsconfig.json` file that extends the `tsconfig.base.json` file
   and adds options for resolving JSON modules, disabling emitting output, and
   enabling type checking for JavaScript files.
1. Updates the Jest configuration in the `jest.config.json` file to support
   TypeScript files with the following changes:
   - Adds `.ts` and `.tsx` to the list of extensions treated as ESM.
   - Maps imports of JavaScript files to their original file paths without the
     `.js` extension.
   - Specifies the `@swc/jest` transform for TypeScript files.
   - Changes the `testMatch` pattern to include TypeScript files.
1. Adds the `tsconfig.base.json` and `tsconfig.json` files to the
   `.prettierignore` file.
1. Configures the SWC compiler in the `.swcrc` file to use the TypeScript parser
   and enable JSX syntax.
1. Updates the Visual Studio Code settings in the `.vscode/settings.json` file
   with the following changes:
   - Enables automatically adding missing imports on save.
   - Excludes `tsconfig.base.json` and `tsconfig.json` from the file explorer.
   - Specifies the TypeScript SDK to use the version installed in the
     `node_modules` folder.

### Required npm dependencies

```json
{
  "typescript": "^5.0.2",
  "@swc/jest": "^0.2.24"
}
```

## [onecfg-typescript-emit.json](https://raw.githubusercontent.com/clebert/onecfg-lib/main/lib/onecfg-typescript-emit.json)

This onecfg file adds a new TypeScript configuration called `tsconfig.emit.json`
for emitting output files and makes changes to other configurations accordingly.
The main aspects are:

1. Defines the `tsconfig.emit.json` file that extends the `tsconfig.base.json`
   file and sets the following options:
   - Includes the `src` folder for compilation.
   - Outputs the compiled files and declarations to the `lib` folder.
   - Enables generating source maps and inline sources.
   - Enables incremental compilation for faster builds.
1. Updates the existing TypeScript configuration in the `tsconfig.json` file to
   exclude the `lib` folder.
1. Adds the `lib` folder to the `.eslintignore` file.
1. Adds the `lib` folder and the `*.tsbuildinfo` files generated by incremental
   compilation to the `.gitignore` file.
1. Adds the `lib` folder and the `tsconfig.emit.json` file to the
   `.prettierignore` file.
1. Updates the Visual Studio Code settings in the `.vscode/settings.json` file
   to exclude the `tsconfig.emit.json` file from the file explorer.

## [onecfg-typescript-eslint.json](https://raw.githubusercontent.com/clebert/onecfg-lib/main/lib/onecfg-typescript-eslint.json)

This onecfg file creates a new TypeScript configuration called
`tsconfig.eslint.json` specifically for ESLint, and updates the ESLint and other
configurations accordingly. The main aspects are:

1. Defines the `tsconfig.eslint.json` file that extends the `tsconfig.base.json`
   file and includes all `.cts`, `.mts`, `.ts`, and `.tsx` files.
1. Updates the ESLint configuration in the `.eslintrc.json` file:
   - Adds the `@typescript-eslint` plugin.
   - Adds new overrides and rules for TypeScript files, including some specific
     to `.cts` files and Markdown code blocks containing TypeScript code.
1. Adds the `tsconfig.eslint.json` file to the `.prettierignore` file.
1. Updates the Visual Studio Code settings in the `.vscode/settings.json` file
   to exclude the `tsconfig.eslint.json` file from the file explorer.

### Required npm dependencies

```json
{
  "@typescript-eslint/eslint-plugin": "^5.55.0",
  "@typescript-eslint/parser": "^5.55.0"
}
```

## [onecfg-vscode.json](https://raw.githubusercontent.com/clebert/onecfg-lib/main/lib/onecfg-vscode.json)

This onecfg file sets up Visual Studio Code settings and extension
recommendations by defining and modifying the `.vscode/extensions.json` and
`.vscode/settings.json` files. The main aspects are:

1. Defines the `.vscode/extensions.json` and `.vscode/settings.json` files.
1. Configures the Visual Studio Code extension recommendations in the
   `.vscode/extensions.json` file with an empty array, meaning no specific
   extensions are recommended.
1. Configures the Visual Studio Code settings in the `.vscode/settings.json`
   file with the following features:
   - Excludes the `.vscode` folder and its contents (`extensions.json` and
     `settings.json`) from the file explorer.
   - Enables JSON schema download.
   - Adds a JSON schema configuration for files matching the pattern
     `onecfg\*.json` with the specified URL.
1. Adds the `.vscode/extensions.json` and `.vscode/settings.json` files to the
   `.prettierignore` file.

## [onecfg-vscode-debug.json](https://raw.githubusercontent.com/clebert/onecfg-lib/main/lib/onecfg-vscode-debug.json)

This onecfg file removes the `files.exclude` property from the
`.vscode/settings.json` file by setting its value to `null` with a higher
priority value. This change will cause all previously excluded files to be
visible in the file explorer in Visual Studio Code.

Please note that this will override any previous settings regarding excluded
files in the `.vscode/settings.json` file, so you may need to add specific
exclusions back if needed.
