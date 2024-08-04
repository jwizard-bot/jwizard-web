/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { MetadataRoute } from 'next';
import config from '@/config';
import { getRootTranslations } from '@/i18n/server';
import { iconSizesPx } from '@/meta';

async function manifest(): Promise<MetadataRoute.Manifest> {
  const t = await getRootTranslations();
  const { appName, frontResServer } = config;
  return {
    name: appName,
    short_name: appName,
    description: t('description'),
    start_url: './',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#ffffff',
    icons: iconSizesPx.map(sizePx => ({
      src: `${frontResServer}/pwa/icon-${sizePx}x${sizePx}.png`,
      sizes: `${sizePx}x${sizePx}`,
      type: 'image/png',
    })),
  };
}

export default manifest;
