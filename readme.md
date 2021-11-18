<h1>La Liga News - Primera Version<h1>

<h2>Descripcion del Proyecto.</h2>

<p>El presente proyecto consiste en la realizacion de una pagina web con una tematica principal enfocada en el mundo del futbol, exactamente en la liga de futbol española, en la cual los usuarios podran acceder a una interfaz que les brindará informacion detallada sobre noticias, resultados y clasificaciones de los equipos participantes en la temporada 2021 - 2021 de la liga Santander.</p>

<p>Visite La Liga News<a href="https://laliganews.netlify.app/index.html"> aqui.</a></p>

<h2>Utilidades del Proyecto</h2>

<ul>
<li>Ofrecer mediante una seccion principal las noticias más actualizadas del mundo del futbol español e internacional.</li>

<li>Brindar mediante una tabla detallada todas las diferentes jornadas de la temporada 21-22 del futbol español, junto con un filtro para desplegar resultados de equipos en particular.</li>

<li>Enseñar por medio de una tabla los principales datos tecnicos de todos los equipos participantes en la competicion junto con la respectiva clasificacion.</li>
</ul>

<h2>Estructura y herramientas utilizadas en el Proyecto.</h2>

<p>La pagina web ha sido estructurada en 3 distintas secciones:</p>
<ol>
<li> Home - Seccion Principal de la web donde se encuentran las noticias.</li>
<li>
Partidos - Seccion detallada de las jornadas junto al filtro de busqueda.
</li>

<li>Clasificacion - Seccion detallada de la clasificacion actual y datos tecnicos de cada equipo.</li>

</ol>

<p>La estructura se ha realizado con el uso de HTML para la maquetacion principal, JavaScript para el dinamismo de la web y CSS para el diseño y estilo del proyecto.</p>

<h2>Tecnologias  y elementos empleados</h2>

<ol>
<li>HTML: Se divide en 3 archivos distintos, para cada una de las secciones de la pagina web, con los cuales se crea la estructura basica de cada seccion utilizando las etiquetas Head, Body y Footer para la maquetacion principal de la web y etiquetas secundarias del contenido como lo son Section, div, table, h1, h2, P, entre otras etiquetas y atributos fundamentales para la creacion de la web. </li>

<li>
JavaScript: Dividido en 2 archivos .js uno para la seccion de partidos y el otro para la seccion de clasificacion, es el encargado de darle el dinamismo a la web junto con la correspondiente toma de datos para la realizacion de las distintas tablas.
<ul>
<li>
Funciones Desarrolladas:
<ul>
<li>
 Funcion de partidosTabla() : Desarrolla la tabla correspondiente de la seccion partidos de la web en la cual  se enseñan los resultados tomando los datos respectivos que obtienen del fetch , esta funcion es generica ya que se utiliza integramente para la funcion del filtro de busqueda.
</li>
<li>Funcion filtroPartidos() : Con la cual se le da dinamismo a la etiqueta input del HTML de la seccion de partidos y se obtienen los resultados solicitados por el usuario.
</li>
<li> Funcion getFetch(): Funcion principal que tiene como tarea primordial  la toma de datos e informacion desde el PostMan, con ella se obtienen los datos para la realizacion de ambas tablas de la web y se ejecutan consecuentemente las otras funciones de ambas secciones.
</li>
<li> Funcion clasificacionTabla() : Desarrolla la tabla correspondiente a la seccion de clasificacion, donde se pueden obtener todos los datos tecnicos de los equipos, la misma toma todos los datos externos segun cada ruta determinada y los plasma en la web al momento.
</li>
<li>
Funcion spiner() : Es la encargada de crear un elemento dinamico que se muestra en la web mientras cargan los datos de la fuente externa, esta funcion es generica y se usa en ambas seccion .js de la pagina.
</li>
</ul>

</li>
<li> Eventos Desarrollados: 
<ul>
<li>
Evento "KeyUp" : Evento utilizado en la seccion de partidos donde se obtiene con el mismo la informacion solicitada por el usuario en el filtro.
</li>
</ul>
</ul>
</li>
<li>
CSS y Bootstrap: Compuesto por un solo archivo .css, es el encargado de darle todo el estilo a la pagina, el mismo ha sido desarrollado junto con Bootstrap por lo que la pagina esta diseñada de una forma totalmente responsive para su adaptacion a todas las dimensiones disponibles.
</li>
</ol>

<h2>Version del Proyecto.</h2>

<p>
Esta es la primera version de La Liga News, proyecto que nace con la finalidad  mejorar y desarrollar  las destrezas de las distintas herramientas y tecnologias utilizadas.
</p>

<h2>To Do.</h2>

<p>
Las principales mejoras pendientes del proyecto consistirán en agregar un mejor interfaz con noticias más completas y a su vez agregar distintos filtros a las tablas para crear una mejor experiencia en el usuario.
</p>