/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import dotenv from 'dotenv';
import { URL, fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';

dotenv.config();

const { hostname, port } = new URL(process.env.BASE_PATH!);

export default defineConfig({
  server: {
    host: hostname,
    port: Number(port),
  },
  plugins: [
    vue(),
    createHtmlPlugin({
      entry: 'src/main.ts',
      template: '/index.html',
      inject: {
        data: {
          apiUrl: process.env.API_URL,
          inviteLink: process.env.INVITE_LINK,
          orgLink: process.env.ORG_LINK,
          basePath: process.env.BASE_PATH,
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
