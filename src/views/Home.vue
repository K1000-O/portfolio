<script setup>
  import Header from '@/components/Header.vue'
  import AboutMe from '@/components/AboutMe.vue'
  import Work from '@/components/Work.vue';
  import Proyectos from '@/components/Proyectos.vue';
  import Servicios from '@/components/Servicios.vue';
  import Tecnologias from '@/components/Tecnologias.vue';
  import Skills from '@/components/Skills.vue';
</script>

<template>
  <div class="w-full max-w-6xl mx-auto pt-0 px-5 pb-10 sm:px-8 lg:px-12">
    <Header></Header>

    <main id="contenido" class="sm:pt-16 flex flex-col gap-20 lg:gap-28">
      <AboutMe v-reveal></AboutMe>
      <Work v-reveal></Work>
      <Proyectos v-reveal></Proyectos>
      <Servicios v-reveal></Servicios>
      <Tecnologias v-reveal></Tecnologias>
      <Skills v-reveal></Skills>
    </main>
  </div>

</template>
