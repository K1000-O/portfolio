<script setup>
  import Header from '@/components/Header.vue'
  import AboutMe from '@/components/AboutMe.vue'
  import Work from '@/components/Work.vue';
  import Tecnologias from '@/components/Tecnologias.vue';
</script>

<template>
  <div class=" pt-0 p-10 sm:p-10 xl:px-80">
    <Header></Header>

    <main class="sm:pt-16 lg:mx-14 flex flex-col gap-20">
      <AboutMe></AboutMe>
      <Work></Work>
      <Tecnologias></Tecnologias>
    </main>
  </div>
  
</template>
