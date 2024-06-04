import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import HomeView from '@/home/HomeView.vue';

const routes: Readonly<RouteRecordRaw[]> = [
  { path: '/', component: HomeView },
  { path: '/router', component: () => import('@/router/RouterView.vue') },
  { path: '/router/:myId', component: () => import('@/router/MyDetail.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
