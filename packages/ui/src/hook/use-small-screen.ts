'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useMediaQuery } from 'usehooks-ts';
import fullConfig from '../resolved-config';

const useSmallScreen = () => useMediaQuery(`(max-width: ${fullConfig.theme.screens.sm})`);

export { useSmallScreen };
