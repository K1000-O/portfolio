<template>
  <section v-if="true !== false" class="h-[calc(100vh-96px)] flex justify-center items-center">
    <form action="https://formsubmit.co/camilo.jene@camidev.es" method="post" class="flex justify-center flex-col gap-5 bg-white shadow-md rounded p-8 max-w-xl w-full mx-3">
      <label for="name" class="block text-gray-700 text-sm font-bold">Nombre</label>
      <input type="name" id="name" name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Nombre">

      <label for="email" class="block text-gray-700 text-sm font-bold">Email</label>
      <input type="email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email">

      <label for="mensaje" class="block text-gray-700 text-sm font-bold">Mensaje</label>
      <textarea id="mensaje" name="message" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="10" placeholder="Mensaje"></textarea>

      <input type="submit" class="bg-[--indigo-dye] hover:bg-[--light-cyan] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer" value="Enviar">
      
    </form>

  </section>

  <section v-else class="h-[calc(100vh-96px)] flex justify-center items-center">
    <p class="text-3xl font-bold ">EN DESARROLLO</p>
  </section>
</template>

<script>
export default {
  name: 'Contacto'
}
</script>