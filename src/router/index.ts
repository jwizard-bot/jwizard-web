/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import CommandsViewVue from '@/views/CommandsView.vue';
import ContributeViewVue from '@/views/ContributeView.vue';
import HomeViewVue from '@/views/HomeView.vue';
import NotFoundViewVue from '@/views/NotFoundView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeViewVue,
  },
  {
    path: '/contribute',
    name: 'contribute',
    component: ContributeViewVue,
  },
  {
    path: '/commands',
    name: 'commands',
    component: CommandsViewVue,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundViewVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
