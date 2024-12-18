'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { ThemeSelect } from '@jwizard-web/ui/component/theme-select';

const ThemeSwitch: React.FC = () => {
  const t = useTranslations();
  const { theme, setTheme } = useTheme();

  return <ThemeSelect theme={theme} onChangeTheme={setTheme} onTranslate={i18nKey => t(i18nKey)} />;
};

export { ThemeSwitch };
