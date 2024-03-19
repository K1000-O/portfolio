<template>
  <footer class="w-full h-10 bg-[--indigo-dye] dark:bg-black flex justify-center items-center">
    <p class="text-[--light-cyan] font-biryani uppercase">Camilo Jene Conde © <span class="actualYear">{{ new Date().getFullYear() }}</span></p>
    <img class="h-8 absolute right-0 mr-5 hover:cursor-pointer  hover:scale-110 transition-transform hover:drop-shadow-[0_0_2px_gray]" src="/up-arrow.svg" alt="scroll to top" @click="scrollToTop">
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>