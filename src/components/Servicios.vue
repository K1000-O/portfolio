<template>
  <section class="card">
    <header class="flex md:justify-end items-center gap-2">
      <img class="w-8 sm:w-10 lg:w-12" src="/servicios-icon.svg" alt="logo">
      <h1 class="text-3xl sm:text-5xl font-semibold font-noto-serif text-[--indigo-dye] dark:text-white uppercase border-b-2 border-[--indigo-dye] dark:border-gray-400 pb-2">Servicios ( ) {</h1>
    </header>

    <article class="pt-5 sm:pt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="rounded-xl border border-[--border-light] dark:border-[--border-dark] p-5 flex flex-col gap-3">
        <h2 class="text-xl font-semibold font-poppins text-[#0f5674] dark:text-[--tiffany-blue]">Desarrollo web full-stack</h2>
        <p class="text-sm lg:text-base font-poppins text-gray-500 dark:text-white">Aplicaciones web completas, de extremo a extremo: desde el diseño técnico hasta el despliegue y la evolución en producción.</p>
        <div class="flex flex-wrap gap-2 mt-auto">
          <span class="text-xs font-poppins font-medium px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Frontend</span>
          <span class="text-xs font-poppins font-medium px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Backend</span>
        </div>
      </div>

      <div class="rounded-xl border border-[--border-light] dark:border-[--border-dark] p-5 flex flex-col gap-3">
        <h2 class="text-xl font-semibold font-poppins text-[#0f5674] dark:text-[--tiffany-blue]">Páginas estáticas con Vue</h2>
        <p class="text-sm lg:text-base font-poppins text-gray-500 dark:text-white">Interfaces modernas, rápidas y responsive con Vue 3, Vite y Tailwind CSS, cuidando el rendimiento y la experiencia de usuario.</p>
        <div class="flex flex-wrap gap-2 mt-auto">
          <span class="text-xs font-poppins font-medium px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Vue 3</span>
          <span class="text-xs font-poppins font-medium px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Vite</span>
          <span class="text-xs font-poppins font-medium px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Tailwind CSS</span>
        </div>
      </div>

      <div class="rounded-xl border border-[--border-light] dark:border-[--border-dark] p-5 flex flex-col gap-3">
        <h2 class="text-xl font-semibold font-poppins text-[#0f5674] dark:text-[--tiffany-blue]">APIs y backend</h2>
        <p class="text-sm lg:text-base font-poppins text-gray-500 dark:text-white">Diseño e implementación de APIs robustas y servicios backend con Java y Spring Boot, con integraciones y bases de datos SQL.</p>
        <div class="flex flex-wrap gap-2 mt-auto">
          <span class="text-xs font-poppins font-medium px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Java</span>
          <span class="text-xs font-poppins font-medium px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Spring Boot</span>
          <span class="text-xs font-poppins font-medium px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">SQL</span>
        </div>
      </div>
    </article>
  </section>
</template>
