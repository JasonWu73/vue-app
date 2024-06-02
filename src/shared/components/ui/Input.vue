<script setup lang="ts">
type Props = {
  type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url';
  placeholder?: string;
  modelValue: string;
};

type EmitEvents = {
  (event: 'update:modelValue', value: string): void;
};

defineProps<Props>();

const emit = defineEmits<EmitEvents>();

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>

<template>
  <input
    :modelValue="modelValue"
    @input="handleInput($event)"
    :type="type ?? 'text'"
    :placeholder="placeholder"
    class="py-1 px-2 border rounded outline-0 focus:ring-1 ring-blue-500"
  >
</template>

<style scoped>
</style>
