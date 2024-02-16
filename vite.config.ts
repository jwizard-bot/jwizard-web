/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { URL, fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';

export default () => {
  const env = loadEnv('', process.cwd(), 'VITE_');
  const { hostname, port } = new URL(env.VITE_BASE_PATH);
  return defineConfig({
    server: {
      host: hostname,
      port: Number(port),
    },
    plugins: [
      vue(),
      createHtmlPlugin({
        entry: 'src/main.ts',
        template: '/index.html',
        minify: process.env.PROD,
        inject: {
          data: {
            apiUrl: env.VITE_API_URL,
            inviteLink: env.VITE_INVITE_LINK,
            orgLink: env.VITE_ORG_LINK,
            basePath: env.VITE_BASE_PATH,
          },
        },
      }),
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
      ],
    },
  });
};
