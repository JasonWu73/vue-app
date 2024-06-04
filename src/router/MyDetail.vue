<script setup lang="ts">
import { inject, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import { type My } from '@/App.vue';

const myInfos = inject<My[]>('myNames')!;
const route = useRoute();
const my = ref<My>(null!);

onMounted(() => {
  my.value = myInfos.find(user => user.id === Number(route.params.myId))!;
});
</script>

<template>
  <div class="prose container">
    <h2>MyDetail</h2>

    <ol v-if="my" class="max-w-fit mx-auto text-left">
      <li>
        <strong>ID：</strong>
        <span class="w-fit">{{ my.id }}</span>
      </li>
      <li>
        <strong>姓名：</strong>
        <span class="w-fit">{{ my.name }}</span>
      </li>
      <li>
        <strong>职业：</strong>
        <span class="w-fit">{{ my.job }}</span>
      </li>
    </ol>

    <p v-else class="text-error">未找到指定 ID 为 {{ route.params.myId }} 的信息</p>

    <button @click="$router.back" class="btn">返回</button>
  </div>
</template>

<style scoped>
</style>
