<script setup lang="ts">
/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import HamburgerMenuLink from './HamburgerMenuLink.vue';
import useUiStore from '@/store/uiStore';
import { buildDiscordOpenIdRoute } from '@/utils/utils';

const uiStore = useUiStore();
const orgLink = window.ORG_LINK;

function navigateToAddToDiscord(): void {
  window.open(window.INVITE_LINK, '_blank');
}

function authorizeViaDiscordOpenId(): void {
  document.location.href = buildDiscordOpenIdRoute();
}
</script>

<template>
  <div
    id="hamburger-menu"
    :class="[
      'fixed top-0 right-0 z-40',
      'w-80 h-screen',
      'p-4',
      'overflow-y-auto',
      'transition-transform translate-x-full',
      'bg-white dark:bg-slate-800',
    ]"
    tabindex="-1"
    aria-labelledby="drawer-right-label"
  >
    <button
      type="button"
      data-drawer-hide="hamburger-menu"
      aria-controls="hamburger-menu"
      :class="[
        'rounded-lg',
        'text-sm',
        'w-8 h-8',
        'absolute top-2.5 end-2.5',
        'inline-flex items-center justify-center',
        'bg-transparent',
        'text-slate-400 ',
        'hover:bg-slate-200 dark:hover:bg-slate-600',
        'hover:text-slate-800 dark:hover:text-white',
      ]"
    >
      <BIconX class="text-3xl" />
    </button>
    <div class="mt-10">
      <nav class="flex flex-col gap-y-3 mb-8">
        <ul>
          <HamburgerMenuLink link-href="/">
            {{ $t('home') }}
          </HamburgerMenuLink>
          <HamburgerMenuLink link-href="/commands">
            {{ $t('commands') }}
          </HamburgerMenuLink>
          <HamburgerMenuLink link-href="/contribute">
            {{ $t('contribute') }}
          </HamburgerMenuLink>
        </ul>
      </nav>
      <section class="flex flex-col gap-y-3 mb-8">
        <button
          type="button"
          :class="[
            'w-full',
            'font-medium',
            'rounded-full',
            'text-sm text-center',
            'py-2',
            'flex gap-x-3 justify-center items-center',
            'bg-slate-800 dark:bg-white',
            'text-white dark:text-slate-800',
            'hover:bg-slate-700 dark:hover:bg-slate-100',
          ]"
          @click="uiStore.toggleThemeMode()"
        >
          <BIconBrightnessHighFill v-if="uiStore.theme === 'dark'" />
          <BIconMoonStarsFill v-else />
          {{ $t('toggleTheme') }}
        </button>
        <a
          :href="orgLink"
          target="_blank"
          :class="[
            'w-full',
            'font-medium',
            'rounded-full',
            'text-sm text-center',
            'py-2',
            'flex gap-x-3 justify-center items-center',
            'bg-slate-800 dark:bg-white',
            'text-white dark:text-slate-800',
            'hover:bg-slate-700 dark:hover:bg-slate-100',
          ]"
        >
          <BIconGithub class="text-xl" />
          Github
        </a>
      </section>
      <section class="flex flex-col gap-y-3">
        <button
          type="button"
          :class="[
            'w-full',
            'font-medium',
            'rounded-full',
            'text-sm text-center',
            'py-2',
            'text-white',
            'bg-indigo-600 hover:bg-indigo-700',
            'dark:bg-indigo-600 dark:hover:bg-indigo-700',
          ]"
          @click="navigateToAddToDiscord"
        >
          {{ $t('addToDiscord') }}
        </button>
        <button
          type="button"
          :class="[
            'w-full',
            'font-medium',
            'rounded-full',
            'text-sm text-center',
            'py-2',
            'border',
            'hover:bg-gray-100',
            'border-gray-300 dark:border-gray-600 dark:hover:border-gray-700',
            'bg-white dark:bg-gray-800',
            'text-gray-900 dark:text-white',
          ]"
          @click="authorizeViaDiscordOpenId"
        >
          {{ $t('login') }}
        </button>
      </section>
    </div>
  </div>
</template>
