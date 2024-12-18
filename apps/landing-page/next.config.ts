/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/index.ts');

const isProd = process.env.NODE_ENV === 'production';
const basePublicPath = '/_next/static';
const baseOutputPath = 'static';

const hashGen = (isProd: boolean): string => `[${isProd ? 'hash:10' : 'name'}]`;

const nextConfig: NextConfig = {
  output: 'standalone',
  compiler: {
    removeConsole: isProd,
  },
  images: {
    disableStaticImages: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/,
      type: 'asset/resource',
      generator: {
        filename: `jw-${hashGen(isProd)}[ext]`,
        publicPath: `${basePublicPath}/images/`,
        outputPath: `${baseOutputPath}/images/`,
      },
    });
    config.module.rules.push({
      test: /\.(ttf|woff2?)$/,
      type: 'asset/resource',
      generator: {
        filename: `jw-${hashGen(isProd)}[ext]`,
        publicPath: `${basePublicPath}/fonts/`,
        outputPath: `${baseOutputPath}/fonts/`,
      },
    });
    return config;
  },
};

export default withNextIntl(nextConfig);
