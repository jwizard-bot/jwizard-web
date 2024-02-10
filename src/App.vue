<script setup lang="ts">
/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import MainFooter from './components/MainFooter.vue';
import MainHeader from './components/MainHeader.vue';
</script>

<template>
  <div class="flex flex-col h-screen">
    <MainHeader />
    <main class="flex-grow">
      <router-view />
    </main>
    <MainFooter />
  </div>
</template>

<style scoped></style>
