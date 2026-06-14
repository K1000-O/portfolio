<template>
  <section class="h-[calc(100vh-96px)] flex justify-center items-center p-3">
    <form action="https://formsubmit.co/d0ceb6cc9db30ec93e21dda39e049361" method="post" class="flex justify-center flex-col gap-5 bg-[--surface-light] rounded-2xl shadow-sm border border-[--border-light] p-6 sm:p-8 max-w-xl w-full font-poppins">
      <label for="name" class="block text-gray-700 text-sm font-bold">Nombre</label>
      <input type="name" id="name" name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Nombre">

      <label for="email" class="block text-gray-700 text-sm font-bold">Email</label>
      <input type="email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email">

      <label for="mensaje" class="block text-gray-700 text-sm font-bold">Mensaje</label>
      <textarea id="mensaje" name="message" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="10" placeholder="Mensaje"></textarea>

      <input type="submit" class="bg-[--indigo-dye] hover:bg-[--light-cyan] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer" value="Enviar">

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
