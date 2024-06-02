<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCounterStore } from '../shared/stores/counter.ts';
import Button from '../shared/components/ui/Button.vue';
import Input from '../shared/components/ui/Input.vue';

const router = useRouter();
const route = useRoute();

const store = useCounterStore();

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

  <section>
    <p>Counter: {{ store.count }}</p>
    <Button @click="store.decrement(2)" variant="danger">Decrement</Button>
  </section>
</template>

<style scoped>
</style>
