<script setup lang="ts">
type Props = {
  path: string;
};

defineProps<Props>();
</script>

<template>
  <RouterLink
    :to="path"
    class="inline-block py-4 px-8 font-semibold border border-primary rounded outline-none hover:text-primary hover:shadow-md focus:text-primary focus:shadow-md focus:ring-1 focus:ring-primary"
    active-class="text-primary"
  >
    <slot/>
  </RouterLink>
</template>

<style scoped>
</style>
