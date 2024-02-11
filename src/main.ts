/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { createApp } from 'vue';
import Vue3Storage, { StorageType } from 'vue3-storage';
import App from './App.vue';
import router from './router';
import './style.css';
import {
  BIconBrightnessHighFill,
  BIconGithub,
  BIconMoonStarsFill,
} from 'bootstrap-icons-vue';
import { createPinia } from 'pinia';

declare global {
  interface Window {
    API_URL: string;
    INVITE_LINK: string;
    ORG_LINK: string;
  }
}

createApp(App)
  .use(Vue3Storage, { namespace: 'jwizard_', storage: StorageType.Local })
  .use(createPinia())
  .use(router)
  .component('BIconBrightnessHighFill', BIconBrightnessHighFill)
  .component('BIconMoonStarsFill', BIconMoonStarsFill)
  .component('BIconGithub', BIconGithub)
  .mount('#vue-mount');
