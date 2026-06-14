<template>
  <section class="card">
    <header class="flex items-center gap-2">
      <img class="w-8 sm:w-10 lg:w-12" src="/proyectos-icon.svg" alt="logo">
      <h1 class="text-3xl sm:text-5xl font-semibold font-noto-serif text-[--indigo-dye] dark:text-white uppercase border-b-2 border-[--indigo-dye] dark:border-gray-400 pb-2">Proyectos ( ) {</h1>
    </header>

    <article class="pt-5 sm:pt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div class="rounded-xl border border-[--border-light] dark:border-[--border-dark] p-5 flex flex-col gap-3">
        <div class="aspect-video w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-black/20">
          <img src="/proyectos/chamartin.png" alt="Captura de chamartinathletic.es" class="w-full h-full object-cover">
        </div>

        <h2 class="text-xl sm:text-2xl font-semibold font-poppins text-[#0f5674] dark:text-[--tiffany-blue]">CD Chamartín Athletic — chamartinathletic.es</h2>

        <p class="text-sm lg:text-base font-poppins text-gray-500 dark:text-white">
          Desarrollo e implementación de la web oficial del CD Chamartín Athletic, club de fútbol madrileño con primer equipo en Primera División Aficionados de la RFFM y seis equipos de cantera.
          Stack basado en Vue 3 + Vite + Tailwind CSS, desplegada en Vercel con CI/CD automático. La web incluye un sistema de noticias editorial basado en Markdown, páginas dinámicas de cantera con
          carga automática de galerías, formularios de inscripción integrados con EmailJS y gestión de SEO con @unhead/vue.
        </p>

        <div class="flex flex-wrap gap-2">
          <span class="text-xs font-poppins font-medium px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Vue 3</span>
          <span class="text-xs font-poppins font-medium px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Vite</span>
          <span class="text-xs font-poppins font-medium px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Tailwind CSS</span>
          <span class="text-xs font-poppins font-medium px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Vercel</span>
          <span class="text-xs font-poppins font-medium px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">EmailJS</span>
        </div>

        <a href="https://chamartinathletic.es" target="_blank" class="font-poppins font-semibold text-[--indigo-dye] dark:text-[--moonstone] hover:underline mt-auto">Ver sitio →</a>
      </div>

      <div class="flex flex-col gap-6">
        <div class="rounded-xl border border-[--border-light] dark:border-[--border-dark] p-5 flex flex-col gap-2">
          <span class="text-xs font-poppins font-medium px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 w-fit">Raspberry Pi</span>
          <h2 class="text-xl font-semibold font-poppins text-[#0f5674] dark:text-[--tiffany-blue]">Servidor de Minecraft</h2>
          <p class="text-sm lg:text-base font-poppins text-gray-500 dark:text-white">Servidor de Minecraft autohospedado en una Raspberry Pi para jugar con amigos.</p>
        </div>

        <div class="rounded-xl border border-[--border-light] dark:border-[--border-dark] p-5 flex flex-col gap-2">
          <span class="text-xs font-poppins font-medium px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 w-fit">Raspberry Pi</span>
          <h2 class="text-xl font-semibold font-poppins text-[#0f5674] dark:text-[--tiffany-blue]">Pi-hole</h2>
          <p class="text-sm lg:text-base font-poppins text-gray-500 dark:text-white">Bloqueo de anuncios y rastreadores a nivel de red mediante Pi-hole.</p>
        </div>

        <div class="rounded-xl border border-[--border-light] dark:border-[--border-dark] p-5 flex flex-col gap-2">
          <span class="text-xs font-poppins font-medium px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 w-fit">Raspberry Pi</span>
          <h2 class="text-xl font-semibold font-poppins text-[#0f5674] dark:text-[--tiffany-blue]">Servidor Nextcloud</h2>
          <p class="text-sm lg:text-base font-poppins text-gray-500 dark:text-white">Almacenamiento en la nube personal autohospedado con Nextcloud.</p>
        </div>
      </div>
    </article>
  </section>
</template>
