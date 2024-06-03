import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '@/home/HomeView.vue';

const routes: Readonly<RouteRecordRaw[]> = [
  { path: '/', component: HomeView },
  { path: '/about', component: () => import('@/about/AboutView.vue') },
  { path: '/about/:userId', component: () => import('@/about/UserDetail.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
