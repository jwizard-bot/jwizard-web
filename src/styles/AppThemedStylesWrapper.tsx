/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '@rbnd/react-dark-mode';
import { GlobalStyles, themedStyles } from './global';
import { CssTheme } from './types';

type Props = {
  children: React.ReactNode;
};

export const AppThemedStylesWrapper: React.FC<Props> = ({
  children,
}): JSX.Element => {
  const { mode } = useDarkMode();

  return (
    <ThemeProvider theme={themedStyles[mode as CssTheme]}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
