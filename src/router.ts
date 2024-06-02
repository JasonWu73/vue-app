import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import HomeView from './components/home/HomeView.vue';
import AboutView from './components/about/AboutView.vue';

const routes: Readonly<RouteRecordRaw[]> = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
