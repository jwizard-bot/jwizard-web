<script setup lang="ts">
/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

type TProps = {
  isForRootHeader: boolean;
  tooptipId: string;
  tooltipText: string;
};

type TEmits = {
  (e: 'onClickButton'): void;
};

const props = defineProps<TProps>();
const emits = defineEmits<TEmits>();
</script>

<template>
  <li>
    <button
      :data-tooltip-target="props.tooptipId"
      data-tooltip-placement="bottom"
      :class="[
        'rounded-lg',
        'inline-flex justify-center items-center',
        'w-9 h-9',
        props.isForRootHeader
          ? 'text-white'
          : 'text-slate-700 dark:text-slate-400',
        props.isForRootHeader
          ? 'hover:bg-indigo-800'
          : 'hover:bg-slate-200 dark:hover:bg-slate-700',
      ]"
      @click="emits('onClickButton')"
    >
      <slot />
    </button>
    <div
      :id="props.tooptipId"
      role="tooltip"
      :class="[
        'absolute z-10',
        'invisible',
        'inline-block',
        'px-3 py-2',
        'text-sm',
        'font-medium',
        'rounded-lg',
        'shadow-sm',
        'opacity-0',
        'tooltip',
        props.isForRootHeader
          ? 'text-slate-900 bg-white dark:bg-white'
          : 'text-white bg-slate-900 dark:bg-slate-700',
      ]"
    >
      {{ props.tooltipText }}
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  </li>
</template>
