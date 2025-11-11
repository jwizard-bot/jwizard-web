import { useEffect } from 'react';
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
    let title = 'JWizard';
    if (exist(i18nTitleKey)) {
      title = `${t(i18nTitleKey)} | JWizard`;
    }
    document.title = title;
  }, [i18n.language]);
};

export { usePageTitle };
