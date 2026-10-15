// Copy extra para la versión scrollytelling (los datos base siguen en i18n.js)
window.SC = {
  es: {
    chapters: ["inicio", "enfoque", "trabajo", "recorrido", "herramientas", "contacto"],
    // mismo orden que la página: proyectos (2), sobre mí = recorrido y herramientas (3-4), contacto (5).
    // La portada y el enfoque (0-1) no encienden ninguno.
    nav: [{ label: "Proyectos", to: 2, from: 2, till: 2 }, { label: "Sobre mí", to: 3, from: 3, till: 4 }, { label: "Contacto", to: 5, from: 5, till: 5 }],
    scrollHint: "desliza",
    skip: "Saltar al contenido",
    navMenu: "Ir a una sección",
    home: "Home",
    // título de la pestaña; el de partida, en español, está también en el <title> del HTML
    docTitle: "Iris García · Diseñadora de producto digital",
    heroTag: "Diseñadora de [producto digital] enfocada en [inteligencia artificial].",
    heroOrigin: "Valencia\u2009/\u2009Madrid · UX/UI",
    lines: [
      "Ingeniera en diseño industrial,",
      "centrada en creación digital",
      "a través de [Inteligencia Artificial]."
    ],
    storyNote: "ingeniería industrial + ia + ux/ui",
    profile: {
      edu: { items: [
        { k: "Grado", v: "Ingeniería en Diseño Industrial y Desarrollo de Productos" },
        { k: "Máster", v: "Ingeniería del Diseño" },
        { k: "Máster", v: "Diseño Web y App: UX/UI" }
      ] },
      meta: [
        { l: "ubicación", v: "Valencia\u2009/\u2009Madrid" },
        { l: "idiomas", v: "Español · Inglés B2" },
        { l: "modalidad", v: "Teletrabajo o híbrido" }
      ]
    },
    // recorrido: se suma por posición a t.journey (i18n.js). pos va de 0
    // (producto físico) a 1 (producto digital) y mueve el indicador.
    journey: {
      from: "Producto físico",
      to: "Producto digital",
      steps: [
        { when: "2017–2021", kind: "Formación", org: "Universitat Politècnica de València · Valencia", pos: 0.06 },
        { when: "2021", kind: "Experiencia", org: "Mañez y Lozano", pos: 0.2 },
        { when: "2022", kind: "Formación", org: "Universitat Politècnica de València · Valencia", pos: 0.34 },
        { when: "2023–2024", kind: "Formación internacional", org: "Erasmus · Amberes, Bélgica", pos: 0.5 },
        { when: "2024–2025", kind: "Experiencia + formación", org: "Mañez y Lozano · LABASAD", pos: 0.74 },
        { when: "2026", kind: "Ahora", org: "Valencia / Madrid · teletrabajo o híbrido", pos: 0.94 }
      ]
    },
    workCta: "ver proyecto",
    covers: ["projects/assets/horizonte/foto-escalada.webp", "projects/assets/vinarock/portada-vinarock.webp", "projects/assets/reverb/portada-reverb.webp"],
    contactH1: "¿Hablamos?",
    contactH2: "",
  },
  en: {
    chapters: ["start", "approach", "work", "journey", "toolkit", "contact"],
    nav: [{ label: "Projects", to: 2, from: 2, till: 2 }, { label: "About", to: 3, from: 3, till: 4 }, { label: "Contact", to: 5, from: 5, till: 5 }],
    scrollHint: "scroll",
    skip: "Skip to content",
    navMenu: "Go to a section",
    home: "Home",
    docTitle: "Iris García · Digital product designer",
    heroTag: "[Digital product] designer focused on [artificial intelligence].",
    heroOrigin: "Valencia\u2009/\u2009Madrid · UX/UI",
    lines: [
      "Industrial design engineer,",
      "focused on digital creation",
      "through [Artificial Intelligence]."
    ],
    storyNote: "industrial design eng + ai + ux/ui",
    profile: {
      edu: { items: [
        { k: "BSc", v: "Industrial Design & Product Development Engineering" },
        { k: "MSc", v: "Design Engineering" },
        { k: "MSc", v: "Web & App Design: UX/UI" }
      ] },
      meta: [
        { l: "location", v: "Valencia\u2009/\u2009Madrid" },
        { l: "languages", v: "Spanish · English B2" },
        { l: "work mode", v: "Remote or hybrid" }
      ]
    },
    journey: {
      from: "Physical product",
      to: "Digital product",
      steps: [
        { when: "2017–2021", kind: "Education", org: "Universitat Politècnica de València · Valencia", pos: 0.06 },
        { when: "2021", kind: "Experience", org: "Mañez y Lozano", pos: 0.2 },
        { when: "2022", kind: "Education", org: "Universitat Politècnica de València · Valencia", pos: 0.34 },
        { when: "2023–2024", kind: "Education abroad", org: "Erasmus · Antwerp, Belgium", pos: 0.5 },
        { when: "2024–2025", kind: "Experience + education", org: "Mañez y Lozano · LABASAD", pos: 0.74 },
        { when: "2026", kind: "Now", org: "Valencia / Madrid · remote or hybrid", pos: 0.94 }
      ]
    },
    workCta: "view project",
    covers: ["projects/assets/horizonte/foto-escalada.webp", "projects/assets/vinarock/portada-vinarock.webp", "projects/assets/reverb/portada-reverb.webp"],
    contactH1: "Shall we",
    contactH2: "talk?",
  }
};
