/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useTranslation } from 'react-i18next';
import { DEFAULT_NAMESPACE, PageNamespace, ROOT_NAMESPACE } from '@/i18n';

const usePageTranslations = (namespace?: PageNamespace) => {
  const namespaces = [];
  if (namespace) {
    namespaces.push(`${ROOT_NAMESPACE}\\${namespace}-page`);
  }
  const {
    t: rT,
    i18n,
    ...rest
  } = useTranslation([DEFAULT_NAMESPACE, ROOT_NAMESPACE, ...namespaces]);
  const { exists, ...restOfI18n } = i18n;

  return {
    t: (i18nKey: string) =>
      namespace ? rT(`${ROOT_NAMESPACE}\\${namespace}-page:${i18nKey}`) : rT(i18nKey),
    exist: (i18nKey: string) =>
      namespace ? exists(`${ROOT_NAMESPACE}\\${namespace}-page:${i18nKey}`) : exists(i18nKey),
    ...rest,
    i18n: { ...restOfI18n },
  };
};

export { usePageTranslations };
