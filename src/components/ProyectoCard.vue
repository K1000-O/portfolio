<script setup>
  defineProps({
    proyecto: {
      type: Object,
      required: true
    }
  });
</script>

<template>
  <article class="rounded-xl border border-[--border-light] dark:border-[--border-dark] p-5 flex flex-col gap-3 transition-shadow hover:shadow-md">
    <div class="aspect-video w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-black/20">
      <img
        :src="proyecto.imagen"
        :alt="proyecto.imagenAlt"
        class="w-full h-full object-cover"
        width="1280"
        height="720"
        loading="lazy"
        decoding="async"
      >
    </div>

    <h3 class="text-xl sm:text-2xl font-semibold font-poppins text-[#0f5674] dark:text-[--tiffany-blue]">
      {{ proyecto.titulo }}
      <span class="block text-base font-normal text-gray-500 dark:text-[--moonstone]">{{ proyecto.subtitulo }}</span>
    </h3>

    <p class="text-sm lg:text-base font-poppins text-gray-500 dark:text-white">{{ proyecto.descripcion }}</p>

    <ul v-if="proyecto.detalles?.length" class="flex flex-col gap-1 list-disc ps-5">
      <li
        v-for="detalle in proyecto.detalles"
        :key="detalle"
        class="text-sm lg:text-base font-poppins text-gray-500 dark:text-white marker:text-[--lime]"
      >
        {{ detalle }}
      </li>
    </ul>

    <div class="flex flex-wrap gap-2">
      <span v-for="tecnologia in proyecto.tecnologias" :key="tecnologia" class="tag">{{ tecnologia }}</span>
    </div>

    <p v-if="proyecto.aviso" class="text-xs font-poppins italic text-gray-400 dark:text-[--moonstone]">
      {{ proyecto.aviso }}
    </p>

    <a
      :href="proyecto.enlace"
      target="_blank"
      rel="noopener noreferrer"
      class="font-poppins font-semibold text-[--indigo-dye] dark:text-[--moonstone] hover:underline mt-auto"
    >
      {{ proyecto.enlaceTexto }}
      <span class="sr-only">({{ proyecto.titulo }}, se abre en una pestaña nueva)</span>
    </a>
  </article>
</template>
