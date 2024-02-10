/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import CommandsViewVue from '@/views/CommandsView.vue';
import HomeViewVue from '@/views/HomeView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeViewVue,
  },
  {
    path: '/commands',
    name: 'commands',
    component: CommandsViewVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
