<template>
  <header class="w-full h-14 bg-[--indigo-dye] dark:bg-black flex items-center">
    <router-link :to=" { name: 'home' }" class="ml-5 text-3xl sm:text-5xl font-bold font-noto-serif text-[#C2DE21]"> &ltC> </router-link>

    <nav class="w-full h-full flex justify-end items-center lg:mx-14">
      <div class="relative">
        <button v-if="this.$route.name !== 'contacto'" id="menuButton" class="text-xl mr-5 font-biryani uppercase text-[--light-cyan] focus:outline-none sm:hidden" @click="cambiarHidden">Menú</button>
        <div v-if="this.$route.name !== 'contacto'"  id="menuDropdown" class="absolute right-0 mt-2 mr-5 w-48 bg-white dark:bg-black rounded-md shadow-lg z-10 hidden">
          <router-link :to=" { name: 'contacto' }" class="block px-4 py-2 text-[--indigo-dye] dark:text-[--light-cyan] hover:bg-indigo-100">Contacto</router-link>
        </div>

        <div class="hidden sm:block">
          <router-link v-if="this.$route.name !== 'contacto'" :to=" { name: 'contacto' }" class="font-biryani uppercase text-[--light-cyan] hover:scale-110 transition-transform hover:drop-shadow-[0_0_2px_gray]">Contacto </router-link>
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