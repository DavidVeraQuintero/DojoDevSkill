/* Datos del Dojo: ruta, lecciones, katas y pruebas que corren en el navegador. */

window.RUTA = [
  // `id` es la clave interna y NUNCA cambia, aunque se reordene la ruta.
  // `n` es el número que se muestra.
  { id: 'S0', n: 'S0', fase: 'sprint', titulo: 'Sprint de choque: async', meta: 'lo exacto que te preguntaron en el examen', dias: [
    'Promesas a mano: crear, resolver y reintentar',
    'map + async: serie vs paralelo, la trampa de forEach',
    'Promise.all / allSettled / race / any y concurrencia limitada',
  ]},
  { id: 'TC', n: '01', fase: 'js', titulo: 'Tipos, coerción y valores', meta: 'lo que más preguntan en "¿qué imprime esto?"', dias: [
    'Los tipos primitivos, typeof, y por qué typeof null miente',
    '== contra ===: la coerción implícita y por qué no se usa ==',
    'Truthy y falsy: los valores falsos y los bugs con 0 y cadena vacía',
    'NaN, Number.isNaN, parseInt vs Number y los decimales',
    'Copia superficial vs profunda: spread, structuredClone y el objeto anidado',
  ]},
  { id: '01', n: '02', fase: 'js', titulo: 'Funciones de flecha y closures', meta: 'falencia prioritaria', dias: [
    'Funciones de flecha: retorno implícito y this',
    'Closures: estado privado que sobrevive a la función',
    'Closures aplicados: memorizar, debounce, caché',
    'Fábricas, módulos y aplicación parcial',
    'Reto: mini store con reductor y suscriptores',
  ]},
  { id: '02', n: '03', fase: 'js', titulo: 'Arrays: map, filter, reduce', meta: 'falencia prioritaria', dias: [
    'map: qué devuelve siempre y qué NO hace',
    'filter, find, findIndex: buscar vs seleccionar',
    'some, every, includes: preguntas de sí o no',
    'reduce a fondo: sumar, agrupar, indexar, aplanar',
    'Encadenar sin mutar: el pipeline completo',
  ]},
  { id: 'ST', n: '04', fase: 'js', titulo: 'Strings y algoritmos de prueba técnica', meta: 'lo que ponen en HackerRank y Codewars', dias: [
    'Métodos de texto: slice, split, join, replace, padStart, trim',
    'Plantillas literales y normalizar texto: mayúsculas, acentos, espacios',
    'Algoritmos clásicos: palíndromos, invertir, contar caracteres',
    'Agrupar, contar frecuencias y encontrar duplicados',
    'Aplanar estructuras anidadas y recursión básica',
  ]},
  { id: '03', n: '05', fase: 'js', titulo: 'Destructuring, spread y objetos', meta: 'el azúcar que está en todo React', dias: [
    'Destructuring de objetos y arrays',
    'Spread y rest: copiar, mezclar, recoger argumentos',
    'keys/values/entries, opcional chaining, ??',
    'Objetos anidados: actualizar sin mutar',
    'Map y Set: cuándo le ganan a objeto y array',
  ]},
  { id: 'PC', n: '06', fase: 'js', titulo: 'Prototipos, clases, errores y módulos', meta: 'la pregunta de entrevista que todos fallan', dias: [
    'La cadena de prototipos: __proto__, prototype, Object.create',
    'Clases: campos privados, static, herencia y super',
    'Las cuatro formas de invocar y call / apply / bind',
    'Errores: clases de Error propias, throw, try/catch/finally, cause',
    'Módulos ES6: import/export, named vs default, y qué cambia en Node',
  ]},
  { id: '04', n: '07', fase: 'js', titulo: 'Promises desde cero y event loop', meta: 'entender el porqué', dias: [
    'Call stack, macrotasks y microtasks',
    'Los tres estados y el encadenamiento con .then',
    'Construir una MiniPromesa propia',
    'Propagación de errores en una cadena',
    'Reto: cola de tareas con progreso',
  ]},
  { id: '05', n: '08', fase: 'js', titulo: 'async / await y errores async', meta: 'falencia prioritaria', dias: [
    'Qué devuelve exactamente una función async',
    'await: cómo convierte un rechazo en un throw',
    'try / catch / finally en código asíncrono',
    'Errores propios y qué relanzar',
    'Traducir .then a async/await y al revés',
  ]},
  { id: '06', n: '09', fase: 'js', titulo: 'Promise.all, concurrencia, delay y timers', meta: 'falencia prioritaria', dias: [
    'Promise.all: orden del array y fallo al primer rechazo',
    'allSettled, race y any: cuál en cada caso',
    'delay, setTimeout, setInterval y cómo limpiarlos',
    'Timeout, reintentos con backoff y cancelación',
    'Concurrencia limitada sin tumbar la API',
  ]},
  { id: '07', n: '10', fase: 'js', titulo: 'DOM y eventos', meta: 'lo que React hace por debajo', dias: [
    'Seleccionar y modificar nodos sin librerías',
    'addEventListener, el objeto event, preventDefault',
    'Burbujeo, captura y delegación',
    'Formularios: leer, validar, evitar el submit',
    'Reto: lista de tareas en DOM puro',
  ]},
  { id: '08', n: '11', fase: 'react', titulo: 'React: componentes, props y estado', meta: 'qué es un re-render', dias: [
    'JSX es una función: qué produce',
    'Props, composición y children',
    'Listas y keys: por qué el índice rompe cosas',
    'useState: asíncrono y agrupado',
    'Estado inmutable en listas y objetos anidados',
  ]},
  { id: '09', n: '12', fase: 'react', titulo: 'React: hooks', meta: 'las reglas y por qué existen', dias: [
    'Las reglas de los hooks',
    'useReducer: el reductor de la semana de closures, ahora en React',
    'useRef: valores que no re-renderizan',
    'useMemo y useCallback: cuándo SÍ',
    'Escribir un custom hook propio',
  ]},
  { id: '10', n: '13', fase: 'react', titulo: 'React: useEffect y asincronía', meta: 'el hook que más bugs causa', dias: [
    'Qué es un efecto y qué NO debería serlo',
    'El array de dependencias',
    'Limpieza: timers y listeners que quedan vivos',
    'Por qué el callback de useEffect no puede ser async',
    'Race conditions al traer datos',
  ]},
  { id: '11', n: '14', fase: 'react', titulo: 'APIs, fetch y estados de carga', meta: 'async dentro de React', dias: [
    'fetch: status, json, errores que no lanzan solos',
    'AbortController: cancelar una petición',
    'idle / cargando / error / vacío / con datos',
    'Varias peticiones con Promise.all en React',
    'Reto: buscador con debounce y caché',
  ]},
  { id: '12', n: '15', fase: 'linq', titulo: 'LINQ I: consultas básicas', meta: 'C# — falencia prioritaria', dias: [
    'Qué es LINQ y qué es la ejecución diferida',
    'Where y Select: filtrar y proyectar',
    'OrderBy, ThenBy y orden estable',
    'First, FirstOrDefault, Single, Any, All, Count',
    'Sintaxis de método vs sintaxis de consulta',
  ]},
  { id: '13', n: '16', fase: 'linq', titulo: 'LINQ II: agrupar, aplanar y unir', meta: 'C# — lo de entrevista', dias: [
    'SelectMany: aplanar colecciones anidadas',
    'GroupBy y proyección de grupos',
    'Join y GroupJoin',
    'Sum, Average, Min, Max, Aggregate',
    'Skip, Take, Distinct, Except, Intersect',
  ]},
  { id: '14', n: '17', fase: 'mixto', titulo: 'Mixto y simulacro final', meta: 'resolver sin memorizar el patrón', dias: [
    'Traer datos async y transformarlos con map/reduce',
    'La misma consulta en LINQ y en JavaScript',
    'Simulacro cronometrado de JavaScript',
    'Simulacro cronometrado de React + LINQ',
    'Repaso de lo fallado y plan de mantenimiento',
  ]},
];

/* ------------------------------------------------------------------ */
/* Taller: lección + código inicial + pruebas que corren en la página. */
/* Cada prueba recibe `m`, el objeto con las funciones que escribiste. */
/* Helpers disponibles: igual, igualProfundo, cierto, lanza, dormir.   */
/* ------------------------------------------------------------------ */

window.TALLER = {

  'S0-d1': {
    pasos: [
      { titulo: 'JavaScript hace una cosa a la vez', html: `
<p>JavaScript tiene <b>un solo trabajador</b>. Mientras hace algo, no puede hacer nada más.</p>
<p>Prueba mental: si una función se tarda 3 segundos en terminar, durante esos 3 segundos la página se queda <b>congelada</b>. No responde clics, no anima nada.</p>
<pre><code>console.log('uno');
console.log('dos');
console.log('tres');</code></pre>
<div class="salida"><b>Resultado</b>uno
dos
tres</div>
<p>Esto es código <b>síncrono</b>: una línea, luego la siguiente, en orden, sin sorpresas.</p>
<p>El problema aparece cuando hay que <b>esperar</b>: esperar la respuesta de un servidor, esperar 3 segundos, esperar a que el usuario haga algo. Si el único trabajador se queda esperando de brazos cruzados, todo se detiene.</p>
<div class="ojo"><b>La pregunta del día:</b> ¿cómo se espera algo sin congelar el programa? La respuesta se llama <b>promesa</b>.</div>
` },
      { titulo: 'Qué es una promesa', html: `
<p>Pides un domicilio. No te dan la comida en ese momento: te dan un <b>número de pedido</b>.</p>
<p>Ese número no se come. Pero sirve para dos cosas: saber que el pedido existe, y enterarte cuando llegue.</p>
<p>Una <b>promesa</b> (en inglés <i>Promise</i>) es eso: un objeto que representa un resultado que <b>todavía no está</b>.</p>
<p>Una promesa siempre está en uno de tres estados:</p>
<table class="tabla">
<tr><th>Estado</th><th>Qué significa</th></tr>
<tr><td><code>pending</code></td><td>pendiente: el repartidor va en camino</td></tr>
<tr><td><code>fulfilled</code></td><td>cumplida: llegó la comida</td></tr>
<tr><td><code>rejected</code></td><td>rechazada: se acabó el producto</td></tr>
</table>
<div class="ojo">Una promesa empieza <b>pendiente</b>. Cuando pasa a cumplida o rechazada, <b>ya no cambia nunca más</b>. No hay vuelta atrás.</div>
<p>En el próximo paso vas a crear una.</p>
` },
      { titulo: 'Crear una promesa: new Promise', html: `
<p>Para crear una promesa se escribe así:</p>
<pre><code>const pedido = new Promise(función);</code></pre>
<p>Dos cosas nuevas ahí:</p>
<p><b><code>new</code></b> crea un objeto. Igual que <code>new Date()</code> crea una fecha. <code>Promise</code> ya viene en JavaScript; no hay que instalar nada.</p>
<p><b>La función que va adentro</b> es lo único que <code>new Promise</code> recibe. Se llama el <b>executor</b>. Y ojo con esto: JavaScript la ejecuta <b>de inmediato</b>, apenas escribes la línea.</p>
<pre><code>const pedido = new Promise(function (resolve) {
  console.log('el executor corre YA');
});

console.log('esta línea va después');</code></pre>
<div class="salida"><b>Resultado</b>el executor corre YA
esta línea va después</div>
<p>La misma promesa, escrita con función de flecha. <b>Es exactamente lo mismo</b>, solo más corto:</p>
<pre><code>const pedido = new Promise((resolve) =&gt; {
  console.log('el executor corre YA');
});</code></pre>
<div class="ojo">A partir de aquí vas a ver las dos formas siempre. <code>function (x) { ... }</code> y <code>(x) =&gt; { ... }</code> son la misma cosa escrita distinto.</div>
` },
      { titulo: 'resolve: el botón que la cumple', html: `
<p>¿De dónde salió ese <code>resolve</code> del paso anterior? <b>No lo escribiste tú.</b> Te lo entrega JavaScript.</p>
<p>Cuando JavaScript ejecuta tu executor, le pasa una función suya como primer argumento. Esa función es un <b>botón verde</b>: apretarlo cumple la promesa.</p>
<pre><code>const pedido = new Promise((resolve) =&gt; {
  resolve('pizza');     // apretamos el botón verde, con un valor
});</code></pre>
<p>El nombre <code>resolve</code> es pura costumbre. Podrías llamarlo como quieras:</p>
<pre><code>const pedido = new Promise((cumplir) =&gt; {
  cumplir('pizza');     // funciona igual
});</code></pre>
<p>Pero todo el mundo lo llama <code>resolve</code>, así que llámalo así tú también.</p>
<div class="ojo"><b>Si nadie aprieta el botón, la promesa se queda pendiente para siempre.</b>
<pre><code>const nunca = new Promise(() =&gt; {
  // aquí no se llama a resolve
});</code></pre>
Esa promesa jamás se cumple. No es un error, simplemente nunca pasa nada.</div>
<p>Ya sabes crear una promesa y cumplirla. Falta sacarle el valor de adentro.</p>
` },
      { titulo: 'await: sacar el valor de adentro', html: `
<p>Tienes una promesa cumplida con <code>'pizza'</code> adentro. ¿Cómo lo sacas?</p>
<p>Con <code>await</code>. Significa: <b>espera a que esta promesa se cumpla, y dame lo que traiga</b>.</p>
<pre><code>const pedido = new Promise((resolve) =&gt; {
  resolve('pizza');
});

const comida = await pedido;
console.log(comida);</code></pre>
<div class="salida"><b>Resultado</b>pizza</div>
<p>Sin <code>await</code> no obtienes la comida, obtienes el <b>número de pedido</b>:</p>
<pre><code>const comida = pedido;      // ✗ sin await
console.log(comida);</code></pre>
<div class="salida"><b>Resultado</b>Promise { 'pizza' }</div>
<div class="ojo"><b>Este es el error número uno con promesas.</b> Si ves un <code>Promise { ... }</code> donde esperabas un dato, casi siempre te faltó un <code>await</code>.</div>
<p>Y lo más importante: mientras <code>await</code> espera, <b>el programa no se congela</b>. JavaScript se va a hacer otras cosas y vuelve cuando la promesa esté lista. Eso es lo que resuelve el problema del paso 1.</p>
` },
      { titulo: 'Tu primera función útil: delay', html: `
<p>Ahora vamos a algo real. Quieres esperar 3 segundos.</p>
<p>La herramienta para esperar es <code>setTimeout</code>: recibe una función y un tiempo, y llama a esa función cuando el tiempo pasa.</p>
<pre><code>setTimeout(() =&gt; console.log('pasaron 3 segundos'), 3000);</code></pre>
<p>El problema: <code>setTimeout</code> es más viejo que las promesas y <b>no devuelve una</b>. No hay nada que esperar con <code>await</code>.</p>
<p>Entonces lo envolvemos en una promesa nosotros:</p>
<pre><code>function delay(ms) {
  return new Promise((resolve) =&gt; {
    setTimeout(resolve, ms);
  });
}</code></pre>
<p>Esa línea de adentro se lee: <i>"setTimeout, aquí tienes una función, llámala en ms milisegundos"</i>. Y la función que le entregamos es el botón verde.</p>
<pre><code>setTimeout(resolve, ms);           // le paso el botón
setTimeout(() =&gt; resolve(), ms);   // idéntico, solo más explícito</code></pre>
<p>La misma función <code>delay</code>, con flecha:</p>
<pre><code>const delay = (ms) =&gt; new Promise((resolve) =&gt; setTimeout(resolve, ms));</code></pre>
<p>Y ya la puedes usar:</p>
<pre><code>console.log('motores encendidos');
await delay(3000);
console.log('¡LARGADA!');</code></pre>
<div class="salida"><b>Resultado</b>motores encendidos
   ... 3 segundos ...
¡LARGADA!</div>
` },
      { titulo: 'Cuando algo sale mal: reject', html: `
<p>El executor recibe <b>dos</b> botones, no uno. El segundo es el rojo: <code>reject</code>.</p>
<pre><code>const pedido = new Promise((resolve, reject) =&gt; {
  reject(new Error('se acabó la pizza'));
});</code></pre>
<p>Cuando aprietas el rojo, la promesa queda <b>rechazada</b>. Y al hacerle <code>await</code>, eso se convierte en un error que lanza. Se atrapa con <code>try / catch</code>, el de toda la vida:</p>
<pre><code>try {
  const comida = await pedido;
  console.log('llegó', comida);
} catch (error) {
  console.log('falló:', error.message);
}</code></pre>
<div class="salida"><b>Resultado</b>falló: se acabó la pizza</div>
<div class="ojo"><b>Siempre rechaza con <code>new Error(...)</code>, nunca con un texto pelado.</b>
<pre><code>reject('se acabó');              // ✗ no dice dónde ocurrió
reject(new Error('se acabó'));   // ✓ trae el rastro del error</code></pre></div>
<p>Si no atrapas un rechazo, Node te lanza un <code>UnhandledPromiseRejection</code> y puede matar el proceso. No es un aviso decorativo.</p>
` },
      { titulo: 'La palabra async', html: `
<p>Falta una pieza. Ese <code>await</code> que has venido usando tiene una regla:</p>
<div class="ojo"><b><code>await</code> solo se puede usar dentro de una función marcada con <code>async</code></b> (o suelto en un módulo). Si no, es error de sintaxis y el programa ni arranca.</div>
<pre><code>function traer() {
  const r = await delay(100);   // ✗ SyntaxError
}

async function traer() {        // ✓ ahora sí
  const r = await delay(100);
}</code></pre>
<p>Y <code>async</code> hace una cosa más: <b>lo que devuelva la función sale envuelto en una promesa</b>, aunque sea un número pelado.</p>
<pre><code>function normal() { return 5; }
async function conAsync() { return 5; }

console.log(normal());         // 5
console.log(conAsync());       // Promise { 5 }
console.log(await conAsync()); // 5</code></pre>
<p>Las dos formas de escribir una función async:</p>
<pre><code>async function traer(id) { return id * 2; }   // con function
const traer = async (id) =&gt; id * 2;           // con flecha</code></pre>
<p>Fíjate dónde va la palabra: en la flecha, <code>async</code> va <b>antes de los paréntesis</b>.</p>
` },
      { titulo: 'Resumen del día', html: `
<p>Cinco frases. Si te las sabes, el día está ganado.</p>
<ul class="conceptos">
<li><b>Promesa</b> — un objeto que representa un resultado que todavía no está. Pendiente, cumplida o rechazada, y no vuelve atrás.</li>
<li><b>new Promise(fn)</b> — crea la promesa. Esa <code>fn</code> (el executor) se ejecuta de inmediato y recibe dos botones de JavaScript.</li>
<li><b>resolve / reject</b> — el botón verde y el rojo. Lo que le pases a resolve es lo que recibe el await.</li>
<li><b>await</b> — espera la promesa y te da el valor de adentro. Sin él obtienes el ticket, no el contenido.</li>
<li><b>async</b> — habilita el await dentro de la función, y envuelve su return en una promesa.</li>
</ul>
<p>Y el patrón que vas a escribir mil veces:</p>
<pre><code>const delay = (ms) =&gt; new Promise((resolve) =&gt; setTimeout(resolve, ms));</code></pre>

<h4>Para profundizar</h4>
<ul class="enlaces">
<li><a href="https://lenguajejs.com/asincronia/promesas/que-son/" target="_blank" rel="noopener">¿Qué son las promesas?</a> <span class="fuente">· Lenguaje JS, en español</span></li>
<li><a href="https://lenguajejs.com/asincronia/promesas/new-promise/" target="_blank" rel="noopener">Crear promesas con new Promise</a> <span class="fuente">· Lenguaje JS</span></li>
<li><a href="https://lenguajejs.com/asincronia/async-await/que-es/" target="_blank" rel="noopener">¿Qué es async/await?</a> <span class="fuente">· Lenguaje JS</span></li>
<li><a href="https://www.freecodecamp.org/espanol/news/tutorial-async-await-de-javascript-aprende-callbacks-promesas-y-async-await-en-js-haciendo-helados/" target="_blank" rel="noopener">Callbacks, promesas y async/await haciendo helados</a> <span class="fuente">· freeCodeCamp, con dibujos</span></li>
<li><a href="https://developer.mozilla.org/es/docs/Web/API/Window/setTimeout" target="_blank" rel="noopener">setTimeout()</a> <span class="fuente">· MDN, para consultar</span></li>
</ul>
<p>Ahora la kata. Son cinco funciones y las tres primeras ya las viste completas en estos pasos.</p>
` },
    ],
        leccion: `
<h4>La promesa es el ticket, no la comida</h4>
<p>Pides un domicilio. No te entregan la comida en ese momento: te entregan un <b>ticket</b> con un número de pedido. Ese ticket no se come, pero sirve para dos cosas: saber que el pedido existe y enterarte cuando llegue.</p>
<p>Eso es una promesa. JavaScript tiene <b>un solo repartidor</b> (un solo hilo): si se quedara parado esperando en la puerta, no podría hacer nada más. Entonces te da el ticket y sigue trabajando.</p>
<p>El ticket tiene tres estados y, una vez cambia, ya no vuelve atrás:</p>
<table class="tabla">
<tr><th>Estado</th><th>En el domicilio</th></tr>
<tr><td><code>pending</code></td><td>el repartidor va en camino</td></tr>
<tr><td><code>fulfilled</code></td><td>llegó la comida (alguien llamó <code>resolve</code>)</td></tr>
<tr><td><code>rejected</code></td><td>"se acabó el producto" (alguien llamó <code>reject</code>)</td></tr>
</table>

<h4>Antes de seguir: qué es exactamente new Promise</h4>
<p>La línea que vas a ver a continuación tiene tres cosas nuevas al mismo tiempo. Vamos a desarmarla antes de usarla, porque si esta no queda clara, nada de lo que sigue tiene sentido.</p>
<pre><code>new Promise((resolve) =&gt; { ... })</code></pre>

<p><b>1. La palabra <code>new</code>.</b> Crea un objeto nuevo a partir de un molde. Ya la has visto en otros lados:</p>
<pre><code>new Date()               /* crea una fecha */
new Error('se cayó')     /* crea un error */
new Promise( ... )       /* crea una promesa */</code></pre>
<p><code>Promise</code> viene incluido en JavaScript. No hay que instalarlo ni importarlo: está ahí, como <code>Date</code> o <code>Array</code>.</p>

<p><b>2. La función que va adentro de los paréntesis.</b> <code>new Promise</code> recibe <b>una sola cosa</b>: una función. Esa función tiene nombre propio en la documentación, se llama el <b>executor</b> (el ejecutor).</p>
<p>Y aquí está el detalle que sorprende a todo el mundo: <b>JavaScript ejecuta esa función de inmediato</b>, en el instante mismo en que escribes <code>new Promise(...)</code>. No queda agendada para después. Es la primera cosa que pasa.</p>

<p><b>3. La palabra <code>resolve</code>.</b> Esta es la clave, y es la que cuesta: <b>tú no escribes esa función. Te la entrega JavaScript.</b></p>
<p>Cuando JavaScript va a ejecutar tu executor, fabrica dos funciones suyas y te las pasa como argumentos: la primera <b>cumple</b> la promesa y la segunda la <b>rechaza</b>. Son dos botones, uno verde y uno rojo. Los nombres <code>resolve</code> y <code>reject</code> son pura convención —podrías llamarlos <code>a</code> y <code>b</code>— pero todo el mundo usa esos.</p>
<pre><code>/* Los dos botones, con function */
const p = new Promise(function (resolve, reject) {
  /* aquí adentro decides cuál aprietas y cuándo */
});

/* Exactamente lo mismo, con flecha */
const p = new Promise((resolve, reject) =&gt; {
  /* ... */
});

/* Si tu operación nunca falla, pides solo el primero y ya */
const p = new Promise((resolve) =&gt; {
  /* ... */
});</code></pre>

<p><b>¿Y qué hace <code>resolve</code> cuando lo aprietas?</b> Una sola cosa: cambia la promesa de <i>pendiente</i> a <i>cumplida</i>, y le entrega un valor. Ese valor es exactamente lo que va a recibir quien haga <code>await</code>.</p>
<pre><code>const p = new Promise((resolve) =&gt; {
  resolve('listo');        /* apretamos el botón verde de una vez */
});

const r = await p;         /* r vale 'listo' */</code></pre>
<p>Y al revés: <b>si nadie llama a resolve, la promesa se queda pendiente para siempre.</b></p>
<pre><code>const nuncaLlega = new Promise(() =&gt; {
  /* nadie aprieta ningún botón */
});

await nuncaLlega;          /* el programa se queda esperando aquí, eternamente */</code></pre>

<h4>¿Y por qué hay que envolver setTimeout en una promesa?</h4>
<p>Porque <code>setTimeout</code> es viejo: es anterior a las promesas y no devuelve una.</p>
<pre><code>const id = setTimeout(() =&gt; console.log('ya'), 1000);
console.log(id);
/* En el navegador imprime un número, por ejemplo 7.
   En Node imprime un objeto Timeout.
   En los dos casos: NO es una promesa. */</code></pre>
<p>Eso que devuelve es el identificador del temporizador, y sirve para una sola cosa: cancelarlo con <code>clearTimeout(id)</code>. Útil, pero no sirve para <code>await</code>, porque no hay ningún ticket que esperar.</p>
<pre><code>await setTimeout(() =&gt; {}, 1000);   /* ✗ no espera nada: await sobre un número
                                       sigue de largo al instante */</code></pre>
<p>Entonces lo que hacemos es <b>fabricar nosotros el ticket que setTimeout no da</b>: creamos una promesa y le decimos a setTimeout que, cuando suene el reloj, apriete el botón verde. Eso es todo lo que hace <code>delay</code>.</p>

<h4>Ahora sí, delay paso a paso</h4>
<pre><code>function delay(ms) {
  return new Promise((resolve) =&gt; {
    setTimeout(resolve, ms);
  });
}</code></pre>
<p>Esa línea de adentro, <code>setTimeout(resolve, ms)</code>, se lee así: <i>"setTimeout, aquí tienes una función; llámala dentro de ms milisegundos"</i>. Y la función que le estamos entregando es el botón verde.</p>
<pre><code>setTimeout(resolve, ms);            /* le paso resolve para que él la llame */
setTimeout(() =&gt; resolve(), ms);    /* exactamente lo mismo, solo más explícito */</code></pre>
<p>Ahora mira qué pasa, en orden, cuando corres esto:</p>
<pre><code>console.log('motores encendidos');
await delay(3000);
console.log('¡LARGADA!');</code></pre>
<table class="tabla">
<tr><th>#</th><th>Qué pasa</th></tr>
<tr><td>1</td><td>Imprime <b>motores encendidos</b>.</td></tr>
<tr><td>2</td><td>Se llama a <code>delay(3000)</code>. Entra a la función.</td></tr>
<tr><td>3</td><td><code>new Promise(...)</code> crea el objeto promesa, en estado <i>pendiente</i>, y ejecuta el executor <b>ya mismo</b>.</td></tr>
<tr><td>4</td><td>El executor hace una sola cosa: <code>setTimeout(resolve, 3000)</code>, es decir, deja el reloj puesto. Y termina. <b>Todavía no ha resuelto nada.</b></td></tr>
<tr><td>5</td><td><code>delay</code> hace <code>return</code> de esa promesa pendiente. Todo esto pasó en microsegundos.</td></tr>
<tr><td>6</td><td>El <code>await</code> ve una promesa pendiente, corta ahí y deja el resto apuntado para después. El hilo se va a hacer otras cosas.</td></tr>
<tr><td>7</td><td>… pasan 3 segundos …</td></tr>
<tr><td>8</td><td>Suena el reloj. <code>setTimeout</code> llama a la función que le dimos, que era <code>resolve</code>.</td></tr>
<tr><td>9</td><td>La promesa pasa de <i>pendiente</i> a <i>cumplida</i>. El <code>await</code> se reanuda.</td></tr>
<tr><td>10</td><td>Imprime <b>¡LARGADA!</b>.</td></tr>
</table>
<p>Fíjate en el paso 4: el executor <b>no espera</b>. Solo deja algo programado y se va. Quien mantiene viva la promesa es el temporizador, no la función.</p>
<p>Y una versión que resuelve <b>con un valor</b>, para ver dónde entra el dato:</p>
<pre><code>function cruzarMeta(ms, piloto) {
  return new Promise((resolve) =&gt; {
    setTimeout(() =&gt; resolve(piloto), ms);
  });
}

const ganador = await cruzarMeta(500, 'Bagnaia');   /* 'Bagnaia' */</code></pre>
<p>Aquí no le podemos pasar <code>resolve</code> pelado a setTimeout, porque necesitamos llamarlo <b>con</b> el piloto. Por eso metemos una flecha en el medio: <code>() =&gt; resolve(piloto)</code>.</p>

<h4>¿Por qué hay que ponerle async a la función?</h4>
<p>Hay dos respuestas: la mecánica y la de fondo. La mecánica es corta: <b>sin <code>async</code> no puedes usar <code>await</code></b>. Es error de sintaxis, el programa ni arranca.</p>
<pre><code>function traer() {
  const r = await fetch('/pilotos');   // ✗ SyntaxError: await is only valid
  return r;                             //    in async functions
}

async function traer() {                /* ✓ ahora sí */
  const r = await fetch('/pilotos');
  return r;
}</code></pre>
<p>La respuesta de fondo es la que importa: <b><code>async</code> convierte la función en una función que se puede PAUSAR por la mitad.</b></p>
<p>Una función normal en JavaScript tiene una garantía: una vez arranca, <b>corre hasta el final sin que nadie la interrumpa</b>. Nadie le puede quitar el turno a medio camino. Con <code>async</code> le estás dando permiso a JavaScript de partirla en pedazos y ejecutar otras cosas entre pedazo y pedazo.</p>

<h4>¿Qué le pasa al hilo cuando pones await?</h4>
<p>JavaScript tiene <b>un solo hilo</b>: una sola persona trabajando. Entonces "pausar" no puede significar "quedarse quieto esperando", porque si esa persona se queda quieta, el programa entero se congela.</p>
<p>Lo que pasa de verdad es esto: al llegar a un <code>await</code>, la función se <b>parte en dos</b>.</p>
<ul>
<li>Lo que está <b>arriba</b> del await ya se ejecutó.</li>
<li>Lo que está <b>abajo</b> se guarda aparte, como "lo que falta por hacer de esta función". A eso se le llama una <b>continuación</b>: es el resto del trabajo, apuntado para después.</li>
<li>El hilo <b>no se queda ahí</b>. Sale de la función y sigue ejecutando lo que venga después en el programa.</li>
<li>Cuando la promesa se resuelve, "lo que falta" se pone en una fila (la cola de <b>microtasks</b>) y se ejecuta apenas el hilo quede libre.</li>
</ul>
<p>Es el mesero del restaurante: toma tu pedido, lo pasa a la cocina, y <b>no se queda parado en la cocina</b> esperando tu plato. Atiende otras mesas. Cuando el plato está listo, vuelve y termina tu pedido.</p>

<h4>El experimento: mira qué pasa con la variable</h4>
<p>Este es el ejemplo que hay que entender. Léelo y trata de adivinar el orden de salida antes de mirar la respuesta.</p>
<pre><code>let a = 1;

const delay = (ms) =&gt; new Promise((resolve) =&gt; setTimeout(resolve, ms));

async function prueba() {
  console.log('A · adentro, antes del await, a vale', a);

  await delay(0);   /* ← EL CORTE. Aquí la función se parte en dos. */

  console.log('C · adentro, después del await, a vale', a);
}

prueba();            /* la llamamos, pero NO la esperamos */
a = 2;
console.log('B · afuera, ya cambié a, ahora vale', a);</code></pre>
<p>Salida real:</p>
<pre><code>A · adentro, antes del await, a vale 1
B · afuera, ya cambié a, ahora vale 2
C · adentro, después del await, a vale 2</code></pre>
<p>Paso a paso, para que quede sin dudas:</p>
<table class="tabla">
<tr><th>#</th><th>Qué ejecuta el hilo</th><th>Estado</th></tr>
<tr><td>1</td><td><code>let a = 1</code></td><td>a = 1</td></tr>
<tr><td>2</td><td>Llamamos a <code>prueba()</code>. El cuerpo empieza a correr <b>de inmediato</b>, ahí mismo, sin esperar nada.</td><td>a = 1</td></tr>
<tr><td>3</td><td>Imprime <b>A</b>. Lee <code>a</code> y vale 1.</td><td>a = 1</td></tr>
<tr><td>4</td><td>Llega al <code>await</code>. La función se corta: el <code>console.log</code> de C se guarda como continuación. <code>prueba()</code> devuelve un ticket y el hilo <b>se sale de la función</b>.</td><td>a = 1</td></tr>
<tr><td>5</td><td>El hilo sigue con la línea siguiente del programa: <code>a = 2</code>.</td><td><b>a = 2</b></td></tr>
<tr><td>6</td><td>Imprime <b>B</b>. Vale 2.</td><td>a = 2</td></tr>
<tr><td>7</td><td>Ya no queda código síncrono. El hilo queda libre y va a la cola de microtasks a recoger la continuación pendiente.</td><td>a = 2</td></tr>
<tr><td>8</td><td>Retoma <code>prueba</code> donde la dejó e imprime <b>C</b>. Lee <code>a</code>… y ahora vale <b>2</b>.</td><td>a = 2</td></tr>
</table>
<p><b>La conclusión, que es lo que hay que llevarse:</b> el código de después del <code>await</code> no ve el mundo como estaba cuando la función arrancó. Ve el mundo <b>como quedó después</b>, con todos los cambios que ocurrieron mientras esperaba.</p>

<h4>El mismo código sin await</h4>
<p>Quita el <code>await</code> (y el <code>async</code>, que ya no hace falta) y el orden cambia por completo:</p>
<pre><code>let a = 1;

function prueba() {
  console.log('A · a vale', a);
  console.log('C · a vale', a);   /* sin corte: corre pegado al anterior */
}

prueba();
a = 2;
console.log('B · a vale', a);</code></pre>
<pre><code>A · a vale 1
C · a vale 1     ← ahora C ve 1, no 2
B · a vale 2</code></pre>
<p>Sin <code>await</code> la función corre entera de un tirón, de principio a fin, y nadie alcanza a cambiar nada en la mitad. Con <code>await</code>, en cambio, abriste una ventana por la que se coló <code>a = 2</code>.</p>

<h4>Dos detalles que sorprenden</h4>
<p><b>1. Llamar a una función async ejecuta su cuerpo de inmediato</b>, hasta el primer <code>await</code>. No es que se agende para después: lo de arriba del await es tan síncrono como cualquier otro código.</p>
<pre><code>async function arrancar() {
  console.log('esto sale YA');
  await delay(1000);
  console.log('esto sale en un segundo');
}

arrancar();
console.log('esto sale segundo');

/* Salida:  esto sale YA  →  esto sale segundo  →  (1s)  →  esto sale en un segundo */</code></pre>

<p><b>2. El <code>await</code> corta aunque no haya nada que esperar.</b> Incluso sobre un valor que no es promesa:</p>
<pre><code>async function f() {
  console.log(1);
  await null;        /* no hay nada que esperar, pero corta igual */
  console.log(3);
}

f();
console.log(2);

/* Salida: 1, 2, 3  —  no 1, 3, 2 */</code></pre>
<p>La palabra <code>await</code> no significa "espera a que algo termine". Significa <b>"corta aquí y sigue en el próximo turno"</b>. Que haya algo que esperar o no, es secundario.</p>

<h4>El error que causa esto en la vida real</h4>
<p>Ahora que entiendes el corte, este bug se vuelve obvio, y es de los que más plata cuestan:</p>
<pre><code>let vueltas = 0;

async function registrarVuelta() {
  const actual = vueltas;      /* 1. tomo una FOTO del valor: 0 */
  await guardarEnServidor();   /* 2. corte. Mientras espero, pasan cosas. */
  vueltas = actual + 1;        /* 3. escribo 0 + 1 = 1 ... pisando lo que
                                     hayan hecho otros mientras esperaba */
}

registrarVuelta();
registrarVuelta();
/* Las dos tomaron la foto en 0. Las dos escriben 1.
   Resultado: vueltas = 1, cuando deberían ser 2. */</code></pre>
<p>La regla que se deriva: <b>no confíes en un valor que leíste antes de un <code>await</code></b>. Si lo necesitas después, vuelve a leerlo.</p>

<h4>Las dos formas de escribir lo mismo</h4>
<p>Todo lo de arriba se puede escribir con <code>function</code> o con flecha. Son la misma cosa; acostúmbrate a leer las dos, porque en el código real te vas a encontrar ambas mezcladas.</p>
<pre><code>/* ---- 1. Función corriente ---- */
function sumarPenalizacion(tiempo, segundos) {
  return tiempo + segundos;
}
/* la misma, con flecha. Sin llaves, lo de después de la flecha ES el return */
const sumarPenalizacion = (tiempo, segundos) =&gt; tiempo + segundos;


/* ---- 2. Función async ---- */
async function traerPiloto(id) {
  const respuesta = await fetch('/pilotos/' + id);
  return respuesta.json();
}
/* la misma, con flecha: async va ANTES de los paréntesis */
const traerPiloto = async (id) =&gt; {
  const respuesta = await fetch('/pilotos/' + id);
  return respuesta.json();
};


/* ---- 3. La que fabrica una promesa a mano ---- */
function delay(ms) {
  return new Promise((resolve) =&gt; {
    setTimeout(resolve, ms);
  });
}
/* la misma, con flecha. Fíjate que aquí hay DOS flechas:
   una es la función delay, la otra es el executor de la promesa */
const delay = (ms) =&gt; new Promise((resolve) =&gt; setTimeout(resolve, ms));


/* ---- 4. Un callback ---- */
setTimeout(function () { console.log('ya'); }, 1000);
setTimeout(() =&gt; console.log('ya'), 1000);


/* ---- 5. Una async corta de una sola línea ---- */
async function dorsal(p) { return p.numero; }
const dorsal = async (p) =&gt; p.numero;</code></pre>
<p>La única diferencia de fondo entre las dos formas es <b>de quién es el <code>this</code></b>, y eso lo vas a ver a fondo en la semana 01. Para todo lo de este sprint, elige la que leas más cómodo.</p>

<h4>El error típico: comerse el ticket</h4>
<pre><code>const piloto = traerPiloto(46);    // ✗ esto es el ticket
console.log(piloto.nombre);        // undefined

const piloto = await traerPiloto(46);  // ✓ ahora sí es el piloto

reject('se cayó');                 // ✗ un grito sin acta: no trae stack
reject(new Error('se cayó'));      // ✓</code></pre>

<h4>Reintentar: la moto que no prende</h4>
<p>La moto no arranca a la primera. No te rindes en el intento uno ni te quedas pateando cien veces: pateas tres veces, esperas un poco entre cada una, y si a la tercera no prende, llamas a la grúa <b>con el último error</b>, no con el primero.</p>

<h4>Línea por línea</h4>
<p>Esta es la misma función de arriba, pero con todo explicado. Léela despacio: cada pieza tiene un nombre y un oficio.</p>
<pre><code>/* FUNCION cruzarMeta
   Para qué sirve: simular que una moto tarda un rato en cruzar la meta,
                   y avisarnos cuándo cruzó y quién fue.
   Recibe:  ms     -> número de milisegundos que se va a demorar
            piloto -> el dato que queremos recibir de vuelta al final
   Devuelve: una Promise (un "ticket") que a los ms ms entrega el piloto. */
function cruzarMeta(ms, piloto) {

  /* return -> entregamos el ticket INMEDIATAMENTE.
     Ojo: la función termina aquí, en milisegundos. Lo que tarda es la
     promesa en resolverse, no la función en devolverla. */
  return new Promise(

    /* new Promise(...) -> fabrica un ticket nuevo.
       Recibe UNA función (la llaman "executor") que JavaScript ejecuta
       de una vez, y a la que le entrega dos herramientas: resolve y reject.
       Aquí solo pedimos resolve porque esta moto nunca se cae.

       (resolve) => { ... }  es una FUNCION DE FLECHA.
       Es el equivalente corto de:  function (resolve) { ... }
       Con una sola instrucción se pueden quitar las llaves y el return. */
    (resolve) => {

      /* setTimeout -> el reloj del entorno (Node o el navegador).
         Recibe:  1) una función, que ejecutará cuando pase el tiempo
                  2) el tiempo en milisegundos
         No devuelve el resultado: devuelve un id para poder cancelarlo.
         setTimeout NO es una promesa; por eso lo estamos envolviendo. */
      setTimeout(

        /* Esta flecha es lo que se ejecutará cuando suene el reloj. */
        () => {

          /* resolve -> la bandera verde.
             Le pasamos piloto, y ESE es exactamente el valor que va a
             recibir quien haga  await cruzarMeta(...).
             Llamar a resolve cambia el ticket de pending a fulfilled,
             y ese cambio es definitivo: no se puede deshacer. */
          resolve(piloto);
        },

        ms  /* cuánto espera el reloj antes de ejecutar la flecha de arriba */
      );
    }
  );
}

/* CÓMO SE USA */
const ganador = await cruzarMeta(500, 'Bagnaia');
/* await  -> "no sigas hasta que el ticket se resuelva".
   ganador -> 'Bagnaia', el valor que le pasamos a resolve.
   Sin el await, ganador sería el ticket, no el nombre. */</code></pre>
<p>La versión corta que verás en código real es la misma cosa, solo que sin las llaves ni los saltos de línea:</p>
<pre><code>const cruzarMeta = (ms, piloto) =&gt;
  new Promise((resolve) =&gt; setTimeout(() =&gt; resolve(piloto), ms));</code></pre>

<h4>Para repetir de memoria</h4>
<p class="frase"><code>await</code> convierte un rechazo en un <code>throw</code> — por eso con <code>await</code> se usa el <code>try/catch</code> de toda la vida.</p>
<h4>Conceptos clave</h4>
<ul class="conceptos">
<li><b>Asincronía</b> — poder alternar entre tareas sin bloquear el hilo principal. El programa no se congela mientras espera.</li>
<li><b>Promesa (Promise)</b> — el objeto que representa un resultado que todavía no está. Tiene tres estados: pendiente, cumplida y rechazada, y una vez cambia no vuelve atrás.</li>
<li><b>resolve / reject</b> — las dos funciones que JavaScript le entrega al executor de la promesa. resolve la cumple con un valor; reject la rechaza con un Error.</li>
<li><b>async</b> — vuelve asíncrona una función: su return sale envuelto en una promesa, y un throw adentro se convierte en un rechazo. Además permite usar await dentro.</li>
<li><b>await</b> — corta la ejecución de la función ahí mismo y la retoma cuando la promesa se resuelva. Desenvuelve el valor, y convierte un rechazo en un throw.</li>
<li><b>Continuación</b> — el pedazo de la función que queda pendiente después de un await. Se guarda aparte y se ejecuta cuando el hilo queda libre.</li>
<li><b>Microtask</b> — la fila donde esperan esas continuaciones. Tiene prioridad sobre setTimeout.</li>
</ul>

<h4>Para profundizar</h4>
<ul class="enlaces">
<li><a href="https://lenguajejs.com/asincronia/promesas/que-son/" target="_blank" rel="noopener">¿Qué son las promesas?</a> <span class="fuente">· Lenguaje JS, en español</span></li>
<li><a href="https://lenguajejs.com/asincronia/promesas/new-promise/" target="_blank" rel="noopener">Crear promesas con new Promise</a> <span class="fuente">· Lenguaje JS</span></li>
<li><a href="https://lenguajejs.com/asincronia/async-await/que-es/" target="_blank" rel="noopener">¿Qué es async/await?</a> <span class="fuente">· Lenguaje JS</span></li>
<li><a href="https://www.freecodecamp.org/espanol/news/tutorial-async-await-de-javascript-aprende-callbacks-promesas-y-async-await-en-js-haciendo-helados/" target="_blank" rel="noopener">Callbacks, promesas y async/await haciendo helados</a> <span class="fuente">· freeCodeCamp, con dibujos</span></li>
<li><a href="https://developer.mozilla.org/es/docs/Web/API/Window/setTimeout" target="_blank" rel="noopener">setTimeout()</a> <span class="fuente">· MDN, para consultar</span></li>
</ul>
`,
    katas: [
      {
        id: 'k1',
        titulo: 'Nombre para el marcador',
        dificultad: 'Fácil',
        minutos: 10,
        enunciado: `<p>El marcador de la pista muestra los nombres en mayúsculas, pero el API los devuelve en minúsculas. Tu función tiene que pedirle el piloto al API y devolver <b>solo su nombre, en mayúsculas</b>.</p>
<p>Todas las katas de hoy trabajan contra el mismo API del cronometraje. Te lo pasan como parámetro <code>api</code>:</p>
<pre><code>api.piloto(id)
// Promise&lt;{ id, nombre, equipoId }&gt;
// Rechaza con Error('piloto ' + id + ' no existe') si el id no está.

api.equipo(equipoId)
// Promise&lt;{ id, nombre, moto }&gt;</code></pre>
<pre><code>await nombreParaMarcador(api, 63);
// 'FRANCESCO BAGNAIA'</code></pre>
<p>Si el piloto no existe, deja que el error salga: no lo atrapes todavía. Eso es la kata 4.</p>
<p><b>Pista:</b> <code>api.piloto(id)</code> devuelve una promesa. Sin <code>await</code> te quedas con el ticket, no con el piloto.</p>`,
        plantilla: `async function nombreParaMarcador(api, id) {
  // TODO
}`,
        exporta: ['nombreParaMarcador'],
        pruebas: [
          { nombre: 'devuelve el nombre en mayúsculas', correr: async (m) => {
            const api = { piloto: async (id) => ({ id, nombre: 'francesco bagnaia', equipoId: 'ducati' }) };
            igual(await m.nombreParaMarcador(api, 63), 'FRANCESCO BAGNAIA');
          }},
          { nombre: 'le pide al API el id correcto', correr: async (m) => {
            let pedido = null;
            const api = { piloto: async (id) => { pedido = id; return { id, nombre: 'marc marquez', equipoId: 'x' }; } };
            await m.nombreParaMarcador(api, 93);
            igual(pedido, 93, 'le pediste al API el id ' + pedido + ' en vez del 93');
          }},
          { nombre: 'devuelve un texto, no una promesa', correr: async (m) => {
            const api = { piloto: async () => ({ id: 1, nombre: 'pedro acosta', equipoId: 'y' }) };
            const r = await m.nombreParaMarcador(api, 1);
            cierto(typeof r === 'string', 'devolviste ' + (r instanceof Promise ? 'una promesa: ¿te faltó un await adentro?' : typeof r));
          }},
          { nombre: 'si el piloto no existe, el error sale hacia afuera', correr: async (m) => {
            const api = { piloto: async (id) => { throw new Error('piloto ' + id + ' no existe'); } };
            await lanza(() => m.nombreParaMarcador(api, 999), 'piloto 999 no existe');
          }},
        ],
      },
      {
        id: 'k2',
        titulo: 'Espaciar las peticiones',
        dificultad: 'Fácil',
        minutos: 10,
        enunciado: `<p>El API del cronometraje te bloquea si le haces dos peticiones seguidas demasiado rápido. Necesitas poder <b>pausar</b> entre una y otra.</p>
<p>El problema: <code>setTimeout</code> es más viejo que las promesas y no devuelve una, así que no se le puede hacer <code>await</code>. Escribe <code>esperar(ms)</code>, que sí.</p>
<pre><code>console.log('primera petición');
await esperar(300);
console.log('segunda petición, 300ms después');</code></pre>
<p><b>Recibe:</b> <code>ms</code>, un número. <b>Devuelve:</b> una promesa que se cumple, sin valor, pasados esos milisegundos.</p>
<p><b>Pista:</b> <code>new Promise</code> te entrega el botón <code>resolve</code>. Dáselo a <code>setTimeout</code> para que lo apriete él.</p>`,
        plantilla: `function esperar(ms) {
  // TODO
}`,
        exporta: ['esperar'],
        pruebas: [
          { nombre: 'devuelve una promesa', correr: (m) => {
            cierto(m.esperar(1) instanceof Promise, 'tiene que devolver una Promise. ¿Te faltó el return?');
          }},
          { nombre: 'espera de verdad el tiempo pedido', correr: async (m) => {
            const t = Date.now();
            await m.esperar(80);
            const pasó = Date.now() - t;
            cierto(pasó >= 65, 'debía esperar ~80ms y esperó ' + pasó + 'ms');
          }},
          { nombre: 'sirve para espaciar dos peticiones', correr: async (m) => {
            const momentos = [];
            const api = { piloto: async () => { momentos.push(Date.now()); return {}; } };
            await api.piloto();
            await m.esperar(100);
            await api.piloto();
            cierto(momentos[1] - momentos[0] >= 85, 'las dos peticiones salieron casi juntas');
          }},
        ],
      },
      {
        id: 'k3',
        titulo: 'El API que se cae',
        dificultad: 'Media',
        minutos: 20,
        enunciado: `<p>El API del cronometraje falla de vez en cuando por saturación: la misma petición que revienta ahora funciona medio segundo después. No queremos mostrarle un error al equipo por eso.</p>
<p>Escribe <code>traerPilotoConReintento(api, id, intentos, esperaMs)</code>:</p>
<ul>
<li>Pide el piloto. Si llega, lo devuelve y no insiste más.</li>
<li>Si falla, espera <code>esperaMs</code> y vuelve a intentar.</li>
<li>Agotados los intentos, lanza el <b>último</b> error, no el primero.</li>
</ul>
<p>Con <code>intentos = 3</code> se llama al API como máximo <b>3</b> veces, no 4. Y no tiene sentido esperar después del último intento fallido: sería tiempo regalado.</p>
<pre><code>// el API falla dos veces y a la tercera responde
await traerPilotoConReintento(api, 63, 3, 100);
// { id: 63, nombre: 'francesco bagnaia', equipoId: 'ducati' }</code></pre>
<p>Te dejo <code>esperar</code> ya escrita, la de la kata anterior.</p>
<p><b>Pista:</b> un <code>for</code> normal, con <code>try / catch</code> adentro y una variable fuera del bucle donde guardes el último error.</p>`,
        plantilla: `// Ya la escribiste en la kata 2. Aquí te la doy lista.
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function traerPilotoConReintento(api, id, intentos = 3, esperaMs = 20) {
  // TODO
}`,
        exporta: ['traerPilotoConReintento'],
        pruebas: [
          { nombre: 'si el API responde a la primera, no reintenta', correr: async (m) => {
            let llamadas = 0;
            const api = { piloto: async (id) => { llamadas++; return { id, nombre: 'acosta', equipoId: 'ktm' }; } };
            const r = await m.traerPilotoConReintento(api, 31, 3, 5);
            igual(r.nombre, 'acosta');
            igual(llamadas, 1, 'llamó al API ' + llamadas + ' veces y solo debía llamarlo 1');
          }},
          { nombre: 'insiste hasta que el API responde', correr: async (m) => {
            let llamadas = 0;
            const api = { piloto: async (id) => {
              llamadas++;
              if (llamadas < 3) throw new Error('503 saturado');
              return { id, nombre: 'bagnaia', equipoId: 'ducati' };
            }};
            igual((await m.traerPilotoConReintento(api, 63, 5, 5)).nombre, 'bagnaia');
            igual(llamadas, 3);
          }},
          { nombre: 'lanza el ÚLTIMO error, no el primero', correr: async (m) => {
            let n = 0;
            const api = { piloto: async () => { n++; throw new Error('fallo ' + n); } };
            await lanza(() => m.traerPilotoConReintento(api, 1, 3, 5), 'fallo 3');
          }},
          { nombre: 'respeta el número exacto de intentos', correr: async (m) => {
            let n = 0;
            const api = { piloto: async () => { n++; throw new Error('503'); } };
            try { await m.traerPilotoConReintento(api, 1, 3, 5); } catch (_) {}
            igual(n, 3, 'llamó al API ' + n + ' veces y debían ser exactamente 3');
          }},
          { nombre: 'espera entre intento e intento', correr: async (m) => {
            let n = 0;
            const api = { piloto: async () => { n++; throw new Error('503'); } };
            const t = Date.now();
            try { await m.traerPilotoConReintento(api, 1, 3, 60); } catch (_) {}
            const total = Date.now() - t;
            cierto(total >= 100, 'con 3 intentos y 60ms de espera debía tardar ~120ms, tardó ' + total + 'ms');
            cierto(total < 230, 'esperó de más: no hay que esperar después del último intento');
          }},
        ],
      },
      {
        id: 'k4',
        titulo: 'Que el panel no se caiga',
        dificultad: 'Media',
        minutos: 15,
        enunciado: `<p>El panel muestra 22 pilotos. Si uno solo falla y dejas que el error suba, se cae la pantalla entera y el equipo se queda sin ver nada.</p>
<p>Escribe <code>traerPilotoSeguro(api, id)</code>, que <b>nunca se rechaza</b>. Siempre devuelve un objeto que dice cómo fue:</p>
<pre><code>await traerPilotoSeguro(api, 63);
// { ok: true, piloto: { id: 63, nombre: 'francesco bagnaia', equipoId: 'ducati' } }

await traerPilotoSeguro(api, 999);
// { ok: false, error: Error('piloto 999 no existe') }</code></pre>
<p>Arriba, quien la use decide qué hacer con un <code>if</code>, en vez de anidar try/catch por todas partes. Este patrón es de los que más se usan en código real.</p>
<p><b>Pista:</b> un solo <code>try / catch</code>, y en cada rama devuelves un objeto distinto.</p>`,
        plantilla: `async function traerPilotoSeguro(api, id) {
  // TODO
}`,
        exporta: ['traerPilotoSeguro'],
        pruebas: [
          { nombre: 'cuando el API responde devuelve ok: true', correr: async (m) => {
            const piloto = { id: 63, nombre: 'francesco bagnaia', equipoId: 'ducati' };
            const api = { piloto: async () => piloto };
            igualProfundo(await m.traerPilotoSeguro(api, 63), { ok: true, piloto });
          }},
          { nombre: 'cuando el API falla devuelve ok: false con el error', correr: async (m) => {
            const api = { piloto: async (id) => { throw new Error('piloto ' + id + ' no existe'); } };
            const r = await m.traerPilotoSeguro(api, 999);
            igual(r.ok, false);
            cierto(r.error instanceof Error, 'el campo error debe traer el Error completo');
            igual(r.error.message, 'piloto 999 no existe');
          }},
          { nombre: 'nunca se rechaza, pase lo que pase', correr: async (m) => {
            const api = { piloto: async () => { throw new Error('503'); } };
            let explotó = false;
            try { await m.traerPilotoSeguro(api, 1); } catch (_) { explotó = true; }
            cierto(!explotó, 'no puede rechazar nunca: ese es todo su oficio');
          }},
          { nombre: 'el panel entero sobrevive a un piloto roto', correr: async (m) => {
            const api = { piloto: async (id) => {
              if (id === 2) throw new Error('piloto 2 no existe');
              return { id, nombre: 'piloto ' + id, equipoId: 'x' };
            }};
            const filas = [];
            for (const id of [1, 2, 3]) filas.push(await m.traerPilotoSeguro(api, id));
            igual(filas.length, 3);
            igual(filas.filter((f) => f.ok).length, 2, 'debían salvarse 2 de las 3 filas');
          }},
        ],
      },
      {
        id: 'k5',
        titulo: 'Ficha completa del piloto',
        dificultad: 'Media',
        minutos: 20,
        enunciado: `<p>Al hacer clic en un piloto, el panel abre su ficha: nombre, equipo y moto. Pero el API está partido en dos: primero pides el piloto, y <b>de ahí</b> sacas el <code>equipoId</code> para poder pedir el equipo.</p>
<pre><code>await fichaDelPiloto(api, 63);
// { nombre: 'francesco bagnaia', equipo: 'Ducati Lenovo', moto: 'Desmosedici GP' }</code></pre>
<p>Aquí las dos peticiones van <b>en serie a la fuerza</b>: la segunda necesita un dato de la primera. No se pueden lanzar a la vez, y eso está bien. En el día 2 verás los casos en que sí se puede.</p>
<p>Si el piloto no existe, deja que el error salga.</p>
<p><b>Pista:</b> dos <code>await</code>, uno debajo del otro. El segundo usa lo que devolvió el primero.</p>`,
        plantilla: `async function fichaDelPiloto(api, id) {
  // TODO
}`,
        exporta: ['fichaDelPiloto'],
        pruebas: [
          { nombre: 'arma la ficha con los datos de las dos peticiones', correr: async (m) => {
            const api = {
              piloto: async (id) => ({ id, nombre: 'francesco bagnaia', equipoId: 'ducati' }),
              equipo: async (eid) => ({ id: eid, nombre: 'Ducati Lenovo', moto: 'Desmosedici GP' }),
            };
            igualProfundo(await m.fichaDelPiloto(api, 63), {
              nombre: 'francesco bagnaia', equipo: 'Ducati Lenovo', moto: 'Desmosedici GP',
            });
          }},
          { nombre: 'usa el equipoId que vino del piloto', correr: async (m) => {
            let pedido = null;
            const api = {
              piloto: async (id) => ({ id, nombre: 'acosta', equipoId: 'ktm-tech3' }),
              equipo: async (eid) => { pedido = eid; return { id: eid, nombre: 'Tech3', moto: 'RC16' }; },
            };
            await m.fichaDelPiloto(api, 31);
            igual(pedido, 'ktm-tech3', 'le pediste el equipo "' + pedido + '" en vez del que traía el piloto');
          }},
          { nombre: 'pide primero el piloto y después el equipo', correr: async (m) => {
            const orden = [];
            const api = {
              piloto: async (id) => { orden.push('piloto'); await dormir(20); return { id, nombre: 'x', equipoId: 'e' }; },
              equipo: async (eid) => { orden.push('equipo'); return { id: eid, nombre: 'E', moto: 'M' }; },
            };
            await m.fichaDelPiloto(api, 1);
            igualProfundo(orden, ['piloto', 'equipo'], 'el equipo no se puede pedir antes que el piloto');
          }},
          { nombre: 'si el piloto no existe, el error sale hacia afuera', correr: async (m) => {
            const api = {
              piloto: async (id) => { throw new Error('piloto ' + id + ' no existe'); },
              equipo: async () => ({ id: 'x', nombre: 'X', moto: 'M' }),
            };
            await lanza(() => m.fichaDelPiloto(api, 999), 'piloto 999 no existe');
          }},
        ],
      },
    ],
  },

  'S0-d2': {
    leccion: `
<h4>Tres motos, un cronómetro</h4>
<p>Tienes tres motos y quieres el tiempo de vuelta de cada una. Hay dos formas de organizar eso, y confundirlas cuesta minutos reales:</p>
<table class="tabla">
<tr><th>Forma</th><th>En la pista</th><th>3 vueltas de 90s</th></tr>
<tr><td>En serie</td><td>una moto sale, termina, entra; sale la siguiente</td><td><b>270 s</b></td></tr>
<tr><td>En paralelo</td><td>las tres salen juntas</td><td><b>90 s</b></td></tr>
</table>

<h4>La idea que hay que grabarse</h4>
<pre><code>const motos = [46, 93, 63];
const tiempos = motos.map(async (n) =&gt; cronometrar(n));
// [ Promise, Promise, Promise ]  ← tres CRONÓMETROS andando, no tres tiempos</code></pre>
<p><code>map</code> no sabe que tu función es async. Solo hace una cosa: llamarla una vez por moto y guardar <b>lo que devuelva</b>. Una función <code>async</code> devuelve un ticket. Entonces <code>map</code> te devuelve una bandeja de tickets.</p>
<p>Mandar a las tres motos a la pista fue correcto. Lo que falta es <b>esperar a que crucen meta</b>, y eso lo hace <code>Promise.all</code>:</p>
<pre><code>const tiempos = await Promise.all(motos.map(cronometrar));   // ✓ [91.4, 90.8, 92.1]</code></pre>

<h4>forEach es el comisario que se va de la pista</h4>
<pre><code>motos.forEach(async (n) =&gt; {
  const t = await cronometrar(n);
  console.log('moto', n, t);
});
console.log('carrera terminada, publico resultados');

// Salida real:
// carrera terminada, publico resultados   ← publicaste la tabla vacía
// moto 46 91.4
// moto 93 90.8
// moto 63 92.1</code></pre>
<p><code>forEach</code> <b>bota</b> lo que devuelve tu función. Las motos sí salieron, pero nadie se quedó a cronometrar, y si una se cae nadie la anota. Es el comisario que da la salida y se va a almorzar.</p>
<p><code>for...of</code> sí espera, porque es sintaxis del lenguaje: el <code>await</code> pausa la función de verdad. En <code>forEach</code> el <code>await</code> vive dentro de <i>otra</i> función, y pausar esa no pausa el recorrido.</p>
<pre><code>// SERIE: cada moto espera su turno de pista
for (const moto of motos) {
  tiempos.push(await cronometrar(moto));
}</code></pre>

<h4>¿Cuándo serie y cuándo paralelo?</h4>
<p>Paralelo por defecto. Serie solo por una razón real: cuando el paso N necesita el resultado del N-1 (no puedes montar la llanta antes de desmontar la vieja), o cuando solo hay un box y no caben dos motos.</p>

<h4>El error típico: sumar mientras traes</h4>
<pre><code>// ✗ ni siquiera arranca: await necesita estar dentro de una función async
const total = motos.reduce((acc, m) =&gt; acc + await cronometrar(m), 0);

// ✓ primero cronometra TODO, después suma. Dos oficios distintos.
const tiempos = await Promise.all(motos.map(cronometrar));
const total = tiempos.reduce((acc, t) =&gt; acc + t, 0);</code></pre>
<p>Esa separación —<b>primero traigo, después calculo</b>— desenreda el 90% de los líos con async.</p>

<h4>Cortocircuito: el primero que cumple</h4>
<p>Buscas la primera moto que baje de 91 segundos. Apenas la encuentras, <b>paras</b>: no tiene sentido seguir cronometrando las otras. Eso no lo hace <code>filter</code> (su callback devuelve un ticket, y un ticket siempre es "verdadero"), ni <code>Promise.all</code> (esa evalúa todo). Se hace en serie, a propósito, con un <code>return</code> adentro del <code>for</code>.</p>

<h4>Línea por línea</h4>
<pre><code>/* FUNCION procesarEnParalelo
   Para qué sirve: mandar TODAS las motos a la pista al mismo tiempo y
                   devolver sus tiempos cuando todas hayan cruzado.
   Recibe:  items -> el array de cosas a procesar (los dorsales)
            fn    -> una función ASYNC que procesa UNA cosa y devuelve
                     una promesa (cronometrar una moto)
   Devuelve: una promesa con el array de resultados, EN EL ORDEN del array. */
async function procesarEnParalelo(items, fn) {

  /* Se lee de adentro hacia afuera. Vamos por partes. */

  /* 1) items.map(...)
        map recorre el array y construye UNO NUEVO con lo que devuelva
        la función en cada vuelta. No modifica el original.
        Como fn es async, lo que devuelve en cada vuelta es una PROMESA.
        Resultado de esta línea: [Promise, Promise, Promise]
        Y muy importante: al llamar a fn, la tarea YA ARRANCÓ. Las tres
        motos ya están en pista mientras leemos la siguiente línea. */

  /* 2) Promise.all([...])
        Recibe un array de promesas y devuelve UNA sola promesa.
        Se resuelve cuando TODAS se resuelven, con un array de los valores
        en el mismo orden del array de entrada (no en orden de llegada).
        Si UNA se rechaza, esta promesa se rechaza de una y se pierden las demás. */

  /* 3) return
        Devolvemos esa promesa. Como la función es async, quien la llame
        con await recibe directamente el array de valores. */
  return Promise.all(items.map((item) => fn(item)));
}

/* CÓMO SE USA */
const dorsales = [46, 93, 63];
const tiempos = await procesarEnParalelo(dorsales, cronometrar);
/* tiempos -> [91.4, 90.8, 92.1]  (mismo orden que dorsales) */</code></pre>
<p>Y ahora la versión en serie, para que veas que el cambio no es de estilo sino de comportamiento:</p>
<pre><code>async function procesarEnSerie(items, fn) {
  /* Un array vacío donde vamos guardando. const es suficiente: no vamos a
     reasignar la variable, solo a meterle cosas con push. */
  const resultados = [];

  /* for...of  -> recorre los VALORES del array (no los índices).
     Es sintaxis del lenguaje, no una función; por eso el await de adentro
     sí pausa esta función de verdad. */
  for (const item of items) {

    /* await fn(item) -> arranca la tarea Y espera a que termine.
       Hasta que no termine, no se da la siguiente vuelta del bucle.
       Ese es exactamente el motivo de que esto sea lento. */
    resultados.push(await fn(item));
  }

  return resultados;
}</code></pre>

<h4>Para repetir de memoria</h4>
<p class="frase"><code>map</code> con async devuelve una bandeja de <b>promesas</b>; <code>forEach</code> no espera; <code>for...of</code> sí.</p>
<h4>Conceptos clave</h4>
<ul class="conceptos">
<li><b>Callback</b> — una función que le pasas a otra para que la llame ella. El callback de map, el de forEach, el de setTimeout.</li>
<li><b>map</b> — recorre un array y construye uno NUEVO con lo que devuelva el callback en cada vuelta. No modifica el original y no espera nada.</li>
<li><b>forEach</b> — recorre el array pero descarta lo que devuelva el callback. Por eso nunca espera a una función async.</li>
<li><b>for...of</b> — sintaxis del lenguaje para recorrer los valores de un array. Al ser sintaxis y no una función, el await de adentro sí pausa.</li>
<li><b>Promise.all</b> — recibe un array de promesas y devuelve una sola. Se cumple cuando todas se cumplen, con los valores en el orden del array.</li>
<li><b>Serie vs paralelo</b> — serie es esperar una antes de arrancar la siguiente; paralelo es arrancarlas todas y esperar al final.</li>
</ul>

<h4>Para profundizar</h4>
<ul class="enlaces">
<li><a href="https://lenguajejs.com/asincronia/introduccion/que-es/" target="_blank" rel="noopener">¿Qué es la asincronía?</a> <span class="fuente">· Lenguaje JS, en español</span></li>
<li><a href="https://lenguajejs.com/asincronia/control/promise-all/" target="_blank" rel="noopener">Manejar promesas en grupo</a> <span class="fuente">· Lenguaje JS</span></li>
<li><a href="https://www.freecodecamp.org/espanol/news/como-aprender-promesas-javascript-y-async-await-en-20-minutos/" target="_blank" rel="noopener">Promesas y async/await en 20 minutos</a> <span class="fuente">· freeCodeCamp</span></li>
<li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank" rel="noopener">Array.prototype.map()</a> <span class="fuente">· MDN, para consultar</span></li>
<li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of" target="_blank" rel="noopener">for...of</a> <span class="fuente">· MDN, para consultar</span></li>
</ul>
`,
    plantilla: `// Sigues en el cronometraje. Ahora son varias motos a la vez.

// 1. procesarEnSerie(items, fn): una moto a la vez. La siguiente sale cuando
//    la anterior terminó. Devuelve los resultados EN ORDEN.
async function procesarEnSerie(items, fn) {
  // TODO
}

// 2. procesarEnParalelo(items, fn): todas salen juntas.
//    Con 4 motos de 60ms debe tardar ~60ms, no ~240ms.
//    El resultado va en el orden del array, no en el orden de llegada.
async function procesarEnParalelo(items, fn) {
  // TODO
}

// 3. primerQueCumple(items, predicadoAsync): recorre EN SERIE y devuelve el
//    primero que cumpla. Apenas lo encuentras, PARAS: las demás no se
//    evalúan. Si ninguno cumple, undefined.
async function primerQueCumple(items, predicadoAsync) {
  // TODO
}

// 4. sumarAsync(items, fnAsync): suma de await fnAsync(item) para todos.
//    En paralelo. Primero traes todo, después sumas.
async function sumarAsync(items, fnAsync) {
  // TODO
}`,
    exporta: ['procesarEnSerie', 'procesarEnParalelo', 'primerQueCumple', 'sumarAsync'],
    pruebas: [
      { nombre: 'procesarEnSerie mantiene el orden', correr: async (m) => {
        igualProfundo(await m.procesarEnSerie([1, 2, 3], async (n) => { await dormir(10); return n * 2; }), [2, 4, 6]);
      }},
      { nombre: 'procesarEnSerie va de a uno (no en paralelo)', correr: async (m) => {
        let enVuelo = 0, maximo = 0;
        await m.procesarEnSerie([1, 2, 3, 4], async (n) => {
          enVuelo++; maximo = Math.max(maximo, enVuelo);
          await dormir(25); enVuelo--; return n;
        });
        igual(maximo, 1, 'nunca debe haber 2 tareas al mismo tiempo');
      }},
      { nombre: 'procesarEnParalelo mantiene el orden del array', correr: async (m) => {
        igualProfundo(
          await m.procesarEnParalelo([50, 10, 30], async (ms) => { await dormir(ms); return ms; }),
          [50, 10, 30],
        );
      }},
      { nombre: 'procesarEnParalelo sí corre en paralelo', correr: async (m) => {
        const t = Date.now();
        await m.procesarEnParalelo([1, 2, 3, 4], async () => { await dormir(60); });
        const total = Date.now() - t;
        cierto(total < 130, 'esperaba ~60ms, tardó ' + total + 'ms');
      }},
      { nombre: 'primerQueCumple devuelve el primero y corta', correr: async (m) => {
        const vistos = [];
        const r = await m.primerQueCumple(['a', 'bb', 'ccc', 'dddd'], async (s) => {
          vistos.push(s); await dormir(5); return s.length >= 3;
        });
        igual(r, 'ccc');
        igualProfundo(vistos, ['a', 'bb', 'ccc'], 'no debe evaluar "dddd"');
      }},
      { nombre: 'primerQueCumple devuelve undefined si ninguno cumple', correr: async (m) => {
        igual(await m.primerQueCumple([1, 2], async () => false), undefined);
      }},
      { nombre: 'sumarAsync suma y devuelve un número', correr: async (m) => {
        const total = await m.sumarAsync([1, 2, 3, 4], async (n) => { await dormir(5); return n * 10; });
        igual(total, 100);
        igual(typeof total, 'number');
      }},
    ],
  },

  'S0-d3': {
    leccion: `
<h4>Tu equipo tiene tres pilotos en carrera</h4>
<p>Los cuatro combinadores son cuatro formas distintas de preguntar "¿cómo le fue al equipo?". Todos reciben una lista de tickets y te devuelven <b>uno solo</b>.</p>
<table class="tabla">
<tr><th></th><th>La pregunta que responde</th><th>Falla cuando…</th></tr>
<tr><td><code>all</code></td><td>"¿terminaron los TRES?"</td><td>uno se cae, y se acabó de una</td></tr>
<tr><td><code>allSettled</code></td><td>"dame el acta: quién terminó y quién se cayó"</td><td>nunca</td></tr>
<tr><td><code>race</code></td><td>"¿quién cruzó primero?"</td><td>si el primero en cruzar lo hizo arrastrando la moto</td></tr>
<tr><td><code>any</code></td><td>"¿quién fue el primero en TERMINAR bien?"</td><td>solo si se caen todos</td></tr>
</table>

<h4>all vs allSettled: la decisión real</h4>
<p>La pregunta que hay que hacerse siempre es: <b>¿la pantalla sirve de algo si falta un dato?</b></p>
<pre><code>// El podio necesita los tres primeros. Sin uno, no hay podio.
const podio = await Promise.all([p1, p2, p3]);          // all

// La tabla general sí sirve a medias: al que se cayó le pones "DNF".
const acta = await Promise.allSettled([p1, p2, p3]);    // allSettled
// [{ status: 'fulfilled', value }, { status: 'rejected', reason }, ...]</code></pre>
<p>Como esa forma es incómoda de leer, casi siempre se traduce a algo más humano: <code>{ ok: true, valor }</code> o <code>{ ok: false, error }</code>.</p>

<h4>race: el tiempo límite de vuelta</h4>
<p>En carreras hay un tiempo máximo: si no cruzas en cierto plazo, te sacan de la pista. Eso es un timeout, y se arma con <code>race</code> entre la moto y un cronómetro:</p>
<pre><code>function conTiempoLimite(promesa, ms, mensaje = 'timeout') {
  let id;
  const cronometro = new Promise((_, reject) =&gt; {
    id = setTimeout(() =&gt; reject(new Error(mensaje)), ms);
  });
  return Promise.race([promesa, cronometro]).finally(() =&gt; clearTimeout(id));
}

const datos = await conTiempoLimite(fetch(url), 5000, 'el servidor no respondió');</code></pre>
<p>Dos cosas que hay que saber decir:</p>
<p><b>1.</b> <code>race</code> <b>no saca la moto de la pista.</b> Sigue rodando; tú simplemente dejaste de esperarla. Para sacarla de verdad se necesita <code>AbortController</code>.</p>
<p><b>2.</b> El <code>clearTimeout</code> no es adorno: si no apagas el cronómetro, queda andando y en Node el proceso no termina.</p>

<h4>Concurrencia limitada: el pit lane</h4>
<p>Tienes 20 motos que necesitan entrar a boxes, pero <b>solo hay 3 boxes</b>. Lanzar las 20 de una es como meterlas todas al pit lane al tiempo: choque garantizado. Con APIs pasa igual: 500 peticiones simultáneas y te banean o te tumban el servidor.</p>
<p>El error de principiante es hacerlo <b>por tandas</b>: mandar 3, esperar a que salgan las 3, mandar otras 3. Suena razonable y desperdicia muchísimo tiempo, porque cada tanda se queda esperando a la moto más lenta con dos boxes vacíos.</p>
<pre><code>// ✗ por tandas: dos boxes parados mientras la tercera se demora
for (const tanda of trocear(motos, 3)) await Promise.all(tanda.map(entrarABoxes));</code></pre>
<p>Lo correcto es <b>3 mecánicos con una lista compartida</b>: cada uno toma la siguiente moto de la lista y, apenas termina con la suya, toma otra. Nunca hay un box vacío mientras quede fila.</p>
<pre><code>let siguiente = 0;
async function mecanico() {
  while (siguiente &lt; motos.length) {
    const i = siguiente++;        // tomo la siguiente de la fila
    resultados[i] = await entrarABoxes(motos[i]);
  }
}</code></pre>
<p>¿Y ese <code>siguiente++</code> no puede darle la misma moto a dos mecánicos? No: JavaScript es de <b>un solo hilo</b>, y el turno solo se cede en un <code>await</code>. Ahí no hay ninguno, así que nadie se cuela en la mitad.</p>

<h4>Línea por línea</h4>
<pre><code>/* FUNCION conTiempoLimite
   Para qué sirve: ponerle un plazo máximo a cualquier promesa.
   Recibe:  promesa -> la tarea real que puede demorarse (un fetch, por ejemplo)
            ms      -> el plazo máximo en milisegundos
            mensaje -> el texto del error si se vence el plazo
   Devuelve: una promesa que entrega el valor si llegó a tiempo,
             o se rechaza si se venció.
   OJO: NO es async. No hace falta: ya estamos devolviendo una promesa. */
function conTiempoLimite(promesa, ms, mensaje = 'timeout') {

  /* mensaje = 'timeout'  -> valor por defecto. Si quien llama no manda el
     tercer argumento, mensaje vale 'timeout'. */

  /* let, no const: la vamos a asignar DENTRO del executor de abajo y
     necesitamos leerla después, afuera. */
  let id;

  /* El cronómetro: una promesa que SOLO sabe fallar.
     (_, reject) -> el guion bajo es el resolve, que no vamos a usar nunca.
     Es una convención para decir "este parámetro existe pero lo ignoro". */
  const cronometro = new Promise((_, reject) => {

    /* Guardamos el id que devuelve setTimeout para poder apagarlo luego.
       setTimeout SIEMPRE devuelve un identificador del temporizador. */
    id = setTimeout(
      () => reject(new Error(mensaje)),  /* la bandera roja */
      ms
    );
  });

  /* Promise.race -> recibe un array de promesas y devuelve la PRIMERA que
     termine, sea con éxito o con fallo. Las otras siguen corriendo; race
     simplemente deja de escucharlas. */
  return Promise.race([promesa, cronometro])

    /* .finally -> se ejecuta SIEMPRE, ganara quien ganara.
       clearTimeout(id) apaga el cronómetro. Si no lo apagas, queda andando
       y en Node el proceso no termina hasta que se dispare. */
    .finally(() => clearTimeout(id));
}

/* CÓMO SE USA */
try {
  const datos = await conTiempoLimite(fetch(url), 5000, 'el servidor no respondió');
} catch (error) {
  /* Entra aquí tanto si falló el fetch como si se venció el plazo.
     error.message te dice cuál de los dos fue. */
  console.log(error.message);
}</code></pre>

<h4>Para repetir de memoria</h4>
<p class="frase"><code>Promise.all</code> conserva el orden del array y falla completo al primer rechazo.</p>
<h4>Conceptos clave</h4>
<ul class="conceptos">
<li><b>Promise.all</b> — todas o nada: se cumple si se cumplen todas, y se rechaza apenas una falle.</li>
<li><b>Promise.allSettled</b> — nunca se rechaza: devuelve el estado de cada una, con status fulfilled o rejected.</li>
<li><b>Promise.race</b> — devuelve la primera que termine, sea con éxito o con fallo. No cancela a las demás.</li>
<li><b>Promise.any</b> — devuelve la primera que tenga ÉXITO. Solo falla si fallan todas, con un AggregateError.</li>
<li><b>Timeout</b> — ponerle un plazo máximo a una promesa, corriendo un reloj contra ella con race.</li>
<li><b>Concurrencia limitada</b> — ejecutar muchas tareas permitiendo solo N al mismo tiempo, y metiendo una nueva apenas se desocupe un puesto.</li>
<li><b>AbortController</b> — el mecanismo para cancelar de verdad una operación en curso, no solo dejar de esperarla. Lo verás en la semana 06.</li>
</ul>

<h4>Para profundizar</h4>
<ul class="enlaces">
<li><a href="https://lenguajejs.com/asincronia/control/que-es/" target="_blank" rel="noopener">¿Qué es el control de promesas?</a> <span class="fuente">· Lenguaje JS, en español</span></li>
<li><a href="https://lenguajejs.com/asincronia/control/promise-all/" target="_blank" rel="noopener">all, allSettled, race y any, con tabla comparativa</a> <span class="fuente">· Lenguaje JS</span></li>
<li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all" target="_blank" rel="noopener">Promise.all()</a> <span class="fuente">· MDN, para consultar</span></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled" target="_blank" rel="noopener">Promise.allSettled()</a> <span class="fuente">· MDN, solo en inglés</span></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any" target="_blank" rel="noopener">Promise.any()</a> <span class="fuente">· MDN, solo en inglés</span></li>
</ul>
`,
    plantilla: `// Cierre del sprint: el acta de carrera y el pit lane.

// 1. resultadosDeTodas(promesas): el acta. Por cada piloto
//    { ok: true, valor } o { ok: false, error }, en orden. Nunca rechaza.
async function resultadosDeTodas(promesas) {
  // TODO
}

// 2. conTiempoLimite(promesa, ms, mensaje): el tiempo límite de vuelta.
//    Devuelve el valor si termina antes de ms; si se pasa, rechaza con
//    new Error(mensaje). Acuérdate de apagar el cronómetro.
function conTiempoLimite(promesa, ms, mensaje = 'timeout') {
  // TODO
}

// 3. mapConLimite(items, limite, fn): el pit lane con 'limite' boxes.
//    Nunca más de 'limite' tareas al mismo tiempo, y apenas se desocupa un
//    box entra la siguiente de la fila (NO por tandas).
//    Resultados en el orden original.
//    Es la más difícil del sprint: date los 40 minutos completos.
async function mapConLimite(items, limite, fn) {
  // TODO
}`,
    exporta: ['resultadosDeTodas', 'conTiempoLimite', 'mapConLimite'],
    pruebas: [
      { nombre: 'resultadosDeTodas no rechaza aunque haya fallos', correr: async (m) => {
        const r = await m.resultadosDeTodas([Promise.resolve(1), Promise.reject(new Error('mal')), Promise.resolve(3)]);
        igual(r.length, 3);
        igualProfundo(r[0], { ok: true, valor: 1 });
        igual(r[1].ok, false);
        igual(r[1].error.message, 'mal');
        igualProfundo(r[2], { ok: true, valor: 3 });
      }},
      { nombre: 'conTiempoLimite deja pasar lo que llega a tiempo', correr: async (m) => {
        const lenta = (async () => { await dormir(20); return 'llegué'; })();
        igual(await m.conTiempoLimite(lenta, 300), 'llegué');
      }},
      { nombre: 'conTiempoLimite corta lo que se demora', correr: async (m) => {
        const lenta = (async () => { await dormir(400); return 'tarde'; })();
        await lanza(() => m.conTiempoLimite(lenta, 50, 'se demoró'), 'se demoró');
      }},
      { nombre: 'mapConLimite devuelve todo en orden', correr: async (m) => {
        igualProfundo(await m.mapConLimite([1, 2, 3, 4, 5], 2, async (n) => { await dormir(10); return n * n; }), [1, 4, 9, 16, 25]);
      }},
      { nombre: 'mapConLimite nunca pasa del límite', correr: async (m) => {
        let enVuelo = 0, maximo = 0;
        await m.mapConLimite([...Array(10).keys()], 3, async (n) => {
          enVuelo++; maximo = Math.max(maximo, enVuelo);
          await dormir(15); enVuelo--; return n;
        });
        igual(maximo, 3, 'el máximo en vuelo debía ser 3, fue ' + maximo);
      }},
      { nombre: 'mapConLimite sí aprovecha el paralelismo', correr: async (m) => {
        const t = Date.now();
        await m.mapConLimite([...Array(6).keys()], 3, async () => { await dormir(50); });
        const total = Date.now() - t;
        cierto(total < 200, 'esperaba ~100ms (2 tandas), tardó ' + total + 'ms');
      }},
    ],
  },

  '01-d1': {
    leccion: `
<h4>La flecha es el atajo, pero cambia una cosa de fondo</h4>
<pre><code>function tiempoVuelta(s) { return s + 0.5; }          // declaración
const tiempoVuelta = function (s) { return s + 0.5; }; // expresión
const tiempoVuelta = (s) =&gt; s + 0.5;                   // flecha</code></pre>
<p>Las dos primeras son casi lo mismo. La flecha se ve más corta, pero lo importante no es el ahorro de letras: es <b>de quién es el <code>this</code></b>. Ya llegamos.</p>

<h4>Retorno implícito: sin llaves, devuelve; con llaves, hay que decirlo</h4>
<pre><code>const doble = (n) =&gt; n * 2;        // ✓ devuelve n * 2
const doble = (n) =&gt; { n * 2; };   // ✗ devuelve undefined: faltó return</code></pre>
<p>Y el caso que todo el mundo falla la primera vez: devolver un objeto. Las llaves de un objeto se confunden con las llaves de un bloque, así que hay que envolverlas en paréntesis:</p>
<pre><code>const piloto = (n) =&gt; ({ dorsal: n });   // ✓ devuelve el objeto
const piloto = (n) =&gt; { dorsal: n };     // ✗ JavaScript lee un bloque vacío</code></pre>

<h4>El <code>this</code>: el casco prestado</h4>
<p>Una función normal es como un casco sin dueño fijo: <b>quien la llama se lo pone</b>. Una flecha viene con el nombre marcado desde el taller donde nació, y ese nombre no cambia por más que la presten.</p>
<pre><code>const cronometro = {
  equipo: 'Ducati',

  // ✗ función normal: quien dispara el evento se pone el casco.
  //    Aquí this es el botón, no el cronómetro.
  malo() {
    boton.addEventListener('click', function () {
      console.log(this.equipo);   // undefined
    });
  },

  // ✓ flecha: conserva el this del lugar donde fue escrita (el cronómetro).
  bueno() {
    boton.addEventListener('click', () =&gt; {
      console.log(this.equipo);   // 'Ducati'
    });
  },
};</code></pre>
<p>Por eso la flecha es la que quieres en callbacks, <code>setTimeout</code>, <code>map</code> y eventos. Y por eso mismo es la que <b>no</b> quieres como método de un objeto:</p>
<pre><code>const vueltas = {
  n: 0,
  sumar: () =&gt; { this.n++; },   // ✗ this NO es el objeto vueltas
  sumarBien() { this.n++; },    // ✓
};</code></pre>
<p>Regla práctica: <b>método de un objeto → función normal. Callback dentro de un método → flecha.</b></p>

<h4>Funciones que fabrican funciones</h4>
<p>Una moto no tiene "una velocidad": tiene una relación de transmisión que convierte revoluciones en velocidad. Eso es una función que devuelve otra función:</p>
<pre><code>const conRelacion = (factor) =&gt; (rpm) =&gt; rpm * factor;

const primera = conRelacion(0.02);
const sexta   = conRelacion(0.11);
primera(9000);  // 180
sexta(9000);    // 990</code></pre>
<p>Fabricas la herramienta una vez y la usas mil. Es exactamente lo que hacen <code>map</code>, <code>filter</code> y los hooks de React.</p>

<h4>Línea por línea: las tres formas, lado a lado</h4>
<pre><code>/* FORMA 1 — DECLARACIÓN DE FUNCIÓN
   La palabra function, un nombre, paréntesis con los parámetros y llaves.
   Necesita return explícito. */
function sumarVuelta(tiempo, penalizacion) {
  return tiempo + penalizacion;
}

/* FORMA 2 — EXPRESIÓN DE FUNCIÓN
   La misma función, pero guardada en una variable. La función no tiene
   nombre propio: el nombre es el de la variable. */
const sumarVuelta = function (tiempo, penalizacion) {
  return tiempo + penalizacion;
};

/* FORMA 3 — FUNCIÓN DE FLECHA
   El equivalente corto de la forma 2. Se lee:
   "(estos parámetros) => (esto devuelve)".
   Sin llaves, lo que va después de la flecha ES el return. */
const sumarVuelta = (tiempo, penalizacion) => tiempo + penalizacion;</code></pre>

<pre><code>/* LAS REGLAS DE ESCRITURA DE LA FLECHA */

/* a) Con varias instrucciones: llaves y return explícito. */
const clasificar = (t) => {
  const limite = 92;              /* variable interna, vive solo aquí */
  return t &lt; limite;              /* sin este return, devuelve undefined */
};

/* b) Con una sola instrucción: sin llaves y sin return. */
const clasificar = (t) => t &lt; 92;

/* c) Un solo parámetro: los paréntesis son opcionales.
      Los dos de abajo son idénticos. */
const doble = (n) => n * 2;
const doble = n => n * 2;

/* d) Sin parámetros: los paréntesis vacíos son OBLIGATORIOS. */
const ahora = () => Date.now();

/* e) Devolver un OBJETO: hay que envolverlo en paréntesis, porque las
      llaves de un objeto se confunden con las llaves de un bloque. */
const piloto = (n) => ({ dorsal: n });   /* ✓ devuelve { dorsal: n } */
const piloto = (n) => { dorsal: n };     /* ✗ bloque vacío -> undefined */</code></pre>

<pre><code>/* EL this: LA ÚNICA DIFERENCIA DE FONDO */

const cronometro = {
  equipo: 'Ducati',              /* propiedad del objeto */

  arrancar() {                   /* método: función normal, this = cronometro */

    /* setInterval recibe una función y la ejecuta cada X ms. */
    setInterval(function () {
      /* function normal -> this lo pone QUIEN la llama.
         Quien llama aquí es setInterval, no el cronometro. */
      console.log(this.equipo);  /* undefined */
    }, 1000);

    setInterval(() => {
      /* flecha -> no tiene this propio. Usa el del lugar donde fue
         ESCRITA, que es el método arrancar, cuyo this es cronometro. */
      console.log(this.equipo);  /* 'Ducati' */
    }, 1000);
  },
};</code></pre>

<h4>Para repetir de memoria</h4>
<p class="frase">La flecha no tiene <code>this</code> propio: hereda el del lugar donde fue escrita. Por eso sirve en callbacks y no sirve como método.</p>
<h4>Conceptos clave</h4>
<ul class="conceptos">
<li><b>Función de flecha</b> — forma corta de escribir una función. Sin llaves, lo que va después de la flecha es el valor que devuelve.</li>
<li><b>Retorno implícito</b> — cuando la flecha no lleva llaves y devuelve directamente la expresión, sin escribir return.</li>
<li><b>this</b> — el objeto al que pertenece la llamada. En una función normal lo decide QUIEN la llama; una flecha no tiene this propio y usa el del lugar donde fue escrita.</li>
<li><b>Función de orden superior</b> — una función que recibe otra función como parámetro o que devuelve una función.</li>
<li><b>Callback</b> — la función que le entregas a otra para que la ejecute ella. Aquí es donde la flecha brilla, porque conserva el this.</li>
</ul>

<h4>Para profundizar</h4>
<ul class="enlaces">
<li><a href="https://lenguajejs.com/javascript/funciones/arrow-functions/" target="_blank" rel="noopener">Arrow functions</a> <span class="fuente">· Lenguaje JS, en español</span></li>
<li><a href="https://www.aprendejavascript.dev/clase/funciones/closures" target="_blank" rel="noopener">Closures, con ejemplos progresivos</a> <span class="fuente">· Aprende JavaScript</span></li>
<li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions" target="_blank" rel="noopener">Funciones flecha</a> <span class="fuente">· MDN, para consultar</span></li>
<li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this" target="_blank" rel="noopener">this</a> <span class="fuente">· MDN, para consultar</span></li>
</ul>
`,
    plantilla: `// Taller de flechas. Escenario: telemetría de una moto.

// 1. aFlecha: reescribe esto como UNA sola flecha con retorno implícito.
//    function aFlecha(n) { return n * n + 1; }
const aFlecha = null; // TODO: reemplaza por la flecha

// 2. crearPunto(x, y): la posición de la moto en la pista.
//    Devuelve { x, y } con retorno implícito (ojo con los paréntesis).
const crearPunto = null; // TODO

// 3. multiplicarPor(factor): la relación de transmisión.
//    Devuelve una función que multiplica por factor.
const multiplicarPor = null; // TODO

// 4. aplicarDosVeces(fn, valor): dos vueltas de calentamiento.
//    Devuelve fn(fn(valor)).
const aplicarDosVeces = null; // TODO

// 5. crearEtiquetadora(prefijo): el radio del equipo. Devuelve un OBJETO con
//    - etiquetar(texto)      -> prefijo + ': ' + texto
//    - etiquetarTodo(lista)  -> usa map internamente
//    Ojo: etiquetar necesita llegar a los datos del objeto. Piensa bien
//    cuál de las dos formas de función te sirve aquí.
function crearEtiquetadora(prefijo) {
  // TODO
}`,
    exporta: ['aFlecha', 'crearPunto', 'multiplicarPor', 'aplicarDosVeces', 'crearEtiquetadora'],
    pruebas: [
      { nombre: 'aFlecha calcula n*n+1 y es una flecha', correr: (m) => {
        igual(m.aFlecha(3), 10);
        igual(m.aFlecha(0), 1);
        cierto(!String(m.aFlecha).trim().startsWith('function'), 'debe ser una función de flecha');
      }},
      { nombre: 'crearPunto devuelve el objeto (ojo con los paréntesis)', correr: (m) => {
        igualProfundo(m.crearPunto(2, 5), { x: 2, y: 5 });
        igualProfundo(m.crearPunto(0, 0), { x: 0, y: 0 });
      }},
      { nombre: 'multiplicarPor devuelve una función', correr: (m) => {
        const triple = m.multiplicarPor(3);
        igual(typeof triple, 'function');
        igual(triple(5), 15);
        igual(m.multiplicarPor(0)(99), 0);
        igual(m.multiplicarPor(2)(m.multiplicarPor(2)(3)), 12);
      }},
      { nombre: 'aplicarDosVeces aplica dos veces', correr: (m) => {
        igual(m.aplicarDosVeces((n) => n + 3, 1), 7);
        igual(m.aplicarDosVeces((s) => s + '!', 'ya'), 'ya!!');
      }},
      { nombre: 'crearEtiquetadora etiqueta', correr: (m) => {
        const e = m.crearEtiquetadora('TODO');
        igual(e.etiquetar('estudiar'), 'TODO: estudiar');
        igualProfundo(e.etiquetarTodo(['a', 'b']), ['TODO: a', 'TODO: b']);
      }},
      { nombre: 'dos etiquetadoras no se pisan', correr: (m) => {
        const a = m.crearEtiquetadora('A');
        const b = m.crearEtiquetadora('B');
        igual(a.etiquetar('x'), 'A: x');
        igual(b.etiquetar('x'), 'B: x');
      }},
    ],
  },

  '01-d2': {
    leccion: `
<h4>El closure es la mochila</h4>
<p>Un mecánico sale del taller a la pista con su mochila de herramientas. Aunque esté a 500 metros del taller, sigue teniendo <b>lo que había en el taller cuando salió</b>.</p>
<p>Eso es un closure: una función que se lleva las variables del lugar <b>donde nació</b>, no de donde la ejecutan.</p>
<pre><code>function crearContadorDeVueltas() {
  let vueltas = 0;              // esto vive en el taller
  return () =&gt; ++vueltas;       // y esta función se lo lleva en la mochila
}

const moto46 = crearContadorDeVueltas();
moto46(); // 1
moto46(); // 2
moto46.vueltas;  // undefined ← desde afuera nadie mete la mano a la mochila</code></pre>

<h4>Cada moto con su propia mochila</h4>
<pre><code>const moto46 = crearContadorDeVueltas();
const moto93 = crearContadorDeVueltas();

moto46(); moto46(); moto46();   // 3
moto93();                        // 1  ← su cuenta es suya</code></pre>
<p>Cada llamada a la fábrica crea un taller nuevo. No se comparte nada. Por eso puedes tener 20 contadores sin que se pisen.</p>

<h4>Estado privado de verdad: el tanque de gasolina</h4>
<p>No puedes meter la mano al tanque y sacar gasolina. Solo puedes <b>cargar</b> y <b>consumir</b>, y las dos operaciones tienen reglas.</p>
<pre><code>function crearTanque(litros) {
  let combustible = litros;               // nadie afuera lo ve

  return {
    cargar(n) {
      if (n &lt;= 0) throw new Error('cantidad inválida');
      combustible += n;
      return combustible;
    },
    consumir(n) {
      if (n &gt; combustible) throw new Error('tanque vacío');
      combustible -= n;                   // ojo: valida ANTES de tocar nada
      return combustible;
    },
    nivel: () =&gt; combustible,
  };
}</code></pre>
<p>Fíjate en <code>consumir</code>: valida primero y resta después. Si lanzara a mitad de camino, dejarías el tanque en un estado inventado. <b>Un error no debe dejar basura.</b></p>

<h4>El error típico: un solo tablero para tres motos</h4>
<pre><code>var fs = [];
for (var i = 0; i &lt; 3; i++) fs.push(() =&gt; i);
fs.map(f =&gt; f());   // [3, 3, 3]  ✗</code></pre>
<p>Con <code>var</code> hay <b>un solo tablero</b> colgado en la pared y las tres funciones lo miran. Cuando por fin las llamas, el tablero ya dice 3.</p>
<pre><code>const gs = [];
for (let j = 0; j &lt; 3; j++) gs.push(() =&gt; j);
gs.map(g =&gt; g());   // [0, 1, 2]  ✓</code></pre>
<p>Con <code>let</code>, cada vuelta del bucle imprime su propio tablero y cada función se lleva el suyo en la mochila.</p>

<h4>Encapsular de verdad: la fotocopia</h4>
<pre><code>historial: () =&gt; [...entradas],   // ✓ le das una fotocopia
historial: () =&gt; entradas,        // ✗ le prestas el cuaderno original</code></pre>
<p>Si devuelves el array interno, cualquiera le puede hacer <code>push</code> y ya no encapsulaste nada: pusiste una puerta con la llave puesta.</p>

<h4>Línea por línea</h4>
<pre><code>/* FUNCION crearContador
   Para qué sirve: fabricar un contador independiente, con su número
                   guardado por dentro donde nadie lo pueda tocar.
   Recibe:  inicio -> el valor de arranque. Si no lo mandan, vale 0.
   Devuelve: un OBJETO con tres funciones que comparten ese número. */
function crearContador(inicio = 0) {

  /* let, no const: este valor SÍ se va a reasignar (cuenta = cuenta + 1).
     Esta variable vive dentro de crearContador. Cuando la función termina,
     normalmente se borraría... pero no se borra, porque las funciones de
     abajo se la llevan en la mochila. Eso es el closure. */
  let cuenta = inicio;

  /* Devolvemos un objeto literal con tres propiedades.
     Cada valor es una función de flecha. */
  return {

    /* ++cuenta  -> suma 1 y devuelve el valor YA sumado.
       cuenta++  -> devuelve el valor viejo y DESPUÉS suma. Cuidado con este. */
    incrementar: () => ++cuenta,

    decrementar: () => --cuenta,

    /* valor NO suma nada: solo deja mirar. Es la única ventana al dato.
       Fíjate que devolvemos el número, no la variable: quien lo reciba
       no puede modificar cuenta con él. */
    valor: () => cuenta,
  };
}

/* CÓMO SE USA */
const moto46 = crearContador();     /* arranca en 0 */
const moto93 = crearContador(10);   /* arranca en 10 */

moto46.incrementar();   /* 1 */
moto46.incrementar();   /* 2 */
moto93.valor();         /* 10  <- su cuenta es independiente */
moto46.cuenta;          /* undefined <- desde afuera no existe */</code></pre>

<pre><code>/* POR QUÉ CADA CONTADOR ES INDEPENDIENTE

   Cada vez que LLAMAS a crearContador, JavaScript crea un espacio de
   memoria nuevo para esa ejecución, con su propia variable cuenta.
   Las tres flechas que devuelves apuntan a ESE espacio.

   Dos llamadas = dos espacios = dos cuenta distintas.
   No hay ninguna variable compartida entre moto46 y moto93. */</code></pre>

<h4>Para repetir de memoria</h4>
<p class="frase">Un closure recuerda el lugar donde <b>nació</b>, no donde se ejecuta.</p>
<h4>Conceptos clave</h4>
<ul class="conceptos">
<li><b>Closure</b> — una función que recuerda las variables del lugar donde fue CREADA, aunque se ejecute en otro lado y mucho después.</li>
<li><b>Ámbito (scope)</b> — la zona del código donde una variable existe y se puede usar.</li>
<li><b>var vs let</b> — var no respeta los bloques y hay una sola por función; let crea una variable nueva en cada bloque, y en cada vuelta de un bucle.</li>
<li><b>TDZ</b> — el tramo entre el inicio del bloque y la línea donde se declara un let o const. La variable ya existe pero tocarla lanza ReferenceError.</li>
<li><b>Encapsulación</b> — esconder el estado para que solo se pueda tocar por los métodos que tú expones, con sus reglas.</li>
</ul>

<h4>Para profundizar</h4>
<ul class="enlaces">
<li><a href="https://www.aprendejavascript.dev/clase/funciones/closures" target="_blank" rel="noopener">Closures, de contadores a datos privados</a> <span class="fuente">· Aprende JavaScript, en español</span></li>
<li><a href="https://lenguajejs.com/javascript/funciones/arrow-functions/" target="_blank" rel="noopener">Arrow functions</a> <span class="fuente">· Lenguaje JS</span></li>
<li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Closures" target="_blank" rel="noopener">Closures</a> <span class="fuente">· MDN, para consultar</span></li>
</ul>
`,
    plantilla: `// Closures. Escenario: el box de un equipo de motos.

// 1. crearContador(inicio = 0): el contador de vueltas de una moto.
//    Devuelve { incrementar, decrementar, valor }.
//    El número vive SOLO adentro: desde afuera no se puede tocar.
//    Dos contadores no se pisan entre sí.
function crearContador(inicio = 0) {
  // TODO
}

// 2. unaVez(fn): encender la moto. Solo prende la PRIMERA vez;
//    después devuelve el resultado guardado sin volver a ejecutar fn.
function unaVez(fn) {
  // TODO
}

// 3. crearCuenta(saldoInicial): el tanque de gasolina.
//    { depositar, retirar, saldo }
//    depositar(monto): monto <= 0 lanza Error('monto inválido').
//    retirar(monto): si no alcanza lanza Error('fondos insuficientes')
//                    y el saldo NO cambia (valida antes de tocar nada).
function crearCuenta(saldoInicial = 0) {
  // TODO
}

// 4. crearFunciones(n): n tableros, uno por vuelta.
//    La función de la posición i devuelve i.
//    crearFunciones(3).map(f => f())  ->  [0, 1, 2]
//    Hazlo bien y después, por curiosidad, escríbelo con var y mira qué pasa.
function crearFunciones(n) {
  // TODO
}`,
    exporta: ['crearContador', 'unaVez', 'crearCuenta', 'crearFunciones'],
    pruebas: [
      { nombre: 'crearContador cuenta', correr: (m) => {
        const c = m.crearContador(5);
        c.incrementar(); c.incrementar(); c.decrementar();
        igual(c.valor(), 6);
      }},
      { nombre: 'dos contadores son independientes', correr: (m) => {
        const a = m.crearContador(), b = m.crearContador();
        a.incrementar(); a.incrementar();
        igual(a.valor(), 2);
        igual(b.valor(), 0, 'b no debe verse afectado por a');
      }},
      { nombre: 'el estado del contador es privado', correr: (m) => {
        const c = m.crearContador(1);
        igual(c.cuenta, undefined, 'no expongas la variable interna');
      }},
      { nombre: 'unaVez ejecuta una sola vez y recuerda el resultado', correr: (m) => {
        let veces = 0;
        const init = m.unaVez((x) => { veces++; return x * 2; });
        igual(init(10), 20);
        igual(init(99), 20, 'debe devolver el resultado guardado');
        igual(veces, 1);
      }},
      { nombre: 'crearCuenta deposita y retira', correr: (m) => {
        const cuenta = m.crearCuenta(100);
        igual(cuenta.depositar(50), 150);
        igual(cuenta.retirar(20), 130);
        igual(cuenta.saldo(), 130);
      }},
      { nombre: 'crearCuenta valida y no corrompe el saldo', correr: (m) => {
        const cuenta = m.crearCuenta(100);
        lanzaSync(() => cuenta.retirar(500), 'fondos insuficientes');
        igual(cuenta.saldo(), 100, 'un retiro fallido no debe cambiar el saldo');
        lanzaSync(() => cuenta.depositar(0), 'monto inválido');
        igual(cuenta.saldo(), 100);
      }},
      { nombre: 'crearFunciones captura cada índice', correr: (m) => {
        igualProfundo(m.crearFunciones(3).map((f) => f()), [0, 1, 2]);
        igualProfundo(m.crearFunciones(0).map((f) => f()), []);
      }},
    ],
  },

  '01-d3': {
    leccion: `
<h4>Las mismas dos líneas de ayer, ahora ganando plata</h4>
<p>Una variable recordada más una función que la usa. Eso es todo lo que hay debajo de memoize, debounce y los custom hooks de React. Cambia el escenario, no el mecanismo.</p>

<h4>Memoize: la libreta del mecánico</h4>
<p>El jefe de mecánicos ya calculó la relación de piñones óptima para Termas de Río Hondo. El año que viene, cuando vuelvan a esa pista, <b>no la vuelve a calcular</b>: la busca en la libreta.</p>
<pre><code>function memorizar(fn) {
  const libreta = new Map();          // vive en el closure
  return (...args) =&gt; {
    const clave = JSON.stringify(args);
    if (!libreta.has(clave)) libreta.set(clave, fn(...args));
    return libreta.get(clave);
  };
}

const calcular = memorizar(calculoPesado);
calcular('Termas', 28);   // calcula: 3 segundos
calcular('Termas', 28);   // lo busca en la libreta: instantáneo</code></pre>
<p>Limitación honesta: <code>JSON.stringify</code> no distingue <code>{a:1,b:2}</code> de <code>{b:2,a:1}</code> y no sirve con funciones. Para el 95% de los casos alcanza.</p>

<h4>Debounce: el portón del garaje</h4>
<p>El portón tiene un sensor. Mientras alguien siga pasando, <b>no cierra</b>. Cierra tres segundos después del último que pasó. Si pasan diez personas seguidas, el portón cierra <b>una vez</b>, no diez.</p>
<pre><code>function crearDebounce(fn, ms) {
  let id = null;
  const envuelta = (...args) =&gt; {
    clearTimeout(id);                       // cancela el cierre anterior
    id = setTimeout(() =&gt; fn(...args), ms); // y programa uno nuevo
  };
  envuelta.cancelar = () =&gt; clearTimeout(id);
  return envuelta;
}</code></pre>
<p>Es exactamente lo que evita que un buscador dispare una petición por cada letra que escribes. Escribes "ducati" y sale <b>una</b> búsqueda, la de "ducati", no seis.</p>

<h4>El error típico: la mochila adentro en vez de afuera</h4>
<pre><code>// ✗ el id se declara DENTRO de la función devuelta
const malo = (fn, ms) =&gt; (...args) =&gt; {
  let id;                                  // ← nace vacío en cada llamada
  clearTimeout(id);                        // no cancela nada
  id = setTimeout(() =&gt; fn(...args), ms);  // y se acumulan los timers
};</code></pre>
<p>Si la variable no vive en el closure de <b>afuera</b>, no hay mochila, no hay memoria, y el portón se queda abriéndose y cerrándose solo. Cada vez que algo "no recuerda", pregúntate dónde declaraste la variable.</p>

<h4>Tubería: la línea de montaje</h4>
<p>La moto pasa por estaciones en orden: lavado, luego ajuste, luego revisión. La salida de una es la entrada de la siguiente.</p>
<pre><code>const preparar = tuberia(
  (s) =&gt; s.trim(),
  (s) =&gt; s.toLowerCase(),
);
preparar('  DUCATI  ');   // 'ducati'</code></pre>

<h4>Línea por línea</h4>
<pre><code>/* FUNCION crearDebounce
   Para qué sirve: evitar que una función se ejecute muchas veces seguidas.
                   Solo se ejecuta cuando dejan de llamarla por un rato.
   Recibe:  fn -> la función que queremos ejecutar (buscar, guardar...)
            ms -> cuántos milisegundos de silencio hay que esperar
   Devuelve: una función NUEVA que envuelve a fn, más un método .cancelar */
function crearDebounce(fn, ms) {

  /* El id del temporizador pendiente. null = no hay ninguno programado.
     ESTA LÍNEA ES LA CLAVE DE TODO: está AFUERA de la función que
     devolvemos, así que sobrevive entre una llamada y la siguiente.
     Si la pusieras adentro, nacería en null cada vez y no cancelarías nada. */
  let id = null;

  /* La función que le vamos a entregar a quien nos llamó.
     (...args) -> parámetro REST: recoge TODOS los argumentos que le pasen,
     sean los que sean, y los mete en un array llamado args. */
  const envuelta = (...args) => {

    /* Cancela el temporizador anterior, si había uno.
       clearTimeout con un id que ya no existe no falla: simplemente no hace
       nada. Por eso no hace falta preguntar if (id). */
    clearTimeout(id);

    /* Y programa uno nuevo. Como el anterior quedó cancelado, solo va a
       sobrevivir el ÚLTIMO, con los argumentos de la última llamada. */
    id = setTimeout(() => {
      id = null;          /* ya se disparó: no hay nada pendiente */

      /* fn(...args) -> el spread: desarma el array args y pasa cada
         elemento como un argumento suelto.
         Si args es ['ducati', 3], esto llama a fn('ducati', 3). */
      fn(...args);
    }, ms);
  };

  /* En JavaScript las funciones son objetos: se les pueden colgar
     propiedades. Aquí le colgamos un método para cancelar a mano. */
  envuelta.cancelar = () => {
    clearTimeout(id);
    id = null;
  };

  return envuelta;
}

/* CÓMO SE USA */
const buscar = crearDebounce((texto) => console.log('buscando', texto), 400);

buscar('d');        /* programa, 400ms */
buscar('du');       /* cancela el anterior, reprograma */
buscar('duc');      /* cancela, reprograma */
/* ...400ms de silencio... */
/* sale UNA sola vez:  buscando duc */</code></pre>

<h4>Para repetir de memoria</h4>
<p class="frase">Lo que se recuerda es lo que está en el scope de <b>afuera</b>; lo que se declara adentro nace de cero en cada llamada.</p>
<h4>Conceptos clave</h4>
<ul class="conceptos">
<li><b>Memoización</b> — guardar el resultado de una función para no volver a calcularlo cuando llegan los mismos argumentos.</li>
<li><b>Debounce</b> — posponer una acción hasta que pasen N milisegundos sin nuevas llamadas. Muchas llamadas seguidas producen una sola ejecución.</li>
<li><b>TTL</b> — tiempo de vida de un dato en caché. Pasado ese plazo, se considera vencido.</li>
<li><b>Map</b> — estructura clave-valor. A diferencia de un objeto, acepta cualquier tipo como clave y mantiene el orden de inserción.</li>
<li><b>Composición</b> — encadenar funciones pequeñas para que la salida de una sea la entrada de la siguiente.</li>
<li><b>Parámetro rest</b> — los tres puntos en la firma (...args): recoge todos los argumentos sobrantes en un array.</li>
</ul>

<h4>Para profundizar</h4>
<ul class="enlaces">
<li><a href="https://www.aprendejavascript.dev/clase/funciones/closures" target="_blank" rel="noopener">Closures</a> <span class="fuente">· Aprende JavaScript, en español</span></li>
<li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Map" target="_blank" rel="noopener">Map</a> <span class="fuente">· MDN, para consultar</span></li>
<li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters" target="_blank" rel="noopener">Parámetros rest</a> <span class="fuente">· MDN, para consultar</span></li>
</ul>
`,
    plantilla: `// Closures útiles. Escenario: herramientas del taller.

// 1. memorizar(fn): la libreta del mecánico. Si ya calculó con esos mismos
//    argumentos, devuelve lo guardado sin volver a ejecutar fn.
function memorizar(fn) {
  // TODO
}

// 2. limitarLlamadas(fn, maximo): las llantas de repuesto. Ejecuta fn hasta
//    'maximo' veces; de ahí en adelante devuelve undefined sin ejecutarla.
function limitarLlamadas(fn, maximo) {
  // TODO
}

// 3. crearDebounce(fn, ms): el portón del garaje. Pospone fn hasta que pasen
//    ms sin llamadas nuevas. Cinco llamadas seguidas -> UNA ejecución, con
//    los argumentos de la última. Expón además un método .cancelar().
function crearDebounce(fn, ms) {
  // TODO
}

// 4. tuberia(...fns): la línea de montaje. Pasa un valor por todas las fns,
//    de izquierda a derecha.
//    tuberia(x => x + 1, x => x * 2)(3)  ->  8
//    tuberia()(3) -> 3
function tuberia(...fns) {
  // TODO
}`,
    exporta: ['memorizar', 'limitarLlamadas', 'crearDebounce', 'tuberia'],
    pruebas: [
      { nombre: 'memorizar evita recalcular', correr: (m) => {
        let n = 0;
        const lento = m.memorizar((a, b) => { n++; return a + b; });
        igual(lento(2, 3), 5);
        igual(lento(2, 3), 5);
        igual(n, 1);
        igual(lento(4, 4), 8);
        igual(n, 2, 'argumentos distintos sí deben ejecutar');
      }},
      { nombre: 'cada función memorizada tiene su propia caché', correr: (m) => {
        const a = m.memorizar((x) => x * 2);
        const b = m.memorizar((x) => x * 100);
        igual(a(2), 4);
        igual(b(2), 200, 'b no debe leer la caché de a');
      }},
      { nombre: 'limitarLlamadas corta después del máximo', correr: (m) => {
        let veces = 0;
        const f = m.limitarLlamadas(() => ++veces, 2);
        igual(f(), 1); igual(f(), 2); igual(f(), undefined);
        igual(veces, 2);
      }},
      { nombre: 'crearDebounce ejecuta una vez con el último argumento', correr: async (m) => {
        const recibidos = [];
        const buscar = m.crearDebounce((t) => recibidos.push(t), 40);
        buscar('a'); buscar('ab'); buscar('abc');
        igualProfundo(recibidos, [], 'todavía no debe haber ejecutado');
        await dormir(90);
        igualProfundo(recibidos, ['abc']);
      }},
      { nombre: 'crearDebounce se puede cancelar', correr: async (m) => {
        let veces = 0;
        const f = m.crearDebounce(() => veces++, 30);
        f(); f.cancelar();
        await dormir(70);
        igual(veces, 0);
      }},
      { nombre: 'tuberia encadena', correr: (m) => {
        igual(m.tuberia((x) => x + 1, (x) => x * 2)(3), 8);
        igual(m.tuberia()(3), 3);
        igual(m.tuberia((s) => s.trim(), (s) => s.toLowerCase())('  HOLA  '), 'hola');
      }},
    ],
  },

  '01-d4': {
    leccion: `
<h4>El taller que arma motos</h4>
<p>Una <b>fábrica</b> es una función que arma objetos. Cada moto que sale del taller lleva su propio número de chasis y su propia mochila, sin que tú tengas que acordarte de nada.</p>
<pre><code>function crearMoto(marca) {
  let kilometros = 0;                          // privado de verdad
  return {
    marca,
    rodar(km) { kilometros += km; return kilometros; },
    odometro: () =&gt; kilometros,
  };
}

const a = crearMoto('Ducati');
const b = crearMoto('KTM');
a.rodar(120);
b.odometro();   // 0 ← el de b es suyo</code></pre>
<p>La alternativa es <code>class</code>, que viniendo de C# te va a resultar más familiar:</p>
<pre><code>class Moto {
  #kilometros = 0;                     // el # es lo que lo hace privado
  constructor(marca) { this.marca = marca; }
  rodar(km) { return this.#kilometros += km; }
}
const a = new Moto('Ducati');</code></pre>
<p>¿Cuál? La fábrica no necesita <code>new</code> ni te expone a problemas de <code>this</code>. La clase es más eficiente con miles de instancias. Para 20 objetos, la que leas más cómodo.</p>

<h4>El módulo: la bitácora de mantenimiento</h4>
<p>El cuaderno de mantenimiento vive en el taller. Tú puedes <b>pedir que anoten algo</b> y <b>pedir una fotocopia</b>, pero no te llevas el cuaderno.</p>
<pre><code>function crearBitacora() {
  const entradas = [];                          // el cuaderno, en el taller

  return {
    anotar(tipo, detalle) { entradas.push({ tipo, detalle }); },
    historial: () =&gt; [...entradas],             // fotocopia
    limpiar() { entradas.length = 0; },          // ← vacía SIN reasignar
  };
}</code></pre>
<p>Ese <code>entradas.length = 0</code> en vez de <code>entradas = []</code> importa: reasignar rompería la mochila de las otras funciones, que seguirían apuntando al cuaderno viejo. Vaciar el cuaderno no es lo mismo que comprar uno nuevo.</p>

<h4>Aplicación parcial: el corrientazo</h4>
<p>El almuerzo ejecutivo ya trae fijos la sopa y el jugo. Tú solo eliges la proteína. Eso es aplicación parcial: dejar unos argumentos puestos de antemano.</p>
<pre><code>const parcial = (fn, ...fijos) =&gt; (...resto) =&gt; fn(...fijos, ...resto);

const radio = (equipo, piloto, mensaje) =&gt; equipo + ' a ' + piloto + ': ' + mensaje;
const radioDucati = parcial(radio, 'Ducati');
radioDucati('Bagnaia', 'entra a boxes');   // 'Ducati a Bagnaia: entra a boxes'</code></pre>
<p><b>Curry</b> lleva la idea al extremo: acumula argumentos de a uno hasta juntar los que la función necesita (<code>fn.length</code>), y solo entonces ejecuta. <code>c(1)(2)(3)</code>, <code>c(1,2)(3)</code> y <code>c(1,2,3)</code> dan lo mismo.</p>

<h4>Línea por línea</h4>
<pre><code>/* FUNCION crearRegistro
   Para qué sirve: llevar una bitácora cuyo contenido no se pueda modificar
                   desde afuera, solo a través de los métodos que exponemos.
   Recibe:  nada.
   Devuelve: un objeto con cuatro funciones que comparten el mismo array. */
function crearRegistro() {

  /* const, no let: la VARIABLE nunca se reasigna. El array sí se modifica
     por dentro (push), y eso const lo permite.
     const congela la caja, no el contenido. */
  const entradas = [];

  return {

    /* Método escrito con la forma corta: registrar(...) {...} es lo mismo
       que  registrar: function (...) {...} */
    registrar(nivel, mensaje) {
      /* push mete un elemento al final y MUTA el array.
         Aquí sí queremos mutar: es nuestro array privado, nadie más lo ve. */
      entradas.push({ nivel, mensaje });
      /* { nivel, mensaje } es forma corta de { nivel: nivel, mensaje: mensaje } */
    },

    /* [...entradas] -> spread sobre un array: crea uno NUEVO con los mismos
       elementos. Devolvemos una fotocopia.
       Si devolviéramos entradas a secas, quien la reciba podría hacerle
       push y estaría modificando nuestro estado privado. */
    historial() {
      return [...entradas];
    },

    /* entradas.length = 0 vacía el array EN SITIO.
       NO uses  entradas = []  aquí: eso crearía un array nuevo y las otras
       tres funciones seguirían apuntando al viejo. Además const no deja. */
    limpiar() {
      entradas.length = 0;
    },

    /* reduce recorre el array acumulando UN solo resultado.
       Recibe: 1) una función (acumulador, elementoActual) => nuevoAcumulador
               2) el valor inicial del acumulador (aquí, un objeto vacío) */
    contarPorNivel() {
      return entradas.reduce((acc, e) => {

        /* acc[e.nivel] ?? 0
           ?? es el operador "nullish": usa el valor de la izquierda salvo
           que sea null o undefined, y ahí usa el de la derecha.
           La primera vez que aparece un nivel, acc[e.nivel] es undefined,
           así que arranca en 0. */
        acc[e.nivel] = (acc[e.nivel] ?? 0) + 1;

        /* reduce EXIGE devolver el acumulador en cada vuelta. Si olvidas
           este return, la siguiente vuelta recibe undefined y todo se rompe. */
        return acc;
      }, {});
    },
  };
}

/* CÓMO SE USA */
const log = crearRegistro();
log.registrar('info', 'arrancó');
log.registrar('error', 'se cayó');
log.contarPorNivel();   /* { info: 1, error: 1 } */
log.historial().push({ nivel: 'hack' });   /* muta la fotocopia */
log.historial().length; /* 2 <- el original quedó intacto */</code></pre>

<h4>Para repetir de memoria</h4>
<p class="frase">Devolver el cuaderno en vez de la fotocopia es fingir que encapsulas.</p>
<h4>Conceptos clave</h4>
<ul class="conceptos">
<li><b>Función fábrica</b> — una función que arma y devuelve objetos, cada uno con su propio estado privado. No necesita new.</li>
<li><b>Patrón módulo</b> — exponer un objeto con métodos públicos mientras los datos quedan escondidos en el closure.</li>
<li><b>Aplicación parcial</b> — dejar fijos algunos argumentos de una función y esperar el resto después.</li>
<li><b>Currificación (curry)</b> — transformar f(a, b, c) en una función invocable como f(a)(b)(c), acumulando argumentos hasta completarlos.</li>
<li><b>reduce</b> — recorre un array acumulando un solo resultado. Recibe una función (acumulador, elemento) y el valor inicial del acumulador.</li>
<li><b>Operador ??</b> — el "nullish": usa el valor de la izquierda salvo que sea null o undefined.</li>
</ul>

<h4>Para profundizar</h4>
<ul class="enlaces">
<li><a href="https://www.aprendejavascript.dev/clase/funciones/closures" target="_blank" rel="noopener">Closures</a> <span class="fuente">· Aprende JavaScript, en español</span></li>
<li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank" rel="noopener">Array.prototype.reduce()</a> <span class="fuente">· MDN, para consultar</span></li>
<li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax" target="_blank" rel="noopener">Sintaxis spread</a> <span class="fuente">· MDN, para consultar</span></li>
</ul>
`,
    plantilla: `// Fábricas y módulos. Escenario: la administración del equipo.

// 1. crearGeneradorDeIds(prefijo = 'id'): el numerador de chasis.
//    Cada llamada produce el siguiente: 'moto-1', 'moto-2'...
//    Dos generadores NO comparten el contador.
function crearGeneradorDeIds(prefijo = 'id') {
  // TODO
}

// 2. crearRegistro(): la bitácora de mantenimiento.
//    { registrar(nivel, mensaje), historial(), limpiar(), contarPorNivel() }
//    - historial() devuelve una FOTOCOPIA: mutarla no debe tocar lo interno
//    - cada entrada es { nivel, mensaje }
//    - contarPorNivel() -> { info: 2, error: 1 }
function crearRegistro() {
  // TODO
}

// 3. parcial(fn, ...fijos): el corrientazo. Deja fijos los primeros
//    argumentos y espera el resto.
function parcial(fn, ...fijos) {
  // TODO
}

// 4. curry(fn): acumula argumentos hasta juntar fn.length y ahí ejecuta.
//    curry(fn)(1)(2)(3) === curry(fn)(1,2)(3) === curry(fn)(1,2,3)
function curry(fn) {
  // TODO
}`,
    exporta: ['crearGeneradorDeIds', 'crearRegistro', 'parcial', 'curry'],
    pruebas: [
      { nombre: 'crearGeneradorDeIds numera', correr: (m) => {
        const id = m.crearGeneradorDeIds('user');
        igual(id(), 'user-1'); igual(id(), 'user-2');
        const otro = m.crearGeneradorDeIds('post');
        igual(otro(), 'post-1', 'cada generador lleva su propia cuenta');
        igual(id(), 'user-3');
      }},
      { nombre: 'crearRegistro guarda y cuenta', correr: (m) => {
        const log = m.crearRegistro();
        log.registrar('info', 'arrancó');
        log.registrar('error', 'se cayó');
        log.registrar('info', 'siguió');
        igual(log.historial().length, 3);
        igualProfundo(log.contarPorNivel(), { info: 2, error: 1 });
        log.limpiar();
        igualProfundo(log.historial(), []);
      }},
      { nombre: 'historial() devuelve una copia, no el array interno', correr: (m) => {
        const log = m.crearRegistro();
        log.registrar('info', 'uno');
        log.historial().push({ nivel: 'hack', mensaje: 'inyectado' });
        igual(log.historial().length, 1, 'mutar la copia no debe tocar lo interno');
      }},
      { nombre: 'parcial fija los primeros argumentos', correr: (m) => {
        const saludar = (s, n) => s + ', ' + n;
        const hola = m.parcial(saludar, 'Hola');
        igual(hola('David'), 'Hola, David');
        igual(hola('Ana'), 'Hola, Ana');
      }},
      { nombre: 'curry acepta los argumentos como lleguen', correr: (m) => {
        const c = m.curry((a, b, cc) => a + b + cc);
        igual(c(1)(2)(3), 6);
        igual(c(1, 2)(3), 6);
        igual(c(1)(2, 3), 6);
        igual(c(1, 2, 3), 6);
      }},
    ],
  },

  '01-d5': {
    leccion: `
<h4>El reto: la mesa de cronometraje</h4>
<p>Imagina la carpa de cronometraje de la carrera. Hay <b>una sola verdad</b> (la tabla de tiempos) y varias pantallas conectadas: la del público, la del box, la del director de carrera.</p>
<p>Nadie toca la tabla directamente. Llega un <b>parte</b> ("la moto 46 cruzó meta"), la mesa recalcula la tabla, y <b>avisa a todas las pantallas</b>. Eso es un store, y es exactamente <code>useReducer</code>.</p>
<table class="tabla">
<tr><th>En la carpa</th><th>En el código</th></tr>
<tr><td>mirar la tabla</td><td><code>obtenerEstado()</code></td></tr>
<tr><td>entregar un parte</td><td><code>despachar(accion)</code></td></tr>
<tr><td>conectar una pantalla</td><td><code>suscribir(fn)</code></td></tr>
<tr><td>el reglamento que dice cómo cambia la tabla</td><td>el <b>reductor</b></td></tr>
</table>

<h4>La regla que de verdad importa</h4>
<pre><code>const anterior = estado;
estado = reductor(estado, accion);

if (estado !== anterior) {              // ← comparación por REFERENCIA
  for (const pantalla of [...pantallas]) pantalla(estado);
}</code></pre>
<p>Si llega un parte que no cambia nada (una moto que ni siquiera está inscrita), el reductor devuelve <b>la misma tabla</b> y no se reimprime nada. Esa línea es media optimización de React.</p>
<p>Por eso un reductor que recibe un <code>id</code> inexistente debe hacer <code>return estado</code>, y <b>no</b> <code>return {...estado}</code>. La segunda forma es una tabla nueva idéntica: las pantallas se reimprimen todas para nada.</p>
<p>Y el <code>[...pantallas]</code> tampoco es adorno: si una pantalla se desconecta justo mientras estás recorriendo la lista, sin la copia te saltas la siguiente.</p>

<h4>Actualizar sin romper: las tres operaciones</h4>
<pre><code>inscribir:  [...pilotos, nuevo]
retirar:    pilotos.filter(p =&gt; p.id !== id)
actualizar: pilotos.map(p =&gt; p.id === id ? { ...p, ...cambios } : p)</code></pre>
<p>Mira bien el <code>actualizar</code>: los pilotos que no cambiaron se devuelven <b>tal cual</b>, el mismo objeto. No copias "por si acaso". Eso es lo que le permite a React repintar solo la fila que cambió en vez de la tabla entera.</p>

<h4>Línea por línea</h4>
<pre><code>/* FUNCION crearTienda
   Para qué sirve: guardar un estado en un solo sitio y avisar a quien esté
                   suscrito cada vez que cambie.
   Recibe:  reductor      -> función PURA (estado, accion) => nuevoEstado
            estadoInicial -> con qué arranca la tabla
   Devuelve: un objeto con obtenerEstado, despachar y suscribir. */
function crearTienda(reductor, estadoInicial) {

  /* let: se reasigna en cada despacho con el estado nuevo. */
  let estado = estadoInicial;

  /* let y no const: en desuscribir la vamos a REASIGNAR con un filter,
     que devuelve un array nuevo. */
  let suscriptores = [];

  return {
    /* Solo deja mirar. No devolvemos una copia porque el trato es que
       nadie mute el estado: el reductor siempre crea uno nuevo. */
    obtenerEstado: () => estado,

    despachar(accion) {
      /* Guardamos la referencia vieja ANTES de pisarla, para poder
         compararlas después. */
      const anterior = estado;

      /* El reductor decide. Nosotros no sabemos ni nos importa cómo. */
      estado = reductor(estado, accion);

      /* !== compara REFERENCIAS, no contenido.
         Si el reductor devolvió el mismo objeto (porque la acción no
         aplicaba), esto es false y no avisamos a nadie.
         Si devolvió un objeto nuevo, es true aunque el contenido se vea igual. */
      if (estado !== anterior) {

        /* [...suscriptores] -> recorremos una COPIA de la lista.
           Motivo: si un suscriptor se desuscribe mientras lo estamos
           avisando, estaría modificando el array que estamos recorriendo
           y el for se saltaría al siguiente. */
        for (const fn of [...suscriptores]) {
          fn(estado);   /* le pasamos el estado nuevo a cada pantalla */
        }
      }

      /* Devolver la acción es una convención útil: permite encadenar. */
      return accion;
    },

    suscribir(fn) {
      suscriptores.push(fn);

      /* Bandera propia de ESTA suscripción, guardada en su closure.
         Sirve para que llamar dos veces a desuscribir no haga daño. */
      let activo = true;

      /* Devolvemos la forma de deshacer lo que acabamos de hacer.
         Es el mismo patrón del cleanup de useEffect en React. */
      return function desuscribir() {
        if (!activo) return;       /* ya se desuscribió: no hacemos nada */
        activo = false;

        /* filter devuelve un array NUEVO sin los que cumplan la condición.
           Por eso suscriptores tenía que ser let. */
        suscriptores = suscriptores.filter((s) => s !== fn);
      };
    },
  };
}

/* CÓMO SE USA */
const tienda = crearTienda(reductorTareas, { tareas: [], siguienteId: 1 });
const salir = tienda.suscribir((e) => console.log('pantalla:', e.tareas.length));
tienda.despachar({ tipo: 'agregar', texto: 'estudiar' });   /* pantalla: 1 */
salir();                                                      /* se desconecta */
tienda.despachar({ tipo: 'agregar', texto: 'otra' });        /* no imprime nada */</code></pre>

<h4>Para repetir de memoria</h4>
<p class="frase">Si el estado no cambió, devuelve el mismo objeto: la igualdad por referencia es lo que evita el trabajo de más.</p>
<h4>Conceptos clave</h4>
<ul class="conceptos">
<li><b>Store</b> — un único lugar donde vive el estado, con una forma controlada de leerlo, cambiarlo y enterarse de que cambió.</li>
<li><b>Reductor</b> — función PURA que recibe (estado, accion) y devuelve el nuevo estado. No modifica el que recibe ni toca nada de afuera.</li>
<li><b>Acción</b> — un objeto que describe qué pasó, normalmente con un campo tipo y los datos que hagan falta.</li>
<li><b>Función pura</b> — con los mismos argumentos siempre devuelve lo mismo, y no produce efectos por fuera.</li>
<li><b>Inmutabilidad</b> — no modificar los datos existentes sino crear versiones nuevas. Es lo que permite comparar por referencia.</li>
<li><b>Igualdad por referencia</b> — comparar si dos variables apuntan al MISMO objeto, no si tienen el mismo contenido. Es lo que hace !== y lo que usa React para decidir si repinta.</li>
<li><b>Suscriptor</b> — una función que registras para que la llamen cuando el estado cambie. Suscribir devuelve la forma de darse de baja.</li>
</ul>

<h4>Para profundizar</h4>
<ul class="enlaces">
<li><a href="https://www.aprendejavascript.dev/clase/funciones/closures" target="_blank" rel="noopener">Closures</a> <span class="fuente">· Aprende JavaScript, en español</span></li>
<li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax" target="_blank" rel="noopener">Sintaxis spread</a> <span class="fuente">· MDN, para consultar</span></li>
<li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank" rel="noopener">Array.prototype.map()</a> <span class="fuente">· MDN, para consultar</span></li>
<li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze" target="_blank" rel="noopener">Object.freeze()</a> <span class="fuente">· MDN, para consultar</span></li>
</ul>
`,
    plantilla: `// RETO INTEGRADOR: la mesa de cronometraje.
// Estado privado + actualizaciones inmutables + suscriptores.
// Es Redux en 25 líneas, y es el modelo mental de useReducer.

// 1. crearTienda(reductor, estadoInicial):
//    { obtenerEstado(), despachar(accion), suscribir(fn) }
//    - despachar calcula el nuevo estado con el reductor, avisa a las
//      pantallas suscritas y devuelve la acción.
//    - Si el reductor devuelve EXACTAMENTE el mismo estado, NO avisa a nadie.
//    - suscribir devuelve una función desuscribir que se puede llamar dos
//      veces sin romper nada, incluso desde dentro de un aviso.
function crearTienda(reductor, estadoInicial) {
  // TODO
}

// 2. reductorTareas(estado, accion) — función PURA.
//    estado = { tareas: [{ id, texto, hecha }], siguienteId: 1 }
//    'agregar'  { texto } -> agrega { id: siguienteId, texto, hecha: false }
//                            y sube siguienteId
//    'alternar' { id }    -> invierte hecha
//    'borrar'   { id }    -> la quita
//    cualquier otra acción, o un id que no existe -> devuelve el MISMO estado
//    (la misma referencia, no una copia)
const estadoInicialTareas = { tareas: [], siguienteId: 1 };

function reductorTareas(estado, accion) {
  // TODO
}`,
    exporta: ['crearTienda', 'reductorTareas', 'estadoInicialTareas'],
    pruebas: [
      { nombre: 'obtenerEstado y despachar', correr: (m) => {
        const contador = (e, a) => (a.tipo === 'sumar' ? { n: e.n + 1 } : e);
        const t = m.crearTienda(contador, { n: 0 });
        igualProfundo(t.obtenerEstado(), { n: 0 });
        t.despachar({ tipo: 'sumar' });
        t.despachar({ tipo: 'sumar' });
        igualProfundo(t.obtenerEstado(), { n: 2 });
      }},
      { nombre: 'avisa a los suscriptores con el nuevo estado', correr: (m) => {
        const contador = (e, a) => (a.tipo === 'sumar' ? { n: e.n + 1 } : e);
        const t = m.crearTienda(contador, { n: 0 });
        const vistos = [];
        t.suscribir((e) => vistos.push(e.n));
        t.suscribir((e) => vistos.push(e.n * 100));
        t.despachar({ tipo: 'sumar' });
        igualProfundo(vistos, [1, 100]);
      }},
      { nombre: 'no avisa si el estado no cambió', correr: (m) => {
        const contador = (e, a) => (a.tipo === 'sumar' ? { n: e.n + 1 } : e);
        const t = m.crearTienda(contador, { n: 0 });
        let avisos = 0;
        t.suscribir(() => avisos++);
        t.despachar({ tipo: 'nada-que-ver' });
        igual(avisos, 0, 'misma referencia => no se notifica');
        t.despachar({ tipo: 'sumar' });
        igual(avisos, 1);
      }},
      { nombre: 'desuscribir funciona y es idempotente', correr: (m) => {
        const contador = (e, a) => (a.tipo === 'sumar' ? { n: e.n + 1 } : e);
        const t = m.crearTienda(contador, { n: 0 });
        let avisos = 0;
        const salir = t.suscribir(() => avisos++);
        t.despachar({ tipo: 'sumar' });
        salir(); salir();
        t.despachar({ tipo: 'sumar' });
        igual(avisos, 1);
      }},
      { nombre: 'reductorTareas: agregar no muta el original', correr: (m) => {
        const e1 = m.reductorTareas(m.estadoInicialTareas, { tipo: 'agregar', texto: 'estudiar' });
        igualProfundo(e1.tareas, [{ id: 1, texto: 'estudiar', hecha: false }]);
        igual(e1.siguienteId, 2);
        igual(m.estadoInicialTareas.tareas.length, 0, 'el estado original no se toca');
      }},
      { nombre: 'reductorTareas: alternar crea un objeto nuevo solo para el tocado', correr: (m) => {
        let e = m.reductorTareas(m.estadoInicialTareas, { tipo: 'agregar', texto: 'a' });
        e = m.reductorTareas(e, { tipo: 'agregar', texto: 'b' });
        const antes0 = e.tareas[0], antes1 = e.tareas[1];
        e = m.reductorTareas(e, { tipo: 'alternar', id: 1 });
        igual(e.tareas[0].hecha, true);
        cierto(e.tareas[0] !== antes0, 'la tarea tocada debe ser un objeto nuevo');
        cierto(e.tareas[1] === antes1, 'la tarea no tocada debe conservar su referencia');
      }},
      { nombre: 'reductorTareas devuelve el MISMO estado cuando no aplica', correr: (m) => {
        const e = m.reductorTareas(m.estadoInicialTareas, { tipo: 'agregar', texto: 'a' });
        cierto(m.reductorTareas(e, { tipo: 'inventada' }) === e, 'acción desconocida');
        cierto(m.reductorTareas(e, { tipo: 'alternar', id: 999 }) === e, 'alternar id inexistente');
        cierto(m.reductorTareas(e, { tipo: 'borrar', id: 999 }) === e, 'borrar id inexistente');
      }},
    ],
  },
};
