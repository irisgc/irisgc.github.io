// ============================================
// I18N — Spanish / English dictionaries
// ============================================
const DICT = {
  es: {
    loading: "CARGANDO PORTFOLIO",
    available: "Disponible para colaborar",
    based: "Basada en España",
    role: "Diseñadora de Producto Digital",
    year: "Edición 2026",
    hello: "Hola, soy",
    nameFirst: "Iris",
    nameLast: "García C.",
    taglineLead: "Diseñadora con formación en Ingeniería en Diseño Industrial, Inteligencia Artificial y",
    taglineMid: "Diseño UX/UI.",
    taglineEnd: "",
    scroll: "Desliza para explorar",

    marquee: ["UX Research", "Design Systems", "Prototipado", "Investigación", "Sistemas", "Producto Digital", "IA Generativa"],

    workLabel: "Trabajo seleccionado",
    workTitle: "Proyectos destacados",
    workTitleEm: "",
    work: [
      { num: "01", name: "Horizonte", nameEm: "Aventura", tags: ["App móvil para Android", "UX/UI", "Turismo activo"], year: "2025", href: "projects/horizonte.html", coverFit: "cover",
        // portada en bucle (la de Figma, reconstruida en sc-hz-loop.jsx)
        coverLoop: { sub: "Experiencias de aventura con impacto local", chips: ["App móvil para Android", "UX/UI", "Turismo activo"], img: { photo: "projects/assets/horizonte/foto-escalada.webp", back: "projects/assets/horizonte/pantalla-explorar.webp", front: "projects/assets/horizonte/pantalla-ganar-oscuro.webp", done: "projects/assets/horizonte/pantalla-mision-oscuro.webp" } } },
      { num: "02", name: "Viña Rock", nameEm: "Festival", tags: ["Investigación UX", "Test de usabilidad", "Arquitectura de la información"], year: "2025", href: "projects/vinarock.html", coverFit: "cover",
        // portada en bucle: la home y la compra del prototipo v2 sobre la foto del festival (sc-vr-loop.jsx)
        coverVr: { sub: "Rediseño UX de la web del festival", chips: ["Caso de estudio UX", "Investigación con usuarios", "Web responsive"], ticker: ["1-3 mayo 2025", "Villarrobledo, Albacete", "Viña Rock"], pulsera: "VIÑA ROCK 2025", img: { photo: "projects/assets/vinarock/foto-festival.webp", logo: "projects/assets/vinarock/logo.svg", desk: "projects/assets/vinarock/v2/loop/d-home.webp", phone: ["projects/assets/vinarock/v2/loop/m-home.webp", "projects/assets/vinarock/v2/loop/m-compra1.webp", "projects/assets/vinarock/v2/loop/m-compra2.webp", "projects/assets/vinarock/v2/loop/m-compra3.webp", "projects/assets/vinarock/v2/loop/m-confirmacion.webp"] } } },
      { num: "03", name: "REVERB", nameEm: "Mujeres en la música", tags: ["Web responsive", "Diseño inclusivo", "Sistema de diseño"], year: "2025", href: "projects/reverb.html", coverFit: "cover",
        // portada en bucle: el shader térmico del prototipo con componentes del UI kit encima (sc-rv-loop.jsx)
        coverRv: { sub: "Un altavoz para las mujeres de la industria musical", chips: ["Web responsive", "Diseño inclusivo", "Sistema de diseño"], ui: { tag: "Técnica de sonido", name: "Laura", next: "Próxima voz en", real: "La realidad · 2024", song: "La fiesta", artist: "shego" }, img: { logo: "projects/assets/reverb/logo.svg", laura: "projects/assets/reverb/v2/laura.webp", shego: "projects/assets/reverb/v2/shego.webp" } } },
    ],

    aboutLabel: "Sobre mí",
    aboutTitle: "Pensar en sistemas,",
    aboutTitleEm: "diseñar con sensibilidad.",
    aboutP1: "Aporto una mirada centrada en el usuario tanto en productos físicos como digitales, combinando ",
    aboutP1m: "pensamiento sistémico",
    aboutP1b: ", sensibilidad estética y dominio de herramientas tradicionales y de ",
    aboutP1c: "IA generativa",
    aboutP1d: ".",
    aboutP2: "Busco un rol de diseño de producto digital donde aplicar mi experiencia en investigación, prototipado y materialización de ideas.",
    facts: [
      { k: "Formación", v: "Grado y máster de Ingeniería en Diseño Industrial\nMáster UX/UI" },
      { k: "Localización", v: "Madrid\nEspaña" },
      { k: "Idiomas", v: "Español\nInglés" },
      { k: "Disponibilidad", v: "Octubre 2026" },
    ],
    portraitPlaceholder: "Retrato →",

    journeyLabel: "Mi recorrido",
    journeyTitle: "De la ingeniería",
    journeyTitleEm: "al producto digital.",
    journey: [
      {
        year: "2017",
        title: "Grado en Ingeniería en Diseño Industrial",
        body: "Empiezo el grado en <strong>Ingeniería en Diseño Industrial y Desarrollo de Productos</strong> en la <strong>Universitat Politècnica de València (UPV)</strong>. Aprendo a pensar en sistemas, materiales y usuarios.",
      },
      {
        year: "2021",
        title: "Prácticas + contrato indefinido",
        body: "Me gradúo y hago prácticas extracurriculares como <strong>diseñadora gráfica en Mañez y Lozano</strong>, que terminan en un contrato indefinido: catálogos, manuales, tarifas y stands de ferias.",
      },
      {
        year: "2022",
        title: "Máster en Ingeniería del Diseño",
        body: "Profundizo en metodología, investigación de mercados y usuarios y experimentación con el <strong>máster en Ingeniería del Diseño en la UPV</strong>.",
      },
      {
        year: "2024",
        title: "Erasmus del máster en Amberes",
        body: "<strong>Erasmus de seis meses en Amberes</strong> para realizar mi Trabajo Final de Máster. El producto digital empieza a ganar peso en mi forma de proyectar.",
      },
      {
        year: "2024",
        title: "Trabajo como Ingeniera y Máster en Diseño UX/UI",
        body: "Vuelvo a Mañez y Lozano como <strong>diseñadora de producto digital e industrial</strong>: web oficial, tienda online, un configurador 3D y el diseño de producto con toda su comunicación. A la vez, curso el <strong>Máster en Diseño Web y App: UX/UI en LABASAD</strong>, que termino en 2025.",
      },
      {
        year: "2026",
        title: "Ahora",
        body: "Con el máster terminado, quiero enfocar mi trayectoria al <strong>producto digital</strong>: busco un rol de diseño UX/UI donde sumar mi base en ingeniería y mi forma de crear con inteligencia artificial.",
      },
    ],

    skillsLabel: "Caja de herramientas",
    skillsTitle: "Habilidades y herramientas",
    skillsTitleEm: "",
    skills: [
      { name: "Claude Design", cat: "Diseño con IA", lvl: 0.85 },
      { name: "Figma", cat: "Diseño UI", lvl: 0.9 },
      { name: "Claude Code", cat: "Prototipado con IA", lvl: 0.85 },
      { name: "Magnific", cat: "IA Generativa", lvl: 0.9 },
      { name: "Photoshop", cat: "Imagen", lvl: 0.9 },
      { name: "Illustrator", cat: "Vectorial", lvl: 0.95 },
      { name: "OrangeStorm Giga", cat: "Impresión 3D", lvl: 0.85 },
      { name: "Blender", cat: "Producto 3D", lvl: 0.85 },
      { name: "WordPress", cat: "Web / CMS", lvl: 0.85 },
      { name: "Elementor", cat: "Web / CMS", lvl: 0.85 },
      { name: "SolidWorks", cat: "Producto 3D", lvl: 0.9 },
      { name: "Elegoo Slicer", cat: "Impresión 3D", lvl: 0.85 },
      { name: "InDesign", cat: "Maquetación", lvl: 0.95 },
    ],

    contactLabel: "Contacto",
    contactH: "Escríbeme a",
    contactHEm: "",
    contactCta: "",
    blocks: [
      { l: "LinkedIn", v: "Iris García", href: "https://www.linkedin.com/in/iris-garc%C3%ADa-0304a4206/" },
      // `cv: true`: no es un enlace, abre la ventana del CV (scrolly/sc-cv.jsx)
      { l: "CV", v: "Descargar CV (PDF)", cv: true },
      { l: "Última actualización", v: "Septiembre 2026" },
    ],

    // Ventana del CV: la abren el botón CV de la barra y el bloque CV del contacto
    cvPick: {
      title: "Descargar CV",
      close: "Cerrar",
      kindL: "Versión del CV",
      kinds: {
        designed: { n: "Diseñado", d: "Maquetado en una hoja, para leer y enseñar." },
        simple: { n: "Simple", d: "Solo texto, para portales de empleo." },
      },
      langL: "Idioma del CV",
      langs: { es: "Español", en: "English" },
      open: "Abrir",
      openLong: "Abrir el PDF en una pestaña nueva",
      download: "Descargar PDF",
    },

    footerL: "© 2026 Iris García",
    footerR: "Hecho con cariño",

    eggMsg: "¡Has encontrado el huevo de pascua! ☕ Gracias por curiosear.",
    backToWork: "Volver al trabajo",
    nextProject: "Siguiente proyecto",
    cs: {
      challenge: "El reto",
      challengeN: "01",
      process: "El proceso",
      processN: "02",
      solution: "La solución",
      solutionN: "03",
      results: "Resultados",
      resultsN: "04",
    },
  },
  en: {
    loading: "LOADING PORTFOLIO",
    available: "Available for collaboration",
    based: "Based in Spain",
    role: "Digital Product Designer",
    year: "2026 Edition",
    hello: "Hi, I'm",
    nameFirst: "Iris",
    nameLast: "García C.",
    taglineLead: "Designer with training in industrial design engineering and",
    taglineMid: "UX/UI design.",
    taglineEnd: "",
    scroll: "Scroll to explore",

    marquee: ["UX Research", "Design Systems", "Prototyping", "Research", "Systems", "Digital Product", "Generative AI"],

    workLabel: "Selected work",
    workTitle: "Selected projects",
    workTitleEm: "",
    work: [
      { num: "01", name: "Horizonte", nameEm: "Adventure", tags: ["Android mobile app", "UX/UI", "Adventure tourism"], year: "2025", href: "projects/horizonte.html", coverFit: "cover",
        coverLoop: { sub: "Adventure experiences with local impact", chips: ["Android mobile app", "UX/UI", "Adventure tourism"], img: { photo: "projects/assets/horizonte/foto-escalada.webp", back: "projects/assets/horizonte/pantalla-explorar.webp", front: "projects/assets/horizonte/pantalla-ganar-oscuro.webp", done: "projects/assets/horizonte/pantalla-mision-oscuro.webp" } } },
      { num: "02", name: "Viña Rock", nameEm: "Festival", tags: ["UX research", "Usability testing", "Information architecture"], year: "2025", href: "projects/vinarock.html", coverFit: "cover",
        coverVr: { sub: "UX redesign of the festival's website", chips: ["UX case study", "User research", "Responsive web"], ticker: ["1-3 May 2025", "Villarrobledo, Albacete", "Viña Rock"], pulsera: "VIÑA ROCK 2025", img: { photo: "projects/assets/vinarock/foto-festival.webp", logo: "projects/assets/vinarock/logo.svg", desk: "projects/assets/vinarock/v2/loop/d-home.webp", phone: ["projects/assets/vinarock/v2/loop/m-home.webp", "projects/assets/vinarock/v2/loop/m-compra1.webp", "projects/assets/vinarock/v2/loop/m-compra2.webp", "projects/assets/vinarock/v2/loop/m-compra3.webp", "projects/assets/vinarock/v2/loop/m-confirmacion.webp"] } } },
      { num: "03", name: "REVERB", nameEm: "Women in music", tags: ["Responsive web", "Inclusive design", "Design system"], year: "2025", href: "projects/reverb.html", coverFit: "cover",
        coverRv: { sub: "A loudspeaker for women in the music industry", chips: ["Responsive web", "Inclusive design", "Design system"], ui: { tag: "Sound technician", name: "Laura", next: "Next voice in", real: "The reality · 2024", song: "La fiesta", artist: "shego" }, img: { logo: "projects/assets/reverb/logo.svg", laura: "projects/assets/reverb/v2/laura.webp", shego: "projects/assets/reverb/v2/shego.webp" } } },
    ],

    aboutLabel: "About me",
    aboutTitle: "Think in systems,",
    aboutTitleEm: "design with sensitivity.",
    aboutP1: "I bring a user-centered perspective to both physical and digital products, combining ",
    aboutP1m: "systems thinking",
    aboutP1b: ", aesthetic sensitivity and command of traditional and ",
    aboutP1c: "generative AI",
    aboutP1d: " tools.",
    aboutP2: "I'm looking for a digital product design role where I can apply my experience in research, prototyping and bringing ideas to life.",
    facts: [
      { k: "Education", v: "BSc and MSc in Industrial Design Engineering\nUX/UI Master" },
      { k: "Location", v: "Madrid\nSpain" },
      { k: "Languages", v: "Spanish\nEnglish" },
      { k: "Availability", v: "October 2026" },
    ],
    portraitPlaceholder: "Portrait →",

    journeyLabel: "My journey",
    journeyTitle: "From engineering",
    journeyTitleEm: "to digital product.",
    journey: [
      {
        year: "2017",
        title: "Degree in Industrial Design Engineering",
        body: "I begin the degree in <strong>Industrial Design Engineering and Product Development</strong> at <strong>UPV</strong>. I learn to think in systems, materials and users.",
      },
      {
        year: "2021",
        title: "Internship + permanent contract",
        body: "I graduate and do an extracurricular internship as a <strong>graphic designer at Mañez y Lozano</strong>, which turns into a permanent contract: catalogues, manuals, price lists and trade-fair stands.",
      },
      {
        year: "2022",
        title: "Design engineering master's",
        body: "I dive into methodology, market and user research and experimentation with the <strong>Master in Design Engineering at UPV</strong>.",
      },
      {
        year: "2024",
        title: "Master's Erasmus in Antwerp",
        body: "<strong>Six-month Erasmus in Antwerp</strong> to complete my master's thesis. Digital product starts to gain weight in how I approach a project.",
      },
      {
        year: "2024",
        title: "Working as an Engineer and UX/UI Design Master's",
        body: "I return to Mañez y Lozano as a <strong>digital and industrial product designer</strong>: official website, online shop, a 3D configurator and product design with all its communication. Meanwhile I take the <strong>Master in Web and App Design: UX/UI at LABASAD</strong>, which I finish in 2025.",
      },
      {
        year: "2026",
        title: "Now",
        body: "With the master's finished, I want to focus my career on <strong>digital product</strong>: I'm looking for a UX/UI design role where my engineering background and AI-driven way of creating add up.",
      },
    ],

    skillsLabel: "Toolkit",
    skillsTitle: "Skills and tools",
    skillsTitleEm: "",
    skills: [
      { name: "Claude Design", cat: "AI Design", lvl: 0.85 },
      { name: "Figma", cat: "UI Design", lvl: 0.9 },
      { name: "Claude Code", cat: "AI Prototyping", lvl: 0.85 },
      { name: "Magnific", cat: "Generative AI", lvl: 0.9 },
      { name: "Photoshop", cat: "Image", lvl: 0.9 },
      { name: "Illustrator", cat: "Vector", lvl: 0.95 },
      { name: "OrangeStorm Giga", cat: "3D Printing", lvl: 0.85 },
      { name: "Blender", cat: "3D Product", lvl: 0.85 },
      { name: "WordPress", cat: "Web / CMS", lvl: 0.85 },
      { name: "Elementor", cat: "Web / CMS", lvl: 0.85 },
      { name: "SolidWorks", cat: "3D Product", lvl: 0.9 },
      { name: "Elegoo Slicer", cat: "3D Printing", lvl: 0.85 },
      { name: "InDesign", cat: "Layout", lvl: 0.95 },
    ],

    contactLabel: "Contact",
    contactH: "Write me at",
    contactHEm: "",
    contactCta: "",
    blocks: [
      { l: "LinkedIn", v: "Iris García", href: "https://www.linkedin.com/in/iris-garc%C3%ADa-0304a4206/" },
      { l: "CV", v: "Download CV (PDF)", cv: true },
      { l: "Last updated", v: "September 2026" },
    ],

    cvPick: {
      title: "Download CV",
      close: "Close",
      kindL: "CV version",
      kinds: {
        designed: { n: "Designed", d: "One laid-out page, to read and share." },
        simple: { n: "Simple", d: "Plain text, for job portals and ATS." },
      },
      langL: "CV language",
      langs: { es: "Español", en: "English" },
      open: "Open",
      openLong: "Open the PDF in a new tab",
      download: "Download PDF",
    },

    footerL: "© 2026 Iris García",
    footerR: "Made with care",

    eggMsg: "You found the easter egg! ☕ Thanks for snooping around.",
    backToWork: "Back to work",
    nextProject: "Next project",
    cs: {
      challenge: "The challenge",
      challengeN: "01",
      process: "The process",
      processN: "02",
      solution: "The solution",
      solutionN: "03",
      results: "Results",
      resultsN: "04",
    },
  },
};

window.DICT = DICT;
