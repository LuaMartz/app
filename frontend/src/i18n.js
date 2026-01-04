import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact'
      },
      hero: {
        title: 'Welcome to My Multiverse',
        subtitle: "I'm Luisa Martínez",
        description: 'Digital Designer | 2D/3D Animator | Creative Developer UX/UI',
        cta: 'Explore Worlds',
        greeting: 'Hello! I transform ideas into visual experiences that connect with people and tell stories with purpose.'
      },
      worlds: {
        webdev: 'Web Development',
        design: 'Creative Design',
        branding: 'Branding Studio',
        uxui: 'UX/UI Lab',
        social: 'Social Media Hub',
        animation: 'Animation Realm'
      },
      about: {
        title: 'About Me',
        bio: 'I am a digital designer, 2D/3D animator and creative developer with a UX/UI focus. I love transforming ideas into visual experiences that connect with people and tell stories with purpose.',
        experience: 'Currently Marketing Director at C&B Papeles de Colombia',
        tools: 'Favorite Tools',
        skills: 'Key Areas',
        available: 'Available for Freelance & Fulltime',
        hire: 'Hire Me'
      },
      projects: {
        title: 'Featured Projects',
        viewAll: 'View All Projects',
        categories: 'Categories'
      },
      contact: {
        title: 'Let\'s Work Together',
        subtitle: 'Have a project in mind? Let\'s create something amazing!',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        social: 'Or find me on'
      },
      footer: {
        rights: 'All rights reserved',
        made: 'Crafted with creativity'
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Sobre Mí',
        projects: 'Proyectos',
        skills: 'Habilidades',
        contact: 'Contacto'
      },
      hero: {
        title: 'Bienvenido a Mi Multiverso',
        subtitle: 'Soy Luisa Martínez',
        description: 'Diseñadora Digital | Animadora 2D/3D | Desarrolladora Creativa UX/UI',
        cta: 'Explorar Mundos',
        greeting: '¡Hola! Transformo ideas en experiencias visuales que conectan con las personas y cuentan historias con propósito.'
      },
      worlds: {
        webdev: 'Desarrollo Web',
        design: 'Diseño Creativo',
        branding: 'Estudio de Branding',
        uxui: 'Laboratorio UX/UI',
        social: 'Hub de Redes Sociales',
        animation: 'Reino de Animación'
      },
      about: {
        title: 'Sobre Mí',
        bio: 'Soy diseñadora digital, animadora 2D/3D y desarrolladora creativa con enfoque UX/UI. Me encanta transformar ideas en experiencias visuales que conectan con las personas y cuentan historias con propósito.',
        experience: 'Actualmente Directora de Marketing en C&B Papeles de Colombia',
        tools: 'Herramientas Favoritas',
        skills: 'Áreas Clave',
        available: 'Disponible para Freelance y Tiempo Completo',
        hire: 'Contrátame'
      },
      projects: {
        title: 'Proyectos Destacados',
        viewAll: 'Ver Todos los Proyectos',
        categories: 'Categorías'
      },
      contact: {
        title: 'Trabajemos Juntos',
        subtitle: '¿Tienes un proyecto en mente? ¡Creemos algo increíble!',
        email: 'Correo Electrónico',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        social: 'O encuéntrame en'
      },
      footer: {
        rights: 'Todos los derechos reservados',
        made: 'Creado con creatividad'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;