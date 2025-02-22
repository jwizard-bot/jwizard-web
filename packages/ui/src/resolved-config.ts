import { baseConfig, colors } from '@jwizard-web/tailwind-config/tailwind';
import type { Config } from 'tailwindcss';
import resolveConfig from 'tailwindcss/resolveConfig';

const fullConfig = resolveConfig(baseConfig as Config);

export { fullConfig, colors };
