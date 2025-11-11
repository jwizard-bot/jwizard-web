import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { getEnv } from '@/env';
import { ROOT_KEY } from '@/i18n/config';
import { getRootTranslations } from '@/i18n/server';
import { languages } from '@jwizard-web/lib/i18n';

const faviconSizesPx: number[] = [32, 64] as const;

const generateSubPageMetadata = async ({
  i18nTitleKey = 'title',
  prefix = '',
  suffix = '',
}: {
  i18nTitleKey?: string;
  prefix?: string | number;
  suffix?: string | number;
} = {}): Promise<Metadata> => {
  const language = await getLocale();
  const t = await getTranslations({ locale: language });
  const titleFragments = [];
  if (prefix) {
    titleFragments.push(prefix);
  }
  titleFragments.push(t(`${i18nTitleKey !== 'title' ? `${ROOT_KEY}.` : ''}${i18nTitleKey}`));
  if (suffix) {
    titleFragments.push(suffix);
  }
  return {
    title: titleFragments.join(' '),
  };
};

const generateRootLayoutMetadata = async (): Promise<Metadata> => {
  const language = await getLocale();
  const t = await getRootTranslations(language);
  const {
    url: { canonical },
  } = getEnv();
  return {
    title: {
      template: `%s | JWizard`,
      default: 'JWizard',
    },
    description: t('description'),
    applicationName: 'JWizard',
    generator: 'Next.js',
    creator: `JWizard Team`,
    openGraph: {
      type: 'website',
      url: canonical,
      title: 'JWizard',
      description: t('description'),
      siteName: 'JWizard',
      images: {
        url: `${canonical}/og/og-banner-${language}.png`,
      },
      locale: language,
      alternateLocale: Object.keys(languages).filter(lang => lang !== language),
      countryName: 'Poland',
    },
    twitter: {
      title: 'JWizard',
      description: t('description'),
      card: 'summary_large_image',
      site: canonical,
      images: `${canonical}/og/og-banner-${language}.png`,
    },
    icons: [
      ...faviconSizesPx.map(sizePx => ({
        rel: 'icon',
        type: 'image/x-icon',
        sizes: `${sizePx}x${sizePx}`,
        url: `/favicon/favicon-${sizePx}x${sizePx}.ico`,
      })),
    ],
  };
};

export { faviconSizesPx, generateSubPageMetadata, generateRootLayoutMetadata };
