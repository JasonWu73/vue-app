<script setup lang="ts">
import { provide } from 'vue';
import Card from './shared/components/ui/Card.vue';

provide('users', [
  { id: 1000, name: 'Jason Wu', age: 33 },
  { id: 1001, name: '吴仙杰', age: 25 },
  { id: 1002, name: 'Bruce Lee', age: 18 }
]);
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
      <RouterLink
        to="/"
        class="hover:underline hover:text-blue-500 hover:font-semibold"
        active-class="underline text-blue-500"
      >
        Home
      </RouterLink>
      <RouterLink
        to="/about"
        class="hover:underline hover:text-blue-500 hover:font-semibold"
        active-class="underline text-blue-500"
      >
        About
      </RouterLink>
      <RouterLink
        to="/about/1000"
        class="hover:underline hover:text-blue-500 hover:font-semibold"
        active-class="underline text-blue-500"
      >
        About/1000
      </RouterLink>
    </nav>

    <main>
      <RouterView/>
    </main>
  </Card>
</template>

<style scoped>
</style>
