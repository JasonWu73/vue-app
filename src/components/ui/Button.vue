<script setup lang="ts">
import { computed } from 'vue';

type Props = {
  variant?: 'primary' | 'secondary' | 'danger';
};

const props = defineProps<Props>();

const classes = computed(() => {
  return {
    'bg-blue-500 hover:bg-blue-600': !props.variant || props.variant === 'primary',
    'bg-gray-500 hover:bg-gray-600': props.variant === 'secondary',
    'bg-red-500 hover:bg-red-600': props.variant === 'danger'
  };
});
</script>

<template>
  <button
    :class="classes"
    class="py-1 px-2 text-white rounded disabled:opacity-50"
  >
    <slot></slot>
  </button>
</template>

<style scoped>

</style>
