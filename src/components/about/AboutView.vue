<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import Input from '../ui/Input.vue';

const router = useRouter();
const route = useRoute();

const search = computed({
  get: () => route.query.search as string ?? '',
  set: (value: string) => {
    router.push({ query: { search: value }, replace: true });
  }
});
</script>

<template>
  <h2 class="mb-2 text-3xl font-semibold">AboutView</h2>
  <label>
    Search: <Input v-model.trim="search" type="search"/>
  </label>
</template>

<style scoped>
</style>
