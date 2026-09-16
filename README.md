# Dojo DevSkills

Academia diaria de JavaScript, React y LINQ: lección por pasos, editor con
resaltado y pruebas que corren en la propia página. Un día solo se marca
cuando todas las pruebas pasan.

**App:** https://davidveraquintero.github.io/DojoDevSkill/

## Archivos

| archivo | qué es |
|---|---|
| `index.html` | la app completa (estilos y lógica dentro) |
| `datos.js` | la ruta de estudio, las lecciones y las katas con sus pruebas |
| `manifest.webmanifest` | identidad de la PWA: nombre, íconos, colores |
| `sw.js` | service worker: caché y modo sin conexión |
|  `icon-*.png` | íconos 192, 512 y maskable |

## Instalarla

Abre la URL en Chrome (PC o Android) y usa el botón de instalar de la barra de
direcciones, o menú ⋮ → *Instalar aplicación*. En iPhone: Safari → Compartir →
*Añadir a pantalla de inicio*.

## Al cambiar algo

Sube la versión en `sw.js` (`const CACHE = "dojo-v2"`) o el navegador seguirá
sirviendo la copia vieja del caché.

## Dónde queda el progreso

En `localStorage` del navegador donde la abras. No se sincroniza entre
dispositivos.
