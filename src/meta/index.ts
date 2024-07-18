/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import config from '@/config';
import { languages } from '@/i18n/config';

type PageTitle =
  | 'commands'
  | 'contribute'
  | 'error-codes'
  | 'privacyPolicy'
  | 'radioStations'
  | 'termsOfService'
  | 'notFound';

export const iconSizesPx: number[] = [
  48, 72, 96, 128, 144, 152, 192, 384, 512,
] as const;

export const faviconSizesPx: number[] = [32, 64] as const;

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
  const language = await getLocale();
  const t = await getTranslations({ locale: language });
  return {
    title: {
      template: `%s | ${config.appName}`,
      default: config.appName,
    },
    description: t('description'),
    applicationName: config.appName,
    generator: 'Next.js',
    creator: `${config.appName} Team`,
    openGraph: {
      type: 'website',
      url: config.selfReferUrl,
      title: config.appName,
      description: t('description'),
      siteName: config.appName,
      images: {
        url: `${config.selfReferUrl}/og/og-banner-${language}.png`,
      },
      locale: language,
      alternateLocale: Object.keys(languages).filter(lang => lang !== language),
      countryName: 'Poland',
    },
    twitter: {
      title: config.appName,
      description: t('description'),
      card: 'summary_large_image',
      site: config.selfReferUrl,
      images: `${config.selfReferUrl}/og/og-banner-${language}.png`,
    },
    icons: [
      ...faviconSizesPx.map(sizePx => ({
        rel: 'icon',
        type: 'image/x-icon',
        sizes: `${sizePx}x${sizePx}`,
        url: `/favicon/favicon-${sizePx}x${sizePx}.ico`,
      })),
      ...iconSizesPx.map(sizePx => ({
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: `${sizePx}x${sizePx}`,
        url: `/pwa/icon-${sizePx}x${sizePx}.png`,
      })),
    ],
  };
};
