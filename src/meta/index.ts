/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import config from '@/config';
import { languages } from '@/i18n/config';
import { getRootTranslations } from '@/i18n/server';

type PageTitle =
  | 'commands'
  | 'contribute'
  | 'errorCodes'
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
  const language = await getLocale();
  const t = await getRootTranslations(language, 'title');
  return {
    title: t(i18nTitleKey),
  };
};

export const generateRootLayoutMetadata = async (): Promise<Metadata> => {
  const language = await getLocale();
  const t = await getRootTranslations(language);
  const { appName, selfReferUrl, frontResServer, agnosticFrontResServer } =
    config;
  return {
    title: {
      template: `%s | ${appName}`,
      default: appName,
    },
    description: t('description'),
    applicationName: appName,
    generator: 'Next.js',
    creator: `${appName} Team`,
    openGraph: {
      type: 'website',
      url: selfReferUrl,
      title: appName,
      description: t('description'),
      siteName: appName,
      images: {
        url: `${agnosticFrontResServer}/og/og-banner-${language}.png`,
      },
      locale: language,
      alternateLocale: Object.keys(languages).filter(lang => lang !== language),
      countryName: 'Poland',
    },
    twitter: {
      title: appName,
      description: t('description'),
      card: 'summary_large_image',
      site: selfReferUrl,
      images: `${agnosticFrontResServer}/og/og-banner-${language}.png`,
    },
    icons: [
      ...faviconSizesPx.map(sizePx => ({
        rel: 'icon',
        type: 'image/x-icon',
        sizes: `${sizePx}x${sizePx}`,
        url: `${frontResServer}/favicon/favicon-${sizePx}x${sizePx}.ico`,
      })),
      ...iconSizesPx.map(sizePx => ({
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: `${sizePx}x${sizePx}`,
        url: `${frontResServer}/pwa/icon-${sizePx}x${sizePx}.png`,
      })),
    ],
  };
};
