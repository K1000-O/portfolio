<template>
  <section id="servicios" class="card">
    <header class="flex md:justify-end items-center gap-2">
      <img class="w-8 sm:w-10 lg:w-12" src="/servicios-icon.svg" alt="" aria-hidden="true">
      <h2 class="card-title">Servicios ( ) {</h2>
    </header>

    <article class="pt-5 sm:pt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="rounded-xl border border-[--border-light] dark:border-[--border-dark] p-5 flex flex-col gap-3">
        <h3 class="text-xl font-semibold font-poppins text-[#0f5674] dark:text-[--tiffany-blue]">Desarrollo web full-stack</h3>
        <p class="text-sm lg:text-base font-poppins text-gray-500 dark:text-white">Aplicaciones web completas, de extremo a extremo: desde el diseño técnico hasta el despliegue y la evolución en producción.</p>
        <div class="flex flex-wrap gap-2 mt-auto">
          <span class="tag">Frontend</span>
          <span class="tag">Backend</span>
        </div>
      </div>

      <div class="rounded-xl border border-[--border-light] dark:border-[--border-dark] p-5 flex flex-col gap-3">
        <h3 class="text-xl font-semibold font-poppins text-[#0f5674] dark:text-[--tiffany-blue]">Páginas estáticas con Vue</h3>
        <p class="text-sm lg:text-base font-poppins text-gray-500 dark:text-white">Interfaces modernas, rápidas y responsive con Vue 3, Vite y Tailwind CSS, cuidando el rendimiento y la experiencia de usuario.</p>
        <div class="flex flex-wrap gap-2 mt-auto">
          <span class="tag">Vue 3</span>
          <span class="tag">Vite</span>
          <span class="tag">Tailwind CSS</span>
        </div>
      </div>

      <div class="rounded-xl border border-[--border-light] dark:border-[--border-dark] p-5 flex flex-col gap-3">
        <h3 class="text-xl font-semibold font-poppins text-[#0f5674] dark:text-[--tiffany-blue]">APIs y backend</h3>
        <p class="text-sm lg:text-base font-poppins text-gray-500 dark:text-white">Diseño e implementación de APIs robustas y servicios backend con Java y Spring Boot, con integraciones y bases de datos SQL.</p>
        <div class="flex flex-wrap gap-2 mt-auto">
          <span class="tag">Java</span>
          <span class="tag">Spring Boot</span>
          <span class="tag">SQL</span>
        </div>
      </div>
    </article>
  </section>
</template>
