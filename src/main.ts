import { createApp } from 'vue';
import { createPinia } from 'pinia';

import router from '@/router.ts';
import { configureNProgress } from '@/shared/utils/nprogress.ts';
import App from '@/App.vue';

// 自定义样式放在最后，覆盖前面的样式
import '@/style.css';

configureNProgress();

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app');
