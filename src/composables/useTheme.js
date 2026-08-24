import { ref, watch } from 'vue';

const STORAGE_KEY = 'theme';

function leerPreferencia() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    return null; // almacenamiento no disponible
  }
}

function guardarPreferencia(dark) {
  try {
    localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
  } catch (e) {
    /* sin almacenamiento el tema solo dura esta sesión */
  }
}

// El tema inicial ya lo aplica el script de index.html, así que aquí solo se lee.
const isDark = ref(document.documentElement.classList.contains('dark'));

watch(isDark, (dark) => {
  document.documentElement.classList.toggle('dark', dark);
});

// Mientras el visitante no haya elegido tema, la web sigue al sistema. Este
// seguimiento no se guarda: solo el botón fija una preferencia.
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  if (leerPreferencia()) return;

  isDark.value = event.matches;
});

export function useTheme() {
  function toggleTheme() {
    isDark.value = !isDark.value;
    guardarPreferencia(isDark.value);
  }

  return { isDark, toggleTheme };
}
