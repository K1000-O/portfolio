import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Contacto from '@/views/Contacto.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/contacto', name: 'contacto', component: Contacto }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
