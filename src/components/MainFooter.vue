<script setup lang="ts">
/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { availableLocales } from '@/i18n';
import useUiStore from '@/store/uiStore';

const uiStore = useUiStore();
const year = new Date().getFullYear();

function navigateToAddToDiscord(): void {
  window.open(window.INVITE_LINK, '_blank');
}
</script>

<template>
  <footer class="bg-indigo-600 text-white">
    <div
      :class="[
        'max-w-[1280px] w-full',
        'mx-auto',
        'pt-10 pb-3 px-3 py-5',
        'flex flex-col items-center',
      ]"
    >
      <section
        :class="[
          'flex flex-col-reverse md:flex-row ',
          'justify-between items-center',
          'w-full',
          'mb-8',
        ]"
      >
        <p
          :class="[
            'text-center md:text-left',
            'md:me-20',
            'max-w-[900px]',
            'text-indigo-300',
          ]"
        >
          {{ $t('description') }}
        </p>
        <router-link
          to="/"
          class="flex items-center gap-x-1 flex-shrink-0 mb-10 md:mb-0"
        >
          <img
            src="/logo/logo-white.svg"
            alt="logo"
            width="40px"
            height="40px"
          />
          <p class="font-logo text-2xl ms-2">JWizard</p>
        </router-link>
      </section>
      <section
        :class="[
          'flex flex-col md:flex-row',
          'justify-between md:items-center',
          ' w-full',
        ]"
      >
        <nav class="font-medium mb-10 md:mb-0">
          <ul class="flex gap-x-6 justify-center md:justify-start">
            <li class="text-sm">
              <router-link to="/" class="hover:underline">
                {{ $t('home') }}
              </router-link>
            </li>
            <li class="-mt-[3px]">&bull;</li>
            <li class="text-sm">
              <router-link to="/contribute" class="hover:underline">
                {{ $t('contribute') }}
              </router-link>
            </li>
            <li class="-mt-[3px]">&bull;</li>
            <li class="text-sm">
              <router-link to="/commands" class="hover:underline">
                {{ $t('commands') }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="flex gap-x-2">
          <button
            type="button"
            :class="[
              'font-medium',
              'rounded-full',
              'text-sm text-center',
              'px-4 py-2',
              'text-slate-950',
              'basis-[50%] md:basis-auto',
              'bg-white hover:bg-slate-200',
            ]"
            @click="navigateToAddToDiscord"
          >
            {{ $t('addToDiscord') }}
          </button>
          <select
            v-model="uiStore.locale"
            :class="[
              'text-center text-sm',
              'basis-[50%] md:basis-auto',
              'cursor-pointer',
              'w-[140px]',
              'rounded-full',
              'font-medium',
              'block',
              'py-2',
              'border-none',
              'bg-slate-900',
              'text-white',
              'focus:ring-white',
            ]"
          >
            <option
              v-for="(locale, localeId) in availableLocales"
              :key="localeId"
              :value="localeId"
            >
              {{ locale.label }}
            </option>
          </select>
        </div>
      </section>
      <hr class="border-0 h-px bg-indigo-500 w-full mt-6 mb-4" />
      <section class="my-3">
        <p class="text-sm text-indigo-400">
          &copy; {{ year }} by JWizard. All rights reserved.
        </p>
      </section>
    </div>
  </footer>
</template>
