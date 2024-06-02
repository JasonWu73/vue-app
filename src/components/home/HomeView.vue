<script setup lang="ts">
import { useRouter } from 'vue-router';

import Button from '../ui/Button.vue';

const router = useRouter();

function handleGoToAbout() {
  router.push('/about');
}
</script>

<template>
  <h2 class="mb-2 text-3xl font-semibold">HomeView</h2>
  <Button @click="handleGoToAbout">Go to About</Button>
</template>

<style scoped>
</style>
