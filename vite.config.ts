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

export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      entry: 'src/main.ts',
      template: '/index.html',
      inject: {
        data: {
          apiUrl: process.env.API_URL,
          inviteLink: process.env.INVITE_LINK,
          orgLink: process.env.ORG_LINK,
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
