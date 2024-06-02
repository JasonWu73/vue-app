<script setup lang="ts">
import Card from './components/ui/Card.vue';
</script>

<template>
  <Card>
    <template #header>
      <h1 class="text-4xl">Hello Vue App!</h1>
    </template>

    <p>
      <strong>Current route path:</strong>
      <code class="ml-2 py-1 px-2 text-sm bg-gray-200 rounded">{{ $route.path }}</code>
    </p>

    <nav class="space-x-2">
      <RouterLink to="/" class="hover:underline">Home</RouterLink>
      <RouterLink to="/about" class="hover:underline">About</RouterLink>
    </nav>

    <main>
      <RouterView/>
    </main>
  </Card>
</template>

<style scoped>
</style>
