import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Home.vue'; // 假设你有一个 Home 组件
import base_index from '../views/base_index/baseIndex.vue'; // 假设你有一个 About 组件

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/base_index',
        name: 'base_index',
        component: base_index
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes
});

export default router;
