<script setup>
	import LogoInstagram from './icons/LogoInstagram.vue';
	import LogoTwitter from './icons/LogoTwitter.vue';
	import LogoLinkedin from './icons/LogoLinkedin.vue';
</script>

<template>
	<header class="flex 2xl:flex-row flex-col items-center">
		<img class="w-52 sm:w-60 lg:w-72 2xl:ml-14" src="/foto-perfil.svg" alt="logo">

		<section class="flex flex-col justify-center items-center w-full 2xl:p-0 p-8">
			<article class="logo flex justify-center items-center w-full mb-1 gap-1 sm:gap-4 pb-4">
				<p class="text-3xl sm:text-5xl font-bold font-noto-serif text-[#C2DE21]"> &ltC> </p>
				<h1 class="text-3xl sm:text-5xl font-bold font-poppins text-[--moonstone] dark:text-[--light-cyan]"> camiDEV</h1>
				<p class="text-3xl sm:text-5xl font-bold font-noto-serif text-[#C2DE21]"> &lt/C></p>
			</article>
			<article class="logo-text flex flex-col justify-center items-center w-full">
				<p class="md:text-xl lg:text-3xl font-biryani uppercase text-[--indigo-dye] dark:text-[--moonstone]"> de la imaginación al código </p>
				<p class="md:text-xl lg:text-3xl font-biryani uppercase text-[--indigo-dye] dark:text-[--moonstone]"> desarrollando el futuro </p>
			</article>
			<article class="social flex justify-center gap-5 items-center lg:w-full">
				<a href="https://www.linkedin.com/in/camilo-jene-conde/" target="_blank"><LogoLinkedin class="m-3 w-10 md:w-12 lg:w-14 hover:scale-110 transition-transform hover:drop-shadow-[0_0_2px_gray]"></LogoLinkedin></a>
				<a href=""><LogoInstagram class="m-3 w-10 md:w-12 lg:w-14 hover:scale-110 transition-transform hover:drop-shadow-[0_0_2px_gray]"></LogoInstagram></a>
				<a href="https://twitter.com/KamiJeC_05"><LogoTwitter class="m-3 w-10 md:w-12 lg:w-14 hover:scale-110 transition-transform hover:drop-shadow-[0_0_2px_gray]"></LogoTwitter></a>
			</article>
		</section>
	</header>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>