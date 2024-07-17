/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useMediaQuery } from 'usehooks-ts';
import { fullConfig } from '@/theme';

const useSmallScreen = (): boolean => {
  const isSmallScreen = useMediaQuery(
    `(max-width: ${fullConfig.theme.screens.sm})`
  );

  return isSmallScreen;
};

export default useSmallScreen;
