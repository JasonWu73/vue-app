import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);

  function increment(value: number) {
    count.value += value;
  }

  async function decrement(value: number) {
    await wait(1);
    count.value -= value;
  }

  return { count, increment, decrement };
});

function wait(seconds: number) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
