import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Contacto from '@/views/Contacto.vue';

const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: 'Camilo Jené — Desarrollador de software full-stack | camiDEV' } },
  { path: '/contacto', name: 'contacto', component: Contacto, meta: { title: 'Contacto | camiDEV' } }
];

// Vue Router calcula la posición a mano y no respeta scroll-padding-top, así
// que el hueco bajo la barra superior se lee del mismo sitio: index.css.
function huecoHeader() {
  const valor = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop);

  return Number.isFinite(valor) ? valor : 80;
}

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // Las fuentes web cambian la altura del documento: si se calcula la
      // posición antes de que carguen, el salto se queda corto.
      return new Promise((resolve) => {
        const irALaSeccion = () => requestAnimationFrame(() => resolve({ el: to.hash, top: huecoHeader(), behavior: 'smooth' }));

        if (document.fonts?.ready) {
          document.fonts.ready.then(irALaSeccion);
        } else {
          setTimeout(irALaSeccion, 300);
        }
      });
    }

    return savedPosition ?? { top: 0 };
  }
});

router.afterEach((to) => {
  if (to.meta.title) document.title = to.meta.title;
});

export default router;
