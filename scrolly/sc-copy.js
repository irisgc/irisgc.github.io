// Copy extra para la versión scrollytelling (los datos base siguen en i18n.js)
window.SC = {
  es: {
    chapters: ["inicio", "enfoque", "proyectos", "sobre mí", "herramientas", "contacto"],
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
    contactH1: "¿Hablamos?",
    contactH2: "",
    // «Enfoque»: vista explosionada (sc-enfoque.jsx). En `name`, «|» parte el globo en dos líneas;
    // `i` es la fila de la tabla que enciende cada capa
    enfoque: {
      label: "Enfoque",
      rows: [
        { i: 0, t: "Diseño web", d: "Web oficial y tienda online de recambios", link: "manezylozano.com", href: "#p-mzl" },
        { i: 1, t: "Diseño app", d: "Aplicación para SO Android", link: "Horizonte", href: "#p-horizonte" },
        { i: 2, t: "Rediseño UX web", d: "Mejora de la experiencia de usuario y la arquitectura de la información", link: "Viña Rock", href: "#p-vinarock" },
        { i: 3, t: "Investigación, concepto y diseño web", d: "Web para visibilizar a las mujeres en la música", link: "REVERB", href: "#p-reverb" },
        { i: 5, t: "Modelado y render", d: "CAD, render, web", link: "visual", href: "#p-3d" }
      ],
      names: { web: "Diseño web", app: "Diseño app", ux: "Rediseño UX web", ds: "Concepto y diseño web", r3d: "Modelado y render" },
      webAlt: "Home de manezylozano.com",
      vrAlt: "Portada del caso Viña Rock",
      hzSub: "App de aventuras con impacto local",
      card: {
        name: "Iris García", role: "Diseño de producto digital",
        cells: [
          { l: "Formación", v: "Grado en Ingeniería en Diseño Industrial y Desarrollo de Productos\nMáster en Ingeniería del Diseño · Máster en Diseño Web y App: UX/UI" },
          { l: "Experiencia", v: "5 años como ingeniera y diseñadora" },
          { l: "Ubicación actual", v: "Valencia" },
          { l: "Idiomas", v: "ES · EN B2" }
        ],
        mobile: { l: "Ubicación · idiomas", v: "Valencia · ES · EN B2" }
      }
    },
    // «Proyectos» en tres bloques (sc-proyectos.jsx)
    proyectos: {
      title: "Proyectos",
      mzl: { name: "Mañez y Lozano", sub: "Web oficial y tienda de recambios.", tags: ["WordPress", "Claude Code"], cta: "Visitar web", video: "Recorrido en vídeo por manezylozano.com" },
      live: "En funcionamiento",
      cases: "Casos de estudio",
      casesTag: "Máster UX/UI",
      caseCta: "Ver proyecto",
      list: [
        { id: "p-vinarock", k: "Rediseño UX web", name: "Viña Rock" },
        { id: "p-horizonte", k: "App Android", name: "Horizonte" },
        { id: "p-reverb", k: "Web responsive", name: "REVERB" }
      ],
      r3d: "Modelado 3D y render",
      conf: { state: "En desarrollo", name: "Configurador 3D", body: "Web interactiva para configurar atomizadores a medida y visualizar todos los componentes de cada máquina para Mañez y Lozano.", video: "Configurador 3D: la máquina se separa en conjuntos y se abre el despiece de la bomba" },
      play: "Reproducir vídeo",
      pause: "Pausar vídeo",
      full: "Ver a pantalla completa"
    },
  },
  en: {
    chapters: ["start", "approach", "projects", "about", "toolkit", "contact"],
    nav: [{ label: "Projects", to: 2, from: 2, till: 2 }, { label: "About", to: 3, from: 3, till: 4 }, { label: "Contact", to: 5, from: 5, till: 5 }],
    scrollHint: "scroll",
    skip: "Skip to content",
    navMenu: "Go to a section",
    home: "Home",
    docTitle: "Iris García · Digital product designer",
    heroTag: "[Digital design] and [creativity]",
    heroOrigin: "Madrid · UX/UI",
    contactH1: "Shall we",
    contactH2: "talk?",
    enfoque: {
      label: "Approach",
      rows: [
        { i: 0, t: "Web design", d: "Official website and online spare-parts shop", link: "manezylozano.com", href: "#p-mzl" },
        { i: 1, t: "App design", d: "App for Android OS", link: "Horizonte", href: "#p-horizonte" },
        { i: 2, t: "UX web redesign", d: "Improving the user experience and the information architecture", link: "Viña Rock", href: "#p-vinarock" },
        { i: 3, t: "Research, concept and web design", d: "Website giving visibility to women in music", link: "REVERB", href: "#p-reverb" },
        { i: 5, t: "3D modelling and rendering", d: "CAD, rendering, web", link: "visual", href: "#p-3d" }
      ],
      names: { web: "Web design", app: "App design", ux: "UX web redesign", ds: "Concept and web design", r3d: "3D modelling|and rendering" },
      webAlt: "manezylozano.com home page",
      vrAlt: "Viña Rock case cover",
      hzSub: "Adventure app with local impact",
      card: {
        name: "Iris García", role: "Digital product design",
        cells: [
          { l: "Education", v: "BSc in Industrial Design and Product Development Engineering\nMSc in Design Engineering · MSc in Web and App Design: UX/UI" },
          { l: "Experience", v: "5 years as an engineer and designer" },
          { l: "Current location", v: "Valencia" },
          { l: "Languages", v: "ES · EN B2" }
        ],
        mobile: { l: "Location · languages", v: "Valencia · ES · EN B2" }
      }
    },
    proyectos: {
      title: "Projects",
      mzl: { name: "Mañez y Lozano", sub: "Official website and spare-parts shop.", tags: ["WordPress", "Claude Code"], cta: "Visit website", video: "Video walkthrough of manezylozano.com" },
      live: "Live",
      cases: "Case studies",
      casesTag: "UX/UI Master's",
      caseCta: "View project",
      list: [
        { id: "p-vinarock", k: "Web UX redesign", name: "Viña Rock" },
        { id: "p-horizonte", k: "Android app", name: "Horizonte" },
        { id: "p-reverb", k: "Responsive web", name: "REVERB" }
      ],
      r3d: "3D modelling and rendering",
      conf: { state: "In development", name: "3D configurator", body: "Interactive website for Mañez y Lozano to configure made-to-order air-blast sprayers and see every component of each machine.", video: "3D configurator: the machine separates into its assemblies and the pump opens into an exploded view" },
      play: "Play video",
      pause: "Pause video",
      full: "Watch full screen"
    },
  }
};
