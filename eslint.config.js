// @ts-nocheck

import tsPlugin from '@typescript-eslint/eslint-plugin';
import * as tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default [
  { ignores: [`coverage/`, `dist/`, `lib/`] },

  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: `module`,
      globals: { ...globals.browser, ...globals.node },
    },

    rules: {
      'complexity': `error`,
      'curly': `error`,
      'eqeqeq': [`error`, `always`, { null: `ignore` }],

      'no-restricted-globals': [
        `error`,
        { name: `__dirname`, message: `Use "fileURLToPath(import.meta.dirname)" instead.` },
        { name: `__filename`, message: `Use "fileURLToPath(import.meta.url)" instead.` },
      ],

      'no-shadow': `error`,
      'object-shorthand': `error`,
      'prefer-const': [`error`, { destructuring: `all` }],
      'quotes': [`error`, `backtick`],
      'sort-imports': [`error`, { ignoreDeclarationSort: true, ignoreMemberSort: false }],
    },
  },

  {
    plugins: { import: importPlugin },

    rules: {
      'import/consistent-type-specifier-style': [`error`, `prefer-top-level`],
      'import/extensions': [`error`, `always`, { ignorePackages: true }],
      'import/no-commonjs': `error`,
      'import/no-duplicates': [`error`, { considerQueryString: true }],
      'import/no-extraneous-dependencies': `error`,

      'import/order': [
        `error`,
        {
          'alphabetize': { order: `asc` },

          'groups': [
            `type`,
            [`builtin`, `external`, `internal`, `parent`, `sibling`, `index`, `object`],
          ],

          'newlines-between': `always`,
          'warnOnUnassignedImports': true,
        },
      ],
    },
  },

  {
    files: [`**/*.ts`, `**/*.tsx`, `**/*.mts`, `**/*.cts`],
    plugins: { '@typescript-eslint': tsPlugin },

    languageOptions: {
      parser: tsParser,
      parserOptions: { project: true, tsconfigRootDir: import.meta.dirname },
    },

    rules: {
      '@typescript-eslint/await-thenable': `error`,

      '@typescript-eslint/consistent-type-imports': [
        `error`,
        { prefer: `type-imports`, fixStyle: `separate-type-imports` },
      ],

      '@typescript-eslint/explicit-module-boundary-types': [
        `error`,
        { allowDirectConstAssertionInArrowFunctions: true },
      ],

      '@typescript-eslint/no-floating-promises': `error`,
      '@typescript-eslint/no-import-type-side-effects': `error`,
      '@typescript-eslint/no-require-imports': `error`,
      '@typescript-eslint/no-shadow': [`error`, { hoist: `all` }],
      'no-shadow': `off`,
      '@typescript-eslint/promise-function-async': `error`,
      '@typescript-eslint/quotes': [`error`, `backtick`],
      'quotes': `off`,
      '@typescript-eslint/require-await': `error`,
      'require-await': `off`,
    },
  },

  {
    files: [`**/*.cjs`, `**/*.cts`],

    rules: {
      'no-restricted-globals': `off`,
      'import/extensions': `off`,
      'import/no-commonjs': `off`,
      '@typescript-eslint/no-require-imports': `off`,
    },
  },
];
