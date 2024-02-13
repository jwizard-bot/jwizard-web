<script setup lang="ts">
/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { computed, reactive, watch } from 'vue';
import HamburgerMenu from '../hamburger/HamburgerMenu.vue';
import HeaderLink from './HeaderLink.vue';
import HeaderTooltipButton from './HeaderTooltipButton.vue';
import { storeToRefs } from 'pinia';
import useUiStore from '@/store/uiStore';

type TProps = {
  headerFor: 'default' | 'root';
};

type TState = {
  isRoot: boolean;
};

const props = defineProps<TProps>();
const uiStore = useUiStore();

const state = reactive<TState>({
  isRoot: true,
});

const isRoot = computed(() => state.isRoot);
const { theme } = storeToRefs(uiStore);

watch(
  () => props.headerFor,
  (curr) => (state.isRoot = curr === 'root'),
);

function navigateToGithubRepo(): void {
  window.open(window.ORG_LINK, '_blank');
}

function navigateToAddToDiscord(): void {
  window.open(window.INVITE_LINK, '_blank');
}

function authorizeViaDiscordOpenId(): void {
  const params = new URLSearchParams();
  const urlWithParams = new URL(/* TODO */ 'http://localhost:8670');
  urlWithParams.search = params.toString();
  document.location.href = urlWithParams.toString();
}
</script>

<template>
  <header
    :class="[
      'z-10',
      'w-full',
      { 'border-b border-slate-300 dark:border-slate-700': !isRoot },
      { 'backdrop-blur-sm': !isRoot },
      { fixed: !isRoot },
      isRoot ? 'bg-indigo-600' : 'bg-white/40 dark:bg-slate-800/40',
    ]"
  >
    <div
      :class="[
        'flex justify-between items-center',
        'mx-auto',
        'px-3 py-5',
        'max-w-[1280px] w-full',
      ]"
    >
      <div class="flex items-center">
        <router-link to="/" class="flex items-center">
          <img
            :src="`/logo/logo-${isRoot ? 'white' : 'color'}.svg`"
            alt="logo"
            width="40px"
            height="40px"
          />
          <p
            :class="[
              'font-logo',
              'text-2xl',
              'ms-2 -mt-[5px]',
              'dark:text-white',
              isRoot ? 'text-white' : 'text-slate-800',
            ]"
          >
            JWizard
          </p>
        </router-link>
        <ul class="flex items-center ms-8 gap-x-4">
          <HeaderLink :is-for-root-header="isRoot" link-href="/">
            {{ $t('home') }}
          </HeaderLink>
          <HeaderLink :is-for-root-header="isRoot" link-href="/contribute">
            {{ $t('contribute') }}
          </HeaderLink>
          <HeaderLink :is-for-root-header="isRoot" link-href="/commands">
            {{ $t('commands') }}
          </HeaderLink>
        </ul>
      </div>
      <nav class="flex items-center">
        <ul class="hidden md:flex gap-x-1 items-center">
          <HeaderTooltipButton
            :is-for-root-header="isRoot"
            tooptip-id="theme-tooltip"
            :tooltip-text="$t('toggleTheme')"
            @on-click-button="uiStore.toggleThemeMode()"
          >
            <BIconBrightnessHighFill v-if="theme === 'dark'" />
            <BIconMoonStarsFill v-else />
          </HeaderTooltipButton>
          <HeaderTooltipButton
            :is-for-root-header="isRoot"
            tooptip-id="github-tooltip"
            :tooltip-text="$t('goToGithubRepository')"
            @on-click-button="navigateToGithubRepo"
          >
            <BIconGithub class="text-xl" />
          </HeaderTooltipButton>
          <li>
            <button
              type="button"
              :class="[
                'font-medium',
                'rounded-full',
                'text-sm text-center',
                'px-4 py-2',
                'text-white',
                isRoot
                  ? 'bg-slate-900 hover:bg-slate-800'
                  : 'bg-indigo-600 hover:bg-indigo-700',
                isRoot
                  ? 'dark:bg-gray-900 dark:hover:bg-gray-800'
                  : 'dark:bg-indigo-600 dark:hover:bg-indigo-700',
              ]"
              @click="navigateToAddToDiscord"
            >
              {{ $t('addToDiscord') }}
            </button>
          </li>
          <li>
            <button
              type="button"
              :class="[
                'font-medium',
                'rounded-full',
                'text-sm text-center',
                'px-4 py-2',
                'border',
                'hover:bg-gray-100',
                isRoot
                  ? 'border-white'
                  : 'border-gray-300 dark:border-gray-600 dark:hover:border-gray-700',
                isRoot ? 'bg-white' : 'bg-white dark:bg-gray-800',
                isRoot ? 'text-gray-900' : 'text-gray-900 dark:text-white',
              ]"
              @click="authorizeViaDiscordOpenId"
            >
              {{ $t('login') }}
            </button>
          </li>
        </ul>
        <div class="text-center md:hidden">
          <button
            class="text-slate-800 dark:text-white text-3xl p-1"
            type="button"
            data-drawer-target="hamburger-menu"
            data-drawer-show="hamburger-menu"
            data-drawer-placement="right"
            aria-controls="hamburger-menu"
          >
            <BIconList />
          </button>
        </div>
      </nav>
    </div>
  </header>
  <HamburgerMenu />
</template>
