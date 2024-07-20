/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import Ui from '../ui';
import { DropdownItems, IconElement } from './themeData';

const ThemeToggleButton: React.FC = (): JSX.Element => {
  const { theme, setTheme } = useTheme();
  const t = useTranslations();

  const handleToggleTheme = (): void => {
    let nextMode: keyof DropdownItems = 'system';
    switch (theme) {
      case 'dark':
        nextMode = 'system';
        break;
      case 'light':
        nextMode = 'dark';
        break;
      case 'system':
        nextMode = 'light';
        break;
    }
    setTheme(nextMode);
  };

  return (
    <Ui.Button
      fullWidth
      size="lg"
      startContent={IconElement(theme as keyof DropdownItems)}
      onClick={handleToggleTheme}>
      {t(`themes.${theme}`)}
    </Ui.Button>
  );
};

export default ThemeToggleButton;
