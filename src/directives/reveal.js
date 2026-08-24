const TIEMPO_MAXIMO_OCULTO = 1500;

function mostrar(el) {
  el.classList.add('reveal-visible');
}

function estaEnPantalla(el) {
  const { top, bottom } = el.getBoundingClientRect();

  return top < window.innerHeight && bottom > 0;
}

/**
 * v-reveal: muestra el elemento con una animación de entrada la primera vez
 * que aparece en pantalla. Se desactiva si el visitante pide menos movimiento
 * y nunca deja el contenido oculto: si el observador no llega a dispararse,
 * un temporizador de seguridad lo hace visible igualmente.
 */
const reveal = {
  mounted(el, binding) {
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (sinMovimiento || !('IntersectionObserver' in window)) {
      mostrar(el);
      return;
    }

    el.classList.add('reveal');

    if (binding.value?.delay) {
      el.style.transitionDelay = `${binding.value.delay}ms`;
    }

    // Lo que ya está en pantalla al cargar no espera al observador.
    if (estaEnPantalla(el)) {
      requestAnimationFrame(() => mostrar(el));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          mostrar(el);
          observer.unobserve(el);
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    el._revealObserver = observer;

    // Red de seguridad: el contenido nunca se queda invisible.
    el._revealTimer = setTimeout(() => {
      if (estaEnPantalla(el)) mostrar(el);
    }, TIEMPO_MAXIMO_OCULTO);
  },

  unmounted(el) {
    el._revealObserver?.disconnect();
    clearTimeout(el._revealTimer);
    delete el._revealObserver;
    delete el._revealTimer;
  }
};

export default reveal;
