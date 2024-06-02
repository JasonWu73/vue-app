<script setup lang="ts">
import Card from './components/ui/Card.vue';
</script>

<template>
  <Card>
    <template #header>
      <h1 class="text-4xl">Vue Component</h1>
    </template>

    <RouterView/>
  </Card>
</template>

<style scoped>
</style>
