<script setup>
  import ProyectoCard from '@/components/ProyectoCard.vue';
  import { proyectos } from '@/data/proyectos';
</script>

<template>
  <section id="proyectos" class="card">
    <header class="flex items-center gap-2">
      <img class="w-8 sm:w-10 lg:w-12" src="/proyectos-icon.svg" alt="" aria-hidden="true">
      <h2 class="card-title">Proyectos ( ) {</h2>
    </header>

    <div class="pt-5 sm:pt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
      <ProyectoCard
        v-for="(proyecto, indice) in proyectos"
        :key="proyecto.id"
        v-reveal="{ delay: indice * 120 }"
        :proyecto="proyecto"
      />
    </div>
  </section>
</template>
