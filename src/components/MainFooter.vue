<script setup lang="ts">
/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
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
          JWizard is a multi-purpose Discord music bot. It provides an audio
          player that allows playback from a wide variety of sources. Supplied
          an original playlists system for saving and playing them on any guild.
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
              <router-link to="/" class="hover:underline">Home</router-link>
            </li>
            <li class="-mt-[3px]">&bull;</li>
            <li class="text-sm">
              <router-link to="/contribute" class="hover:underline">
                Contribute
              </router-link>
            </li>
            <li class="-mt-[3px]">&bull;</li>
            <li class="text-sm">
              <router-link to="/commands" class="hover:underline">
                Commands
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
            Add to discord
          </button>
          <select
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
            <option>English, US</option>
            <option>Polski</option>
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
