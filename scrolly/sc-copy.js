// Copy extra para la versión scrollytelling (los datos base siguen en i18n.js)
window.SC = {
  es: {
    chapters: ["inicio", "enfoque", "trabajo", "sobre mí", "herramientas", "contacto"],
    // mismo orden que la página: proyectos (2), sobre mí = resumen y herramientas (3-4), contacto (5).
    // La portada y el enfoque (0-1) no encienden ninguno.
    nav: [{ label: "Proyectos", to: 2, from: 2, till: 2 }, { label: "Sobre mí", to: 3, from: 3, till: 4 }, { label: "Contacto", to: 5, from: 5, till: 5 }],
    scrollHint: "desliza",
    skip: "Saltar al contenido",
    navMenu: "Ir a una sección",
    home: "Home",
    // título de la pestaña; el de partida, en español, está también en el <title> del HTML
    docTitle: "Iris García · Diseñadora de producto digital",
    heroTag: "[Diseño digital] y [creatividad]",
    heroOrigin: "Madrid · UX/UI",
    lines: [
      "Soy ingeniera en",
      "diseño industrial",
      "y quiero enfocarme",
      "en el [diseño]",
      "[de producto digital]",
      "y la [Inteligencia Artificial]"
    ],
    storyNote: "ingeniería industrial + ia + ux/ui",
    profile: {
      edu: { items: [
        { k: "Grado", v: "Ingeniería en Diseño Industrial y Desarrollo de Productos" },
        { k: "Máster", v: "Ingeniería del Diseño" },
        { k: "Máster", v: "Diseño Web y App: UX/UI" }
      ] },
      meta: [
        { l: "ubicación", v: "Madrid" },
        { l: "idiomas", v: "Español · Inglés B2" },
        { l: "modalidad", v: "Teletrabajo o híbrido" }
      ]
    },
    workCta: "ver proyecto",
    workCtaLive: "visitar web",
    covers: ["projects/assets/manezylozano/portada-web.webp", "projects/assets/horizonte/foto-escalada.webp", "projects/assets/vinarock/portada-vinarock.webp", "projects/assets/reverb/portada-reverb.webp"],
    contactH1: "¿Hablamos?",
    contactH2: "",
  },
  en: {
    chapters: ["start", "approach", "work", "about", "toolkit", "contact"],
    nav: [{ label: "Projects", to: 2, from: 2, till: 2 }, { label: "About", to: 3, from: 3, till: 4 }, { label: "Contact", to: 5, from: 5, till: 5 }],
    scrollHint: "scroll",
    skip: "Skip to content",
    navMenu: "Go to a section",
    home: "Home",
    docTitle: "Iris García · Digital product designer",
    heroTag: "[Digital design] and [creativity]",
    heroOrigin: "Madrid · UX/UI",
    lines: [
      "I'm an industrial",
      "design engineer",
      "and I want to focus on",
      "[digital product design]",
      "and [Artificial Intelligence]"
    ],
    storyNote: "industrial design eng + ai + ux/ui",
    profile: {
      edu: { items: [
        { k: "BSc", v: "Industrial Design & Product Development Engineering" },
        { k: "MSc", v: "Design Engineering" },
        { k: "MSc", v: "Web & App Design: UX/UI" }
      ] },
      meta: [
        { l: "location", v: "Madrid" },
        { l: "languages", v: "Spanish · English B2" },
        { l: "work mode", v: "Remote or hybrid" }
      ]
    },
    workCta: "view project",
    workCtaLive: "visit website",
    covers: ["projects/assets/manezylozano/portada-web.webp", "projects/assets/horizonte/foto-escalada.webp", "projects/assets/vinarock/portada-vinarock.webp", "projects/assets/reverb/portada-reverb.webp"],
    contactH1: "Shall we",
    contactH2: "talk?",
  }
};
