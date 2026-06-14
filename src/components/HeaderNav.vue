<template>
  <header class="w-full h-14 bg-[--indigo-dye] dark:bg-black flex items-center">
    <router-link :to=" { name: 'home' }" class="ml-5 text-3xl sm:text-5xl font-bold font-noto-serif text-[#C2DE21]"> &ltC> </router-link>

    <nav class="w-full h-full flex justify-end items-center lg:mx-14">
      <div class="relative">
        <button v-if="this.$route.name !== 'contacto'" id="menuButton" class="text-base mr-5 font-poppins font-medium uppercase tracking-wide text-[--light-cyan] focus:outline-none sm:hidden transition-opacity hover:opacity-80" @click="cambiarHidden">Menú</button>
        <div v-if="this.$route.name !== 'contacto'"  id="menuDropdown" class="absolute right-0 mt-2 mr-5 w-48 bg-[--surface-light] dark:bg-[--surface-dark] border border-[--border-light] dark:border-[--border-dark] rounded-xl shadow-lg z-10 hidden overflow-hidden">
          <router-link :to=" { name: 'contacto' }" class="block px-4 py-3 font-poppins text-[--indigo-dye] dark:text-[--light-cyan] hover:bg-[--light-cyan] dark:hover:bg-[--indigo-dye] transition-colors">Contacto</router-link>
        </div>

        <div class="hidden sm:block">
          <router-link v-if="this.$route.name !== 'contacto'" :to=" { name: 'contacto' }" class="font-poppins font-medium uppercase tracking-wide text-[--light-cyan] hover:scale-110 transition-transform hover:drop-shadow-[0_0_2px_gray]">Contacto</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  import router from '@/router';

  export default {
    name: 'HeaderNav',
    methods: {
      cambiarHidden() {
        const menuDropdown = document.getElementById('menuDropdown');

        menuDropdown.classList.toggle('hidden');
      }
    },
    router
  }

</script>