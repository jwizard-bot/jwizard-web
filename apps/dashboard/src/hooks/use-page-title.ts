/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useEffect } from 'react';
import config from '@/config';
import { usePageTranslations } from '@/hooks/use-page-translations';
import { PageNamespace } from '@/i18n';

const usePageTitle = ({
  i18nTitleKey = 'title',
  i18nNamespace,
}: {
  i18nTitleKey?: string;
  i18nNamespace?: PageNamespace;
} = {}): void => {
  const { t, i18n, exist } = usePageTranslations(i18nNamespace);

  useEffect(() => {
    let title = config.appName;
    if (exist(i18nTitleKey)) {
      title = `${t(i18nTitleKey)} | ${config.appName}`;
    }
    document.title = title;
  }, [i18n.language]);
};

export { usePageTitle };
