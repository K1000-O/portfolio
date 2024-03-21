<template>
  <header class="w-full h-14 bg-[--indigo-dye] dark:bg-black flex">
    <nav class="w-full h-full flex justify-end items-center lg:mx-14">
      <div class="relative">
        <button id="menuButton" class="text-xl mr-5 font-biryani uppercase text-[--light-cyan] focus:outline-none sm:hidden" @click="cambiarHidden">Menú</button>
        <div id="menuDropdown" class="absolute right-0 mt-2 mr-5 w-48 bg-white dark:bg-black rounded-md shadow-lg z-10 hidden">
          <a href="#contacto" class="block px-4 py-2 text-[--indigo-dye] dark:text-[--light-cyan] hover:bg-indigo-100">Contacto</a>
        </div>

        <div class="hidden sm:block">
          <a href="#contacto" class="font-biryani uppercase text-[--light-cyan] hover:scale-110 transition-transform hover:drop-shadow-[0_0_2px_gray]">Contacto</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'HeaderNav',
    methods: {
      cambiarHidden() {
        const menuDropdown = document.getElementById('menuDropdown');

        menuDropdown.classList.toggle('hidden');
      }
    }
  }

</script>