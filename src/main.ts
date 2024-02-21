/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { createApp } from 'vue';
import Vue3Storage, { StorageType } from 'vue3-storage';
import App from './App.vue';
import i18nFabricator from './i18n';
import router from './router';
import useUiStore from './store/uiStore';
import './style.css';
import {
  BIconBrightnessHighFill,
  BIconGithub,
  BIconList,
  BIconMoonStarsFill,
  BIconX,
} from 'bootstrap-icons-vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';

declare global {
  interface Window {
    API_URL: string;
    INVITE_LINK: string;
    ORG_LINK: string;
  }
}

const app = createApp(App);

app.use(Vue3Storage, { namespace: 'jwizard_', storage: StorageType.Local });

const pinia = createPinia();
app.use(pinia);

const uiStore = useUiStore();
app.use(i18nFabricator(uiStore.locale));

app.use(router);
app.use(VueQueryPlugin);

app.component('BIconBrightnessHighFill', BIconBrightnessHighFill);
app.component('BIconMoonStarsFill', BIconMoonStarsFill);
app.component('BIconGithub', BIconGithub);
app.component('BIconList', BIconList);
app.component('BIconX', BIconX);

app.mount('#vue-mount');
