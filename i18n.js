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
      // las dos webs publicadas de Mañez y Lozano: van primero, enlazan fuera y
      // en el hueco del año llevan el dominio. Portadas en sc-copy.js, covers.
      { num: "01", name: "Mañez y Lozano", nameEm: "Web oficial", tags: ["Web corporativa", "WordPress", "Claude Code"], year: "manezylozano.com", href: "https://manezylozano.com/", external: true, coverFit: "cover", coverPos: "top" },
      { num: "02", name: "Horizonte", nameEm: "Aventura", tags: ["App móvil para Android", "UX/UI", "Turismo activo"], year: "2025", href: "projects/horizonte.html", coverFit: "cover",
        // portada en bucle (la de Figma, reconstruida en sc-hz-loop.jsx)
        coverLoop: { sub: "App de aventuras con impacto local", img: { photo: "projects/assets/horizonte/foto-escalada.webp", back: "projects/assets/horizonte/pantalla-explorar.webp", front: "projects/assets/horizonte/pantalla-ganar-oscuro.webp", done: "projects/assets/horizonte/pantalla-mision-oscuro.webp" } } },
      { num: "03", name: "Viña Rock", nameEm: "Festival", tags: ["Investigación UX", "Test de usabilidad", "Arquitectura de la información"], year: "2025", href: "projects/vinarock.html", coverFit: "cover",
        // portada en bucle: la home y la compra del prototipo v2 sobre la foto del festival (sc-vr-loop.jsx)
        coverVr: { sub: "Rediseño UX de la web del festival", ticker: ["1-3 mayo 2025", "Villarrobledo, Albacete", "Viña Rock"], img: { photo: "projects/assets/vinarock/foto-festival.webp", logo: "projects/assets/vinarock/logo.svg", desk: "projects/assets/vinarock/v2/loop/d-home.webp", phone: ["projects/assets/vinarock/v2/loop/m-home.webp", "projects/assets/vinarock/v2/loop/m-compra1.webp", "projects/assets/vinarock/v2/loop/m-compra2.webp", "projects/assets/vinarock/v2/loop/m-compra3.webp", "projects/assets/vinarock/v2/loop/m-confirmacion.webp"] } } },
      { num: "04", name: "REVERB", nameEm: "Mujeres en la música", tags: ["Web responsive", "Diseño inclusivo", "Sistema de diseño"], year: "2025", href: "projects/reverb.html", coverFit: "cover",
        // portada en bucle: el shader térmico del prototipo con componentes del UI kit encima (sc-rv-loop.jsx)
        coverRv: { ui: { tag: "Técnica de sonido", name: "Laura", next: "Próxima voz en", real: "La realidad · 2024", song: "La fiesta", artist: "shego" }, img: { logo: "projects/assets/reverb/logo.svg", laura: "projects/assets/reverb/v2/laura.webp", shego: "projects/assets/reverb/v2/shego.webp" } } },
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

    // Sobre mí: quién soy en un párrafo y qué sé hacer. El detalle (fechas,
    // puestos, titulaciones) está en el CV.
    aboutSum: {
      title: "Quién soy",
      // render en bucle hecho en Blender (blender/vista-explosionada.py). Con null no
      // hay hueco y el texto ocupa todo el ancho.
      media: {
        video: "assets/about/vista-explosionada.mp4",
        poster: "assets/about/vista-explosionada.webp",
        alt: "Una web en vista explosionada: sus capas se separan como las piezas de un producto y vuelven a encajar."
      },
      body: "Llevo cinco años trabajando como ingeniera en diseño industrial en una empresa de fabricación de maquinaria agrícola. Allí he llevado el diseño gráfico y el diseño de producto. Mis últimos proyectos se han centrado en la parte web: diseñé la web oficial y la tienda de repuestos, usando WordPress y Claude Code, la herramienta que me está permitiendo hacer realidad cualquier proyecto digital.",
      // cierre de la presentación: va en su propia línea, en tinta
      close: "Ahora, busco un puesto de diseño de producto digital en el que usar la IA con criterio: yo planteo propuestas y tomo decisiones, ella ejecuta.",
    },

    // Habilidades y herramientas: cada disciplina enciende sus herramientas en la lista de
    // `skills` (por nombre). icon: modelado, render, web o grafico (sc-close.jsx).
    skillsLabel: "Caja de herramientas",
    skillsTitle: "Habilidades y herramientas",
    skillsTitleEm: "",
    can: [
      { icon: "web", n: "Diseño web", v: "Diseño de interfaces y experiencia de usuario. Desarrollo a través de Claude Code.", tools: ["Figma", "WordPress", "Elementor", "Framer", "Claude Code"] },
      { icon: "modelado", n: "Modelado 3D", v: "Diseño de producto industrial (CAD) e impresión 3D.", tools: ["SolidWorks", "Blender", "OrangeStorm Giga", "Elegoo Slicer"] },
      { icon: "render", n: "Render y generación de imagen", v: "Renders de producto a partir de un 3D y generación de imágenes con IA de todo tipo.", tools: ["Blender", "Magnific", "Photoshop"] },
      { icon: "grafico", n: "Diseño gráfico y maquetación", v: "Creación de material gráfico tanto digital como para impresión.", tools: ["Illustrator", "Photoshop", "InDesign"] }
    ],
    skills: [
      { name: "Figma", cat: "Diseño UI", lvl: 0.9 },
      { name: "Claude Code", cat: "Prototipado con IA", lvl: 0.85 },
      { name: "Magnific", cat: "IA Generativa", lvl: 0.9 },
      { name: "Photoshop", cat: "Imagen", lvl: 0.9 },
      { name: "Illustrator", cat: "Vectorial", lvl: 0.95 },
      { name: "OrangeStorm Giga", cat: "Impresión 3D", lvl: 0.85 },
      { name: "Blender", cat: "Producto 3D", lvl: 0.85 },
      { name: "WordPress", cat: "Web / CMS", lvl: 0.85 },
      { name: "Elementor", cat: "Web / CMS", lvl: 0.85 },
      { name: "Framer", cat: "Web sin código", lvl: 0.85 },
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
      { num: "01", name: "Mañez y Lozano", nameEm: "Official website", tags: ["Corporate website", "WordPress", "Claude Code"], year: "manezylozano.com", href: "https://manezylozano.com/", external: true, coverFit: "cover", coverPos: "top" },
      { num: "02", name: "Horizonte", nameEm: "Adventure", tags: ["Android mobile app", "UX/UI", "Adventure tourism"], year: "2025", href: "projects/horizonte.html", coverFit: "cover",
        coverLoop: { sub: "Adventure app with local impact", img: { photo: "projects/assets/horizonte/foto-escalada.webp", back: "projects/assets/horizonte/pantalla-explorar.webp", front: "projects/assets/horizonte/pantalla-ganar-oscuro.webp", done: "projects/assets/horizonte/pantalla-mision-oscuro.webp" } } },
      { num: "03", name: "Viña Rock", nameEm: "Festival", tags: ["UX research", "Usability testing", "Information architecture"], year: "2025", href: "projects/vinarock.html", coverFit: "cover",
        coverVr: { sub: "UX redesign of the festival's website", ticker: ["1-3 May 2025", "Villarrobledo, Albacete", "Viña Rock"], img: { photo: "projects/assets/vinarock/foto-festival.webp", logo: "projects/assets/vinarock/logo.svg", desk: "projects/assets/vinarock/v2/loop/d-home.webp", phone: ["projects/assets/vinarock/v2/loop/m-home.webp", "projects/assets/vinarock/v2/loop/m-compra1.webp", "projects/assets/vinarock/v2/loop/m-compra2.webp", "projects/assets/vinarock/v2/loop/m-compra3.webp", "projects/assets/vinarock/v2/loop/m-confirmacion.webp"] } } },
      { num: "04", name: "REVERB", nameEm: "Women in music", tags: ["Responsive web", "Inclusive design", "Design system"], year: "2025", href: "projects/reverb.html", coverFit: "cover",
        coverRv: { ui: { tag: "Sound technician", name: "Laura", next: "Next voice in", real: "The reality · 2024", song: "La fiesta", artist: "shego" }, img: { logo: "projects/assets/reverb/logo.svg", laura: "projects/assets/reverb/v2/laura.webp", shego: "projects/assets/reverb/v2/shego.webp" } } },
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

    aboutSum: {
      title: "Who I am",
      media: {
        video: "assets/about/vista-explosionada.mp4",
        poster: "assets/about/vista-explosionada.webp",
        alt: "A website in exploded view: its layers come apart like the parts of a product and click back together."
      },
      body: "I've spent five years working as an industrial design engineer at a company that manufactures agricultural machinery. There I've handled both graphic design and product design. My latest projects have focused on the web: I designed the official website and the spare-parts shop, using WordPress and Claude Code, the tool that's letting me bring any digital project to life.",
      close: "Now I'm looking for a digital product design role where I can use AI with judgement: I put forward proposals and make the decisions, it executes.",
    },

    skillsLabel: "Toolkit",
    skillsTitle: "Skills and tools",
    skillsTitleEm: "",
    can: [
      { icon: "web", n: "Web design", v: "Interface and user experience design. Development with Claude Code.", tools: ["Figma", "WordPress", "Elementor", "Framer", "Claude Code"] },
      { icon: "modelado", n: "3D modelling", v: "Industrial product design (CAD) and 3D printing.", tools: ["SolidWorks", "Blender", "OrangeStorm Giga", "Elegoo Slicer"] },
      { icon: "render", n: "Render and image generation", v: "Product renders from 3D models and AI image generation of all kinds.", tools: ["Blender", "Magnific", "Photoshop"] },
      { icon: "grafico", n: "Graphic design and layout", v: "Graphic material for both digital and print.", tools: ["Illustrator", "Photoshop", "InDesign"] }
    ],
    skills: [
      { name: "Figma", cat: "UI Design", lvl: 0.9 },
      { name: "Claude Code", cat: "AI Prototyping", lvl: 0.85 },
      { name: "Magnific", cat: "Generative AI", lvl: 0.9 },
      { name: "Photoshop", cat: "Image", lvl: 0.9 },
      { name: "Illustrator", cat: "Vector", lvl: 0.95 },
      { name: "OrangeStorm Giga", cat: "3D Printing", lvl: 0.85 },
      { name: "Blender", cat: "3D Product", lvl: 0.85 },
      { name: "WordPress", cat: "Web / CMS", lvl: 0.85 },
      { name: "Elementor", cat: "Web / CMS", lvl: 0.85 },
      { name: "Framer", cat: "No-code web", lvl: 0.85 },
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
