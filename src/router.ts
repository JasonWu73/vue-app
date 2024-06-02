import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import HomeView from './components/home/HomeView.vue';

const routes: Readonly<RouteRecordRaw[]> = [
  { path: '/', component: HomeView },
  { path: '/about', component: () => import('./components/about/AboutView.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
