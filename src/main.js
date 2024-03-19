import { createApp } from 'vue'
import App from './App.vue'

// Supports weights 100-800
import '../node_modules/@fontsource-variable/jetbrains-mono';
import '../node_modules/@fontsource-variable/noto-serif-display';
import '../node_modules/@fontsource/biryani';
import '../node_modules/@fontsource/poppins';

import './index.css'

window.addEventListener('load', () => {
  // Ocultar el loader cuando la página se haya cargado completamente
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
});

createApp(App).mount('#app')
