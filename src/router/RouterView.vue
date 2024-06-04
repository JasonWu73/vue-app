<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

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
  <h2 class="mb-2 text-3xl font-semibold">RouterView</h2>

  <section class="space-x-2">
    <RouterLink to="/router/1000" class="link link-info">router/1000</RouterLink>
    <RouterLink to="/router/not-found" class="link link-error">router/not-found</RouterLink>
  </section>

  <label class="inline-block mt-4">
    搜索：
    <input
      v-model.trim="search"
      type="search"
      placeholder="绑定 URL 参数"
      class="input input-bordered"
    />
  </label>
</template>

<style scoped>
</style>
