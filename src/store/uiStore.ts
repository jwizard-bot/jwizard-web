/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { onMounted, reactive, toRefs, watch } from 'vue';
import { useStorage } from 'vue3-storage';
import { defineStore } from 'pinia';

type TUiStore = {
  theme: 'light' | 'dark';
  lang: 'pl' | 'en-US';
};

const useUiStore = defineStore('ui', () => {
  const storage = useStorage();

  const state = reactive<TUiStore>({
    theme: 'light',
    lang: 'pl',
  });

  onMounted(() => {
    state.theme = storage.getStorageSync('theme') || 'light';
    toggleClass();
  });

  watch(
    () => state.theme,
    (currMode) => {
      storage.setStorageSync('theme', currMode);
    },
  );

  function toggleThemeMode() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    toggleClass();
  }

  function toggleClass() {
    const root = document.querySelector('html')!;
    if (state.theme === 'light') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
  }

  return { ...toRefs(state), toggleThemeMode };
});

export default useUiStore;
