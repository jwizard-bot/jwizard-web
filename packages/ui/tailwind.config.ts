import { baseConfig } from '@jwizard-web/tailwind-config/tailwind';
import type { Config } from 'tailwindcss';

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [baseConfig],
};

export default config;
