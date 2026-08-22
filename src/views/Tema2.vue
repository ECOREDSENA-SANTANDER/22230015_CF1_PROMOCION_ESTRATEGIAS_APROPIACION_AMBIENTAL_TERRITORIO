<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Historia territorial, saberes y dinámicas socioculturales
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t2/1.png', alt='')
      .col-lg-8(data-aos='fade-left')
        p.mb-4 La comprensión del territorio requiere analizar no solo sus características físicas y ambientales, sino también los procesos históricos, culturales y sociales que han influido en su configuración a lo largo del tiempo. Las comunidades construyen el territorio mediante sus formas de organización, sus actividades productivas, sus conocimientos tradicionales y las relaciones que establecen con el entorno natural.
        .cajon.color-primario.bg-color-3.p-4
          p.mb-0 El estudio de la historia territorial, los saberes locales y las dinámicas socioculturales permite reconocer la identidad de las comunidades, comprender los cambios ocurridos en el territorio y valorar los conocimientos construidos y transmitidos entre generaciones para el manejo sostenible de los recursos naturales.
    
    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 Procesos históricos de poblamiento del territorio

    .bloque-texto-g.bg-color-7.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los territorios que hoy conocemos son el resultado de largos procesos históricos de ocupación, adaptación y transformación realizados por diferentes grupos humanos. El poblamiento no ocurre de manera espontánea, sino que responde a condiciones ambientales, económicas, sociales y culturales que influyen en la decisión de las personas de establecerse en un lugar determinado.
    
    p El análisis de los procesos de poblamiento explica la forma cómo surgieron las comunidades, cuáles fueron los factores que motivaron su asentamiento y cómo se han transformado las relaciones entre la población y el territorio a lo largo del tiempo.

    h4 Poblamiento territorial

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/temas/t2/3.png', alt='')
      .col-lg-7
        p El poblamiento territorial corresponde al proceso mediante el cual grupos humanos se establecen, ocupan y organizan en un espacio geográfico determinado para desarrollar sus actividades sociales, económicas, culturales y productivas. Este proceso implica la construcción de viviendas, infraestructura, sistemas productivos y formas de organización social que permiten la permanencia de las comunidades en el territorio.
        p A lo largo de la historia, los procesos de poblamiento han estado influenciados por factores naturales y sociales que han determinado la localización y crecimiento de los asentamientos humanos.
    
    h4 Factores de poblamiento

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/temas/t2/4.png', alt='')
      .col-lg-7
        p Los factores de poblamiento son las condiciones naturales, sociales, económicas, culturales y políticas que influyen en la decisión de las personas o comunidades para establecerse, permanecer y desarrollar sus actividades en un determinado territorio. Estos factores determinan la ubicación, distribución y crecimiento de los asentamientos humanos, así como las formas de organización y aprovechamiento de los recursos disponibles.
        p A lo largo de la historia, las comunidades han seleccionado los lugares para habitar teniendo en cuenta elementos que faciliten su subsistencia, seguridad y desarrollo. Por ello, el poblamiento de un territorio está estrechamente relacionado con las características ambientales y las oportunidades que ofrece cada región. 
    
    p Entre los principales factores de poblamiento se encuentran:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos='fade-right')
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-6")
          .row(titulo="Disponibilidad de agua")
            p.mb-0 El acceso a fuentes hídricas ha sido uno de los principales factores que han orientado el establecimiento de comunidades. Los ríos, quebradas, lagunas y nacimientos de agua garantizan el abastecimiento para el consumo humano, la agricultura, la ganadería y otras actividades productivas.
          .row(titulo="Condiciones climáticas")
            p.mb-0 Las características climáticas influyen en la habitabilidad de un territorio y en las posibilidades de desarrollo de actividades económicas. Temperaturas moderadas, disponibilidad de lluvias y condiciones favorables para la producción agrícola han favorecido históricamente el poblamiento de determinadas regiones.
          .row(titulo="Actividades económicas")
            p.mb-0 La existencia de oportunidades productivas relacionadas con la agricultura, ganadería, pesca, minería, comercio o industria ha impulsado el crecimiento de poblaciones y asentamientos humanos.
          .row(titulo="Recursos naturales")
            p.mb-0 La disponibilidad de recursos como suelos fértiles, bosques, fauna, agua y minerales ha favorecido la ocupación y aprovechamiento de diversos territorios.
          .row(titulo="Vías de comunicación")
            p.mb-0 Las rutas de transporte y comunicación facilitan el intercambio de bienes, servicios e información, convirtiéndose en un factor clave para el crecimiento y desarrollo de las comunidades.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t2/5.png', alt='')
    
    h4 Transformaciones históricas del territorio

    p Los territorios experimentan cambios permanentes como resultado de procesos sociales, económicos, políticos y ambientales. Estos cambios pueden modificar el uso del suelo, la distribución de la población, las actividades productivas y las formas de organización comunitaria.

    .bg-color-9(data-aos='fade').mb-5
      .row.justify-content-center.align-items-center
        .col-lg-6
          p Entre las principales transformaciones históricas se encuentran:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Expansión de centros urbanos. 
            li 
              i.lista-ul__vineta
              | Cambios en las actividades económicas. 
            li 
              i.lista-ul__vineta
              | Construcción de infraestructura vial. 
            li 
              i.lista-ul__vineta
              | Migraciones internas y externas. 
            li 
              i.lista-ul__vineta
              | Procesos de industrialización. 
            li 
              i.lista-ul__vineta
              | Transformaciones ambientales asociadas al uso de los recursos naturales. 
        .col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/6.png', alt='')
    
    h4 Importancia para el diagnóstico territorial

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/7.svg', alt='')
      .col-lg-11   
        p.mb-0 El análisis de los procesos históricos de poblamiento expone el origen de las comunidades, identificar factores que han influido en el desarrollo territorial y reconocer dinámicas que continúan incidiendo en la configuración actual del territorio.
    
    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 Hitos históricos y construcción territorial

    p La historia de cada territorio está marcada por acontecimientos que han influido en la forma como las comunidades ocupan, utilizan y transforman su entorno. Estos eventos han generado cambios en la organización social, la economía, la cultura y las relaciones con los recursos naturales.
    p Reconocer los hitos históricos permite comprender la evolución territorial y valorar los procesos que han contribuido a la construcción de la identidad local.

    h4 Hitos históricos

    p Los hitos históricos son acontecimientos relevantes que han generado cambios significativos en el desarrollo de un territorio y en la vida de sus habitantes. Estos eventos pueden ser de carácter político, económico, social, cultural o ambiental y suelen influir en la organización del espacio y en las dinámicas comunitarias.
    p Principales ejemplos de hitos históricos:

    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/8.svg', alt='')
        h2.text-center Colonización
        p.text-center Procesos mediante los cuales nuevas poblaciones ocuparon territorios previamente habitados o poco poblados, generando transformaciones sociales, económicas y culturales.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/9.svg', alt='')
        h2.text-center Reformas agrarias
        p.text-center Cambios en la distribución, acceso y uso de la tierra orientados a mejorar las condiciones de producción y tenencia de la propiedad rural. 
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/10.svg', alt='')
        h2.text-center Conflictos sociales
        p.text-center Situaciones asociadas a disputas por recursos, territorio, poder político o diferencias sociales que han influido en la movilidad poblacional y en la organización comunitaria. 
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/11.svg', alt='')
        h2.text-center Transformaciones económicas
        p.text-center Cambios en los sistemas productivos derivados de nuevas actividades económicas, avances tecnológicos o modificaciones en los mercados.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/12.svg', alt='')
        h2.text-center Creación de municipios y divisiones administrativas
        p.text-center Procesos políticos y administrativos que modifican la organización territorial y la gestión de los recursos públicos.
    
    h4 Construcción territorial

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos='fade-left')
        p.mb-4 La construcción territorial es un proceso permanente mediante el cual las comunidades generan vínculos con el espacio que habitan, transformándolo a través de actividades productivas, prácticas culturales, relaciones sociales y procesos organizativos.
        .cajon.color-primario.bg-color-9.p-4
          p.mb-0 El territorio no se limita a una extensión geográfica; también incorpora significados culturales, históricos y simbólicos construidos colectivamente por quienes lo habitan.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t2/13.png', alt='')
    
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2  2.1 Cosmovisiones y saberes tradicionales y locales
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/14.svg', alt='')
      .col-lg-11   
        p Las comunidades desarrollan formas particulares de comprender el mundo y de relacionarse con la naturaleza. Estas formas de interpretación se reflejan en conocimientos, prácticas y tradiciones que han sido construidos a lo largo del tiempo y transmitidos entre generaciones.
        p.mb-0 El reconocimiento de las cosmovisiones y los saberes tradicionales fortalece los procesos de apropiación territorial y contribuye a la conservación del patrimonio cultural y ambiental.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="a) Cosmovisiones")
        .col-md-6.mb-4.mb-md-0
          p Las cosmovisiones corresponden a los sistemas de creencias, valores y conocimientos mediante los cuales las comunidades interpretan la realidad y comprenden su relación con el entorno natural y social.
          p.mb-0 Estas visiones orientan prácticas culturales, formas de organización y estrategias de manejo de los recursos naturales.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t2/15.png', alt='')
      .row(titulo="b) Saberes tradicionales y locales")
        .col-md-6.mb-4.mb-md-0
          p Los saberes tradicionales son conocimientos acumulados y transmitidos de generación en generación a través de la experiencia, la observación y la interacción permanente con el territorio.
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 23.
            span Principales saberes tradicionales
          .tabla-a.color-acento-contenido.mb-5
            table
              thead
                tr
                  th Saber tradicional
                  th Aplicación
              tbody
                tr
                  td Agricultura tradicional
                  td Manejo de cultivos y conservación de semillas.
                tr
                  td Medicina tradicional
                  td Uso de plantas y recursos naturales para la salud.
                tr
                  td Manejo del agua
                  td Protección de fuentes hídricas y distribución comunitaria.
                tr
                  td Conservación de semillas
                  td Preservación de variedades locales adaptadas al territorio.
                tr
                  td Calendarios agrícolas
                  td Programación de actividades productivas según ciclos naturales.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t2/16.png', alt='')
      .row(titulo="c) Relación con el entorno natural")
        .col-md-6.mb-4.mb-md-0
          p Muchas comunidades desarrollan prácticas basadas en el respeto, la protección y el aprovechamiento sostenible de los recursos naturales. Estos conocimientos contribuyen a la conservación de ecosistemas y al fortalecimiento de la resiliencia territorial.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t2/17.png', alt='')
    
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Usos, costumbres y prácticas culturales relacionadas con el entorno
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t2/18.png', alt='')
      .col-lg-8(data-aos='fade-left')
        .cajon.color-primario.bg-color-9.p-4
          p Las costumbres y prácticas culturales reflejan la manera como las comunidades interactúan con el territorio y construyen su identidad colectiva. Estas expresiones forman parte del patrimonio cultural y son un elemento para comprender las dinámicas socioculturales presentes en una región.
        p.mb-0 Los usos y costumbres corresponden a las prácticas, comportamientos y formas de organización que caracterizan la vida cotidiana de una comunidad y que han sido transmitidas a lo largo del tiempo.
    
    p Estas prácticas suelen estar relacionadas con las actividades productivas, las relaciones familiares, la alimentación y las formas de interacción con el entorno natural.
    
    TabsB.color-primario.mb-4
      .py-4.py-md-5(titulo="Expresiones culturales" :icono="require_src('@/assets/curso/temas/t2/19.svg')")
        .row
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t2/21.png', alt='')
          .col-md-7.mb-4.mb-md-0
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | #[b Gastronomía:] conjunto de conocimientos, técnicas y tradiciones relacionadas con la preparación y consumo de alimentos propios de una región.
              li 
                i.lista-ul__vineta
                | #[b Ritualidades:] prácticas simbólicas asociadas a celebraciones, agradecimientos, creencias y eventos importantes para la comunidad.

              li 
                i.lista-ul__vineta
                | #[b Festividades:] manifestaciones colectivas que fortalecen la identidad cultural y la integración social.
              li 
                i.lista-ul__vineta
                | #[b Tradiciones orales:] relatos, leyendas, historias y conocimientos transmitidos verbalmente entre generaciones.

              li 
                i.lista-ul__vineta
                | #[b Sistemas de creencias:] conjunto de valores, principios y concepciones que orientan la relación de las personas con la sociedad y la naturaleza.
      .py-4.py-md-5(titulo="Prácticas de manejo territorial" :icono="require_src('@/assets/curso/temas/t2/20.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p Las comunidades desarrollan actividades orientadas al uso y aprovechamiento de los recursos naturales, entre ellas:
            ul.lista-ul
              li 
                i.fas.fa-brain
                | Producción agrícola. 
              li 
                i.fas.fa-brain
                | Aprovechamiento forestal. 
              li 
                i.fas.fa-brain
                | Uso comunitario del agua. 
              li 
                i.fas.fa-brain
                | Conservación de ecosistemas. 
              li 
                i.fas.fa-brain
                | Restauración ambiental.
              li 
                i.fas.fa-brain
                | Manejo de semillas nativas. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t2/22.png', alt='')

          



    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Grupos poblacionales y dinámicas sociales del territorio
    
    p Los territorios están conformados por diversos grupos poblacionales que interactúan entre sí y contribuyen a la construcción de la identidad, la cultura y el desarrollo local. Cada grupo aporta conocimientos, experiencias y formas particulares de relacionarse con el entorno. Comprender la composición poblacional y las dinámicas sociales permite identificar necesidades, potencialidades y procesos de participación fundamentales para la gestión territorial.
    
    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 a) Grupos poblacionales

    p Los grupos poblacionales corresponden a los diferentes sectores sociales que habitan un territorio y participan en su desarrollo.

    .row.justify-content-center.align-items-end.tarjeta.bg-fondo-8.mb-4(data-aos='fade')
      .col-lg-4.px-0.d-none.d-lg-block
        img.tarjeta(src='@/assets/curso/temas/t2/23.png', alt='')
      .col-lg-8
        SlyderF.p-4(columnas="col-md-6 col-xl-4")
          .tarjeta.bg-white.p-3
            .row.justify-content-center.mb-3
              .col-6.col-md-6.col-lg-7
                img(src='@/assets/curso/temas/t2/24.svg' alt='')
            h5.text-center Campesinos
            p.mb-0 Desarrollan actividades agrícolas, pecuarias y de manejo de recursos naturales. 
          .tarjeta.bg-white.p-3
            .row.justify-content-center.mb-3
              .col-6.col-md-6.col-lg-7
                img(src='@/assets/curso/temas/t2/25.svg' alt='')
            h5.text-center Comunidades indígenas
            p.mb-0 Conservan tradiciones, cosmovisiones y formas propias de organización territorial.
          .tarjeta.bg-white.p-3
            .row.justify-content-center.mb-3
              .col-6.col-md-6.col-lg-7
                img(src='@/assets/curso/temas/t2/26.svg' alt='')
            h5.text-center Comunidades afrodescendientes
            p.mb-0 Poseen importantes aportes culturales, sociales y ambientales asociados a sus territorios.
          .tarjeta.bg-white.p-3
            .row.justify-content-center.mb-3
              .col-6.col-md-6.col-lg-7
                img(src='@/assets/curso/temas/t2/27.svg' alt='')
            h5.text-center Población urbana
            p.mb-0 Desarrolla actividades comerciales, industriales y de servicios.
          .tarjeta.bg-white.p-3
            .row.justify-content-center.mb-3
              .col-6.col-md-6.col-lg-7
                img(src='@/assets/curso/temas/t2/28.svg' alt='')
            h5.text-center Jóvenes y adultos mayores
            p.mb-0 Aportan conocimientos, experiencias y capacidades para el desarrollo comunitario.
    
    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-3.me-5 b) Dinámicas sociales

    p Las dinámicas sociales corresponden a las interacciones y procesos que se desarrollan entre los habitantes de un territorio y que influyen en su organización y funcionamiento.
    p Entre las principales dinámicas sociales se encuentran:  
    
    .row.mb-4
      .col-lg-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/29.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p Relaciones comunitarias y redes de apoyo.
      .col-lg-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/30.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p Participación ciudadana y organización social. 
      .col-lg-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/31.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p Actividades económicas y productivas.
      .col-lg-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/32.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p Procesos de migración y movilidad poblacional.
    .row.justify-content-center.mb-5
      .col-lg-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/33.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p Acceso a servicios básicos.
      .col-lg-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/34.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p Construcción de identidad territorial.
      .col-lg-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/35.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p Resolución de conflictos y toma de decisiones colectivas.

    .bg-color-1(data-aos='fade').mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/36.png', alt='')
        .col-lg-7
          .p-4
            h4 Ruta metodológica para el diagnóstico territorial
            p El diagnóstico territorial se desarrolla mediante una ruta metodológica que comprende la delimitación del territorio, la recolección de información primaria y secundaria, la caracterización de sus dimensiones biofísica, ecológica, histórica y sociocultural, la identificación de actores y problemáticas ambientales, la representación cartográfica de la información y el análisis participativo de los hallazgos. Este proceso permite establecer prioridades y sustentar la formulación de acciones ambientales acordes con las características y necesidades del territorio.





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
