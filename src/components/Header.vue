<script setup>
	import LogoInstagram from './icons/LogoInstagram.vue';
	import LogoTwitter from './icons/LogoTwitter.vue';
	import LogoLinkedin from './icons/LogoLinkedin.vue';
	import LogoGithub from './icons/LogoGithub.vue';
</script>

<template>
	<header class="flex 2xl:flex-row flex-col items-center">
		<!-- En 2xl solo se quita el padding lateral: el vertical separa el hero de la barra superior. -->
		<section class="flex flex-col justify-center items-center w-full p-8 2xl:px-0 2xl:py-12">
			<article class="logo flex justify-center items-center w-full mb-1 gap-1 sm:gap-4 pb-4">
				<p class="text-3xl sm:text-5xl font-bold font-noto-serif text-[--lime]" aria-hidden="true"> &ltC> </p>
				<h1 class="text-3xl sm:text-5xl font-bold font-poppins text-[--moonstone] dark:text-[--light-cyan]"> camiDEV</h1>
				<p class="text-3xl sm:text-5xl font-bold font-noto-serif text-[--lime]" aria-hidden="true"> &lt/C></p>
			</article>
			<article class="logo-text flex flex-col justify-center items-center w-full text-center">
				<p class="md:text-xl lg:text-3xl font-poppins uppercase text-[--indigo-dye] dark:text-[--moonstone]"> de la imaginación al código </p>
				<p class="md:text-xl lg:text-3xl font-poppins uppercase text-[--indigo-dye] dark:text-[--moonstone]"> desarrollando el futuro </p>
				<p class="pt-4 text-sm sm:text-base font-poppins text-gray-600 dark:text-[--light-cyan] max-w-2xl">
					Camilo Jené · Ingeniero informático y desarrollador de software full-stack. Diseño, construyo y despliego
					aplicaciones web de extremo a extremo.
				</p>
			</article>

			<article class="flex flex-wrap justify-center gap-4 pt-8">
				<router-link
					:to="{ name: 'home', hash: '#proyectos' }"
					class="font-poppins font-semibold uppercase tracking-wide px-6 py-3 rounded-xl bg-[--indigo-dye] text-[--light-cyan] dark:bg-[--moonstone] dark:text-[--indigo-dye] hover:opacity-90 transition-opacity"
				>
					Ver proyectos
				</router-link>
				<router-link
					:to="{ name: 'contacto' }"
					class="font-poppins font-semibold uppercase tracking-wide px-6 py-3 rounded-xl border-2 border-[--indigo-dye] text-[--indigo-dye] dark:border-[--moonstone] dark:text-[--moonstone] hover:bg-[--indigo-dye]/10 dark:hover:bg-[--moonstone]/10 transition-colors"
				>
					Contactar
				</router-link>
			</article>

			<article class="social flex justify-center gap-2 sm:gap-5 items-center lg:w-full pt-4">
				<a href="https://www.linkedin.com/in/camilo-jene-conde/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LogoLinkedin class="m-3 w-10 md:w-12 hover:scale-110 transition-transform hover:drop-shadow-[0_0_2px_gray]"></LogoLinkedin></a>
				<a href="https://github.com/K1000-O" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><LogoGithub class="m-3 w-9 md:w-11 hover:scale-110 transition-transform hover:drop-shadow-[0_0_2px_gray]"></LogoGithub></a>
				<a href="https://www.instagram.com/kamijec_99/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><LogoInstagram class="m-3 w-10 md:w-12 hover:scale-110 transition-transform hover:drop-shadow-[0_0_2px_gray]"></LogoInstagram></a>
				<a href="https://twitter.com/KamiJeC_05" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><LogoTwitter class="m-3 w-10 md:w-12 hover:scale-110 transition-transform hover:drop-shadow-[0_0_2px_gray]"></LogoTwitter></a>
			</article>
		</section>
	</header>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>
