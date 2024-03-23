<template>
  <section class="h-[calc(100vh-96px)] flex justify-center items-center">
    <form action="" class="flex justify-center flex-col gap-5 bg-white shadow-md rounded p-8 max-w-xl w-full mx-3">

      <label for="email" class="block text-gray-700 text-sm font-bold">Email</label>
      <input type="email" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email">

      <label for="asunto" class="block text-gray-700 text-sm font-bold">Asunto</label>
      <input type="text" id="asunto" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Asunto">

      <label for="mensaje" class="block text-gray-700 text-sm font-bold">Mensaje</label>
      <textarea id="mensaje" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Mensaje"></textarea>

      <input type="submit" class="bg-[--indigo-dye] hover:bg-[--light-cyan] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Enviar">
      
    </form>

  </section>
</template>