/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import useUiStore from '@/store/uiStore';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/contribute',
    name: 'contribute',
    component: () => import('@/views/ContributeView.vue'),
  },
  {
    path: '/commands',
    name: 'commands',
    component: () => import('@/views/CommandsView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFoundView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (_to, _from, next) => {
  const uiStore = useUiStore();
  uiStore.suspensed = true;
  disableBodyScroll(document.body);
  return next();
});

router.afterEach(async () => {
  const uiStore = useUiStore();
  setTimeout(() => {
    uiStore.suspensed = false;
    enableBodyScroll(document.body);
  }, 250);
});

export default router;
