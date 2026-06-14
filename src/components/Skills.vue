<template>
  <section class="card">
    <header class="flex items-center gap-2">
      <img class="w-8 sm:w-10 lg:w-12" src="/skills-icon.svg" alt="logo">
      <h1 class="text-3xl sm:text-5xl font-semibold font-noto-serif text-[--indigo-dye] dark:text-white uppercase border-b-2 border-[--indigo-dye] dark:border-gray-400 pb-2">Skills ( ) {</h1>
    </header>

    <article class="pt-5 sm:pt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="flex flex-col gap-4">
        <h2 class="text-xl sm:text-2xl font-semibold font-poppins uppercase text-[#0f5674] dark:text-[--tiffany-blue]">Soft skills</h2>
        <div class="flex flex-wrap gap-3">
          <span class="font-poppins font-medium px-4 py-2 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Liderazgo y coordinación</span>
          <span class="font-poppins font-medium px-4 py-2 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Resolución de problemas</span>
          <span class="font-poppins font-medium px-4 py-2 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Trabajo en equipo</span>
          <span class="font-poppins font-medium px-4 py-2 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Adaptabilidad</span>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-xl sm:text-2xl font-semibold font-poppins uppercase text-[#0f5674] dark:text-[--tiffany-blue]">Idiomas</h2>

        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-baseline">
            <span class="font-poppins font-medium text-gray-900 dark:text-[--moonstone]">Español</span>
            <span class="text-sm font-poppins text-gray-500 dark:text-white">Nativo</span>
          </div>
          <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-[--border-dark] overflow-hidden">
            <div class="h-full rounded-full bg-[--indigo-dye] dark:bg-[--moonstone]" style="width: 100%"></div>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-baseline">
            <span class="font-poppins font-medium text-gray-900 dark:text-[--moonstone]">Inglés</span>
            <span class="text-sm font-poppins text-gray-500 dark:text-white">B2 · Intermedio alto</span>
          </div>
          <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-[--border-dark] overflow-hidden">
            <div class="h-full rounded-full bg-[--indigo-dye] dark:bg-[--moonstone]" style="width: 70%"></div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>
