<!--
 ~ Copyright (c) 2024 by JWizard
 ~ Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 -->

<script setup lang="ts">
type TProps = {
  linkHref: string;
};

const props = defineProps<TProps>();
</script>

<template>
  <li>
    <router-link
      :class="[
        'block ',
        'font-medium',
        'py-2',
        'w-full',
        'text-slate-700 dark:text-slate-200',
        'hover:text-indigo-600 dark:hover:text-indigo-500',
      ]"
      :to="props.linkHref"
    >
      <slot />
    </router-link>
  </li>
</template>
