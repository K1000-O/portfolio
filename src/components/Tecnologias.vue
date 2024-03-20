<template>
  <section class="card flex flex-col">
    <header class="flex items-center gap-2">
      <img class="w-10 sm:w-12 lg:w-14" src="/tecnologias-logo.svg" alt="logo">
      <h1 class="text-3xl sm:text-5xl font-semibold font-noto-serif text-[--indigo-dye] dark:text-white uppercase border-b-2 border-[--indigo-dye] dark:border-gray-400 pb-2">Tecnologías ( ) {</h1>
    </header>

    <section class="flex flex-col sm:flex-row justify-evenly items-center gap-10 flex-wrap">
      <article class="flex flex-col items-center sm:p-10 p-5">
        <header>
          <h1 class="text-3xl sm:text-5xl font-semibold font-poppins uppercase dark:text-white text-[--indigo-dye]">Diseño</h1>
        </header>
        <figure class="flex justify-evenly pt-5 gap-10">
          <img class="w-14 sm:w-20 lg:w-28" src="/figma.svg" alt="">
          <img class="w-14 sm:w-20 lg:w-28" src="/miro.svg" alt="">
          <img class="w-14 sm:w-20 lg:w-28" src="/umlet_logo.svg" alt="">
        </figure>
      </article>

      <article class="flex flex-col items-center sm:p-10 p-5">
        <header>
          <h1 class="text-3xl sm:text-5xl font-semibold font-poppins uppercase dark:text-white text-[--indigo-dye]">Desarrollo</h1>
        </header>
        <figure class="flex justify-evenly pt-5 gap-10">
          <img class="w-14 sm:w-20 lg:w-28" src="/vscode.svg" alt="">
          <img class="w-14 sm:w-20 lg:w-28" src="/git.svg" alt="">
          <img class="w-14 sm:w-20 lg:w-28" src="/jira.svg" alt="">
        </figure>
      </article>

      <article class="flex flex-col items-center sm:p-10 p-5">
        <header>
          <h1 class="text-3xl sm:text-5xl font-semibold font-poppins uppercase dark:text-white text-[--indigo-dye]">Lenguajes</h1>
        </header>
        <figure class="flex justify-evenly pt-5 gap-10 flex-wrap">
          <img class="w-14 sm:w-20 lg:w-28" src="/html5.svg" alt="">
          <img class="w-14 sm:w-20 lg:w-28" src="/css.svg" alt="">
          <img class="w-14 sm:w-20 lg:w-28" src="/javascript.svg" alt="">
          <img class="w-14 sm:w-20 lg:w-28" src="/java.svg" alt="">
          <img class="w-14 sm:w-20 lg:w-28" src="/c.svg" alt="">
          <img class="w-14 sm:w-20 lg:w-28" src="/python.svg" alt="">
        </figure>
      </article>

      <article class="flex flex-col items-center sm:p-10 p-5">
        <header>
          <h1 class="text-3xl sm:text-5xl font-semibold font-poppins uppercase dark:text-white text-[--indigo-dye]">Bases de datos</h1>
        </header>
        <figure class="flex justify-evenly pt-5 gap-10 flex-wrap">
          <img class="w-14 sm:w-20 lg:w-28" src="/my-sql.svg" alt="">
          <img class="w-14 sm:w-20 lg:w-28" src="/postgresql.svg" alt="">
        </figure>
      </article>

      <article class="flex flex-col items-center sm:p-10 p-5">
        <header>
          <h1 class="text-3xl sm:text-5xl font-semibold font-poppins uppercase dark:text-white text-[--indigo-dye]">Frameworks</h1>
        </header>
        <figure class="flex justify-evenly pt-5 gap-10 flex-wrap">
          <img class="w-14 sm:w-20 lg:w-28" src="/spring.svg" alt="">
          <img class="w-14 sm:w-20 lg:w-28" src="/django.svg" alt="">
          <img class="w-14 sm:w-20 lg:w-28" src="/vue.svg" alt="">
        </figure>
      </article>
    </section>
  </section>
</template>