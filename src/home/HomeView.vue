<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCounterStore } from '../shared/stores/counter.ts';
import Button from '../shared/components/ui/Button.vue';

const router = useRouter();
const store = useCounterStore();

function handleGoToAbout() {
  router.push('/about');
}
</script>

<template>
  <h2 class="mb-2 text-3xl font-semibold">HomeView</h2>
  <Button @click="handleGoToAbout">Go to About</Button>

  <section>
    <p>Counter: {{ store.count }}</p>
    <Button @click="store.increment(1)" variant="secondary">Increment</Button>
  </section>
</template>

<style scoped>
</style>
