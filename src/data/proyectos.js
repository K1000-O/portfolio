export const proyectos = [
  {
    id: 'plantor',
    titulo: 'PlantOR',
    subtitulo: 'Gestor de clubes de fútbol base - plantor.es',
    imagen: '/proyectos/plantor.webp',
    imagenAlt: 'Página de inicio de plantor.es, el software de gestión para clubes de fútbol base',
    descripcion:
      'Producto propio en producción, desarrollado de extremo a extremo: una aplicación web (PWA) que reúne la gestión de un club de fútbol base. Plantillas y fichas de jugador, calendario, convocatorias y acta del partido en vivo, estadísticas, clasificación automática de la RFFM, pizarra táctica en SVG, metodología en tres niveles con carga por sesión, presencialidad, preparación física, lesiones, documentos, objetivos individuales y análisis post-partido.',
    detalles: [
      'Arquitectura multi-club (multi-tenant) con roles y visibilidad por club y equipo',
      'Autenticación propia con JWT en cookie httpOnly y bcrypt; las familias confirman asistencia por enlace y PIN, sin crear cuenta',
      'En producción sobre un VPS propio: Docker, proxy inverso Caddy con HTTPS automático y copias de seguridad cifradas fuera del servidor',
      'Web pública del producto con SEO propio, e interfaz bilingüe (español / inglés) conmutable en caliente'
    ],
    tecnologias: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma 7', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'PWA'],
    enlace: 'https://plantor.es',
    enlaceTexto: 'Ver el producto →',
    aviso: 'plantor.es es la web pública; la aplicación es de acceso restringido a los clubes.'
  },
  {
    id: 'chamartin',
    titulo: 'CD Chamartín Athletic',
    subtitulo: 'chamartinathletic.es',
    imagen: '/proyectos/chamartin.webp',
    imagenAlt: 'Captura de la web del CD Chamartín Athletic',
    descripcion:
      'Desarrollo e implementación de la web oficial del CD Chamartín Athletic, club de fútbol madrileño con primer equipo en Primera División Aficionados de la RFFM y seis equipos de cantera. Desplegada en Vercel con CI/CD automático.',
    detalles: [
      'Sistema de noticias editorial basado en Markdown',
      'Páginas dinámicas de cantera con carga automática de galerías',
      'Formularios de inscripción integrados con EmailJS y gestión de SEO con @unhead/vue'
    ],
    tecnologias: ['Vue 3', 'Vite', 'Tailwind CSS', 'Vercel', 'EmailJS'],
    enlace: 'https://chamartinathletic.es',
    enlaceTexto: 'Ver sitio →',
    aviso: null
  }
];

export default proyectos;
