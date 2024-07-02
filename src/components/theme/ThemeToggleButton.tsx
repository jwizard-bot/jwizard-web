/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useTranslation } from 'react-i18next';
import { Mode, useDarkMode } from '@/context/DarkModeProvider';
import { Button } from '@nextui-org/react';
import { IconElement } from './data';

const ThemeToggleButton: React.FC = (): JSX.Element => {
  const { mode, setMode } = useDarkMode();
  const { t } = useTranslation();

  const handleToggleTheme = (): void => {
    let nextMode: Mode = 'system';
    switch (mode) {
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
    setMode(nextMode);
  };

  return (
    <Button
      color="primary"
      fullWidth
      startContent={IconElement(mode)}
      onClick={handleToggleTheme}>
      {t(mode)}
    </Button>
  );
};

export default ThemeToggleButton;
