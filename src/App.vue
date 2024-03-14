<script setup>
  import Header from './components/Header.vue'
  import AboutMe from './components/AboutMe.vue'
  import Work from './components/Work.vue';
</script>

<template>
  <Header></Header>

  <div class="sm:pt-16 lg:mx-14 flex flex-col gap-20">
    <AboutMe></AboutMe>
    <Work></Work>
  </div>

</template>

<style scoped>
</style>./components/AboutMe.vue
