<script setup lang="ts">
</script>

<template>
  <header
    v-if="$slots.header"
    class="p-4 mb-16 bg-blue-600 text-white text-center font-semibold"
  >
    <slot name="header" :message="'测试 scoped slots'">
      <h1 class="text-4xl">吴仙杰</h1>
    </slot>
  </header>

  <section
    v-if="$slots.default"
    class="space-y-2 p-4 mx-auto max-w-lg text-center border rounded shadow-md"
  >
    <slot></slot>
  </section>
</template>

<style scoped>

</style>
