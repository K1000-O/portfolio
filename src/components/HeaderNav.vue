<script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useTheme } from '@/composables/useTheme';

  const route = useRoute();
  const { isDark, toggleTheme } = useTheme();

  const menuAbierto = ref(false);

  const secciones = [
    { hash: '#sobre-mi', texto: 'Sobre mí' },
    { hash: '#experiencia', texto: 'Experiencia' },
    { hash: '#proyectos', texto: 'Proyectos' },
    { hash: '#servicios', texto: 'Servicios' },
    { hash: '#tecnologias', texto: 'Tecnologías' },
    { hash: '#skills', texto: 'Skills' }
  ];

  function cerrarMenu() {
    menuAbierto.value = false;
  }
</script>

<template>
  <header class="w-full bg-[--indigo-dye] dark:bg-black shadow-md">
    <div class="h-14 flex items-center w-full max-w-6xl mx-auto sm:px-3">
      <router-link
        :to="{ name: 'home' }"
        class="ml-5 text-3xl sm:text-4xl font-bold font-noto-serif text-[--lime] hover:opacity-80 transition-opacity"
        aria-label="Inicio"
        @click="cerrarMenu"
      >
        &lt;C&gt;
      </router-link>

      <nav class="w-full h-full flex justify-end items-center gap-6" aria-label="Navegación principal">
        <ul class="hidden lg:flex items-center gap-6">
          <li v-for="seccion in secciones" :key="seccion.hash">
            <router-link :to="{ name: 'home', hash: seccion.hash }" class="nav-link">{{ seccion.texto }}</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'contacto' }" class="nav-link" :class="{ 'text-[--lime]': route.name === 'contacto' }">Contacto</router-link>
          </li>
        </ul>

        <button
          type="button"
          class="mr-5 lg:mr-0 p-2 rounded-lg text-[--light-cyan] hover:text-[--lime] hover:bg-white/10 transition-colors"
          :aria-label="isDark ? 'Activar tema claro' : 'Activar tema oscuro'"
          :aria-pressed="isDark"
          @click="toggleTheme"
        >
          <svg v-if="isDark" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
          <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
          </svg>
        </button>

        <button
          type="button"
          class="mr-5 lg:hidden p-2 rounded-lg text-[--light-cyan] hover:text-[--lime] hover:bg-white/10 transition-colors"
          aria-label="Abrir menú de navegación"
          aria-controls="menu-movil"
          :aria-expanded="menuAbierto"
          @click="menuAbierto = !menuAbierto"
        >
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <path v-if="menuAbierto" d="M6 6l12 12M18 6L6 18" />
            <path v-else d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>
    </div>

    <div
      v-show="menuAbierto"
      id="menu-movil"
      class="lg:hidden border-t border-white/10 bg-[--indigo-dye] dark:bg-black"
    >
      <ul class="flex flex-col py-2">
        <li v-for="seccion in secciones" :key="seccion.hash">
          <router-link
            :to="{ name: 'home', hash: seccion.hash }"
            class="block px-6 py-3 nav-link"
            @click="cerrarMenu"
          >
            {{ seccion.texto }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contacto' }" class="block px-6 py-3 nav-link" @click="cerrarMenu">Contacto</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>
