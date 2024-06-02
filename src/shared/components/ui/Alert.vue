<script setup lang="ts">
import { onMounted, ref } from 'vue';

type EmitEvents = {
  (event: 'close'): void;
};

const emit = defineEmits<EmitEvents>();

const dialogRef = ref<HTMLDialogElement>(null!);

onMounted(() => {
  dialogRef.value.showModal();
});

function handleClose() {
  dialogRef.value.close();
  emit('close');
}
</script>

<template>
  <teleport to="body">
    <dialog
      @close="handleClose"
      ref="dialogRef"
      class="fixed space-y-2 p-16 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 border rounded shadow-md backdrop:bg-black backdrop:opacity-60"
    >
      <slot></slot>
    </dialog>
  </teleport>
</template>

<style scoped>
</style>
