'use client';

import { useMediaQuery } from 'usehooks-ts';
import fullConfig from '../resolved-config';

const useSmallScreen = () => useMediaQuery(`(max-width: ${fullConfig.theme.screens.sm})`);

export { useSmallScreen };
