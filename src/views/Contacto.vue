<template>
  <section class="min-h-[calc(100vh-96px)] flex justify-center items-center p-3 sm:p-6">
    <form
      action="https://formsubmit.co/d0ceb6cc9db30ec93e21dda39e049361"
      method="post"
      class="flex flex-col gap-4 bg-[--surface-light] dark:bg-[--surface-dark] rounded-2xl shadow-sm dark:shadow-none border border-[--border-light] dark:border-[--border-dark] p-6 sm:p-8 max-w-xl w-full font-poppins transition-colors"
    >
      <header class="pb-2">
        <h1 class="text-2xl sm:text-3xl font-semibold font-noto-serif uppercase text-[--indigo-dye] dark:text-white">Contacto ( ) {</h1>
        <p class="pt-2 text-sm text-gray-500 dark:text-[--light-cyan]">
          ¿Tienes un proyecto en mente o quieres saber más sobre mi trabajo? Escríbeme y te respondo lo antes posible.
        </p>
      </header>

      <div class="flex flex-col gap-2">
        <label for="name" class="text-sm font-bold text-gray-700 dark:text-[--light-cyan]">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autocomplete="name"
          class="border border-[--border-light] dark:border-[--border-dark] rounded w-full py-2 px-3 bg-white dark:bg-[--indigo-dye] text-gray-700 dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[--moonstone]"
          placeholder="Nombre"
        >
      </div>

      <div class="flex flex-col gap-2">
        <label for="email" class="text-sm font-bold text-gray-700 dark:text-[--light-cyan]">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autocomplete="email"
          class="border border-[--border-light] dark:border-[--border-dark] rounded w-full py-2 px-3 bg-white dark:bg-[--indigo-dye] text-gray-700 dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[--moonstone]"
          placeholder="Email"
        >
      </div>

      <div class="flex flex-col gap-2">
        <label for="mensaje" class="text-sm font-bold text-gray-700 dark:text-[--light-cyan]">Mensaje</label>
        <textarea
          id="mensaje"
          name="message"
          required
          rows="8"
          class="border border-[--border-light] dark:border-[--border-dark] rounded w-full py-2 px-3 bg-white dark:bg-[--indigo-dye] text-gray-700 dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[--moonstone]"
          placeholder="Mensaje"
        ></textarea>
      </div>

      <input
        type="submit"
        class="bg-[--indigo-dye] hover:opacity-90 dark:bg-[--moonstone] dark:text-[--indigo-dye] text-white font-bold py-3 px-4 rounded-xl uppercase tracking-wide transition-opacity hover:cursor-pointer"
        value="Enviar"
      >

      <!-- Campo trampa para bots: si se rellena, formsubmit descarta el envío -->
      <input type="text" name="_honey" class="hidden" tabindex="-1" autocomplete="off" aria-hidden="true">
      <input type="hidden" name="_subject" value="Nuevo mensaje desde camidev.es">
      <input type="hidden" name="_next" value="https://camidev.es/">
      <input type="hidden" name="_captcha" value="false">
      <input type="hidden" name="_template" value="table">
    </form>
  </section>
</template>

<script>
export default {
  name: 'Contacto'
}
</script>
