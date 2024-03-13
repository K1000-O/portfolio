<template>
	<div class="flex xl:flex-row flex-col items-center">
		<img class="w-52 sm:w-60 lg:w-72 xl:ml-14" src="/foto-perfil.svg" alt="logo">

		<div class="flex flex-col justify-center items-center w-full xl:p-0 p-8">
			<div class="logo flex justify-center items-center w-full mb-1 gap-1 sm:gap-4 pb-4">
				<p class="text-3xl sm:text-5xl font-bold font-noto-serif text-[#C2DE21]"> &ltC> </p>
				<h1 class="text-3xl sm:text-5xl font-bold font-poppins text-[--light-cyan]"> camiDEV</h1>
				<p class="text-3xl sm:text-5xl font-bold font-noto-serif text-[#C2DE21]"> &lt/C></p>
			</div>
			<div class="logo-text flex flex-col justify-center items-center w-full">
				<p class="md:text-xl lg:text-3xl font-biryani uppercase text-[--tiffany-blue]"> de la imaginación al código </p>
				<p class="md:text-xl lg:text-3xl font-biryani uppercase text-[--tiffany-blue]"> desarrollando el futuro </p>
			</div>
			<div class="social flex justify-center gap-5 items-center lg:w-full">
				<object class="m-3 w-10 md:w-12 lg:w-14" data="/linkedin.svg" ></object>
				<object class="m-3 w-10 md:w-12 lg:w-14" data="/instagram.svg"></object>
				<object class="m-3 w-10 md:w-12 lg:w-14" data="/twitter.svg"></object>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>