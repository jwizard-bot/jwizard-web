'use strict';
/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
module.exports = {
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
  singleQuote: true,
  semi: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
  trailingComma: 'es5',
  bracketSameLine: true,
  importOrderParserPlugins: ['typescript', 'vue'],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^vue/(.*)$', '^[^@v](.*)$', '^@(.*)$', '^[./]'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};
