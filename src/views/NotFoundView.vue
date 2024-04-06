<!--
 ~ Copyright (c) 2024 by JWizard
 ~ Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 -->

<script setup lang="ts"></script>

<template>
  <section
    :class="[
      'max-w-[1280px] w-full',
      'flex-grow flex flex-col justify-center items-center',
      'mt-28 mx-auto',
    ]"
  >
    <h1 class="text-8xl font-logo mb-1">404</h1>
    <p class="text-slate-500 dark:text-slate-400 mb-8 font-medium">
      Page not found.
    </p>
    <router-link
      to="/"
      :class="[
        'font-medium',
        'rounded-full',
        'text-sm text-center',
        'px-4 py-2',
        'text-white',
        'bg-indigo-600 hover:bg-indigo-700',
        'dark:bg-indigo-600 dark:hover:bg-indigo-700',
      ]"
    >
      Return to home page
    </router-link>
  </section>
</template>
