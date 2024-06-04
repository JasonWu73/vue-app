<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useCounterStore } from '@/shared/stores/counter.ts';

const router = useRouter();
const store = useCounterStore();

function handleGoToNotFound() {
  router.push('/not-found');
}
</script>

<template>
  <h2 class="mb-2 text-3xl font-semibold">HomeView</h2>

  <button @click="handleGoToNotFound" class="link link-error">404 路由</button>

  <section class="flex items-center justify-center gap-2">
    <button
      @click="store.subtractAsync(2)"
      class="btn btn-circle btn-outline"
    >
      异步减二
    </button>
    <div class="badge badge-info badge-lg">{{ store.count }}</div>
    <button
      @click="store.add(1)"
      class="btn btn-circle btn-outline"
    >
      同步加一
    </button>
  </section>
</template>

<style scoped>
</style>
