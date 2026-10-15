const rvMotion=(()=>{const s=window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)"):null;let n=!!(s&&s.matches);const e=new Set,l=i=>{n=!!i,document.documentElement.classList.toggle("rv-calm",n),e.forEach(h=>h(n))};return n&&document.documentElement.classList.add("rv-calm"),{get:()=>n,set:l,sub:i=>(e.add(i),()=>e.delete(i))}})();function useRvCalm(){const[s,n]=React.useState(rvMotion.get());return React.useEffect(()=>rvMotion.sub(n),[]),s}const RV_VERT=`
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = vec2(aPos.x * 0.5 + 0.5, 0.5 - aPos.y * 0.5);
  gl_Position = vec4(aPos, 0.0, 1.0);
}`,RV_FRAG=`
precision highp float;
uniform vec4 uA;
uniform vec4 uB;
uniform vec4 uC;
varying vec2 vUv;

float hash2(vec2 p) {
  float h = dot(p, vec2(127.1, 311.7));
  return fract(sin(h) * 43758.5453123);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 w = f * f * (3.0 - 2.0 * f);
  float n00 = hash2(i);
  float n10 = hash2(i + vec2(1.0, 0.0));
  float n01 = hash2(i + vec2(0.0, 1.0));
  float n11 = hash2(i + vec2(1.0, 1.0));
  return mix(mix(n00, n10, w.x), mix(n01, n11, w.x), w.y);
}
float fbm(vec2 p0) {
  vec2 p = p0;
  float v = 0.0;
  float amp = 0.5;
  mat2 rot = mat2(1.6, -1.2, 1.2, 1.6);
  for (int k = 0; k < 5; k++) {
    v += amp * vnoise(p);
    p = rot * p;
    amp *= 0.5;
  }
  return v;
}
vec3 thermal(float v) {
  vec3 c0 = vec3(0.071, 0.031, 0.149);
  vec3 c1 = vec3(0.212, 0.102, 0.435);
  vec3 c2 = vec3(0.416, 0.231, 0.878);
  vec3 c3 = vec3(0.922, 0.353, 0.086);
  vec3 c4 = vec3(0.969, 0.812, 0.043);
  vec3 c5 = vec3(1.0, 0.918, 0.541);
  vec3 col = mix(c0, c1, smoothstep(0.0, 0.3, v));
  col = mix(col, c2, smoothstep(0.3, 0.52, v));
  col = mix(col, c3, smoothstep(0.52, 0.7, v));
  col = mix(col, c4, smoothstep(0.7, 0.86, v));
  col = mix(col, c5, smoothstep(0.86, 1.0, v));
  return col;
}
void main() {
  vec2 uv = vUv;
  float t = uA.x * uA.y;
  float scl = uA.z;
  float warp = uA.w;
  float heat = uB.x;
  float grain = uB.y;
  float mode = uB.z;
  float aspect = uB.w;
  vec2 focus = uC.xy;
  float focusAmt = uC.z;
  vec2 res = vec2(uC.w, uC.w / max(aspect, 0.0001));

  vec2 d = vec2((uv.x - focus.x) * aspect, uv.y - focus.y);
  float glow = exp(-dot(d, d) * 5.0);
  vec2 p = vec2(uv.x * aspect, uv.y) * scl + d * glow * 0.35;
  vec2 q = vec2(fbm(p + vec2(0.12, 0.05) * t), fbm(p + vec2(5.2, 1.3) - vec2(0.04, 0.1) * t));
  vec2 r = vec2(fbm(p + warp * q + vec2(1.7, 9.2) + vec2(0.15, -0.06) * t), fbm(p + warp * q + vec2(8.3, 2.8) - vec2(0.07, 0.126) * t));
  float f = fbm(p + warp * r);

  float v = smoothstep(0.22, 0.82, f);
  v += (heat - 0.5) * 0.7;
  v += focusAmt * 0.55 * glow * (0.6 + 0.4 * f);
  v = clamp(v, 0.0, 1.0);
  if (mode > 0.5) v *= 0.5;

  vec3 col = thermal(v);
  float vig = smoothstep(0.35, 1.05, length((uv - vec2(0.5)) * vec2(1.1, 1.3)));
  col *= mix(1.0, 0.72, vig);
  float g = hash2(floor(uv * res) + vec2(fract(t * 3.7) * 97.0, fract(t * 1.3) * 53.0)) - 0.5;
  col += vec3(g) * grain;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`,RV_DEFAULTS={speed:.35,scale:1.8,warp:1.6,heat:.5,grain:.07,palette:0,focus:[.5,.45],focusStrength:.6,followMouse:!0,followSpeed:3};function rvGl(s){const n={antialias:!1,alpha:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!1,powerPreference:"low-power"},e=s.getContext("webgl",n)||s.getContext("experimental-webgl",n);if(!e)return null;const l=(d,E)=>{const f=e.createShader(d);return e.shaderSource(f,E),e.compileShader(f),e.getShaderParameter(f,e.COMPILE_STATUS)?f:null},i=l(e.VERTEX_SHADER,RV_VERT),h=l(e.FRAGMENT_SHADER,RV_FRAG)||l(e.FRAGMENT_SHADER,RV_FRAG.replace("precision highp float;","precision mediump float;"));if(!i||!h)return null;const r=e.createProgram();if(e.attachShader(r,i),e.attachShader(r,h),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))return null;e.useProgram(r);const b=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const w=e.getAttribLocation(r,"aPos");return e.enableVertexAttribArray(w),e.vertexAttribPointer(w,2,e.FLOAT,!1,0,0),{gl:e,uA:e.getUniformLocation(r,"uA"),uB:e.getUniformLocation(r,"uB"),uC:e.getUniformLocation(r,"uC")}}function RvThermal({params:s,calm:n,className:e,res:l=.5,maxW:i=1100,t0:h=9,label:r}){const b=React.useRef(null),w=React.useRef({...RV_DEFAULTS,...s});w.current={...RV_DEFAULTS,...s};const d=React.useRef(n);d.current=n;const E=React.useRef(()=>{}),[f,B]=React.useState(!0);return React.useEffect(()=>{const a=b.current;if(!a)return;const x=rvGl(a);if(!x){B(!1);return}const{gl:v}=x;let p=0,y=!1,S=performance.now(),P=h;const t={fx:null,fy:null,boost:0,tx:.5,ty:.45,hover:!1};let g=1,R=1;const L=()=>{const c=a.getBoundingClientRect(),o=Math.min(l,i/Math.max(1,c.width));g=Math.max(2,Math.round(c.width*o)),R=Math.max(2,Math.round(c.height*o)),(a.width!==g||a.height!==R)&&(a.width=g,a.height=R),v.viewport(0,0,g,R)},A=c=>{const o=w.current,u=d.current,m=o.followMouse&&!u,O=o.focus[0],V=o.focus[1],G=m&&t.hover?t.tx:O,I=m&&t.hover?t.ty:V;t.fx===null&&(t.fx=G,t.fy=I);const M=u?1:1-Math.exp(-c*o.followSpeed);t.fx+=(G-t.fx)*M,t.fy+=(I-t.fy)*M,t.boost+=((m&&t.hover?1:0)-t.boost)*M,u||(P+=c),v.uniform4f(x.uA,P,o.speed,o.scale,o.warp),v.uniform4f(x.uB,o.heat,o.grain,o.palette,g/R),v.uniform4f(x.uC,t.fx,t.fy,o.focusStrength*(1+.5*t.boost),g),v.drawArrays(v.TRIANGLES,0,6)},_=c=>{p=0;const o=Math.min(.1,Math.max(0,(c-S)/1e3));S=c,A(o),y&&!d.current&&!document.hidden&&(p=requestAnimationFrame(_))},C=()=>{p||(S=performance.now(),y&&!d.current&&!document.hidden?p=requestAnimationFrame(_):A(0))};E.current=()=>{p||(L(),A(0),C())};const F=new ResizeObserver(()=>{L(),A(0)});F.observe(a);const T=new IntersectionObserver(([c])=>{y=c.isIntersecting,y&&C()},{rootMargin:"80px"});T.observe(a);const U=()=>{document.hidden||C()};document.addEventListener("visibilitychange",U);const k=c=>{const o=a.getBoundingClientRect(),u=(c.clientX-o.left)/o.width,m=(c.clientY-o.top)/o.height;t.hover=u>=0&&m>=0&&u<=1&&m<=1,t.hover&&(t.tx=u,t.ty=m)},D=()=>{t.hover=!1};window.addEventListener("pointermove",k,{passive:!0}),document.addEventListener("pointerleave",D);const q=c=>{c.preventDefault(),B(!1)};return a.addEventListener("webglcontextlost",q),L(),A(0),()=>{cancelAnimationFrame(p),F.disconnect(),T.disconnect(),document.removeEventListener("visibilitychange",U),window.removeEventListener("pointermove",k),document.removeEventListener("pointerleave",D),a.removeEventListener("webglcontextlost",q);const c=v.getExtension("WEBGL_lose_context");c&&c.loseContext()}},[]),React.useEffect(()=>{E.current()},[n,s]),React.createElement("span",{className:"rv-th"+(f?"":" is-off")+(e?" "+e:""),"aria-hidden":r?void 0:"true",role:r?"img":void 0,"aria-label":r},f?React.createElement("canvas",{ref:b}):null)}Object.assign(window,{RvThermal,rvMotion,useRvCalm,RV_DEFAULTS});
