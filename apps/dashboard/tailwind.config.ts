import { baseConfig, baseContent } from '@jwizard-web/tailwind-config/tailwind';
import type { Config } from 'tailwindcss';

const config: Pick<Config, 'content' | 'presets'> = {
  content: [...baseContent, './src/index.html'],
  presets: [baseConfig],
};

export default config;
