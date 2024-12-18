/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { baseConfig } from '@jwizard-web/tailwind-config/tailwind';
import type { Config } from 'tailwindcss';
import resolveConfig from 'tailwindcss/resolveConfig';

const fullConfig = resolveConfig(baseConfig as Config);

export default fullConfig;
