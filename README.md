# Portfolio — camiDEV

Portfolio personal de **Camilo Jené** (camiDEV), publicado en
**[camidev.es](https://camidev.es)**. Construido con **Vue 3**, **Vite** y
**Tailwind CSS**, y desplegado en Vercel.

## Stack

| Capa        | Tecnología                                 |
| ----------- | ------------------------------------------ |
| Framework   | Vue 3 (Composition API) · Vue Router       |
| Bundler     | Vite                                       |
| Estilos     | Tailwind CSS (modo oscuro por clase)       |
| Fuentes     | Poppins · Noto Serif Display (@fontsource) |
| Analítica   | Vercel Analytics · Speed Insights          |

## Puesta en marcha

```sh
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción en dist/
npm run preview  # sirve la build en el puerto 4173
```

## Estructura

```
src/
├─ components/        secciones de la home (AboutMe, Work, Proyectos, ...)
│  └─ icons/          logos sociales como componentes SVG
├─ composables/
│  └─ useTheme.js     tema claro/oscuro compartido entre las tres apps montadas
├─ data/
│  └─ proyectos.js    contenido de la sección Proyectos
├─ directives/
│  └─ reveal.js       v-reveal: animación de entrada al hacer scroll
├─ router/            rutas y salto a secciones por hash
├─ views/             Home y Contacto
└─ index.css          variables de color, utilidades .card / .tag / .nav-link
```

`index.html` monta tres aplicaciones Vue: la navegación (`#header`), el
contenido (`#app`) y el pie (`#footer`).

### Tema claro / oscuro

El tema se aplica con la clase `dark` en `<html>`. Un script en `index.html` lo
fija **antes del primer pintado** (leyendo `localStorage` o, si no hay
preferencia, el ajuste del sistema) para evitar el parpadeo inicial. El botón de
la barra superior es el único que guarda preferencia: mientras no se pulse, la
web sigue al sistema.

### Añadir un proyecto

Edita [`src/data/proyectos.js`](src/data/proyectos.js) y añade una entrada con
`titulo`, `subtitulo`, `imagen`, `descripcion`, `detalles`, `tecnologias`,
`enlace` y, si el acceso no es público, `aviso`. Las capturas van en
`public/proyectos/` en formato WebP (1280 px de ancho, proporción 16:9).

### SEO

`index.html` incluye metadatos Open Graph y Twitter Card (imagen en
`public/og-image.jpg`), datos estructurados `schema.org/Person`, `canonical`, y
`public/robots.txt` y `public/sitemap.xml`. Al añadir rutas nuevas, recuerda
incluirlas en el sitemap.
