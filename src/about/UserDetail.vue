<script setup lang="ts">
import { inject, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

type User = {
  id: number, name: string, age: number
};

const users = inject<User[]>('users')!;
const route = useRoute();
const user = ref<User>(null!);

onMounted(() => {
  user.value = users.find(user => user.id === Number(route.params.userId))!;
});
</script>

<template>
  <div>
    <h2 class="mb-2 text-3xl font-semibold">UserDetail</h2>
    <ul>
      <li v-if="user">
        <strong>ID:</strong> {{ user.id }}
      </li>
      <li v-if="user">
        <strong>Name:</strong> {{ user.name }}
      </li>
      <li v-if="user">
        <strong>Age:</strong> {{ user.age }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
