<template>
  <footer class="relative w-full h-10 bg-[--indigo-dye] dark:bg-black flex justify-center items-center">
    <p class="text-[--light-cyan] font-poppins uppercase text-sm sm:text-base">Camilo Jene Conde © <span class="actualYear">{{ new Date().getFullYear() }}</span></p>
    <button
      type="button"
      class="absolute right-0 mr-5 hover:scale-110 transition-transform hover:drop-shadow-[0_0_2px_gray]"
      aria-label="Volver arriba"
      @click="scrollToTop"
    >
      <img class="h-8" src="/up-arrow.svg" alt="" aria-hidden="true">
    </button>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    scrollToTop() {
      const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      window.scrollTo({ top: 0, behavior: sinMovimiento ? 'auto' : 'smooth' });
    }
  }
}
</script>
