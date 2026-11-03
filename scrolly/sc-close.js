// «Habilidades y herramientas»: el bloque activo lo marca el scroll, sin pasar solo. Si el contenido
// cabe en la pantalla, la sección se queda fija (.pinned) mientras se pasa de un bloque a otro; si no
// cabe (móviles bajos), el bloque cambia según la sección cruza la pantalla. Al pulsar un bloque, el
// scroll baja hasta su tramo. Los programas que usa el bloque activo se resaltan
// logo de cada programa (assets/herramientas/), encima de su nombre y su categoría; los alargados van
// más bajos para que pesen igual
const SK_LOGOS = { "Figma": "figma", "Claude Code": "claude", "Magnific": "magnific", "Photoshop": "photoshop", "Illustrator": "illustrator", "InDesign": "indesign",
  "Blender": "blender", "SolidWorks": "solidworks", "WordPress": "wordpress", "Framer": "framer", "Elegoo Slicer": "elegoo" };
const SK_WIDE = ["Magnific", "SolidWorks"];
function ScToolkit({ t: a }) {
  const sec = React.useRef(null), box = React.useRef(null), t = a.can, N = t.length;
  const [e, setE] = React.useState(0), [o, setO] = React.useState(null), [pin, setPin] = React.useState(true);
  React.useEffect(() => {
    const s = sec.current, b = box.current;
    if (!s || !b) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = s.getBoundingClientRect(), vh = window.innerHeight;
      const p = s.classList.contains("pinned") ? -r.top / Math.max(1, r.height - vh) : (vh * .55 - r.top) / Math.max(1, r.height);
      setE(Math.min(N - 1, Math.max(0, Math.floor(Math.min(1, Math.max(0, p)) * N))));
    };
    const onScroll = () => { raf || (raf = requestAnimationFrame(update)); };
    // cabe si el contenido y el aire para la barra de arriba entran en la pantalla
    const onResize = () => { setPin(b.offsetHeight + 160 <= window.innerHeight); onScroll(); };
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); cancelAnimationFrame(raf); };
  }, [N]);
  const go = c => {
    const s = sec.current;
    if (!s) return;
    const r = s.getBoundingClientRect(), vh = window.innerHeight, top = r.top + window.scrollY;
    const y = s.classList.contains("pinned") ? top + (c + .5) / N * (r.height - vh) : top + (c + .5) / N * r.height - vh * .55;
    window.scrollTo({ top: y, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };
  const u = t[e].tools;
  return React.createElement("section", { className: `sc-toolkit${pin ? " pinned" : ""}`, ref: sec, style: { "--n": N }, "data-chapter": "4", "data-screen-label": "05 Herramientas" },
    React.createElement("div", { className: "sc-toolkit-in" },
      React.createElement("div", { className: "sc-toolkit-box", ref: box },
        React.createElement("h2", { className: "sc-h2 sc-rev" }, a.skillsTitle, a.skillsTitleEm ? React.createElement("em", null, " ", a.skillsTitleEm) : null),
        React.createElement("div", { className: "sc-skills sc-rev" },
          React.createElement("div", { className: "sc-skills-groups", role: "group", "aria-label": a.skillsTitle },
            t.map((s, c) => React.createElement("button", {
              key: s.n, type: "button", "data-cursor": "hover", "aria-pressed": e === c,
              className: `sc-skill${e === c ? " on" : ""}${o && s.tools.includes(o) ? " uses" : ""}`, onClick: () => go(c)
            }, React.createElement("span", { className: "n" }, s.n)))),
          React.createElement("ul", { className: "sc-skills-tools filtering" },
            a.skills.map(s => React.createElement("li", {
              key: s.name, "data-cursor": "hover", className: `sc-tool${u.includes(s.name) ? " on" : ""}${o === s.name ? " here" : ""}`,
              onMouseEnter: () => setO(s.name), onMouseLeave: () => setO(null)
            }, SK_LOGOS[s.name]
              ? React.createElement("span", { className: "lgb" }, React.createElement("img", { className: "lg" + (SK_WIDE.includes(s.name) ? " wide" : ""), src: "assets/herramientas/" + SK_LOGOS[s.name] + ".svg", alt: "", decoding: "async" }))
              : null,
              React.createElement("span", { className: "n" }, s.name),
              React.createElement("span", { className: "c" }, s.cat.toLowerCase()))))))));
}
function ScContact({t:a,c:n,onCv:t}){return React.createElement("section",{className:"sc-contact","data-chapter":"5","data-theme":"dark","data-screen-label":"06 Contacto"},React.createElement("div",{className:"sc-rev"}),React.createElement("h2",{className:"sc-contact-h sc-rev",style:{marginTop:"clamp(14px,2vw,26px)"}},React.createElement("span",null,n.contactH1),n.contactH2?React.createElement("em",null," ",n.contactH2):null),React.createElement("a",{className:"sc-contact-mail sc-rev",href:"mailto:irisgarciacarrion7@gmail.com","data-cursor":"hover"},"irisgarciacarrion7@gmail.com"),React.createElement("div",{className:"sc-contact-grid sc-rev"},a.blocks.map((e,r)=>{if(e.cv)return React.createElement("button",{key:r,type:"button",className:"sc-contact-block","aria-haspopup":"dialog",onClick:t},React.createElement("span",{className:"l"},e.l.toLowerCase()),React.createElement("span",{className:"v"},e.v));const o=e.href?"a":"div";return React.createElement(o,{key:r,className:"sc-contact-block",href:e.href,target:e.href&&e.href.startsWith("http")?"_blank":void 0,rel:"noreferrer","data-cursor":e.href?"hover":void 0},React.createElement("span",{className:"l"},e.l.toLowerCase()),React.createElement("span",{className:"v"},e.v))})),React.createElement("footer",{className:"sc-footer"},React.createElement("span",null,a.footerL),React.createElement("span",null,a.footerR)))}Object.assign(window,{ScToolkit,ScContact});
