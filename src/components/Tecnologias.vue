<template>
  <section id="tecnologias" class="card flex flex-col">
    <header class="flex items-center gap-2">
      <img class="w-10 sm:w-12 lg:w-14" src="/tecnologias-logo.svg" alt="tecnologias-logo" loading="lazy" aria-hidden="true">
      <h2 class="card-title">Tecnologías ( ) {</h2>
    </header>

    <section class="flex flex-col sm:flex-row justify-evenly items-center gap-10 flex-wrap">
      <article class="flex flex-col items-center sm:p-10 p-5">
        <header>
          <h3 class="text-2xl sm:text-4xl font-semibold font-poppins uppercase dark:text-white text-[--indigo-dye]">Diseño</h3>
        </header>
        <figure class="flex justify-evenly pt-5 gap-10">
          <img class="w-14 sm:w-20 lg:w-28" src="/figma.svg" alt="Figma" loading="lazy">
          <img class="w-14 sm:w-20 lg:w-28" src="/miro.svg" alt="Miro" loading="lazy">
          <img class="w-14 sm:w-20 lg:w-28" src="/umlet_logo.svg" alt="UMLet" loading="lazy">
        </figure>
      </article>

      <article class="flex flex-col items-center sm:p-10 p-5">
        <header>
          <h3 class="text-2xl sm:text-4xl font-semibold font-poppins uppercase dark:text-white text-[--indigo-dye]">Desarrollo</h3>
        </header>
        <figure class="flex justify-evenly pt-5 gap-10">
          <img class="w-14 sm:w-20 lg:w-28" src="/vscode.svg" alt="Visual Studio Code" loading="lazy">
          <img class="w-14 sm:w-20 lg:w-28" src="/git.svg" alt="Git" loading="lazy">
          <img class="w-14 sm:w-20 lg:w-28" src="/jira.svg" alt="Jira" loading="lazy">
        </figure>
      </article>

      <article class="flex flex-col items-center sm:p-10 p-5">
        <header>
          <h3 class="text-2xl sm:text-4xl font-semibold font-poppins uppercase dark:text-white text-[--indigo-dye]">Lenguajes</h3>
        </header>
        <figure class="flex justify-evenly pt-5 gap-10 flex-wrap">
          <img class="w-14 sm:w-20 lg:w-28" src="/html5.svg" alt="HTML5" loading="lazy">
          <img class="w-14 sm:w-20 lg:w-28" src="/css.svg" alt="CSS" loading="lazy">
          <img class="w-14 sm:w-20 lg:w-28" src="/javascript.svg" alt="JavaScript" loading="lazy">
          <img class="w-14 sm:w-20 lg:w-28" src="/java.svg" alt="Java" loading="lazy">
          <img class="w-14 sm:w-20 lg:w-28" src="/c.svg" alt="C" loading="lazy">
          <img class="w-14 sm:w-20 lg:w-28" src="/python.svg" alt="Python" loading="lazy">
        </figure>
      </article>

      <article class="flex flex-col items-center sm:p-10 p-5">
        <header>
          <h3 class="text-2xl sm:text-4xl font-semibold font-poppins uppercase dark:text-white text-[--indigo-dye]">Bases de datos</h3>
        </header>
        <figure class="flex justify-evenly pt-5 gap-10 flex-wrap">
          <img class="w-14 sm:w-20 lg:w-28" src="/my-sql.svg" alt="MySQL" loading="lazy">
          <img class="w-14 sm:w-20 lg:w-28" src="/postgresql.svg" alt="PostgreSQL" loading="lazy">
        </figure>
      </article>

      <article class="flex flex-col items-center sm:p-10 p-5">
        <header>
          <h3 class="text-2xl sm:text-4xl font-semibold font-poppins uppercase dark:text-white text-[--indigo-dye]">Frameworks</h3>
        </header>
        <figure class="flex justify-evenly pt-5 gap-10 flex-wrap">
          <img class="w-14 sm:w-20 lg:w-28" src="/spring.svg" alt="Spring" loading="lazy">
          <img class="w-14 sm:w-20 lg:w-28" src="/django.svg" alt="Django" loading="lazy">
          <img class="w-14 sm:w-20 lg:w-28" src="/vue.svg" alt="Vue.js" loading="lazy">
        </figure>
      </article>
    </section>
  </section>
</template>