export const proyectos = [
  {
    id: 'plantor',
    titulo: 'PlantOR',
    subtitulo: 'Gestor de equipos de fútbol',
    imagen: '/proyectos/plantor.webp',
    imagenAlt: 'Pantalla de acceso de PlantOR, el gestor de equipos de fútbol',
    descripcion:
      'Aplicación web (PWA) para la gestión integral de clubes y equipos deportivos, desarrollada de extremo a extremo. Cubre plantilla y fichas de jugador, calendario, convocatorias y acta del partido (goles, asistencias, cambios y minutos), estadísticas de equipo y jugador, clasificación, tareas tácticas sobre un tablero SVG interactivo, metodología por fases del juego, lesiones, documentos y análisis post-partido.',
    detalles: [
      'Arquitectura multi-club (multi-tenant) con roles y visibilidad por club y equipo',
      'Autenticación propia con JWT en cookie httpOnly, acceso solo por invitación y bcrypt',
      'Desplegada con Docker en una Raspberry Pi tras un proxy inverso Caddy con HTTPS automático (DNS-01)',
      'Interfaz bilingüe (español / inglés) conmutable en caliente'
    ],
    tecnologias: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma 7', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'PWA'],
    enlace: 'https://team-management.kaminode.es:8443',
    enlaceTexto: 'Ver la aplicación →',
    aviso: 'Acceso por invitación: el enlace lleva a la pantalla de inicio de sesión.'
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
