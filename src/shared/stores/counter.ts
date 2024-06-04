import { ref } from 'vue';
import { defineStore } from 'pinia';

import { wait } from '@/shared/utils/helpers.ts';
import { endNProgress, startNProgress } from '@/shared/utils/nprogress.ts';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);

  /**
   * 增加计数器的值。
   *
   * @param value 需要增加的值
   */
  function add(value: number) {
    count.value += value;
  }

  /**
   * 异步减少计数器的值。
   *
   * @param value 需要减少的值
   */
  async function subtractAsync(value: number) {
    startNProgress();

    await wait(2);
    count.value -= value;

    endNProgress();
  }

  return { count, add, subtractAsync };
});
