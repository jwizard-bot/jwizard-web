/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';

type PageTitle =
  | 'commands'
  | 'contribute'
  | 'error-codes'
  | 'privacyPolicy'
  | 'radioStations'
  | 'termsOfService'
  | 'notFound';

export const generateSubPageMetadata = async (
  i18nTitleKey: PageTitle
): Promise<Metadata> => {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'title' });
  return {
    title: t(i18nTitleKey),
  };
};

export const generateRootLayoutMetadata = async (): Promise<Metadata> => {
  const locale = await getLocale();
  const t = await getTranslations({ locale });
  return {
    title: {
      template: '%s | JWizard',
      default: 'JWizard',
    },
    description: t('description'),
  };
};
