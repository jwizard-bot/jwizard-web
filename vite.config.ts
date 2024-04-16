/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { resolve } from 'path';
import { URL } from 'url';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import react from '@vitejs/plugin-react';

export default () => {
  const env = loadEnv('', process.cwd(), 'VITE_');
  const { hostname, port } = new URL(env.VITE_BASE_PATH);
  return defineConfig({
    server: {
      host: hostname,
      port: Number(port),
    },
    plugins: [
      react({
        babel: {
          plugins: [
            [
              'babel-plugin-styled-components',
              {
                displayName: process.env.NODE_ENV !== 'production',
                ssr: false,
                fileName: process.env.NODE_ENV !== 'production',
              },
            ],
          ],
        },
      }),
      createHtmlPlugin({
        entry: 'src/index.tsx',
        template: '/index.html',
        minify: process.env.NODE_ENV === 'production',
        inject: {
          data: {
            isProd: process.env.NODE_ENV === 'production',
            apiUrl: env.VITE_API_URL,
            inviteLink: env.VITE_INVITE_LINK,
            orgLink: env.VITE_ORG_LINK,
            basePath: env.VITE_BASE_PATH,
            buildVersion: env.VITE_BUILD_VERSION,
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  });
};
