<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-3
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-lg-7
        p El territorio constituye un espacio donde interactúan de manera permanente los ecosistemas, las comunidades y las diferentes actividades sociales, culturales y productivas. Comprender estas relaciones permite reconocer las características biofísicas, ecológicas, históricas y socioculturales que influyen en las dinámicas de cada región y aporta elementos para el diagnóstico, la planificación y la gestión sostenible del territorio.
        p En Colombia, la diversidad de ecosistemas, regiones biogeográficas y grupos poblacionales evidencia la importancia de integrar el conocimiento ambiental con los saberes comunitarios y las formas de organización social. Asimismo, el análisis de factores como el clima, el relieve, la biodiversidad, los riesgos ambientales y las prácticas culturales lleva a comprender las potencialidades y desafíos presentes en cada territorio.

    p Este componente formativo aborda los fundamentos ecológicos, las características biofísicas, la organización social y los instrumentos de planificación territorial como elementos esenciales para realizar un diagnóstico integral del territorio. Además, promueve el reconocimiento de la diversidad natural y cultural, la participación comunitaria y el análisis de las dinámicas socioambientales desde un enfoque socioecosistémico.

    p.mb-4 Por ello, el aprendiz contará con herramientas que le permitirán interpretar el territorio desde una perspectiva integral, valorar los saberes de las comunidades y contribuir a la formulación de estrategias orientadas a la apropiación ambiental, la planificación participativa y el desarrollo sostenible.

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video.



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
