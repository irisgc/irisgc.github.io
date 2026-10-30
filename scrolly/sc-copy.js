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
      title: "Mi sistema de diseño.",
      sub: ["Cinco años como ingeniera en diseño industrial y diseñadora gráfica en una fábrica de maquinaria agrícola.", "Así aplico mis conocimientos y experiencia en distintas ramas del diseño."],
      hint: ["Lo que ves es solo la capa de arriba", "desliza para desmontar ↓"],
      rows: [
        { i: 0, t: "Diseño web", d: "Web oficial y tienda de recambios en producción, con WordPress y Claude Code.", link: "manezylozano.com", href: "#p-mzl" },
        { i: 1, t: "Diseño App, interfaz y prototipo", d: "App Android con modo claro y oscuro y un prototipo que se puede probar.", link: "Horizonte", href: "#p-horizonte" },
        { i: 2, t: "Investigación UX y arquitectura", d: "Auditoría heurística, test con 7 personas y compra en tres pasos sin registro.", link: "Viña Rock", href: "#p-vinarock" },
        { i: 3, t: "Investigación, concepto, UX/UI, sistema de diseño", d: "Un concepto convertido en reglas de interfaz y componentes con variantes.", link: "REVERB", href: "#p-reverb" },
        { i: 5, t: "Modelado y render", d: "CAD, render, IA generativa", link: "visual", href: "#p-3d" }
      ],
      names: { web: "Diseño web", app: "Diseño app", ux: "Investigación y|arquitectura", ds: "Sistema de diseño", r3d: "Modelado y render" },
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
      live: "En producción",
      mzl: { name: "Mañez y Lozano", sub: "Web oficial y tienda de recambios.", tags: ["WordPress", "Claude Code"], cta: "Visitar web ↗", video: "Recorrido en vídeo por manezylozano.com" },
      cases: "Casos de estudio",
      casesTag: "Máster UX/UI",
      casesSub: "Proyectos del Máster en Diseño Web y App: UX/UI",
      caseCta: "Ver caso →",
      list: [
        { id: "p-vinarock", k: "Rediseño UX", name: "Viña Rock", tags: ["Investigación", "Arquitectura"] },
        { id: "p-horizonte", k: "App Android", name: "Horizonte", tags: ["Investigación", "Sistema de diseño", "Prototipo"] },
        { id: "p-reverb", k: "Web responsive", name: "REVERB", tags: ["Investigación", "Sistema de diseño", "Prototipo"] }
      ],
      r3d: "Modelado 3D y render",
      conf: { name: "Configurador 3D", body: "Web interactiva para configurar atomizadores a medida y visualizar todos los componentes de cada máquina para Mañez y Lozano.", cap: "Renderizado desde el visor web", video: "Configurador 3D: la máquina se separa en conjuntos y se abre el despiece de la bomba" },
      play: "Reproducir vídeo",
      pause: "Pausar vídeo"
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
      title: "My design system.",
      sub: ["Five years as an industrial design engineer and graphic designer at an agricultural machinery manufacturer.", "This is how I apply my knowledge and experience across different fields of design."],
      hint: ["What you see is just the top layer", "scroll to take it apart ↓"],
      rows: [
        { i: 0, t: "Web design", d: "Official website and spare-parts shop, live, built with WordPress and Claude Code.", link: "manezylozano.com", href: "#p-mzl" },
        { i: 1, t: "App design, interface and prototype", d: "Android app with light and dark modes and a prototype you can try.", link: "Horizonte", href: "#p-horizonte" },
        { i: 2, t: "UX research and information architecture", d: "Heuristic audit, testing with 7 people and a three-step checkout with no sign-up.", link: "Viña Rock", href: "#p-vinarock" },
        { i: 3, t: "Research, concept, UX/UI, design system", d: "A concept turned into interface rules and components with variants.", link: "REVERB", href: "#p-reverb" },
        { i: 5, t: "3D modelling and rendering", d: "CAD, rendering, generative AI", link: "visual", href: "#p-3d" }
      ],
      names: { web: "Web design", app: "App design", ux: "Research and|architecture", ds: "Design system", r3d: "3D modelling|and rendering" },
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
      live: "Live",
      mzl: { name: "Mañez y Lozano", sub: "Official website and spare-parts shop.", tags: ["WordPress", "Claude Code"], cta: "Visit website ↗", video: "Video walkthrough of manezylozano.com" },
      cases: "Case studies",
      casesTag: "UX/UI Master's",
      casesSub: "Projects from the Master's in Web and App Design: UX/UI",
      caseCta: "View case →",
      list: [
        { id: "p-vinarock", k: "UX redesign", name: "Viña Rock", tags: ["Research", "Information architecture"] },
        { id: "p-horizonte", k: "Android app", name: "Horizonte", tags: ["Research", "Design system", "Prototype"] },
        { id: "p-reverb", k: "Responsive web", name: "REVERB", tags: ["Research", "Design system", "Prototype"] }
      ],
      r3d: "3D modelling and rendering",
      conf: { name: "3D configurator", body: "Interactive website for Mañez y Lozano to configure made-to-order air-blast sprayers and see every component of each machine.", cap: "Rendered from the web viewer", video: "3D configurator: the machine separates into its assemblies and the pump opens into an exploded view" },
      play: "Play video",
      pause: "Pause video"
    },
  }
};
