<script setup lang="ts">
/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { onMounted, reactive, watch } from 'vue';
import { useRoute } from 'vue-router';
import MainFooter from './components/MainFooter.vue';
import MainHeader from './components/header/MainHeader.vue';
import { initTooltips } from 'flowbite';

type TState = {
  isRoot: boolean;
};

const route = useRoute();
const state = reactive<TState>({
  isRoot: true,
});

onMounted(() => {
  assignRoutePath(route.path);
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
