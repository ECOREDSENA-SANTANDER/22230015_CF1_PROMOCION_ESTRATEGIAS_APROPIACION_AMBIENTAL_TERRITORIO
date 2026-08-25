<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Organización social y gobernanza territorial
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/1.png', alt='')
      .col-lg-7(data-aos='fade-left')
        p La organización social y la gobernanza territorial son elementos fundamentales para la gestión sostenible del territorio y la participación de las comunidades en los procesos de toma de decisiones. A través de diferentes instituciones, organizaciones y mecanismos de participación, la población puede intervenir en la planificación, administración y conservación de los recursos naturales, así como en la formulación de estrategias para el desarrollo local.
        .cajon.color-primario.bg-color-3.p-4
          p.mb-0 Comprender cómo se organiza el Estado, cuáles son los actores presentes en el territorio y de qué manera se articulan las comunidades con las instituciones permite fortalecer los procesos de apropiación ambiental, participación ciudadana y construcción colectiva del territorio.
    
    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 Composición y poderes del Estado
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/2.svg', alt='')
      .col-lg-11(data-aos="fade-left")   
        p.mb-0 El Estado colombiano es la organización política y administrativa encargada de dirigir el país, garantizar los derechos de los ciudadanos, promover el bienestar general y asegurar el cumplimiento de la Constitución y las leyes. A través de sus instituciones, el Estado desarrolla funciones relacionadas con la educación, la salud, la seguridad, la justicia, la protección ambiental y el desarrollo económico y social.
    
    p.mb-4 El Estado actúa en los diferentes niveles territoriales y coordina acciones para responder a las necesidades de la población y promover el desarrollo sostenible de los territorios.

    .row.justify-content-center.mb-5(data-aos='fade-down')
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 2.
          span Elementos fundamentales del Estado               
        figure
          img(src='@/assets/curso/temas/t3/3.svg', alt='El Estado está conformado por tres elementos esenciales: la población, el territorio y el gobierno, cuya interacción permite su organización, funcionamiento y ejercicio de la autoridad.')

    p Todo Estado está conformado por tres elementos básicos.

    .tarjeta--container.row.mb-4(data-aos='fade')
      .col-md.tarjeta.color-primario.text-dark.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-4.col-md-9.col-lg-7
            img(src='@/assets/curso/temas/t3/4.svg', alt='')          
        h4.text-center Población
        p Conjunto de personas que habitan el territorio nacional.
      .col-md.tarjeta.color-acento-contenido.text-dark.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-4.col-md-8.col-lg-6
            img.px-lg-2.px-md-2(src='@/assets/curso/temas/t3/5.svg', alt='')          
        h4.text-center Territorio
        p Espacio geográfico sobre el cual ejerce autoridad el Estado. 
      .col-md.tarjeta.color-secundario.text-dark.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-4.col-md-8.col-lg-7
            img.px-lg-2.px-md-1(src='@/assets/curso/temas/t3/6.svg', alt='')          
        h4.text-center Gobierno
        p Instituciones encargadas de dirigir y administrar los asuntos públicos. 
    
    .row.justify-content-center.mb-5(data-aos='fade-down')
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 3.
          span Poderes del Estado               
        figure
          img(src='@/assets/curso/temas/t3/7.svg', alt='El Estado organiza sus funciones a través de tres poderes: Ejecutivo, Legislativo y Judicial, cada uno con responsabilidades específicas para garantizar el funcionamiento del sistema político y jurídico.')

    p.mb-4 La organización del Estado colombiano se fundamenta en la separación de poderes, lo que permite distribuir funciones y evitar la concentración de autoridad.

    .mb-1(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 24.
        span Poderes del Estado
      .tabla-a.color-acento-contenido.t2-dis
        table
          thead
            tr
              th Poder del Estado
              th Función principal
              th Principales representantes o instituciones
          tbody
            tr
              td.fw-bold Poder Ejecutivo
              td Es el encargado de administrar el gobierno y ejecutar las políticas públicas orientadas al bienestar de la población. Tiene la responsabilidad de implementar planes, programas y proyectos en los diferentes sectores del desarrollo nacional.
              td 
                ul.lista-ul.fa-lista.mb-0
                  li.mb-1 
                    i.lista-ul__vineta
                    span.mb-0 Presidente de la República.
                  li.mb-1 
                    i.lista-ul__vineta
                    span.mb-0 Vicepresidente.
                  li.mb-1 
                    i.lista-ul__vineta
                    span.mb-0 Ministros
                  li.mb-1 
                    i.lista-ul__vineta
                    span.mb-0 Gobernadores.
                  li.mb-1 
                    i.lista-ul__vineta
                    span.mb-0 Alcaldes.
                  li.mb-0
                    i.lista-ul__vineta
                    span.mb-0 Entidades administrativas.
            tr
              td.fw-bold Poder Legislativo
              td Tiene la función de elaborar, modificar y aprobar las leyes que regulan la convivencia y el funcionamiento del país. Además, ejerce control político sobre las acciones del gobierno.
              td 
                ul.lista-ul.fa-lista.mb-0
                  li.mb-1 
                    i.lista-ul__vineta
                    span.mb-0 Senado de la República.
                  li.mb-1 
                    i.lista-ul__vineta
                    span.mb-0 Cámara de Representantes.
                  li.mb-1 
                    i.lista-ul__vineta
                    span.mb-0 Asambleas departamentales.
                  li.mb-0
                    i.lista-ul__vineta
                    span.mb-0 Concejos municipales y distritales.
            tr
              td.fw-bold Poder Judicial
              td Es el encargado de administrar justicia, resolver conflictos y garantizar el cumplimiento de las normas jurídicas, asegurando la protección de los derechos de los ciudadanos.
              td
                ul.lista-ul.fa-lista.mb-0
                  li.mb-1 
                    i.lista-ul__vineta
                    span.mb-0 Corte Constitucional.
                  li.mb-1 
                    i.lista-ul__vineta
                    span.mb-0 Corte Suprema de Justicia.
                  li.mb-1 
                    i.lista-ul__vineta
                    span.mb-0 Consejo de Estado.
                  li.mb-1 
                    i.lista-ul__vineta
                    span.mb-0 Fiscalía General de la Nación.
                  li.mb-0
                    i.lista-ul__vineta
                    span.mb-0 Juzgados y tribunales.
    

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2  3.1 Contexto político nacional, regional y local
    
    p.mb-5 La organización política y administrativa de Colombia permite distribuir funciones y competencias entre diferentes niveles de gobierno para garantizar una gestión más eficiente del territorio. Cada nivel administrativo tiene responsabilidades específicas relacionadas con la planificación, inversión pública, prestación de servicios y desarrollo territorial.

    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 a) Organización territorial de Colombia
    
    p El país se organiza en diferentes unidades políticas y administrativas:

    SlyderF.mb-5(columnas="col-md-6 col-xl-4" data-aos='fade')
      .tarjeta.bg-fondo-1.bg-color-7.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-7
            img.px-lg-2(src='@/assets/curso/temas/t3/8.svg', alt='')
        h4.text-center Nación
        p.text-center Nivel central encargado de formular políticas públicas y coordinar el desarrollo nacional.
      .tarjeta.bg-fondo-1.bg-color-7.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-7
            img.px-lg-2(src='@/assets/curso/temas/t3/9.svg', alt='')
        h4.text-center Departamentos
        p.text-center Entidades territoriales que articulan las políticas nacionales con las necesidades regionales. 
      .tarjeta.bg-fondo-1.bg-color-7.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-8.col-lg-7
            img.px-lg-2(src='@/assets/curso/temas/t3/10.svg', alt='')
        h4.text-center Municipios
        p.text-center Unidades básicas de organización territorial donde se desarrollan la mayoría de las acciones de gobierno local.
      .tarjeta.bg-fondo-1.bg-color-7.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-9.col-lg-8
            img.px-lg-2(src='@/assets/curso/temas/t3/11.svg', alt='')
        h4.text-center Distritos
        p.text-center Entidades territoriales con características especiales de administración debido a su importancia económica, cultural o estratégica.
      .tarjeta.bg-fondo-1.bg-color-7.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-9.col-lg-7
            img.px-lg-1(src='@/assets/curso/temas/t3/12.svg', alt='')
        h4.text-center Territorios especiales
        p.text-center Espacios con regímenes administrativos particulares, como algunos territorios indígenas y zonas con condiciones específicas definidas por la ley.
    
    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 b) Gobierno regional y local
    
    p.mb-4 Las gobernaciones y alcaldías son las principales entidades responsables de la gestión territorial en los departamentos y municipios.

    .row(data-aos='fade')
      .col-lg-6.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/t3/13.png', alt='')
        .bg-color-1.p-4
          h3 Gobernaciones
          p Son las encargadas de coordinar el desarrollo departamental y apoyar la ejecución de políticas públicas en los municipios.
          p.mb-1 Entre sus funciones se encuentran:
          ul.lista-ul.fa-lista.mb-0
            li.mb-1
              i.lista-ul__vineta
              span.mb-0 Formular planes de desarrollo departamental. 
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Coordinar proyectos regionales. 
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Promover la inversión pública. 
            li.mb-0
              i.lista-ul__vineta
              span.mb-0 Apoyar la gestión ambiental y territorial.       
      .col-lg-6
        img(src='@/assets/curso/temas/t3/14.png', alt='')
        .bg-color-1.p-4
          h3 Alcaldías
          p Son responsables de la administración municipal y de la implementación de acciones orientadas al bienestar de la comunidad.
          p.mb-1 Entre sus funciones se encuentran:
          ul.lista-ul.fa-lista.mb-0
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Elaborar el Plan de Desarrollo Municipal. 
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Implementar instrumentos de ordenamiento territorial.  
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Gestionar proyectos sociales y ambientales. 
            li.mb-0 
              i.lista-ul__vineta
              span.mb-0 Promover la participación ciudadana. 


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2  3.2 Organizaciones sociales, comunitarias y privadas
    
    p Las organizaciones sociales son agrupaciones conformadas por personas que comparten intereses, necesidades u objetivos comunes y que trabajan colectivamente para promover el bienestar de la comunidad y el desarrollo del territorio.

    p.mb-4 Estas organizaciones cumplen un papel fundamental en la participación ciudadana, la gestión de proyectos y la representación de intereses colectivos.

    .row.justify-content-center.mb-5(data-aos='fade-down')
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 25.
          span Tipos de organizaciones sociales y comunitarias
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.w-25 Tipo de organización
                th Función principal
            tbody
              tr
                td Juntas de Acción Comunal (JAC)
                td Promueven la participación comunitaria y la gestión de proyectos locales.
              tr
                td Asociaciones campesinas
                td Representan los intereses de productores rurales y fortalecen procesos productivos.
              tr
                td Cooperativas
                td Desarrollan actividades económicas basadas en principios de solidaridad y ayuda mutua.
              tr
                td Organizaciones juveniles
                td Promueven la participación de los jóvenes en procesos comunitarios.
              tr
                td Organizaciones ambientales
                td Impulsan acciones de conservación, educación y protección ambiental.
              tr
                td Asociaciones de mujeres
                td Fortalecen la participación y el liderazgo femenino en el territorio.
              tr
                td Consejos comunitarios
                td Representan comunidades afrodescendientes en la gestión de sus territorios colectivos.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos='fade-right')
        p Las organizaciones privadas corresponden a empresas, asociaciones productivas y emprendimientos que desarrollan actividades económicas dentro del territorio.
        p.mb-4 Estas organizaciones contribuyen a:
        .bg-color-5.p-4.mb-4
          .row
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/16.svg', alt='')
            .col-lg-8 
              ul.lista-ul.lista-ul--color.fa-lista.mb-0
                li
                  i.fas.fa-flag
                  span Generación de empleo. 
                li
                  i.fas.fa-flag
                  span Producción de bienes y servicios.  
                li
                  i.fas.fa-flag
                  span Dinamización de la economía local. 
                li.mb-0 
                  i.fas.fa-flag
                  span Inversión en proyectos productivos.
      .col-lg-5.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t3/15.png', alt='')
    
    .subt.mb-5(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 Formas organizativas e incidencia territorial
    
    .subt-2.mb-4
      h4 a) Formas organizativas
   
    p Las comunidades desarrollan diversas formas de organización para gestionar intereses comunes, resolver problemáticas y promover acciones colectivas en beneficio del territorio.
    p.mb-4 Estas formas organizativas permiten fortalecer la cooperación, la participación ciudadana y la capacidad de gestión local.

    .row.justify-content-center.mb-5(data-aos='fade')
      .col-lg-4.mb-4.mb-lg-0
        .bg-color-3.d-flex.flex-column.align-items-center.p-4.h-100
          p Características de las formas organizativas:
          ul.lista-ul.lista-ul--color.fa-lista.mb-0
            li.mb-0 
              i.fas.fa-play
              span Promueven la participación de la comunidad. 
            li.mb-0 
              i.fas.fa-play
              span Facilitan la representación de intereses colectivos. 
            li.mb-0 
              i.fas.fa-play
              span Fortalecen el liderazgo local. 
            li.mb-0 
              i.fas.fa-play
              span Favorecen la gestión de proyectos. 
            li.mb-0 
              i.fas.fa-play
              span.mb-0 Contribuyen a la solución de problemáticas territoriales.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/17.png', alt='')
      .col-lg-4
        img.mb-3.w-50x.d-none.d-lg-block(src='@/assets/curso/temas/t3/18.svg', alt='')
        p Participación comunitaria
        p.mb-0 La participación comunitaria es el proceso mediante el cual las personas intervienen activamente en la toma de decisiones relacionadas con su territorio.
        p.mb-0 Esta participación fortalece la democracia, promueve la corresponsabilidad y mejora la gestión de los recursos y proyectos comunitarios.

    .subt-2.mb-4
      h4 b) Incidencia territorial

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/19.png', alt='')
      .col-lg-8(data-aos='fade-left')
        p La incidencia territorial corresponde a la capacidad que tienen las organizaciones y comunidades para influir en las decisiones que afectan el desarrollo y manejo del territorio.
        p Ámbitos de incidencia territorial.
        ul.lista-ul.lista-ul--color.fa-lista.mb-0
          li.mb-0 
            i.fas.fa-play
            span #[b Gestión ambiental:] participación en acciones relacionadas con la conservación de los recursos naturales y la protección de los ecosistemas.
          li.mb-0 
            i.fas.fa-play
            span #[b Desarrollo comunitario:] promoción de iniciativas orientadas al mejoramiento de la calidad de vida de la población. 
          li.mb-0 
            i.fas.fa-play
            span #[b Planeación territorial:] participación en procesos de ordenamiento y planificación del territorio.
          li.mb-0 
            i.fas.fa-play
            span #[b Defensa de derechos:] acciones dirigidas a garantizar el acceso a derechos sociales, ambientales, económicos y culturales.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 Gestión territorial y participación comunitaria
    
    p.mb-4 La gestión territorial y la participación comunitaria son procesos fundamentales para promover el desarrollo sostenible y fortalecer la gobernanza de los territorios. A través de la articulación entre comunidades, organizaciones e instituciones, es posible identificar necesidades, aprovechar potencialidades y tomar decisiones orientadas al bienestar colectivo. La participación de la población en los procesos de planificación y gestión contribuye a una administración más incluyente, transparente y acorde con las realidades sociales, culturales y ambientales del territorio.
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-7" data-aos='fade')
      .row.justify-content-center(titulo="a) Gestión territorial")
        .col-11
          p La gestión territorial corresponde al conjunto de acciones orientadas a la planificación, administración, uso y conservación del territorio de manera participativa y sostenible.
          p Este proceso busca armonizar las necesidades de las comunidades con la protección de los recursos naturales y el desarrollo económico y social.
        .col-lg-6.col-11
          p Objetivos de la gestión territorial:
          ul.lista-ul.fa-lista.mb-0
            li.mb-0 
              i.lista-ul__vineta
              span.mb-0 Promover el desarrollo sostenible. 
            li.mb-0 
              i.lista-ul__vineta
              span.mb-0 Mejorar la calidad de vida de la población. 
            li.mb-0 
              i.lista-ul__vineta
              span.mb-0 Fortalecer la gobernanza territorial. 
            li.mb-0 
              i.lista-ul__vineta
              span.mb-0 Conservar los recursos naturales. 
            li.mb-0 
              i.lista-ul__vineta
              span.mb-0 Facilitar la participación ciudadana.        
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/20.png', alt='')
      .row.justify-content-center(titulo="b) Participación comunitaria")
        .col-11
          p La participación comunitaria permite que los habitantes del territorio intervengan en la identificación de necesidades, formulación de propuestas, ejecución de proyectos y seguimiento de acciones relacionadas con el desarrollo local.
          p.mb-4 Una participación efectiva fortalece la transparencia, la corresponsabilidad y la construcción colectiva de soluciones.
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 26.
            span Mecanismos de participación
          .tabla-a.color-acento-contenido.bg-white
            table
              thead
                tr
                  th.w-25 Mecanismo
                  th Descripción
              tbody
                tr
                  td Cabildos
                  td Espacios de diálogo entre autoridades y ciudadanía para discutir asuntos de interés público.
                tr
                  td Asambleas comunitarias
                  td Reuniones donde la comunidad analiza problemáticas y toma decisiones colectivas.
                tr
                  td Consultas populares
                  td Mecanismos mediante los cuales la ciudadanía expresa su opinión sobre temas específicos.
                tr
                  td Mesas de participación
                  td Espacios permanentes de concertación entre diferentes actores del territorio.
                tr
                  td Veedurías ciudadanas
                  td Organizaciones que realizan seguimiento y control a la gestión pública.
                tr
                  td Consejos territoriales de planeación
                  td Instancias que participan en la formulación y seguimiento de los planes de desarrollo.




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
