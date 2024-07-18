/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { MetadataRoute } from 'next';
import { getTranslations } from 'next-intl/server';
import config from '@/config';
import { iconSizesPx } from '@/meta';

async function manifest(): Promise<MetadataRoute.Manifest> {
  const t = await getTranslations();
  return {
    name: config.appName,
    short_name: config.appName,
    description: t('description'),
    start_url: './',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#ffffff',
    icons: iconSizesPx.map(sizePx => ({
      src: `pwa/icon-${sizePx}x${sizePx}.png`,
      sizes: `${sizePx}x${sizePx}`,
      type: 'image/png',
    })),
  };
}

export default manifest;
