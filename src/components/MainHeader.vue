<script setup lang="ts">
/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
</script>

<template>
  <header class="bg-jw-light-100 text-jw-dark-700">
    <div
      class="flex justify-between items-center mx-auto max-w-[1280px] w-full p-3"
    >
      <router-link to="/" class="flex items-center">
        <img src="/logo/logo-color.svg" alt="logo" width="50px" height="50px" />
        <p class="font-logo text-jw-tint-100 text-4xl ms-2 -mt-[5px]">
          JWizard
        </p>
      </router-link>
      <nav>
        <router-link to="/commands">Commands</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
