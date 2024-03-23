import { createApp } from 'vue'
import App from '@/App.vue'
import HeaderNav from '@/components/HeaderNav.vue';
import Footer from '@/components/Footer.vue';
import router from '@/router';

// Supports weights 100-800
import '../node_modules/@fontsource-variable/jetbrains-mono';
import '../node_modules/@fontsource-variable/noto-serif-display';
import '../node_modules/@fontsource/biryani';
import '../node_modules/@fontsource/poppins';

import './index.css'

const app = createApp(App)
const headerNav = createApp(HeaderNav)
const footer = createApp(Footer)

app.use(router)
headerNav.use(router)
app.mount('#app')

window.addEventListener('load', () => {
  // Ocultar el loader cuando la página se haya cargado completamente
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
});

headerNav.mount('#header')
footer.mount('#footer')
