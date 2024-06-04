<script setup lang="ts">
import { provide } from 'vue';
import ThemeButton from '@/shared/components/theme/ThemeButton.vue';
import NavItem from '@/shared/components/nav/NavItem.vue';

export type My = {
  id: number, name: string, job: string
};

provide<My[]>('myNames', [
  { id: 1000, name: 'Jason Wu', job: 'Java Dev' },
  { id: 1001, name: '吴仙杰', job: 'JavaScript Dev' }
]);
</script>

<template>
  <div class="flex flex-col gap-4 h-screen">
    <header
      class="relative flex items-center justify-center gap-2 bg-neutral text-neutral-content p-4 text-center shadow-lg"
    >
      <h1 class="text-4xl font-semibold">Vue App</h1>
      <ThemeButton class="absolute right-6"/>
    </header>

    <main class="flex-grow container space-y-4 text-center">
      <p>
        <strong>当前路由路径：</strong>
        <code
          class="py-0.5 px-1 bg-neutral-content text-neutral text-sm rounded-full"
        >
          {{ $route.path }}
        </code>
      </p>

      <nav class="space-x-2 pb-4 border-b-4">
        <NavItem path="/">首页</NavItem>
        <NavItem path="/router">前端路由</NavItem>
      </nav>

      <RouterView/>
    </main>

    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <p>Copyright © {{ new Date().getFullYear() }} - All right reserved by Jason Wu (吴仙杰)</p>
    </footer>
  </div>
</template>

<style scoped>
</style>
