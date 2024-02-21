<script setup lang="ts">
/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { reactive, watch } from 'vue';
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import MainFooter from './components/MainFooter.vue';
import MainHeader from './components/header/MainHeader.vue';
import useUiStore from './store/uiStore';
import { initDrawers, initTooltips } from 'flowbite';

type TState = {
  isRoot: boolean;
};

const route = useRoute();
const uiStore = useUiStore();
const state = reactive<TState>({
  isRoot: false,
});

onBeforeMount(() => {
  assignRoutePath(route.path);
  uiStore.loadTheme();
  uiStore.loadLocale();
  initDrawers();
  initTooltips();
});

watch(
  () => route.path,
  (newPath) => assignRoutePath(newPath),
);

function assignRoutePath(path: string): void {
  state.isRoot = path === '/';
}
</script>

<template>
  <div
    v-if="uiStore.suspensed"
    :class="[
      'fixed top-0 left-0 z-50',
      ' w-full h-screen',
      'bg-white dark:bg-slate-800',
      'flex justify-center items-center',
    ]"
  >
    <div
      :class="[
        'animate-spin',
        'inline-block w-10 h-10',
        'rounded-full',
        'border-[5px] border-current',
        'border-t-transparent dark:border-t-transparent',
        'border-indigo-600 dark:border-indigo-600',
      ]"
      role="status"
      aria-label="loading"
    ></div>
  </div>
  <div
    :class="[
      'flex flex-col min-h-screen',
      { 'bg-white dark:bg-slate-800': !state.isRoot },
    ]"
  >
    <MainHeader :header-for="state.isRoot ? 'root' : 'default'" />
    <main class="flex-grow flex flex-col min-h-screen">
      <router-view />
    </main>
    <MainFooter />
  </div>
</template>
