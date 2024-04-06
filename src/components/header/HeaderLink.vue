<!--
 ~ Copyright (c) 2024 by JWizard
 ~ Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 -->

<script setup lang="ts">
type TProps = {
  isForRootHeader: boolean;
  linkHref: string;
};

const props = defineProps<TProps>();
</script>

<template>
  <li class="hidden md:block">
    <router-link
      :class="[
        'text-sm',
        'font-medium',
        props.isForRootHeader
          ? 'text-white'
          : 'text-slate-700 dark:text-slate-200',
        props.isForRootHeader
          ? 'hover:text-slate-300'
          : 'hover:text-indigo-600 dark:hover:text-indigo-500',
      ]"
      :to="props.linkHref"
    >
      <slot />
    </router-link>
  </li>
</template>
