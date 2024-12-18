/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { baseConfig, baseContent } from '@jwizard-web/tailwind-config/tailwind';
import type { Config } from 'tailwindcss';

const config: Pick<Config, 'content' | 'presets'> = {
  content: [...baseContent, './src/index.html'],
  presets: [baseConfig],
};

export default config;
