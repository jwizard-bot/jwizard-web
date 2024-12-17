/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const baseConfig = require('./base.cjs');
const eslintConfigPrettier = require('eslint-config-prettier');
const globals = require('globals');
const js = require('@eslint/js');
const pluginReact = require('eslint-plugin-react');
const pluginReactHooks = require('eslint-plugin-react-hooks');

module.exports = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-dep': 'off',
      'no-unused-vars': 'off',
      'react/prop-types': 'off',
    },
  },
];
