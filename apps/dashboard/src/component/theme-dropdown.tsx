/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { useDarkMode } from '@/context/dark-mode-context';
import { usePageTranslations } from '@/hooks/use-page-translations';
import { ThemeSelect } from '@jwizard-web/ui/component/theme-select';

const ThemeDropdown: React.FC = (): React.ReactElement => {
  const { t } = usePageTranslations();
  const { mode, setMode } = useDarkMode();

  return (
    <ThemeSelect
      theme={mode}
      opaque={true}
      onChangeTheme={setMode}
      onTranslate={i18nKey => t(i18nKey)}
    />
  );
};

export { ThemeDropdown };
