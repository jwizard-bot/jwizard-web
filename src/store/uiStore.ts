/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { reactive, toRefs, watch } from 'vue';
import { useStorage } from 'vue3-storage';
import { defineStore } from 'pinia';
import { TLocale, availableLocales, updateLocale } from '@/i18n';

type TUiStore = {
  theme: 'light' | 'dark';
  locale: TLocale;
  suspensed: boolean;
};

const useUiStore = defineStore('ui', () => {
  const storage = useStorage();

  const state = reactive<TUiStore>({
    theme: 'light',
    locale: 'pl',
    suspensed: true,
  });

  const htmlEl = document.querySelector('html')!;

  watch(
    () => state.theme,
    (currMode) => storage.setStorageSync('theme', currMode),
  );

  watch(
    () => state.locale,
    (currMode) => {
      updateLocale(currMode);
      htmlEl.setAttribute('lang', state.locale);
      storage.setStorageSync('locale', currMode);
    },
  );

  function loadTheme() {
    state.theme = storage.getStorageSync('theme') || 'light';
    htmlEl.setAttribute('class', state.theme === 'dark' ? 'dark' : '');
  }

  function loadLocale() {
    const localeFromStore = storage.getStorageSync('locale');
    if (!localeFromStore) {
      const browserlocale = navigator.language;
      if (Object.keys(availableLocales).includes(browserlocale)) {
        state.locale = navigator.language as TLocale;
      }
    } else {
      state.locale = localeFromStore;
    }
    htmlEl.setAttribute('lang', state.locale);
  }

  function toggleThemeMode() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    htmlEl.setAttribute('class', state.theme === 'dark' ? 'dark' : '');
  }

  return {
    ...toRefs(state),
    toggleThemeMode,
    loadTheme,
    loadLocale,
  };
});

export default useUiStore;
