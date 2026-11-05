// «Sobre mí»: un jarrón recorre los ocho oficios (plano, modelado 3D, render, impresión 3D,
// fotografía, edición, cartel y web). Es un SVG dibujado aquí que avanza con el scroll: si la
// sección cabe en la pantalla se queda fija (.pinned, en sc-about.jsx) y cada oficio tiene su tramo;
// si no, avanza según el dibujo cruza la pantalla. Con «reducir movimiento» cada etapa sale ya
// terminada. Los textos llegan de i18n.js (aboutSum.anim). Estilos en sc-home.css (.sc-about-anim).

// AB_STAGE: lo que dura una etapa en el reloj de los movimientos de adorno (giro de la malla,
// vaivén de la boquilla…), que ahora también siguen al scroll
const AB_STAGE = 2600, AB_N = 8;
const abEsc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// silueta del jarrón vista un poco desde arriba (boca y base en elipse) y su perfil en plano
const AB_SIL = "M405 820A95 17 0 0 0 595 820C650 800 690 700 675 600C665 480 575 420 570 330C565 285 585 255 595 240A95 17 0 0 0 405 240C415 255 435 285 430 330C425 420 335 480 325 600C310 700 350 800 405 820Z";
const AB_PLAN = "M405 820L595 820C650 800 690 700 675 600C665 480 575 420 570 330C565 285 585 255 595 240L405 240C415 255 435 285 430 330C425 420 335 480 325 600C310 700 350 800 405 820Z";

function abSvg(a) {
  const e = abEsc, w = a.web;
  return `<svg viewBox="0 0 1000 1000" data-s="0" role="img" aria-label="${e(a.alt)}">
<defs>
<pattern id="ab-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#1F1A14" stroke-opacity=".07"/></pattern>
<marker id="ab-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse"><path d="M0 1.5L10 5L0 8.5Z" fill="#776A56"/></marker>
<linearGradient id="ab-glaze" x1="0" x2="1"><stop offset="0" stop-color="#2A0D3E"/><stop offset=".2" stop-color="#5A2183"/><stop offset=".38" stop-color="#AC79D1"/><stop offset=".56" stop-color="#7C2FA8"/><stop offset=".82" stop-color="#46195F"/><stop offset="1" stop-color="#240A35"/></linearGradient>
<linearGradient id="ab-pla" x1="0" x2="1"><stop offset="0" stop-color="#8FB02A"/><stop offset=".36" stop-color="#E6FB98"/><stop offset=".6" stop-color="#C6E85A"/><stop offset="1" stop-color="#7F9E1F"/></linearGradient>
<pattern id="ab-lay" width="20" height="9" patternUnits="userSpaceOnUse"><path d="M0 8.5H20" stroke="#1F1A14" stroke-opacity=".16"/></pattern>
<radialGradient id="ab-mouth" cx=".5" cy=".3" r=".75"><stop offset="0" stop-color="#14051F"/><stop offset="1" stop-color="#3B1453"/></radialGradient>
<linearGradient id="ab-studio" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F3EEE6"/><stop offset=".62" stop-color="#E9E1D3"/><stop offset="1" stop-color="#DCD2C1"/></linearGradient>
<filter id="ab-b8" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="8"/></filter>
<filter id="ab-b16" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="16"/></filter>
<filter id="ab-sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="14" stdDeviation="16" flood-color="#1F1A14" flood-opacity=".16"/></filter>
<filter id="ab-mute" color-interpolation-filters="sRGB"><feColorMatrix type="saturate" values=".08"/><feComponentTransfer><feFuncR type="linear" slope=".78" intercept=".08"/><feFuncG type="linear" slope=".78" intercept=".08"/><feFuncB type="linear" slope=".78" intercept=".08"/></feComponentTransfer></filter>
<path id="ab-sil" d="${AB_SIL}"/>
<g id="ab-vr">
<ellipse cx="500" cy="832" rx="165" ry="26" fill="#1F1A14" opacity=".3" filter="url(#ab-b16)"/>
<use href="#ab-sil" fill="url(#ab-glaze)"/>
<ellipse cx="500" cy="240" rx="95" ry="17" fill="url(#ab-mouth)"/>
<ellipse id="ab-spec" cx="440" cy="565" rx="15" ry="175" fill="#fff" opacity=".34" filter="url(#ab-b8)"/>
</g>
<g id="ab-vp"><use href="#ab-sil" fill="url(#ab-pla)"/><use href="#ab-sil" fill="url(#ab-lay)"/></g>
<mask id="ab-pm" maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="1000"><rect id="ab-prect" x="250" y="840" width="500" height="0" fill="#fff"/></mask>
<clipPath id="ab-photo"><rect x="270" y="190" width="460" height="660" rx="14"/></clipPath>
<clipPath id="ab-after"><rect id="ab-arect" x="270" y="190" width="0" height="660"/></clipPath>
</defs>

<g class="st st0">
<rect width="1000" height="1000" fill="url(#ab-grid)"/>
<line x1="500" y1="196" x2="500" y2="866" stroke="#7C2FA8" stroke-width="2" stroke-dasharray="28 8 4 8"/>
<path id="ab-draw" pathLength="1" stroke-dasharray="1" d="${AB_PLAN}" fill="none" stroke="#1F1A14" stroke-width="3" stroke-linejoin="round"/>
<g id="ab-dims">
<g fill="none" stroke="#776A56" stroke-width="1.6"><path d="M392 240H262M392 820H262"/><path d="M282 246V814" marker-start="url(#ab-arr)" marker-end="url(#ab-arr)"/><path d="M329 640H671" marker-start="url(#ab-arr)" marker-end="url(#ab-arr)"/></g>
<text class="dimt" x="262" y="530" transform="rotate(-90 262 530)" text-anchor="middle">160</text>
<text class="dimt" x="500" y="626" text-anchor="middle">Ø100</text>
</g>
<g id="ab-cj" class="cj">
<rect x="640" y="852" width="250" height="60" fill="none" stroke="#1F1A14" stroke-width="1.6"/>
<path d="M640 882H890M760 852V912" stroke="#1F1A14" stroke-width="1"/>
<text x="650" y="873">${e(a.plan[0])}</text><text x="770" y="873">${e(a.plan[1])}</text>
<text x="650" y="903">${e(a.plan[2])}</text><text x="770" y="903">${e(a.plan[3])}</text>
</g>
</g>

<g class="st st1">
<use href="#ab-sil" fill="none" stroke="#1F1A14" stroke-width="2.6"/>
<g id="ab-rings" fill="none" stroke="#7C2FA8" stroke-width="1.6"></g>
<g id="ab-mer" fill="none" stroke="#7C2FA8" stroke-width="1.6"></g>
<ellipse cx="500" cy="240" rx="95" ry="17" fill="none" stroke="#1F1A14" stroke-width="2.6"/>
</g>

<g class="st st2">
<circle cx="230" cy="250" r="90" fill="#FFF3C8" opacity=".75" filter="url(#ab-b16)"/>
<use href="#ab-vr"/>
</g>

<g class="st st3">
<rect x="285" y="838" width="430" height="12" rx="4" fill="#1F1A14"/>
<g mask="url(#ab-pm)"><use href="#ab-vp"/></g>
<g id="ab-noz" transform="translate(500 840)">
<rect x="-70" y="-122" width="140" height="16" rx="4" fill="#463C2E"/><rect x="-34" y="-106" width="68" height="52" rx="6" fill="#1F1A14"/>
<rect x="-22" y="-54" width="44" height="16" fill="#776A56"/><path d="M-12 -38H12L4 -8H-4Z" fill="#C9BDA6"/><circle cx="0" cy="-4" r="3.5" fill="#E6FB98"/>
</g>
</g>

<g class="st st4">
<rect x="170" y="160" width="660" height="720" rx="20" fill="url(#ab-studio)"/>
<use href="#ab-vr"/>
<path d="M210 250V200H260M790 250V200H740M210 790V840H260M790 790V840H740" fill="none" stroke="#1F1A14" stroke-width="3.2" stroke-linecap="round"/>
<rect id="ab-focus" x="440" y="460" width="120" height="120" fill="none" stroke="#7C2FA8" stroke-width="3"/>
<text class="exif" x="236" y="824">ƒ2.8   1/125</text>
<rect id="ab-flash" width="1000" height="1000" fill="#fff" opacity="0"/>
</g>

<g class="st st5">
<g transform="translate(-150 0)">
<g clip-path="url(#ab-photo)">
<g filter="url(#ab-mute)"><rect x="270" y="190" width="460" height="660" fill="url(#ab-studio)"/><use href="#ab-vr"/></g>
<g clip-path="url(#ab-after)"><rect x="270" y="190" width="460" height="660" fill="url(#ab-studio)"/><use href="#ab-vr"/></g>
</g>
<g id="ab-split" transform="translate(270 0)">
<line x1="0" y1="190" x2="0" y2="850" stroke="#fff" stroke-width="3"/><circle cx="0" cy="520" r="17" fill="#fff" stroke="#1F1A14" stroke-width="2"/>
<path d="M-5 513l-6 7 6 7M5 513l6 7-6 7" fill="none" stroke="#1F1A14" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
<rect x="618" y="352" width="282" height="312" rx="18" fill="#FFFEFA" filter="url(#ab-sh)"/>
<text class="stit" x="646" y="400">${e(a.adjust)}</text>
<g id="ab-sl"></g>
</g>

<g class="st st6">
<rect x="270" y="150" width="460" height="720" rx="6" fill="#FFFEFA" filter="url(#ab-sh)"/>
<rect x="300" y="180" width="400" height="380" fill="#F1E6F8"/>
<g transform="translate(500 372) scale(.5) translate(-500 -538)"><use href="#ab-vr"/></g>
<text class="big" x="296" y="664">${e(a.poster[0])}</text>
<text class="sub" x="300" y="704">${e(a.poster[1])}</text>
<g id="ab-sw"><circle cx="318" cy="800" r="17" fill="#7C2FA8"/><circle cx="364" cy="800" r="17" fill="#D4F36B"/><circle cx="410" cy="800" r="17" fill="#1F1A14"/><circle cx="456" cy="800" r="17" fill="#E9E1D3" stroke="#C9BDA6" stroke-width="1.5"/></g>
<path id="ab-bezp" d="M540 812C580 760 640 840 700 776" fill="none" stroke="#1F1A14" stroke-width="3"/>
<line id="ab-h1" x1="540" y1="812" x2="580" y2="760" stroke="#7C2FA8" stroke-width="1.6"/><line id="ab-h2" x1="700" y1="776" x2="640" y2="840" stroke="#7C2FA8" stroke-width="1.6"/>
<circle id="ab-k1" cx="580" cy="760" r="6" fill="#7C2FA8"/><circle id="ab-k2" cx="640" cy="840" r="6" fill="#7C2FA8"/>
<rect x="533" y="805" width="14" height="14" fill="#FFFEFA" stroke="#1F1A14" stroke-width="2"/><rect x="693" y="769" width="14" height="14" fill="#FFFEFA" stroke="#1F1A14" stroke-width="2"/>
</g>

<g class="st st7">
<rect x="110" y="190" width="780" height="600" rx="16" fill="#FFFEFA" filter="url(#ab-sh)"/>
<path d="M126 190H874A16 16 0 0 1 890 206V236H110V206A16 16 0 0 1 126 190Z" fill="#EFEBE4"/>
<circle cx="140" cy="213" r="6" fill="#D5CEC2"/><circle cx="160" cy="213" r="6" fill="#D5CEC2"/><circle cx="180" cy="213" r="6" fill="#D5CEC2"/>
<rect x="380" y="202" width="240" height="22" rx="11" fill="#FFFEFA"/>
<text class="url" x="500" y="218" text-anchor="middle">${e(w.url)}</text>
<text class="logo" x="150" y="292">${e(w.logo)}</text>
<text class="nav" x="846" y="290" text-anchor="end">${e(w.nav[0])}   ${e(w.nav[1])}   ${e(w.nav[2])}</text>
<text class="h" x="150" y="404">${e(w.title[0])}</text><text class="h" x="150" y="456">${e(w.title[1])}</text>
<rect x="150" y="484" width="280" height="10" rx="5" fill="#DED5C4"/><rect x="150" y="506" width="240" height="10" rx="5" fill="#DED5C4"/><rect x="150" y="528" width="262" height="10" rx="5" fill="#DED5C4"/>
<g id="ab-btn"><rect x="150" y="572" width="170" height="52" rx="26" fill="#7C2FA8"/><text class="btn" x="235" y="605" text-anchor="middle">${e(w.cta)}</text></g>
<rect x="480" y="318" width="370" height="438" rx="12" fill="#F1E6F8"/>
<g transform="translate(665 540) scale(.58) translate(-500 -538)"><use href="#ab-vr"/></g>
<path id="ab-cur" d="M0 0V36L10 27L17 43L24 40L17 24H30Z" fill="#1F1A14" stroke="#fff" stroke-width="2.5" stroke-linejoin="round" transform="translate(760 700)"/>
</g>

<g aria-hidden="true">
<text id="ab-name" class="cap-t" x="100" y="104">${e(a.steps[0])}</text>
<g id="ab-ticks"></g>
</g>
</svg>`;
}

// pone en marcha la animación dentro de root; devuelve la función que la para
function abStart(root, a) {
  const svg = root.querySelector("svg"), $ = id => root.querySelector("#ab-" + id);
  const NS = "http://www.w3.org/2000/svg";
  const mk = (tag, attrs, parent) => { const n = document.createElementNS(NS, tag); for (const k in attrs) n.setAttribute(k, attrs[k]); parent.appendChild(n); return n; };
  const ease = x => x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  const cl = (v, p, q) => Math.min(1, Math.max(0, (v - p) / (q - p)));
  const REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // radio del jarrón a cada altura, de las mismas curvas que la silueta
  const segs = [[[595, 820], [650, 800], [690, 700], [675, 600]], [[675, 600], [665, 480], [575, 420], [570, 330]], [[570, 330], [565, 285], [585, 255], [595, 240]]];
  const prof = [];
  segs.forEach(s => { for (let i = 0; i <= 40; i++) { const t = i / 40, m = 1 - t, b = [m * m * m, 3 * m * m * t, 3 * m * t * t, t * t * t]; prof.push([b.reduce((v, c, j) => v + c * s[j][0], 0) - 500, b.reduce((v, c, j) => v + c * s[j][1], 0)]); } });
  prof.sort((p, q) => q[1] - p[1]);
  const R = y => { for (let i = 1; i < prof.length; i++) { const [ra, ya] = prof[i - 1], [rb, yb] = prof[i]; if (y <= ya && y >= yb) return ra + (rb - ra) * ((ya - y) / ((ya - yb) || 1)); } return prof[prof.length - 1][0]; };

  // malla: anillos (la mitad de detrás, tenue) y meridianos que giran
  const K = .18;
  [792, 736, 680, 624, 568, 512, 456, 400, 350, 300].forEach(y => {
    const r = R(y), ry = r * K;
    mk("path", { d: `M${500 - r} ${y}A${r} ${ry} 0 0 0 ${500 + r} ${y}` }, $("rings"));
    mk("path", { d: `M${500 - r} ${y}A${r} ${ry} 0 0 1 ${500 + r} ${y}`, class: "back" }, $("rings"));
  });
  const ys = []; for (let y = 820; y >= 240; y -= 10) ys.push(y);
  const mer = Array.from({ length: 12 }, () => mk("path", {}, $("mer")));
  const drawMer = phi => mer.forEach((p, j) => {
    const th = phi + j * Math.PI / 6, s = Math.sin(th), c = Math.cos(th);
    p.setAttribute("d", "M" + ys.map(y => { const r = R(y); return (500 + r * s).toFixed(1) + " " + (y + K * r * c).toFixed(1); }).join("L"));
    p.setAttribute("class", c < 0 ? "back" : "");
  });
  drawMer(.3);

  // ajustes de la edición
  const knobs = a.sliders.map((lbl, i) => {
    const y = 466 + i * 72, [p, q] = [[700, 790], [716, 826], [690, 836]][i];
    mk("text", { class: "slbl", x: 646, y: y - 18 }, $("sl")).textContent = lbl;
    mk("line", { x1: 646, y1: y, x2: 872, y2: y, stroke: "#DED5C4", "stroke-width": 5, "stroke-linecap": "round" }, $("sl"));
    return [mk("line", { x1: 646, y1: y, x2: p, y2: y, stroke: "#7C2FA8", "stroke-width": 5, "stroke-linecap": "round" }, $("sl")),
      mk("circle", { cx: p, cy: y, r: 11, fill: "#FFFEFA", stroke: "#1F1A14", "stroke-width": 2.4 }, $("sl")), p, q];
  });
  const ticks = Array.from({ length: AB_N }, (_, i) => mk("rect", { class: "tick", x: 100 + i * 30, y: 124, width: 24, height: 5, rx: 2.5 }, $("ticks")));
  const sw = [...$("sw").children];

  // avance (0-1) que marca el scroll: con la sección fija, lo recorrido de ella (empieza un poco
  // antes de que llegue arriba, para que el plano se vaya dibujando al entrar); si no, cuánto ha
  // cruzado el dibujo la pantalla
  const sec = root.closest(".sc-about") || root;
  // en el móvil solo se fija el dibujo, dentro de su caja alta (.sc-about-pin, en sc-home.css)
  const pinBox = root.closest(".sc-about-pin"), stick = pinBox && pinBox.firstElementChild;
  const target = () => {
    const vh = window.innerHeight;
    if (sec.classList.contains("pinned")) { const r = sec.getBoundingClientRect(); return cl(vh * .4 - r.top, 0, r.height - vh + vh * .4); }
    const cs = stick && getComputedStyle(stick);
    if (cs && cs.position === "sticky") {
      const r = pinBox.getBoundingClientRect(), top = parseFloat(cs.top) || 0;
      return cl(top + vh * .3 - r.top, 0, r.height - stick.offsetHeight + vh * .3);
    }
    const r = root.getBoundingClientRect(); return cl(vh * .9 - r.top, 0, vh * .9 + r.height * .3);
  };
  // el avance que se pinta va detrás del scroll con suavidad, para que no salte entre fotogramas
  let P = target(), prev = 0, raf = 0, vis = false, last = -1;
  function frame(now) {
    raf = 0;
    const dt = prev ? Math.min(100, now - prev) : 16.7; prev = now;
    const goal = target();
    P = REDUCE ? goal : P + (goal - P) * (1 - Math.exp(-dt / 140));
    if (Math.abs(goal - P) < 2e-4) P = goal;
    const x = Math.min(AB_N - 1e-6, P * AB_N), s = Math.floor(x), u = REDUCE ? .999 : x - s;
    const acc = x * AB_STAGE;
    if (s !== last) {
      svg.dataset.s = s; $("name").textContent = a.steps[s];
      ticks.forEach((k, i) => k.classList.toggle("on", i <= s)); last = s;
    }
    if (s === 0) { $("draw").style.strokeDashoffset = (1 - ease(cl(u, .02, .55))).toFixed(4); $("dims").style.opacity = cl(u, .5, .64); $("cj").style.opacity = cl(u, .62, .76); }
    if (!REDUCE && (s === 1 || s === 0 && u > .85)) drawMer(acc / 1000 * .9);
    if (s === 2) $("spec").setAttribute("cx", (426 + 52 * ease(u)).toFixed(1));
    if (s === 3) {
      const n = Math.floor(cl(u, .03, .9) * 67), y = 830 - n * 9, r = Math.max(16, R(Math.max(242, y)) - 10);
      $("prect").setAttribute("y", y); $("prect").setAttribute("height", 852 - y);
      $("noz").setAttribute("transform", `translate(${(500 + (REDUCE ? 0 : r * Math.sin(acc / 95))).toFixed(1)} ${y})`);
    }
    if (s === 4) {
      $("focus").setAttribute("transform", `translate(500 520) scale(${(1.6 - .6 * ease(cl(u, 0, .45))).toFixed(3)}) translate(-500 -520)`);
      $("flash").setAttribute("opacity", u < .6 ? 0 : Math.max(0, .9 - (u - .6) * 4.5).toFixed(3));
    }
    if (s === 5) {
      const k = ease(cl(u, .08, .72));
      $("arect").setAttribute("width", (460 * k).toFixed(1)); $("split").setAttribute("transform", `translate(${(270 + 460 * k).toFixed(1)} 0)`);
      knobs.forEach(([fill, knob, p, q]) => { const x = (p + (q - p) * k).toFixed(1); fill.setAttribute("x2", x); knob.setAttribute("cx", x); });
    }
    if (s === 6) {
      sw.forEach((c, i) => { const p = ease(cl(u, .12 + i * .07, .24 + i * .07)), cx = +c.getAttribute("cx"); c.setAttribute("transform", `translate(${cx} 800) scale(${p.toFixed(3)}) translate(${-cx} -800)`); });
      const wv = REDUCE ? 0 : Math.sin(acc / 420), c1 = [580 + 18 * wv, 760 - 14 * wv], c2 = [640 - 14 * wv, 840 + 10 * wv];
      $("bezp").setAttribute("d", `M540 812C${c1} ${c2} 700 776`);
      $("h1").setAttribute("x2", c1[0]); $("h1").setAttribute("y2", c1[1]); $("h2").setAttribute("x2", c2[0]); $("h2").setAttribute("y2", c2[1]);
      $("k1").setAttribute("cx", c1[0]); $("k1").setAttribute("cy", c1[1]); $("k2").setAttribute("cx", c2[0]); $("k2").setAttribute("cy", c2[1]);
    }
    if (s === 7) {
      const m = ease(cl(u, .12, .58));
      $("cur").setAttribute("transform", `translate(${(760 - 522 * m).toFixed(1)} ${(700 - 100 * m).toFixed(1)})`);
      $("btn").setAttribute("transform", `translate(235 598) scale(${u > .62 && u < .72 ? .94 : 1}) translate(-235 -598)`);
    }
    // sigue pintando mientras no alcance al scroll; al pararse el scroll, se para
    if (P !== goal && vis && !document.hidden) raf = requestAnimationFrame(frame);
    else prev = 0;
  }
  const go = () => { if (!raf && vis && !document.hidden) raf = requestAnimationFrame(frame); };
  const io = new IntersectionObserver(([en]) => { vis = en.isIntersecting; go(); }, { rootMargin: "80px" });
  io.observe(root);
  window.addEventListener("scroll", go, { passive: true });
  window.addEventListener("resize", go);
  document.addEventListener("visibilitychange", go);
  frame(0);
  return () => {
    io.disconnect(); cancelAnimationFrame(raf);
    window.removeEventListener("scroll", go); window.removeEventListener("resize", go); document.removeEventListener("visibilitychange", go);
  };
}

function ScAboutAnim({ a }) {
  const ref = React.useRef(null);
  const markup = React.useMemo(() => abSvg(a), [a]);
  React.useEffect(() => abStart(ref.current, a), [markup]);
  return React.createElement("div", { className: "sc-about-anim", ref, dangerouslySetInnerHTML: { __html: markup } });
}
Object.assign(window, { ScAboutAnim });
