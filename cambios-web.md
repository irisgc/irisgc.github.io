# Cambios en la web hechos fuera del proyecto de origen

Se hacen sobre una copia local de la web publicada (carpeta `web/`). Esa copia parte de la «Publicación del 30/10/2026, 22:54» (commit `c30fd34` de irisgc/irisgc.github.io).

Antes de la próxima publicación desde el proyecto de origen hay que pasar estos cambios a ese proyecto. Si no, esa publicación los deshace.

## Cómo seguir en casa

Todo está en GitHub, en la rama `cambios-2026-11-03` del repositorio `irisgc/irisgc.github.io`, junto a este archivo. La web publicada (rama `main`) no ha cambiado.

1. En el ordenador de casa, abre el proyecto de origen con Claude Code y pídele algo así:
   > Trae la rama `cambios-2026-11-03` de github.com/irisgc/irisgc.github.io y pasa al proyecto los cambios que explica su `cambios-web.md`, de uno en uno. Copia también los archivos nuevos o sustituidos: `assets/herramientas/*.svg`, `projects/assets/horizonte/portada-horizonte.webp`, `projects/assets/configurador/capa.webp` y `scrolly/sc-about-anim.js`.
2. Mira la web en local y publícala como siempre. La publicación rehace la rama `main`, y la web se actualiza.
3. No fusiones esta rama con `main`. Publicaría la web sin pasar por el proyecto de origen, y la siguiente publicación lo desharía. Además, este archivo quedaría a la vista en la web. Cuando ya esté publicado, puedes borrar la rama.

## 03/11/2026 · «Enfoque»: título, entradilla y aviso

1. **Título:** «Mi sistema de diseño.» pasa a «Lo que hago.». En inglés, «My design system.» pasa a «What I do.».
2. **Entradilla:** se quita la frase «Cinco años como ingeniera en diseño industrial y diseñadora gráfica en una fábrica de maquinaria agrícola.». Queda solo «Así aplico mis conocimientos y experiencia en distintas ramas del diseño.». En inglés queda «This is how I apply my knowledge and experience across different fields of design.».
3. **Aviso bajo la pila:** se quita entero, en los dos idiomas. Era «Lo que ves es solo la capa de arriba / desliza para desmontar ↓».

Qué tocar en el proyecto de origen:

- **`sc-copy.js`**, en `enfoque`, tanto en `es` como en `en`:
  - `title`: el texto nuevo.
  - `sub`: pasa de lista de dos frases a un solo texto.
  - `hint`: se borra la línea.
- **`sc-enfoque.jsx`**:
  - La entradilla se pinta como `<p className="pa-sub">{t.sub}</p>`, sin el `<br>`.
  - Se borra el `<p className="pa-hint">…</p>`.
  - En el código de scroll se borra el `querySelector('.pa-hint')` y las dos líneas que le cambian la opacidad y el `translate`. Ojo: se usaban sin comprobar que existiera, así que si se quita solo el elemento, el despiece se rompe.
- **`sc-home.css`**:
  - Se borran `.pa-hint{…}` y `.pa-hint span{…}`.
  - En `@media (max-width:880px)`, `.iso-wrap,.pa-hint{left:50%}` pasa a `.iso-wrap{left:50%}`.
  - En la regla de pantallas grandes se quita `.pa-hint` de `.bom .t small,.bom .p,.bal,.pa-hint,.cajetin .v{…}`.

Archivos cambiados en la copia local: `scrolly/sc-copy.js`, `scrolly/sc-enfoque.js` (compilado) y `scrolly/sc-home.css`.

## 03/11/2026 · Tabla de «Enfoque»: fila de Horizonte

- **Detalle de la fila** (el texto pequeño que sale al encenderse): «App Android con modo claro y oscuro y un prototipo que se puede probar.» pasa a «Diseño App para Android con prototipo navegable.». En inglés, «Android app with light and dark modes and a prototype you can try.» pasa a «Android app design with an interactive prototype.».
- **El título de la fila no cambia:** sigue «Diseño App, interfaz y prototipo».
- **Dónde:** `sc-copy.js`, `enfoque.rows`, la fila `i: 1`, campo `d`, en `es` y en `en`.

## 03/11/2026 · Tabla de «Enfoque»: fila de Viña Rock

- **Detalle de la fila:** «Auditoría heurística, test con 7 personas y compra en tres pasos sin registro.» pasa a «Mejora de la experiencia de usuario para el uso de la web del festival.». En inglés, «Heuristic audit, testing with 7 people and a three-step checkout with no sign-up.» pasa a «Improving the user experience of the festival's website.».
- **Dónde:** `sc-copy.js`, `enfoque.rows`, la fila `i: 2`, campo `d`, en `es` y en `en`.

## 03/11/2026 · Tabla de «Enfoque»: fila de REVERB

- **Detalle de la fila:** «Un concepto convertido en reglas de interfaz y componentes con variantes.» pasa a «Concepto y prototipo navegable de una web destinada a la visibilización.». En inglés, «A concept turned into interface rules and components with variants.» pasa a «Concept and interactive prototype of a website aimed at raising visibility.».
- **Dónde:** `sc-copy.js`, `enfoque.rows`, la fila `i: 3`, campo `d`, en `es` y en `en`.

## 03/11/2026 · Capa «Modelado y render» del despiece: la máquina montada

- **Imagen nueva:** antes se veía la máquina con los conjuntos separados (fotograma de 5,5 s), que llegaba casi a los bordes de la capa. Ahora es la máquina montada, centrada, con aire alrededor.
- **Cómo está hecha:** es el primer fotograma del render del configurador (`explosionados-web/eima_feria/video/fotogramas/portfolio_final/f00000.png`, el mismo del póster del vídeo). Va sobre una lámina de 1000 × 700 (10:7, la proporción de la capa) con el mismo crema #FBFAF5. La máquina ocupa el 66 % del ancho, con márgenes del 17 % a los lados y del 16 % arriba y abajo. Se guarda en WebP con calidad 86 (32 KB).
- **Dónde:** sustituye `projects/assets/configurador/capa.webp`. El nombre no cambia, así que no hay que tocar código. El archivo nuevo está en la copia local, `web/projects/assets/configurador/capa.webp`.

## 03/11/2026 · «Proyectos»: todas las tarjetas con el mismo aspecto

**Lo que cambia:**

- **Tarjeta de Mañez y Lozano.** Deja el fondo oscuro y pasa a ser como la de los casos de estudio: fondo de papel, borde fino y esquinas de 24 px (antes eran 28). Textos y etiquetas pasan a tinta, y el botón «Visitar web ↗» pasa de blanco a tinta, con morado al pasar el ratón. La barra de progreso del vídeo pasa a gris oscuro translúcido.
- **Tarjeta del configurador 3D.** Pierde la cuadrícula y el relleno de 16 px. El vídeo ya no va en un marco propio con borde y esquinas: llena su mitad de la tarjeta de borde a borde, con `cover` como el de Mañez y Lozano. Título y texto tienen el mismo tamaño y relleno que en la tarjeta de Mañez y Lozano.
- **Tarjetas de los casos.** No cambian.

**Qué tocar en el proyecto de origen:** solo `sc-home.css`, sin cambios en los componentes.

- Una regla común `.live,.case,.phys{border-radius:24px;overflow:hidden;background:var(--paper);border:1px solid var(--line);color:var(--ink)}`. Esa parte sale de `.case`.
- Otra común `.live,.phys{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,1fr)}`.
- `.live-media,.phys-media{display:flex;flex-direction:column;min-width:0;background:var(--bg-2)}`.
- `.lv-player`: fondo `var(--bg-2)`.
- `.lv-bar`: fondo `rgba(31,26,20,.14)`.
- `.live-info,.phys-info` comparten regla, igual que `.live h4,.phys-info h4` y `.live-sub,.phys-info p` (con color `var(--ink-soft)`).
- `.btn-live`: fondo `var(--ink)` y texto blanco.
- Se borran:
  - `.live .pieces span{…}`;
  - la regla `.phys{…}` con la cuadrícula;
  - el `border-radius` y el `border` de `.phys-player`;
  - `.phys-player .lv-video{object-fit:contain}`;
  - las reglas propias de `.phys-info`.
- En el bloque de pantallas grandes, `.phys-info h4` va con `.pp-head h3,.live h4`, y `.phys-info p` va con `.live-sub`.

**Nota:** la mitad del vídeo de Mañez y Lozano se sigue viendo oscura porque el propio vídeo lo es (fondos negros y granates). Es contenido, no la tarjeta.

**Cursor:** con la tarjeta clara, la marca `data-surface="dark"` (la que pone en claro el anillo del cursor) pasa del `<article className="live">` al `<div className="live-media">`, que es lo único oscuro. Si no, el anillo se pierde sobre el papel. Es un cambio en `sc-proyectos.jsx`.

## 03/11/2026 · «Casos de estudio»: sin subtítulo

- **Qué se quita:** la línea «Proyectos del Máster en Diseño Web y App: UX/UI» (en inglés, «Projects from the Master's in Web and App Design: UX/UI»). Se quedan el título y la etiqueta «Máster UX/UI».
- **Dónde:**
  - `sc-copy.js`: se borra `casesSub` en `es` y en `en`.
  - `sc-proyectos.jsx`: se borra el `<p>{e.casesSub}</p>` de la cabecera de los casos.
  - `sc-home.css`: se borran `.pp-head p{…}` y, en el bloque de pantallas grandes, `.pp-head p{font-size:…}`.

## 03/11/2026 · Tarjeta del configurador 3D: «En desarrollo»

- **Qué se añade:** un texto al pie de la columna de texto, en el mismo sitio en que los casos llevan «Ver caso →». Es solo texto con un punto morado delante, sin contenedor: 14 px, como «Ver caso», en color `--ink-soft`. Dice «En desarrollo», y en inglés «In development».
- **Dónde:**
  - `sc-copy.js`: `conf.state` en `es` y en `en`.
  - `sc-proyectos.jsx`: `<span className="phys-state">{e.conf.state}</span>`, como último hijo de `.phys-info`, después del párrafo.
  - `sc-home.css`:
    - `.phys-state{margin-top:auto;align-self:flex-start;display:inline-flex;align-items:center;gap:8px;font-size:14px;color:var(--ink-soft)}`; el `margin-top:auto` lo lleva al pie.
    - `.phys-state::before` (el punto: 7 px, `--accent`).
    - En el bloque de pantallas grandes, `.phys-state` va con `.case-cta` (14 px × `--fz`).
- **Primero fue una píldora con borde encima del título;** a Iris no le convenció.

## 03/11/2026 · Vídeos de «Proyectos»: pantalla completa, y fuera la etiqueta del configurador

**Qué se quita:** la etiqueta «Renderizado desde el visor web» que iba sobre el vídeo del configurador (en inglés, «Rendered from the web viewer»).

**Qué se añade:** un botón para ver el vídeo a pantalla completa, en los dos vídeos (Mañez y Lozano y configurador).

- **Aspecto:** es redondo, de 40 px, como el de pausa, y va en la esquina inferior derecha. Lleva un icono de ampliar, con la etiqueta «Ver a pantalla completa» (en inglés, «Watch full screen»), que también sale como pista al pasar el ratón.
- **Al pulsarlo:** el vídeo arranca y pide la pantalla completa.
- **Dentro de la pantalla completa:** el vídeo lleva los controles del navegador, para pausar y para mover la barra adelante o atrás. Se ve entero (`object-fit: contain`).
- **Al salir:** se quitan los controles. Si se pausó dentro, sigue en pausa aunque se haga scroll; si no, vuelve a arrancar solo al entrar en pantalla, como siempre.
- **En el iPhone:** se usa su reproductor a pantalla completa (`webkitEnterFullscreen`).

**Dónde:**

- `sc-copy.js`:
  - se borra `conf.cap` en `es` y en `en`;
  - se añade `full` («Ver a pantalla completa» / «Watch full screen») junto a `play` y `pause`.
- `sc-proyectos.jsx`, componente `LvPlayer`:
  - nueva prop `full`; si viene, pinta `<button className="lv-full" aria-label={full} title={full}>` con un SVG de cuatro esquinas (`M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5`);
  - el clic llama a `requestFullscreen` del `<video>` (o a `webkitRequestFullscreen` / `webkitEnterFullscreen`);
  - un oyente de `fullscreenchange`, `webkitfullscreenchange` y `webkitendfullscreen` pone `controls` al entrar, lo quita al salir y guarda si quedó en pausa.
  - Los controles se encienden solo cuando el vídeo ya está a pantalla completa. Si el navegador no la concede, la tarjeta no se queda con controles.
  - Los dos usos de `LvPlayer` pasan `full={e.full}`.
  - Se borra el hijo `<span className="phys-cap">`.
- `sc-home.css`:
  - se añaden `.lv-full`, `.lv-full svg`, `.lv-video:fullscreen` y `.lv-video:-webkit-full-screen` (`object-fit:contain`), y `.phys-player .lv-full` comparte fondo con `.phys-player .lv-toggle`;
  - se borran `.phys-cap{…}`, `@media (max-width:560px){.phys-cap{display:none}}` y `.phys-cap` en la regla de 12 px de pantallas grandes.

**Comprobado:** en el navegador integrado de Claude solo se pudo probar la lógica, simulando la entrada y la salida, porque ese navegador no deja poner nada a pantalla completa. Falta probarlo en un navegador normal (Chrome, Edge, Safari) antes de publicar.

## 03/11/2026 · «Sobre mí»: el jarrón por los ocho oficios en vez de la vista explosionada

**Qué cambia:** el cuadrado de la izquierda de «Sobre mí» deja el vídeo de la vista explosionada y pasa a una animación dibujada en la propia página, la propuesta A de `propuestas-sobre-mi.html`, que eligió Iris. Un jarrón recorre ocho oficios: plano con cotas, modelado 3D, render, impresión 3D, fotografía, edición, cartel y web. Arriba se lee el oficio de cada momento, sin número (Iris pidió quitar el «01», «02»…), con ocho rayas de avance debajo. Es un bucle de unos 21 segundos con el mismo fundido en los bordes que el vídeo.

**Cómo se comporta:**

- Se para fuera de pantalla y sigue donde iba al volver.
- Con «reducir movimiento», cambia de etapa cada 4 s y cada una sale ya terminada, sin moverse.
- Los textos cambian con el idioma.

**Dónde:**

- **`scrolly/sc-about-anim.js` (nuevo).** Contiene el componente `ScAboutAnim({a})`: dibuja el SVG con los textos y lo mueve con `requestAnimationFrame` e `IntersectionObserver`. Está en JS legible. En el proyecto puede ir tal cual o pasarse a `sc-about-anim.jsx`.
- **`sc-about.jsx`.** Si `aboutSum.anim` existe, dentro de `.sc-about-media` pinta `<ScAboutAnim a={e.anim}/>`; si no, el vídeo de antes. La clase `solo` solo se pone si no hay ni `anim` ni `media`.
- **`i18n.js`.** En `aboutSum`, `media` (el vídeo) pasa a `anim`, con `alt`, `steps`, `plan`, `adjust`, `sliders`, `poster` y `web`, en `es` y en `en`. En inglés el jarrón es «Vase» y la web, «vase.shop».
- **`index.html`.** Se añade `<script src="scrolly/sc-about-anim.js"></script>` antes de `sc-about.js`.
- **`sc-home.css`.** Nuevo bloque `.sc-about-anim`: el fundido de los bordes, las etapas (`[data-s] .stN`) y los textos del dibujo, en unidades del SVG.

**Se puede borrar:** `assets/about/vista-explosionada.mp4` y `.webp` ya no se usan.

**Comprobado:**

- La sección pinta la animación (449 × 449, sin vídeo) y cambia todos los textos al pasar a inglés, sin errores.
- Con Edge sin ventana se ha visto avanzar por las etapas en escritorio y móvil. Para que avanzara hubo que cambiar los fotogramas y el aviso de visibilidad por temporizadores en una página de prueba, ya borrada. El movimiento real falta mirarlo en un navegador normal.

## 03/11/2026 · «Habilidades y herramientas»: sin iconos y al ritmo del scroll

**Qué cambia:**

- **Iconos.** Los cuatro bloques (Diseño web, Modelado 3D, Render y generación de imagen, Diseño gráfico y maquetación) pierden el icono de delante.
- **Ya no pasan solos.** Antes cambiaban cada 2,6 s; ahora el bloque activo lo marca el scroll y se resaltan los programas que usa. Al pulsar un bloque, la página baja hasta su tramo.
- **Si el contenido cabe en la pantalla** (escritorio y móviles altos): la sección se queda fija mientras se recorren los bloques, con unos 55svh de scroll para cada uno.
- **Si no cabe** (móviles bajos): no se fija, y el bloque cambia a medida que la sección cruza la pantalla.

**Dónde:**

- **`sc-close.jsx`.**
  - Se borra `SK_ICONS` y se reescribe `ScToolkit`. La versión nueva está en la copia local, `web/scrolly/sc-close.js`, en JS legible.
  - La sección lleva dentro `.sc-toolkit-in` y `.sc-toolkit-box` (la que se mide para saber si cabe) y la clase `pinned` cuando se fija.
  - El bloque activo sale de la posición del scroll, no de un temporizador. Ya no se activa al pasar el ratón; al pulsar, se va a su tramo.
- **`sc-home.css`.** Nuevo bloque «Habilidades y herramientas»: `.sc-skill` a una columna, `.sc-toolkit-box` y `.sc-toolkit.pinned` con su `.sc-toolkit-in` fijo (`position:sticky`, 100svh).
- **`scrolly.css`.** Se pueden borrar las reglas de `.sc-skill .ic`, que ya no se usan.

**Comprobado:**

- **Escritorio:** se fija y pasa del bloque 1 al 4 a lo largo del recorrido.
- **Móviles de 375 × 667 y 375 × 812:** no se fija y también pasa del 1 al 4.
- Sin errores.

## 03/11/2026 · «Habilidades y herramientas»: logos en lugar de nombres

**Qué cambia:**

- **Logos.** Cada programa se muestra con su logo, en sus colores originales, en lugar del nombre. Debajo sigue la categoría. El nombre queda como texto alternativo y sale al pasar el ratón.
- **Tamaño.** Los iconos van a 36 px de alto y los logotipos alargados (Magnific, SolidWorks) a 22 px, para que pesen parecido. En el móvil van a 30 y 18 px; en pantallas grandes crecen con `--fz`.
- **Elegoo.** La impresora OrangeStorm Giga y Elegoo Slicer pasan a ser una sola pieza, «Elegoo», con la categoría «Impresión 3D».

**Logos.** Hay 12 SVG con su origen anotado en `ORIGEN.txt`. Se usan solo para indicar con qué programas trabaja Iris; son marcas de sus dueños.

- **En el ordenador de Iris:** `Descargas\logos-herramientas\`.
- **En la copia local:** `web/assets/herramientas/`.

| logo | origen |
|---|---|
| Figma, Claude, Photoshop, Illustrator, InDesign, Blender, SolidWorks | Wikimedia Commons (versiones oficiales; las de Adobe, las de 2026) |
| Magnific | Wikipedia en inglés (de la página de prensa de Magnific) |
| WordPress, Elementor, Framer, Elegoo | Simple Icons 16.36.0 (CC0), pintados con el color de cada marca |

**Dónde:**

- `assets/herramientas/` con los 12 SVG.
- `sc-close.jsx`: los mapas `SK_LOGOS` (programa → archivo) y `SK_WIDE` (los alargados). En cada programa, `<img className="lg">` en lugar de `<span className="n">`; el nombre solo se escribe si no hay logo.
- `i18n.js`, en `es` y `en`:
  - en `skills`, «OrangeStorm Giga» pasa a «Elegoo» y se borra «Elegoo Slicer»;
  - en `can`, las `tools` de Modelado 3D quedan `["SolidWorks", "Blender", "Elegoo"]`.

  Los campos `icon` de `can` ya no se usan.
- `sc-home.css`: `.sc-tool .lg` (con `align-self:flex-start` para que no se estire al ancho de la categoría) y `.sc-tool .lg.wide`, con sus tamaños para móvil y pantallas grandes.

**Comprobado:**

- Los 12 cargan, alineados con su categoría, y se resaltan los del bloque activo.
- En el móvil no se sale nada de la pantalla.
- Con los logos la sección es más baja, y en un móvil de 375 × 812 ya se queda fija.

## 03/11/2026 · «Habilidades y herramientas»: cuadrícula, nombres de vuelta, título activo en morado y sin Elementor

Esto ajusta la entrada anterior de los logos.

**Qué cambia:**

- **Título activo.** El del bloque activo (por ejemplo, «Diseño web») pasa a morado.
- **Cuadrícula.** Cada programa ocupa una casilla cuadrada igual: 4 columnas en escritorio (130 × 130 px a 1117 de ancho) y 3 en el móvil (105 × 105). Las casillas son de papel, con esquinas de 16 px y sombra suave.
- **Contenido de la casilla.** Todo va centrado: el logo, debajo el nombre y debajo la categoría.
- **Tamaño de los logos.** Son algo más grandes: los iconos a 44 px (28 en el móvil). Los logotipos alargados (Magnific, SolidWorks) ocupan el ancho útil de la casilla, que tiene 12 px de relleno a los lados (6 en el móvil).
- **Resaltado.** Siguen como antes: los programas del bloque activo enteros y un poco elevados, con la categoría en morado, y los demás atenuados.
- **Elementor.** Se quita.

**Dónde:**

- `i18n.js`: se borra Elementor de `skills` y de las `tools` de Diseño web, en `es` y en `en`.
- `sc-close.jsx`:
  - se quita Elementor de `SK_LOGOS`;
  - cada programa pinta `<span className="lgb"><img className="lg" alt=""/></span>` (si tiene logo) y, siempre, `<span className="n">{nombre}</span>` y `<span className="c">{categoría}</span>`;
  - el `alt` va vacío porque el nombre ya se lee debajo.
- `sc-home.css`:
  - `.sc-skill.on .n{color:var(--accent)}`;
  - `.sc-skills-tools` pasa a `display:grid` con 4 columnas (3 en el móvil);
  - `.sc-tool` lleva `aspect-ratio:1`, contenido centrado, fondo de papel, radio y sombra;
  - nuevas `.sc-tool .lgb` y `.sc-tool .lg` (los alargados, `.wide`, con `width:100%`), y `.sc-tool .n` y `.c` con salto de línea permitido. Hay tamaños para móvil y para pantallas grandes.
- `assets/herramientas/elementor.svg` ya no se usa. En la copia local se ha borrado; en Descargas sigue.

**Comprobado:**

- **Escritorio:** 11 casillas de 130 × 130 en 4 columnas, todo centrado, título activo en morado y la sección aún se fija (530 px de contenido).
- **Móvil:** todas las casillas son de 105 × 105 y no se sale nada de la pantalla. La sección es ya más alta que un móvil de 812, así que ahí no se fija y el bloque cambia según la sección cruza la pantalla.
- Sin errores.

## 03/11/2026 · Casos de estudio: portada de Horizonte desde Figma, y fuera las etiquetas

- **Portada de Horizonte.** La tarjeta montaba la foto de escalada con la captura «Explorar» encima, y el móvil se cortaba por abajo. Ahora lleva la portada 16:9 diseñada en Figma, igual que Viña Rock y REVERB llevan la suya. Tiene foto, título, subtítulo, etiquetas y los dos móviles enteros, con la pegatina «+40 tokens».
  - Origen: archivo de Figma «8_Fundamentos del diseño app.UI» (`EA5iNmojumrdtMFajTzlEm`), página «05 · Portfolio», marco «Portada · Aventura · 16:9» (nodo `6768:25`).
  - Archivo nuevo: `projects/assets/horizonte/portada-horizonte.webp`. Mide 1800 × 1013, como las otras dos portadas: se exportó a 1920 × 1080 y se redujo. Pesa 231 KB; la foto y la captura juntas pesaban unos 435 KB.
  - `sc-proyectos.jsx`: en el mapa de los casos, la entrada `"p-horizonte"` pasa a `{ href: "projects/horizonte.html", bg: "projects/assets/horizonte/portada-horizonte.webp" }`, sin `ph`.
  - `sc-home.css`: se borra la regla `.case-media .ph{…}`, que ya no usa ninguna tarjeta. Antes de usar Figma se había encogido el móvil en esa regla; al borrarla, ese paso desaparece.
  - `foto-escalada.webp` y `pantalla-explorar.webp` se quedan, porque las usa la página del caso.
  - Las tarjetas son iguales en los dos idiomas, así que esta portada, en español, sale también en la versión inglesa, como pasa con Viña Rock y REVERB. En Figma está la versión inglesa («Portada · Aventura · 16:9 · EN») por si se quiere usar.
- **Etiquetas.** Las tarjetas de Viña Rock, Horizonte y REVERB ya no llevan las etiquetas (Investigación, Arquitectura, Sistema de diseño, Prototipo). Debajo del nombre va directamente «Ver caso →». La tarjeta de Mañez y Lozano conserva las suyas (WordPress, Claude Code).
  - `sc-proyectos.jsx`: en la tarjeta de cada caso se borra el `<div className="pieces">{s.tags.map(…)}</div>`.
  - `sc-copy.js`: en `proyectos.list` se borra el campo `tags` de los tres casos, en `es` y en `en`.
  - Los estilos `.pp .pieces` se quedan, porque los usa la tarjeta de Mañez y Lozano.
- **Comprobado** en escritorio (1136 px) y en el móvil (375 px):
  - cada tarjeta lleva su portada, y en la de Horizonte se ven enteros los dos móviles;
  - las tres van sin etiquetas y tienen la misma altura;
  - sin desbordes ni errores.

Archivos cambiados en la copia local: `projects/assets/horizonte/portada-horizonte.webp` (nuevo), `scrolly/sc-proyectos.js` (compilado), `scrolly/sc-copy.js` y `scrolly/sc-home.css`.

## 03/11/2026 · Contacto: fuera «Última actualización», el CV en su sitio

- **Qué cambia:** en los datos de contacto, encima del pie, se quita el bloque «última actualización / Septiembre 2026» (en inglés, «last updated / September 2026»). El CV pasa a ocupar su sitio: la última columna, alineado a la derecha. Quedan dos bloques, LinkedIn a la izquierda y el CV a la derecha.
- **Dónde:**
  - `i18n.js`, `blocks` del contacto, en `es` y en `en`: se borra la línea `{ l: "Última actualización", v: "Septiembre 2026" }` (en inglés, `{ l: "Last updated", v: "September 2026" }`).
  - `sc-home.css`, apartado nuevo «Contacto»: `.sc-contact-grid>button.sc-contact-block{grid-column:-2}`. Hace falta porque la rejilla tiene tres columnas (`1fr 1fr auto`, en `scrolly.css`) y, sin esta regla, el CV se quedaría en la del medio. La alineación a la derecha ya la da `.sc-contact-grid>:last-child`, porque ahora el CV es el último bloque.
- **Móvil:** como antes, dos columnas con LinkedIn y el CV en la misma fila, alineados a la izquierda.
- **Comprobado:** en escritorio el CV queda al borde derecho de la rejilla, a la misma altura que LinkedIn; en el móvil (375 px), en la segunda columna y sin desbordar. Sin errores.

## 03/11/2026 · «Lo que hago», sin punto

- **Qué cambia:** el título de «Enfoque» pierde el punto final: «Lo que hago.» pasa a «Lo que hago». En inglés, «What I do.» pasa a «What I do».
- **Dónde:** `sc-copy.js`, `enfoque.title`, en `es` y en `en`.

## 03/11/2026 · Sin las barras de los bloques; SolidWorks, «modelado 3D»

- **Barras.** Fuera las barras moradas a la izquierda de los bloques (Iris: «quita los filetes»). El bloque activo sigue creciendo y pasando a morado con transición. En `sc-home.css` se borran:
  - la regla `.sc-skill::before`;
  - el margen izquierdo de `.sc-skills-groups`;
  - el hueco entre columnas añadido para el móvil;
  - el `position:relative` de `.sc-skill`.
- **SolidWorks.** Su categoría pasa de «Producto 3D» a «Modelado 3D»; en inglés, de «3D Product» a «3D modelling». Se ve en minúsculas, como las demás. Está en `i18n.js`, `skills`, en `es` y en `en`.

## 03/11/2026 · «Habilidades y herramientas»: el bloque activo crece, con transición y barra

**Qué cambia:**

- **Tamaño.** Además de pasar a morado, el título del bloque activo crece: de unos 20 a 29 px a 1117 de ancho (de 16 a 20 en el móvil). El anterior se encoge a la vez, así que la lista se recoloca con suavidad.
- **Barra.** A la izquierda del activo, una barra morada fina crece desde el centro mientras la del anterior se recoge, así se ve el paso de un bloque a otro.
- **Transición.** Tamaño y barra en 0,55 s, color en 0,4 s. Con «reducir movimiento» cambian sin transición.

**Dónde:** solo `sc-home.css`, en el bloque de «Habilidades y herramientas».

- `.sc-skill` lleva `position:relative`, y `.sc-skills-groups` un margen izquierdo de 18 px para la barra (12 en el móvil, con 22 px entre columnas).
- `.sc-skill .n` lleva la transición, y `.sc-skill.on .n` el tamaño grande:
  - `clamp(28px,2.6vw,40px)` en escritorio;
  - 20 px en el móvil;
  - con `--u` en pantallas grandes.
- `.sc-skill::before` es la barra: 4 px de ancho, el 62 % del alto, `scaleY(0)` a `scaleY(1)` en el activo.

**Comprobado:**

- **Escritorio:** el título activo cabe en su columna (los largos pasan a dos líneas y la barra las abarca) y la sección sigue quedándose fija.
- **Móvil:** con cualquier bloque activo no se sale nada de la pantalla.
- Sin errores.

## 03/11/2026 · «Habilidades y herramientas»: bloques sin descripción

- **Qué cambia:** los cuatro bloques (Diseño web, Modelado 3D, Render y generación de imagen, Diseño gráfico y maquetación) se quedan solo con el título, en morado el del bloque activo. Fuera la descripción que se desplegaba bajo el activo y, en el móvil, el párrafo que la repetía debajo de los bloques. Iris: «solo repiten información».
- **Dónde:** en `sc-close.jsx`, se borran el `<span className="v">{s.v}</span>` de cada bloque y el `<p className="sc-skills-desc">`.
  - El campo `v` de `can` en `i18n.js` ya no se usa (se puede borrar).
  - Las reglas `.sc-skill .v` y `.sc-skills-desc` de `scrolly.css`, tampoco.

## 03/11/2026 · La casilla de impresión 3D se llama «Elegoo Slicer»

- **Qué cambia:** la casilla que juntó la impresora OrangeStorm Giga y Elegoo Slicer se titula «Elegoo Slicer» en vez de «Elegoo». Mantiene el logo de Elegoo y la categoría «impresión 3D».
- **Dónde:**
  - `i18n.js`, en `es` y en `en`: en `skills`, el `name` «Elegoo» pasa a «Elegoo Slicer»; en `can`, las `tools` de Modelado 3D quedan `["SolidWorks", "Blender", "Elegoo Slicer"]`.
  - `sc-close.jsx`: en `SK_LOGOS`, la clave pasa a ser `"Elegoo Slicer": "elegoo"`.

## 03/11/2026 · Claude Code: «Desarrollo web»

- **Qué cambia:** la categoría de Claude Code en «Habilidades y herramientas» pasa de «Prototipado con IA» a «Desarrollo web». En inglés, de «AI Prototyping» a «Web development». Se ve en minúsculas, como las demás categorías.
- **Dónde:** `i18n.js`, en `skills`, campo `cat` de Claude Code, en `es` y en `en`.

## 03/11/2026 · «Quién soy» pasa a «Sobre mí»

- **Qué cambia:** el título de la sección «Quién soy» pasa a «Sobre mí», con tilde, como en el menú. En inglés, «Who I am» pasa a «About me».
- **Dónde:** `i18n.js`, `aboutSum.title`, en `es` y en `en`.

## 03/11/2026 · Tarjetas de proyecto: esquinas de 20 px

- **Qué cambia:** las cinco tarjetas (Mañez y Lozano, los tres casos y el configurador 3D) pasan de 24 a 20 px de redondeo.
- **Dónde:** `sc-home.css`, en la regla común `.live,.case,.phys{border-radius:20px;…}` y en su comentario.

## 03/11/2026 · Tarjetas de proyecto: sin borde y con sombra

- **Qué cambia:** las cinco tarjetas pierden la línea del borde y llevan una sombra suave detrás.
  - Normal: `0 1px 2px rgba(31,26,20,.06), 0 14px 34px -14px rgba(31,26,20,.2)`.
  - Al pasar el ratón por un caso, la tarjeta sube y la sombra se hace más honda: `0 2px 4px rgba(31,26,20,.06), 0 30px 50px -26px rgba(31,26,20,.32)`.
- **Dónde, en `sc-home.css`:**
  - En la regla común `.live,.case,.phys` se quita `border:1px solid var(--line)` y se añaden `--card-sh:…` y `box-shadow:var(--card-sh)`.
  - El resaltado al llegar desde la tabla (`@keyframes pp-hl`) suma `var(--card-sh)` al anillo morado, para que la sombra no desaparezca mientras dura.
  - Cambia la sombra de `.case.in:hover`.

## 03/11/2026 · «Proyectos»: «En producción» pasa a «En funcionamiento»

- **Qué cambia:** el título del primer bloque, encima de la tarjeta de Mañez y Lozano, pasa de «En producción» a «En funcionamiento». Tiene el mismo formato que «Casos de estudio». En inglés sigue siendo «Live».
- **Dónde:** `sc-copy.js`, `live` en `es`. El componente queda como estaba, con `<header className="pp-head"><h3>{e.live}</h3></header>` en el bloque `#p-real`.
- **Nota:** primero se quitó el título y después Iris pidió este nuevo. El resultado neto es solo el cambio de texto.
