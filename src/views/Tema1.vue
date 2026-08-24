<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos ecológicos y características biofísicas del territorio 
    
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El conocimiento del territorio es la base para comprender las relaciones entre las comunidades humanas y el entorno natural. Los fundamentos ecológicos y las características biofísicas permiten identificar los elementos que conforman los ecosistemas, las dinámicas ambientales presentes en una región y los factores que influyen en la disponibilidad de recursos naturales. El análisis de estos aspectos facilita la comprensión de la biodiversidad, los procesos ecológicos, los riesgos ambientales y las condiciones físicas que determinan el uso y manejo del territorio. Asimismo, proporciona herramientas para realizar diagnósticos territoriales integrales que contribuyan a la planificación, conservación y gestión sostenible de los recursos naturales desde una perspectiva socioambiental.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 Ecología, áreas y relaciones ecológicas
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/2.svg', alt='')
      .col-lg-11(data-aos="fade-left")   
        p.mb-0 La ecología es la rama de la biología que estudia las relaciones entre los seres vivos y el ambiente en el que habitan. Analiza la interacción entre los componentes bióticos, como las plantas, los animales, los microorganismos y los seres humanos, y los componentes abióticos, como el agua, el aire, el suelo, la temperatura, la luz solar y el relieve. Su estudio permite comprender el funcionamiento de los ecosistemas y aporta conocimientos para la conservación de la biodiversidad, el uso sostenible de los recursos naturales y la gestión ambiental del territorio.
    
    .subt-2.mb-4
      h4 a) Áreas de la ecología

    p.mb-4 La ecología comprende diferentes áreas o ramas de estudio que permiten analizar las relaciones de los seres vivos entre sí y con su ambiente, desde distintas escalas y perspectivas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span Áreas de la ecología
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.w-25 Áreas
                th Descripción
            tbody
              tr
                td Autoecología
                td Estudia la relación de una especie particular con las condiciones ambientales donde habita.
              tr
                td Sinecología
                td Analiza las interacciones entre las diferentes especies que conforman una comunidad biológica.
              tr
                td Ecología de poblaciones
                td Estudia la dinámica de grupos de individuos de una misma especie, incluyendo crecimiento, distribución y mortalidad.
              tr
                td Ecología del paisaje
                td Examina las relaciones entre diferentes ecosistemas presentes en un territorio y los cambios generados por procesos naturales o humanos.
              tr
                td Ecología humana
                td Analiza las interacciones entre las comunidades humanas y su entorno natural, social y económico.
              tr
                td Ecología urbana
                td Estudia los ecosistemas presentes en ciudades y áreas urbanizadas.
              tr
                td Ecología de la conservación
                td Se enfoca en la protección de especies, ecosistemas y recursos naturales amenazados.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/3.png', alt='')
    

    .subt-2.mb-4
      h4 b) Relaciones ecológicas

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/4.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p Las relaciones ecológicas son las interacciones que se establecen entre los organismos que comparten un ecosistema. Estas relaciones permiten la supervivencia de las especies y contribuyen al equilibrio ecológico.
        p Las relaciones ecológicas son las interacciones que se presentan entre los organismos dentro de un ecosistema.
    
    .mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 2.
        span Relaciones intraespecíficas
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th.w-25 Relación
              th Descripción
              th Ejemplo
          tbody
            tr
              td Cooperación
              td Los individuos colaboran para obtener beneficios comunes como alimentación, protección o reproducción.
              td Las abejas trabajan conjuntamente para construir la colmena y producir miel.
            tr
              td Competencia
              td Los individuos compiten por recursos limitados como alimento, agua, espacio o pareja reproductiva.
              td Dos árboles de la misma especie compiten por la luz solar dentro de un bosque.
            tr
              td Territorialidad
              td Consiste en la defensa de un espacio determinado frente a otros individuos de la misma especie.
              td Algunas aves delimitan y protegen su territorio durante la época de reproducción.
            tr
              td Organización social
              td Los individuos establecen estructuras jerárquicas o funciones específicas dentro de un grupo.
              td Las hormigas organizan tareas entre obreras, soldados y reina.
    
    .mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 3.
        span Relaciones interespecíficas
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th.w-25 Relación
              th Descripción
              th Ejemplo
          tbody
            tr
              td Mutualismo
              td Ambas especies obtienen beneficios.
              td Abejas y flores durante la polinización.
            tr
              td Comensalismo
              td Una especie se beneficia y la otra no resulta afectada.
              td Aves que anidan en árboles.
            tr
              td Parasitismo
              td Una especie se beneficia perjudicando a otra.
              td Garrapatas en mamíferos.
            tr
              td Depredación
              td Un organismo captura y consume a otro.
              td Jaguar cazando venados.
            tr
              td Competencia interespecífica
              td Dos especies compiten por un mismo recurso.
              td Diferentes especies de aves que consumen el mismo alimento.
    
    .subt-2.mb-4
      h4 c) Ecología y territorio
    
    .row.justify-content-center.align-items-center
      .col-lg-8(data-aos='fade-right')
        p.mb-4 Las relaciones ecológicas no ocurren de manera aislada. Forman parte de una red compleja de interacciones que determinan la salud y estabilidad de los ecosistemas. Cuando estas relaciones se alteran por actividades como la deforestación, la contaminación, la expansión urbana o el uso inadecuado del suelo, pueden generarse desequilibrios ambientales que afectan tanto a la biodiversidad como a las comunidades humanas.
        .cajon.color-primario.bg-color-3.p-4
          p.mb-0 Por esta razón, el conocimiento de la ecología se toma como base fundamental para el diagnóstico territorial, ya que explica las dinámicas ambientales presentes en el territorio y orienta estrategias de apropiación ambiental, conservación y gestión sostenible de los recursos naturales.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t1/5.png', alt='')
    

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Ecosistemas, biogeografía y enfoque socioecosistémico 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/6.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Los ecosistemas son los cimientos sobre los cuales se desarrolla la vida y las actividades humanas. El estudio de los ecosistemas permite comprender las relaciones existentes entre los organismos vivos y los elementos físicos del entorno, así como los procesos que garantizan el equilibrio ecológico. De igual manera, la biogeografía facilita el análisis de la distribución de las especies y los ecosistemas en el territorio, mientras que el enfoque socioecosistémico integra las interacciones entre las comunidades y la naturaleza. Estos conocimientos son fundamentales para interpretar las dinámicas territoriales, identificar problemáticas ambientales y promover estrategias de apropiación y gestión sostenible del territorio.
    
    .subt-2.mb-4
      h4 a) Definición de ecosistema

    p.mb-4 Un ecosistema es un sistema natural conformado por organismos vivos y el medio físico donde interactúan. Incluye elementos bióticos y abióticos que mantienen relaciones dinámicas.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 4.
          span Componentes bióticos del ecosistema
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr
                th.w-25 Componente
                th Descripción
            tbody
              tr
                td Flora
                td Conjunto de especies vegetales presentes en un territorio.
              tr
                td Fauna
                td Conjunto de especies animales que habitan un ecosistema.
              tr
                td Microorganismos
                td Bacterias, hongos y otros organismos microscópicos que participan en procesos de descomposición y reciclaje de nutrientes.
              tr
                td Seres humanos
                td Poblaciones que interactúan con los ecosistemas mediante actividades productivas, sociales y culturales.
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 5.
          span Componentes abióticos del ecosistema
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.w-25 Componente
                th Función dentro del ecosistema
            tbody
              tr
                td Agua
                td Esencial para los procesos biológicos y ecológicos.
              tr
                td Aire
                td Proporciona los gases necesarios para la respiración y la fotosíntesis.
              tr
                td Temperatura
                td Influye en la distribución y supervivencia de las especies.
              tr
                td Suelo
                td Proporciona soporte y nutrientes para los organismos.
              tr
                td Luz solar
                td Principal fuente de energía para los ecosistemas.
              tr
                td Relieve
                td Determina características como drenaje, exposición solar y distribución de especies.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/7.png', alt='')
    
    p Los ecosistemas funcionan gracias a la interacción permanente entre sus componentes. La energía proveniente del sol es captada por las plantas mediante la fotosíntesis y transferida a través de las cadenas alimentarias.
    p.mb-4 En este proceso participan:

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-color-4.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4.col-md-5.col-lg-4
              img(src='@/assets/curso/temas/t1/8.svg', alt='')
          h4.text-center Productores
          p Organismos que elaboran su propio alimento, como las plantas.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-color-4.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4.col-md-5.col-lg-4
              img(src='@/assets/curso/temas/t1/9.svg', alt='')
          h4.text-center Consumidores
          p Organismos que se alimentan de otros seres vivos. 
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-color-4.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4.col-md-5.col-lg-4
              img(src='@/assets/curso/temas/t1/10.svg', alt='')
          h4.text-center Descomponedores
          p Organismos que transforman la materia orgánica y permiten el reciclaje de nutrientes. 
        
    p.mb-4 El equilibrio de estas relaciones garantiza la estabilidad ecológica y la capacidad de los ecosistemas para sostener la vida.

    .mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 6.
        span Tipos de ecosistemas
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th.w-25 Criterio de clasificación
              th Tipo de ecosistema
              th Características
          tbody
            tr
              td Según el medio físico
              td Terrestres
              td Se desarrollan sobre la superficie continental. Incluyen bosques, páramos, sabanas y desiertos.
            tr
              td Según el medio físico
              td Acuáticos
              td Se encuentran en cuerpos de agua dulce o salada, como ríos, lagos, humedales, manglares y océanos.
            tr
              td Según el medio físico
              td Mixtos o de transición
              td Presentan interacción entre ambientes terrestres y acuáticos. Ejemplos: estuarios, manglares y humedales.
            tr
              td Según el nivel de intervención humana
              td Naturales
              td Conservan gran parte de sus características originales y presentan baja intervención humana.
            tr
              td Según el nivel de intervención humana
              td Transformados
              td Han sido modificados por actividades humanas como agricultura, urbanización, minería o infraestructura.
    
    .subt-2.mb-4
      h4 b) Biogeografía

    p La biogeografía es la disciplina científica que estudia la distribución espacial y temporal de los seres vivos sobre la superficie terrestre, así como los factores que explican dicha distribución.
    p.mb-4 Su análisis permite identificar por qué determinadas especies habitan ciertos lugares y cómo factores como el clima, la altitud, el relieve, los suelos, la disponibilidad de agua y la historia geológica influyen en la conformación de ecosistemas y regiones naturales.

    .row.justify-content-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/11.png', alt='')
      .col-lg-8(data-aos='fade-left')
        .bg-color-3.p-4.h-100
          .row.justify-content-center
            .col-lg-8
              p.mb-lg-4 La biogeografía aporta información fundamental para:
              ul.lista-ul.lista-ul--color.fa-lista
                li 
                  i.fas.fa-flag
                  span.mb-0 Identificar áreas de alta biodiversidad.
                li 
                  i.fas.fa-flag
                  span.mb-0 Reconocer especies endémicas. 
                li 
                  i.fas.fa-flag
                  span.mb-0 Comprender procesos de migración y adaptación.  
                li 
                  i.fas.fa-flag
                  span.mb-0 Establecer estrategias de conservación ambiental. 
                li 
                  i.fas.fa-flag
                  span.mb-0 Planificar el manejo sostenible de los recursos naturales.
            .col-lg-4.d-none.d-lg-block
              img.px-lg-3(src='@/assets/curso/temas/t1/12.svg', alt='')

    .mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 7.
        span Factores que influyen en la distribución de los seres vivos
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th Factor
              th Descripción
              th Influencia en la distribución de los seres vivos
              th Ejemplo
          tbody
            tr
              td.fw-bold Clima
              td Conjunto de condiciones atmosféricas predominantes en una región, como temperatura, precipitación, humedad y vientos.
              td Determina las condiciones ambientales que permiten la supervivencia, reproducción y adaptación de las especies.
              td Los bosques húmedos tropicales se desarrollan en zonas con altas precipitaciones durante gran parte del año.
            tr
              td.fw-bold Altitud
              td Altura de un lugar respecto al nivel del mar.
              td Genera cambios en la temperatura, presión atmosférica y disponibilidad de oxígeno, influyendo en la presencia de determinadas especies.
              td Los páramos se encuentran en zonas de alta montaña donde las temperaturas son bajas y las condiciones ambientales son extremas.
            tr
              td.fw-bold Relieve
              td Conjunto de formas que presenta la superficie terrestre, como montañas, valles, llanuras y mesetas.
              td Influye en el drenaje, la exposición solar, la circulación de vientos y la disponibilidad de hábitats para las especies.
              td Las montañas pueden actuar como barreras naturales que limitan la distribución de algunas especies animales y vegetales.
            tr
              td.fw-bold Suelos
              td Capa superficial de la Tierra compuesta por minerales, materia orgánica, agua y aire.
              td Sus características físicas y químicas condicionan el crecimiento de la vegetación y la disponibilidad de nutrientes para otros organismos.
              td Los suelos fértiles favorecen el desarrollo de bosques y actividades agrícolas.
            tr
              td.fw-bold Disponibilidad de agua
              td Presencia y acceso a recursos hídricos superficiales o subterráneos.
              td Determina la supervivencia de las especies y la productividad de los ecosistemas.
              td Los humedales albergan gran diversidad de aves, peces y plantas debido a la abundancia de agua.
            tr
              td.fw-bold Radiación solar
              td Energía proveniente del Sol que llega a la superficie terrestre.
              td Influye en los procesos de fotosíntesis, la temperatura y el crecimiento de las plantas.
              td Las especies vegetales de zonas abiertas reciben mayor cantidad de luz y presentan adaptaciones específicas para aprovecharla.
            tr
              td.fw-bold Disponibilidad de nutrientes
              td Presencia de elementos esenciales para el crecimiento y desarrollo de los organismos.
              td Condiciona la productividad biológica y la capacidad de los ecosistemas para sostener poblaciones.
              td Los ecosistemas con altos niveles de nutrientes suelen presentar mayor abundancia de especies vegetales.
            tr
              td.fw-bold Interacciones biológicas
              td Relaciones que se establecen entre organismos de la misma especie o de especies diferentes.
              td Benefician o limitan la presencia de determinadas especies en un ecosistema.
              td La competencia por alimento puede reducir la presencia de algunas especies en un ecosistema.
            tr
              td.fw-bold Barreras geográficas
              td Elementos físicos que dificultan el desplazamiento de las especies, como montañas, océanos o grandes ríos.
              td Limitan la dispersión y favorecen la aparición de especies adaptadas a condiciones particulares.
              td Algunas especies endémicas solo habitan determinadas cordilleras o islas debido a su aislamiento geográfico.
            tr
              td.fw-bold Acción humana
              td Actividades desarrolladas por las personas que modifican el ambiente natural.
              td Puede alterar los ecosistemas, fragmentar hábitats, introducir especies exóticas o favorecer procesos de conservación.
              td La deforestación reduce el hábitat de muchas especies, mientras que las áreas protegidas contribuyen a su conservación.

    .subt-2.mb-4
      h4 c) Enfoque socioecosistémico

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/13.png', alt='')
      .col-lg-8(data-aos='fade-left')
        .cajon.color-primario.bg-color-3.p-4.py-lg-3.mb-4
          p.mb-0 El enfoque socioecosistémico comprende el territorio como un sistema integrado donde la naturaleza y las comunidades humanas interactúan de manera permanente. Desde esta perspectiva, los ecosistemas no pueden analizarse de forma aislada, ya que las actividades económicas, sociales, culturales y políticas influyen directamente sobre ellos.
        p Asimismo, las condiciones ambientales determinan aspectos fundamentales de la vida comunitaria, como los medios de subsistencia, las prácticas culturales, la disponibilidad de recursos y las oportunidades de desarrollo.#[br]Este enfoque reconoce que los seres humanos forman parte de los ecosistemas y que existe una relación de interdependencia entre la sociedad y la naturaleza.
    
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 8.
          span Principios del enfoque socioecosistémico
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.w-25 Principio
                th Descripción
            tbody
              tr
                td Interdependencia
                td Sociedad y naturaleza se influyen mutuamente.
              tr
                td Integralidad
                td Los problemas ambientales deben analizarse considerando factores ecológicos, sociales, culturales y económicos.
              tr
                td Participación
                td Las comunidades son actores fundamentales en la gestión territorial.
              tr
                td Sostenibilidad
                td Busca equilibrar el bienestar humano con la conservación ambiental.
              tr
                td Adaptabilidad
                td Los territorios deben fortalecer su capacidad de respuesta frente a cambios y riesgos ambientales.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/14.svg', alt='')

    p La aplicación del enfoque socioecosistémico permite:
    
    .row.mb-4(data-aos="fade")
      .col-sm-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-3.p-4.px-lg-3.h-100
          .row.justify-content-left.mb-3
            .col-3.col-md-4.col-lg-5
              img(src='@/assets/curso/temas/t1/15.svg', alt='')
          p.mb-0 Comprender las relaciones entre las comunidades y los ecosistemas. 
      .col-sm-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-3.p-4.px-lg-3.h-100
          .row.justify-content-left.mb-3
            .col-3.col-md-4.col-lg-5
              img(src='@/assets/curso/temas/t1/16.svg', alt='')
          p.mb-0 Identificar conflictos socioambientales presentes en el territorio.
      .col-sm-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-3.p-4.px-lg-3.h-100
          .row.justify-content-left.mb-3
            .col-3.col-md-4.col-lg-5
              img(src='@/assets/curso/temas/t1/17.svg', alt='')
          p.mb-0 Reconocer prácticas tradicionales de manejo de los recursos naturales.
      .col-sm-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-3.p-4.px-lg-3.h-100
          .row.justify-content-left.mb-3
            .col-3.col-md-4.col-lg-5
              img(src='@/assets/curso/temas/t1/18.svg', alt='')
          p.mb-0 Analizar los impactos de las actividades humanas sobre el ambiente.
      .col-sm-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-3.p-4.px-lg-3.h-100
          .row.justify-content-left.mb-3
            .col-3.col-md-4.col-lg-5
              img(src='@/assets/curso/temas/t1/19.svg', alt='')
          p.mb-0 Promover procesos participativos de planificación y gestión territorial.
      .col-sm-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-3.p-4.px-lg-3.h-100
          .row.justify-content-left.mb-3
            .col-3.col-md-4.col-lg-5
              img(src='@/assets/curso/temas/t1/20.svg', alt='')
          p.mb-0 Fortalecer la apropiación ambiental y la sostenibilidad del territorio.

    p Teniendo en cuenta todo esto, el estudio de los ecosistemas, la biogeografía y el enfoque socioecosistémico proporciona una visión integral del territorio, facilitando la comprensión de sus dinámicas ambientales y sociales como base para la toma de decisiones y la construcción de estrategias de desarrollo sostenible.


    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Regiones biogeográficas de Colombia y ecosistemas de especial interés ambiental
    
    .row.justify-content-center.mb-4(data-aos='fade')
      .col-lg-4.mb-4.mb-lg-0
        .bg-color-5.d-flex.align-items-center.p-4.h-100
          p.mb-0 Colombia es reconocida como uno de los países con mayor biodiversidad del mundo debido a su ubicación geográfica, la presencia de dos océanos, la influencia de la zona ecuatorial y la complejidad de sus sistemas montañosos. Estas condiciones han favorecido la formación de diversos ecosistemas y regiones biogeográficas que albergan una gran variedad de especies de flora y fauna, muchas de ellas endémicas.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/21.svg', alt='')
      .col-lg-4
        img.mb-5.w-85x.d-none.d-lg-block(src='@/assets/curso/temas/t1/22.svg', alt='')
        p.mb-0 El conocimiento de las regiones biogeográficas permite conocer la distribución de los ecosistemas, los recursos naturales y las dinámicas ecológicas presentes en el territorio. Asimismo, facilita la identificación de ecosistemas estratégicos para la conservación ambiental y el desarrollo sostenible de las comunidades.
    
    .bg-color-1.mb-5(data-aos='fade')
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/23.png', alt='')
        .col-lg-7
          .p-4
            h4.mb-lg-5 ¿Qué son las regiones biogeográficas?
            p.mb-0 Las regiones biogeográficas son áreas geográficas que comparten características ecológicas, climáticas, geológicas y biológicas similares. Estas regiones presentan ecosistemas particulares y una biodiversidad asociada a sus condiciones ambientales. #[br] El estudio de las regiones biogeográficas permite analizar la distribución de las especies, identificar áreas prioritarias para la conservación y comprender las relaciones entre los componentes naturales y las actividades humanas.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 Regiones biogeográficas de Colombia

    p.mb-4 Colombia cuenta con cinco grandes regiones biogeográficas continentales que reflejan la diversidad ambiental y cultural del país.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1.
          span Regiones biogeográficas de Colombia                
        figure
          img(src='@/assets/curso/temas/t1/24.png', alt='Representación cartográfica de las cinco regiones biogeográficas continentales de Colombia: Caribe, Andina, Pacífica, Orinoquía y Amazonía, destacando su distribución geográfica en el territorio nacional.')
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-7")
      .row.justify-content-center(titulo="Región Amazónica")
        .col-md-11.col-lg-6.col-11
          p La región Amazónica ocupa aproximadamente el 42 % del territorio nacional y forma parte de la gran cuenca amazónica suramericana. Se caracteriza por presentar extensos bosques húmedos tropicales, altas temperaturas y abundantes precipitaciones durante todo el año. Sus principales características son:
          ul.lista-ul.lista-ul--color.fa-lista
            li 
              i.fas.fa-flag
              span.mb-0 Alta biodiversidad de flora y fauna. 
            li 
              i.fas.fa-flag
              span.mb-0 Presencia de grandes reservas forestales. 
            li 
              i.fas.fa-flag
              span.mb-0 Importancia estratégica para la regulación climática global. 
            li 
              i.fas.fa-flag
              span.mb-0 Amplia disponibilidad de recursos hídricos. 
            li 
              i.fas.fa-flag
              span.mb-0 Presencia de comunidades indígenas con amplios conocimientos tradicionales.
        .col-md-6.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/25.png', alt='')
        .col-11
          p La Amazonia es considerada uno de los principales sumideros de carbono del planeta y desempeña un papel fundamental en la regulación del clima, el ciclo hidrológico y la conservación de la biodiversidad mundial.      
      .row.justify-content-center(titulo="Región Andina")
        .col-md-11.col-lg-6.col-11
          p Corresponde al territorio atravesado por las tres cordilleras de los Andes colombianos. Es la región más poblada del país y presenta una gran variedad de pisos térmicos y ecosistemas. Sus principales características son:
          ul.lista-ul.lista-ul--color.fa-lista
            li 
              i.fas.fa-flag
              span.mb-0 Diversidad de climas y paisajes. 
            li 
              i.fas.fa-flag
              span.mb-0 Presencia de páramos, bosques andinos y valles interandinos. 
            li 
              i.fas.fa-flag
              span.mb-0 Alta disponibilidad de recursos hídricos. 
            li 
              i.fas.fa-flag
              span.mb-0 Concentración de las principales ciudades y actividades económicas del país.
        .col-md-6.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/26.png', alt='')
        .col-11
          p Los ecosistemas andinos abastecen de agua a millones de personas y albergan una importante diversidad biológica adaptada a condiciones de montaña.      
      .row.justify-content-center(titulo="Región Caribe")
        .col-md-11.col-lg-6.col-11
          p Ubicada al norte del país, comprende zonas costeras, planicies, sistemas montañosos y ecosistemas marinos. Sus principales características son:
          ul.lista-ul.lista-ul--color.fa-lista
            li 
              i.fas.fa-flag
              span.mb-0 Presencia de bosques secos tropicales. 
            li 
              i.fas.fa-flag
              span.mb-0 Ecosistemas costeros y marinos. 
            li 
              i.fas.fa-flag
              span.mb-0 Amplia riqueza cultural y étnica. 
            li 
              i.fas.fa-flag
              span.mb-0 Actividades económicas relacionadas con el turismo, la pesca y la agricultura.
        .col-md-6.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/27.png', alt='')
        .col-11  
          p La región alberga ecosistemas estratégicos como manglares, ciénagas, arrecifes coralinos y la Sierra Nevada de Santa Marta, considerada una de las montañas costeras más altas del mundo.      
      .row.justify-content-center(titulo="Región Pacífica")
        .col-md-11.col-lg-6.col-11
          p Se localiza en la franja occidental del país y es una de las regiones con mayores índices de precipitación a nivel mundial. Sus principales características son:
          ul.lista-ul.lista-ul--color.fa-lista
            li 
              i.fas.fa-flag
              span.mb-0 Alta pluviosidad durante todo el año. 
            li 
              i.fas.fa-flag
              span.mb-0 Bosques húmedos tropicales de gran extensión. 
            li 
              i.fas.fa-flag
              span.mb-0 Elevada diversidad biológica. 
            li 
              i.fas.fa-flag
              span.mb-0 Importante presencia de comunidades afrodescendientes e indígenas. 
        .col-md-6.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/28.png', alt='')
        .col-11
          p Es considerada uno de los puntos de mayor biodiversidad del planeta debido a la riqueza de especies vegetales y animales presentes en sus ecosistemas.      
      .row.justify-content-center(titulo="Región Orinoquía")
        .col-md-11.col-lg-6.col-11
          p Conocida también como los Llanos Orientales, se extiende desde la cordillera Oriental hasta la frontera con Venezuela. Sus principales características son:
          ul.lista-ul.lista-ul--color.fa-lista
            li 
              i.fas.fa-flag
              span.mb-0 Amplias llanuras y sabanas naturales. 
            li 
              i.fas.fa-flag
              span.mb-0 Presencia de bosques de galería y humedales. 
            li 
              i.fas.fa-flag
              span.mb-0 Importante actividad ganadera y agrícola. 
            li 
              i.fas.fa-flag
              span.mb-0 Ecosistemas adaptados a períodos de inundación y sequía. 
        .col-md-6.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/29.png', alt='')
        .col-11
          p La Orinoquía cumple funciones importantes en la regulación hídrica y en la conservación de especies asociadas a ecosistemas de sabana y humedales.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 Ecosistemas de especial interés ambiental
    
    p Los ecosistemas estratégicos son áreas naturales que desempeñan funciones ecológicas esenciales para el bienestar humano, la conservación de la biodiversidad y el mantenimiento de los procesos naturales.
    p.mb-4 Debido a su importancia ecológica, muchos de estos ecosistemas cuentan con medidas especiales de protección y manejo.

    .mb-4(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 9.
        span Ecosistemas de especial interés ambiental
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th Ecosistema
              th Descripción
              th Importancia ambiental
              th Ejemplo
              th Funciones ecológicas principales
          tbody
            tr
              td Páramos
              td Ecosistemas de alta montaña ubicados generalmente por encima de los 3.000 metros sobre el nivel del mar.
              td Regulan el ciclo hídrico, captan y almacenan agua, abastecen acueductos urbanos y rurales y conservan especies adaptadas a condiciones extremas.
              td Páramo de Sumapaz.
              td Regulación hídrica, almacenamiento de agua y captura de carbono.
            tr
              td Humedales
              td Ecosistemas donde el agua es el principal factor que controla las condiciones ambientales y la vida asociada.
              td Almacenan y regulan el agua, disminuyen el riesgo de inundaciones, sirven de refugio para aves migratorias y especies acuáticas, y mejoran la calidad del agua mediante procesos naturales de filtración.
              td Complejo de Humedales de la Estrella Fluvial de Inírida.
              td Control de inundaciones, filtración de agua y conservación de biodiversidad.
            tr
              td Manglares
              td Ecosistemas costeros ubicados en zonas tropicales donde confluyen aguas dulces y saladas.
              td Protegen las costas frente a la erosión, actúan como barreras naturales ante tormentas, sirven como zonas de reproducción para peces y crustáceos y capturan grandes cantidades de carbono.
              td Manglares del Pacífico colombiano.
              td Protección costera, captura de carbono y reproducción de especies marinas.
            tr
              td Bosques secos tropicales
              td Ecosistemas caracterizados por presentar períodos prolongados de sequía durante el año.
              td Albergan numerosas especies endémicas, regulan procesos ecológicos regionales y proveen recursos para las comunidades locales. Actualmente son uno de los ecosistemas más amenazados del país.
              td Bosque Seco Tropical del Caribe colombiano.
              td Conservación de especies endémicas y regulación ecológica regional.
            tr
              td Áreas protegidas
              td Espacios geográficos definidos y gestionados para garantizar la conservación de la biodiversidad y los recursos naturales. Incluyen parques nacionales, reservas forestales, distritos de manejo integrado, santuarios de fauna y flora y reservas naturales de la sociedad civil.
              td Protegen ecosistemas estratégicos, conservan especies de flora y fauna, mantienen procesos ecológicos esenciales y promueven la investigación y educación ambiental.
              td Sistema Nacional de Áreas Protegidas (SINAP).
              td Conservación de ecosistemas, biodiversidad y servicios ecosistémicos.
    
    .bloque-texto-g.bg-color-7.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/30.png')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 El reconocimiento de las regiones biogeográficas y de los ecosistemas de especial interés ambiental permite identificar las potencialidades y limitaciones ambientales de un territorio, comprender las dinámicas ecológicas que lo caracterizan y establecer acciones orientadas a la conservación, restauración y uso sostenible de los recursos naturales.
    

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Características biofísicas del territorio
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos='fade-right')
        p Las características biofísicas del territorio corresponden al conjunto de elementos naturales que determinan las condiciones ambientales de una región. Estos elementos influyen directamente en la distribución de los ecosistemas, la biodiversidad, las actividades productivas, los asentamientos humanos y las dinámicas socioculturales presentes en el territorio.
        .cajon.color-primario.bg-color-3.p-4
          p.mb-0 El análisis de las características biofísicas constituye una etapa del diagnóstico territorial, ya que permite comprender las potencialidades, limitaciones y riesgos asociados al entorno natural. Asimismo, proporciona información clave para la planificación territorial, la gestión ambiental y el uso sostenible de los recursos naturales.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t1/31.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 a) Clima
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/32.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p.mb-0 El clima corresponde al conjunto de condiciones atmosféricas que caracterizan una región durante largos períodos de tiempo. Estas condiciones determinan aspectos como la disponibilidad de agua, la distribución de especies, las actividades económicas y las formas de ocupación del territorio. Los factores geográficos como la altitud, la latitud, el relieve y la cercanía a cuerpos de agua influyen significativamente en las características climáticas de cada territorio.
    
    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 10.
        span Elementos climáticos
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th.w-25 Elemento
              th Descripción
              th Importancia territorial
          tbody
            tr
              td Temperatura
              td Medida del grado de calor o frío del aire en un lugar y momento determinados.
              td Influye en la distribución de los ecosistemas y las especies, así como en el desarrollo de los cultivos.
            tr
              td Precipitación
              td Cantidad de agua que cae desde la atmósfera sobre un lugar durante un período determinado, principalmente en forma de lluvia y, según las condiciones climáticas, de nieve o granizo.
              td Incide en la disponibilidad de agua, el funcionamiento de los ecosistemas y el desarrollo de actividades agrícolas.
            tr
              td Humedad
              td Cantidad de vapor de agua presente en el aire.
              td Influye en las condiciones climáticas, el desarrollo de la vegetación y el confort ambiental de las poblaciones.
            tr
              td Vientos
              td Movimiento del aire originado principalmente por diferencias de presión atmosférica.
              td Influyen en las condiciones climáticas, la dispersión de semillas, polen y contaminantes, y el aprovechamiento del potencial de energía eólica.
            tr
              td Radiación solar
              td Energía proveniente del Sol que alcanza la superficie terrestre.
              td Influye en la temperatura, los procesos de fotosíntesis, la productividad de los ecosistemas y el potencial de aprovechamiento de la energía solar.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 b) Relieve
    
    p.mb-4 El relieve corresponde a las diferentes formas que presenta la superficie terrestre como resultado de procesos geológicos internos y externos ocurridos a lo largo del tiempo. Las características del relieve influyen sobre el clima, la hidrografía, los suelos, la biodiversidad y las actividades humanas.

    .row.justify-content-center.align-items-end.mb-4
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 11.
          span Principales formas del relieve
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.w-25 Forma del relieve
                th Descripción
                th Ejemplo
            tbody
              tr
                td Montañas
                td Elevaciones naturales de gran altura con pendientes pronunciadas.
                td Cordillera de los Andes.
              tr
                td Llanuras
                td Terrenos extensos y relativamente planos.
                td Llanos Orientales.
              tr
                td Mesetas
                td Superficies elevadas y relativamente planas.
                td Altiplano Cundiboyacense.
              tr
                td Valles
                td Depresiones ubicadas entre montañas, generalmente recorridas por ríos.
                td Valle del río Cauca.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/33.png', alt='')
    
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/34.png')})`}"
      )
      .bloque-texto-g__texto.p-3
        p.mb-0 El relieve desempeña un papel fundamental en la configuración y funcionamiento de los territorios, ya que influye directamente en la formación y distribución de los ecosistemas, así como en las condiciones ambientales de una región. Además, determina los patrones de drenaje y circulación del agua, favoreciendo o limitando la disponibilidad de recursos hídricos. Las características del relieve también condicionan los usos del suelo y el desarrollo de actividades productivas, agrícolas, pecuarias y urbanas. De igual manera, afectan la accesibilidad, el establecimiento de asentamientos humanos y la construcción de infraestructura. Finalmente, la diversidad de formas del relieve contribuye a la generación de distintos paisajes y hábitats, promoviendo la presencia de una amplia variedad de especies y ecosistemas.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 c) Hidrografía
    
    p.mb-4 La hidrografía es la rama de la geografía que estudia los cuerpos de agua presentes en un territorio y las dinámicas asociadas a estos recursos. El agua es uno de los elementos más importantes para la vida, el desarrollo económico y el equilibrio de los ecosistemas.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/35.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 12.
          span Principales componentes hidrográficos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.w-25 Componente
                th Descripción
            tbody
              tr
                td Ríos
                td Corrientes naturales de agua que fluyen hacia otros cuerpos de agua.
              tr
                td Quebradas
                td Corrientes de menor tamaño que los ríos.
              tr
                td Lagunas
                td Acumulaciones naturales de agua rodeadas por tierra.
              tr
                td Humedales
                td Ecosistemas donde el agua es el elemento dominante.
              tr
                td Acuíferos
                td Reservas de agua subterránea almacenadas en formaciones geológicas.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p La hidrografía es un componente fundamental del territorio, ya que proporciona el agua necesaria para el consumo humano, el desarrollo de actividades agrícolas, pecuarias e industriales, y el sostenimiento de los ecosistemas. Los cuerpos de agua contribuyen al mantenimiento del equilibrio ecológico al servir de hábitat para numerosas especies de flora y fauna. Asimismo, desempeñan un papel importante en la regulación de los ciclos hidrológicos y climáticos, influyendo en procesos como la precipitación, la infiltración y el almacenamiento de agua. Debido a su importancia ambiental, social y económica, la hidrografía constituye un elemento estratégico para la planificación territorial, la gestión de los recursos naturales y el desarrollo sostenible de las comunidades.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/36.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 d) Suelo
    
    p.mb-4 El suelo es la capa superficial de la corteza terrestre donde se desarrollan las plantas y gran parte de las actividades biológicas y productivas. Su formación es el resultado de la interacción de factores como el clima, el relieve, los organismos vivos y el tiempo.

    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 13.
        span Componentes del suelo
      .tabla-a.color-acento-contenido.mb-5
        table
          thead
            tr
              th.w-25 Componente
              th Función
          tbody
            tr
              td Minerales
              td Aportan nutrientes esenciales para las plantas, contribuyen a determinar propiedades como la textura, la retención de agua y el drenaje.
            tr
              td Materia orgánica
              td Mejora la fertilidad y estructura del suelo, favorece la retención de agua y aporta nutrientes mediante su descomposición.
            tr
              td Agua
              td Facilita el transporte de nutrientes, participa en procesos biológicos y permite el desarrollo de las plantas y otros organismos del suelo.
            tr
              td Aire
              td Proporciona el oxígeno necesario para la respiración de las raíces y de numerosos organismos presentes en el suelo.
            tr
              td Organismos vivos
              td Participan en la descomposición de la materia orgánica, el reciclaje de nutrientes y otros procesos que contribuyen a la estructura y fertilidad del suelo.
    
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos='fade-right')
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-7")
          .row(titulo="Propiedades del suelo")
            .col-11
              p.mb-0 El suelo posee diversas propiedades físicas y químicas que determinan su capacidad para sustentar la vida y desarrollar actividades productivas. Entre las principales se encuentran la textura, relacionada con la proporción de arena, limo y arcilla; la estructura, que corresponde a la forma en que se agrupan sus partículas; el color, indicador de características como el contenido de materia orgánica y humedad; la fertilidad, asociada a la disponibilidad de nutrientes para las plantas; la capacidad de retención de agua, que influye en el almacenamiento y suministro de humedad; y la profundidad, que condiciona el desarrollo de las raíces y la disponibilidad de recursos para los organismos que habitan en él.
          .row(titulo="Importancia del suelo")
            .col-11
              p.mb-0 El suelo es un recurso natural esencial para el funcionamiento de los ecosistemas y el bienestar de las comunidades, pues es la base para la producción de alimentos y materias primas, contribuye a la regulación hídrica mediante la infiltración y almacenamiento de agua, y participa en el almacenamiento de carbono, ayudando a mitigar los efectos del cambio climático. Además, alberga una gran diversidad de organismos que cumplen funciones ecológicas fundamentales y sirve de soporte para múltiples actividades económicas, sociales y ambientales que se desarrollan en el territorio.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t1/37.png', alt='')

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 e) Vegetación  
    
    p.mb-4 La vegetación corresponde al conjunto de especies vegetales presentes en un territorio y se convierte en uno de los principales indicadores de las condiciones ambientales de una región. Su composición depende de factores como el clima, el suelo, la altitud, la disponibilidad de agua y la intervención humana.

    .row.justify-content-center
      .col-lg-7(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 14.
          span Tipos generales de vegetación
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.w-25 Tipo
                th Características
            tbody
              tr
                td Bosques
                td Dominados por árboles y alta diversidad biológica.
              tr
                td Matorrales
                td Formados principalmente por arbustos y especies de menor porte.
              tr
                td Pastizales
                td Predominan gramíneas y otras especies herbáceas.
              tr
                td Vegetación de páramo
                td Adaptada a bajas temperaturas y alta humedad.
              tr
                td Vegetación acuática
                td Asociada a ríos, lagunas, humedales y otros cuerpos de agua.
      .col-lg-5(data-aos='fade-left')
        .bg-color-3.d-flex.align-items-center.p-3.h-100
          p.mb-0 La vegetación desempeña un papel fundamental en el equilibrio de los ecosistemas y en el mantenimiento de las condiciones ambientales del territorio. Su presencia contribuye a proteger los suelos frente a procesos de erosión causados por el viento y el agua, mejorando la regulación del ciclo hidrológico mediante la captación, infiltración y almacenamiento de agua, y participa en la captura de dióxido de carbono, ayudando a reducir los efectos del cambio climático. Además, proporciona alimento, refugio y espacios de reproducción para numerosas especies de flora y fauna, fortaleciendo la biodiversidad. De igual manera, influye en la regulación de la temperatura, la humedad y otros factores climáticos, contribuyendo al bienestar ambiental y al desarrollo sostenible de las comunidades.

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4 Biodiversidad, bienes y servicios ecosistémicos  
    
    p.mb-5 La biodiversidad y los servicios que brindan los ecosistemas son elementos esenciales para la sostenibilidad ambiental y el bienestar de las comunidades. La interacción entre los seres vivos y su entorno genera múltiples beneficios que sustentan las actividades humanas, el desarrollo económico y el equilibrio ecológico. Comprender la importancia de estos recursos permite reconocer el valor de la naturaleza en el territorio, fortalecer los procesos de conservación y promover un uso responsable de los recursos naturales para las generaciones presentes y futuras.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 a) Biodiversidad

    p.mb-4 La biodiversidad es la variedad de formas de vida presentes en un territorio, incluyendo especies animales, vegetales, microorganismos, ecosistemas y recursos genéticos. Colombia es considerada uno de los países megadiversos del mundo debido a la gran riqueza biológica presente en sus diferentes regiones.
    
    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 15.
        span Niveles de biodiversidad
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th.w-25 Nivel
              th Descripción
              th Ejemplo
          tbody
            tr
              td Diversidad genética
              td Corresponde a la variabilidad de genes y características hereditarias presentes dentro de una misma especie. Esta diversidad permite que las poblaciones se adapten a cambios ambientales, enfermedades y condiciones adversas, favoreciendo su supervivencia a largo plazo.
              td En Colombia existen numerosas variedades de maíz, papa y fríjol adaptadas a diferentes pisos térmicos y condiciones climáticas. De igual manera, una misma especie de árbol puede presentar diferencias genéticas que le permiten crecer en distintas condiciones de humedad o temperatura.
            tr
              td Diversidad de especies
              td Hace referencia a la variedad de organismos vivos que habitan una región, incluyendo plantas, animales, hongos y microorganismos. Un territorio con alta diversidad de especies suele presentar ecosistemas más estables y resilientes.
              td Un bosque húmedo tropical puede albergar cientos de especies de árboles, aves, mamíferos, anfibios e insectos. Colombia es uno de los países con mayor diversidad de aves del mundo, con más de 1.900 especies registradas.
            tr
              td Diversidad de ecosistemas
              td Se refiere a la variedad de ecosistemas presentes en un territorio, cada uno con características ambientales, comunidades biológicas y procesos ecológicos particulares.
              td En Colombia se encuentran ecosistemas como páramos, bosques andinos, bosques húmedos tropicales, humedales (ciénagas, manglares, pantanos), sabanas de la Orinoquía, arrecifes coralinos y bosques secos tropicales.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos='fade')
      .col-lg-4.mb-4.mb-lg-0
        .bg-color-5.p-4
          p.mb-0 La biodiversidad es fundamental para el mantenimiento del equilibrio ecológico, ya que garantiza el funcionamiento adecuado de los ecosistemas y las relaciones entre las diferentes especies que los conforman. Además, fortalece la resiliencia de los ecosistemas frente a cambios ambientales, fenómenos naturales y actividades humanas, permitiendo su adaptación y recuperación. 
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/38.png', alt='')
      .col-lg-4
        p.mb-0 La biodiversidad también proporciona recursos esenciales para las comunidades, como alimentos, medicinas, fibras, madera y otras materias primas utilizadas en diversas actividades productivas. Asimismo, contribuye al bienestar social, cultural y económico de las poblaciones, y sustenta los bienes y servicios ecosistémicos, tales como la regulación del clima, la provisión de agua, la fertilidad de los suelos, la polinización y la conservación de los recursos naturales necesarios para la vida. 

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 b) Bienes ecosistémicos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/39.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Los bienes ecosistémicos son los recursos materiales que las personas obtienen directamente de los ecosistemas para satisfacer sus necesidades básicas y desarrollar actividades económicas, productivas y culturales. Estos bienes provienen de la naturaleza y son la base de muchos medios de vida, especialmente en comunidades rurales que dependen de los recursos naturales para su subsistencia.
        p.mb-0 La disponibilidad de estos bienes depende del estado de conservación de los ecosistemas y de las prácticas de manejo que realizan las comunidades. Su aprovechamiento sostenible es fundamental para garantizar que continúen beneficiando a las generaciones presentes y futuras.
    
    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 16.
        span Bienes ecosistémicos
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th.w-25 Bien ecosistémico
              th Descripción
              th Ejemplos de uso
          tbody
            tr
              td Agua
              td Recurso indispensable para la vida y el desarrollo de actividades humanas.
              td Consumo humano, riego de cultivos, actividades pecuarias e industriales.
            tr
              td Alimentos
              td Productos de origen vegetal y animal obtenidos de los ecosistemas.
              td Frutas, hortalizas, pescado, carne, miel y semillas.
            tr
              td Madera
              td Recurso forestal utilizado en diferentes actividades productivas.
              td Construcción, elaboración de muebles, artesanías y cercas.
            tr
              td Plantas medicinales
              td Especies vegetales utilizadas para la prevención y tratamiento de enfermedades.
              td Manzanilla, sábila, caléndula, hierbabuena y otras especies tradicionales.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 c) Servicios ecosistémicos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/40.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Los servicios ecosistémicos son los beneficios que las personas reciben de los ecosistemas a través de los procesos ecológicos que ocurren de manera natural. A diferencia de los bienes ecosistémicos, estos servicios no corresponden a productos tangibles, sino a funciones y procesos que contribuyen al bienestar humano y al equilibrio ambiental. Los ecosistemas proporcionan servicios esenciales para la vida, tales como la regulación del clima, la purificación del agua, la formación de suelos fértiles y la conservación de la biodiversidad. Sin estos servicios, muchas actividades humanas y económicas serían difíciles o imposibles de mantener.
    
    .mb-4(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 17.
        span Tipos de servicios ecosistémicos
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th.w-25 Tipo de servicio
              th Descripción
              th Ejemplos
          tbody
            tr
              td Servicios de provisión
              td Corresponden a los productos que las personas obtienen de los ecosistemas para satisfacer diferentes necesidades.
              td Agua potable, alimentos, madera, fibras naturales y recursos medicinales.
            tr
              td Servicios de regulación
              td Beneficios derivados de los procesos ecológicos que regulan las condiciones ambientales y contribuyen al bienestar humano.
              td Regulación del clima, control de inundaciones, captura de carbono, protección contra la erosión, polinización y control biológico de plagas.
            tr
              td Servicios culturales
              td Beneficios no materiales que las personas obtienen de los ecosistemas relacionados con aspectos sociales, culturales, espirituales y recreativos.
              td Ecoturismo, educación ambiental, recreación, identidad cultural y patrimonio natural.
            tr
              td Servicios de soporte o apoyo
              td Procesos ecológicos fundamentales que permiten el funcionamiento de los ecosistemas y hacen posible la generación de otros servicios ecosistémicos.
              td Formación del suelo, ciclo de nutrientes, producción de biomasa y conservación de hábitats.
    
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/41.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los servicios ecosistémicos son indispensables para la calidad de vida de las comunidades, ya que contribuyen a la disponibilidad de recursos naturales, la regulación de procesos ambientales y la conservación de la biodiversidad. Su valoración y protección permiten fortalecer la gestión sostenible del territorio, promover la adaptación al cambio climático y garantizar el bienestar de las generaciones actuales y futuras.
    

    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.5 Riesgo, amenaza, vulnerabilidad y resiliencia territorial
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/42.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Los territorios están expuestos de manera permanente a fenómenos naturales y actividades humanas que pueden generar impactos sobre las comunidades, los ecosistemas y las actividades productivas. La identificación y análisis de estos factores permiten comprender las condiciones de riesgo existentes, reconocer las capacidades de respuesta del territorio y fortalecer la planificación para la prevención y mitigación de posibles afectaciones.
        p.mb-0 El estudio del riesgo, las amenazas, la vulnerabilidad y la resiliencia territorial como una herramienta para el diagnóstico territorial, ya que facilita la toma de decisiones orientadas a la gestión ambiental, la reducción de desastres y la construcción de territorios más seguros y sostenibles.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 a) Riesgo
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos='fade-right')
        p El riesgo corresponde a la probabilidad de que una amenaza genere daños o pérdidas sobre las personas, los ecosistemas, la infraestructura, los bienes materiales o las actividades económicas de un territorio.
        p El riesgo surge de la interacción entre una amenaza y las condiciones de vulnerabilidad presentes en una comunidad o ecosistema. Por esta razón, no depende únicamente de la ocurrencia de un fenómeno peligroso, sino también de la capacidad que tenga el territorio para enfrentarlo y recuperarse.
        .bg-color-5.p-4.mb-4
          p De manera general, puede entenderse mediante la siguiente relación: 
          ul.lista-ul.lista-ul--color.fa-lista.mb-0
            li.mb-0 
              i.fas.fa-flag
              span.mb-0 #[b Riesgo = Amenaza x Vulnerabilidad]
        p Esto significa que, aunque una amenaza sea alta, el riesgo puede disminuir si existen adecuadas medidas de prevención, preparación y respuesta.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t1/43.png', alt='')
    
    p.mb-4 Características del riesgo.

    .row.mb-4(data-aos='fade')
      .col-sm-6.col-lg-d5.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-9.p-4.h-100
          .row.justify-content-left.mb-3
            .col-3.col-md-4.col-lg-4
              img(src='@/assets/curso/temas/t1/44.svg', alt='')
          p.mb-0 Puede afectar componentes ambientales, sociales, económicos y culturales. 
      .col-sm-6.col-lg-d5.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-9.p-4.h-100
          .row.justify-content-left.mb-3
            .col-3.col-md-4.col-lg-4
              img(src='@/assets/curso/temas/t1/45.svg', alt='')
          p.mb-0 Varía según las condiciones del territorio.
      .col-sm-6.col-lg-d5.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-9.p-4.h-100
          .row.justify-content-left.mb-3
            .col-3.col-md-4.col-lg-4
              img(src='@/assets/curso/temas/t1/46.svg', alt='')
          p.mb-0 Puede ser identificado, analizado y gestionado.
      .col-sm-6.col-lg-d5.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-9.p-4.h-100
          .row.justify-content-left.mb-3
            .col-3.col-md-4.col-lg-4
              img(src='@/assets/curso/temas/t1/47.svg', alt='')
          p.mb-0 Se incrementa cuando existen altos niveles de vulnerabilidad.
      .col-sm-6.col-lg-d5.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-9.p-4.h-100
          .row.justify-content-left.mb-3
            .col-3.col-md-4.col-lg-4
              img(src='@/assets/curso/temas/t1/48.svg', alt='')
          p.mb-0 Puede reducirse mediante acciones de prevención y planificación.
    
    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 18.
        span Tipos de riesgo
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th.w-25 Tipo de riesgo
              th Descripción
              th Ejemplos
          tbody
            tr
              td Riesgos naturales
              td Son aquellos originados por fenómenos naturales que pueden generar afectaciones en el territorio.
              td Inundaciones, deslizamientos, sequías, terremotos, erupciones volcánicas e incendios forestales por causas naturales.
            tr
              td Riesgos antrópicos
              td Son generados directa o indirectamente por las actividades humanas.
              td Contaminación ambiental, deforestación, derrames de sustancias peligrosas, incendios provocados y minería ilegal.
            tr
              td Riesgos socioambientales
              td Resultan de la interacción entre factores sociales y ambientales que afectan a las comunidades y los ecosistemas.
              td Escasez de agua por degradación ambiental, ocupación de zonas de alto riesgo o conflictos por el uso de recursos naturales.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 b) Amenaza
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/49.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p La amenaza es un fenómeno, actividad o condición con potencial de causar daños a las personas, los ecosistemas, la infraestructura o las actividades económicas de un territorio.
        p Las amenazas pueden tener origen natural o antrópico y su nivel de peligrosidad depende de factores como la intensidad, frecuencia, duración y área de influencia.
        p.mb-0 Una amenaza no siempre genera un desastre; para que ello ocurra deben existir elementos expuestos y condiciones de vulnerabilidad.s
    
    .mb-4(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 19.
        span Clasificación de las amenazas
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th.w-25 Tipo de amenaza
              th Características
              th Ejemplos
          tbody
            tr
              td Naturales
              td Se originan por procesos propios de la naturaleza.
              td Inundaciones, terremotos, huracanes, sequías y movimientos en masa.
            tr
              td Antrópicas
              td Son consecuencia de actividades humanas.
              td Contaminación, incendios provocados, explotación inadecuada de recursos naturales.
            tr
              td Tecnológicas
              td Asociadas a fallas técnicas o industriales.
              td Derrames químicos, explosiones, fugas de combustibles.
            tr
              td Socioambientales
              td Resultan de la interacción entre factores humanos y ambientales.
              td Degradación ambiental, conflictos por recursos naturales o expansión urbana desordenada.
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p La magnitud de una amenaza depende de diversos factores que permiten evaluar su potencial de afectación sobre un territorio. Entre ellos se encuentra la intensidad del fenómeno, que hace referencia a la fuerza o severidad con la que se presenta un evento; la frecuencia de ocurrencia, relacionada con la periodicidad o número de veces que puede manifestarse en un determinado período; y la duración, que corresponde al tiempo durante el cual permanece activo el fenómeno. Asimismo, es importante considerar el área afectada, es decir, la extensión geográfica sobre la cual puede generar impactos, y su capacidad de generar daños, entendida como el potencial que tiene para ocasionar pérdidas humanas, afectaciones ambientales, daños en la infraestructura o perjuicios económicos. El análisis conjunto de estos factores permite determinar el nivel de amenaza presente en un territorio y orientar acciones de prevención y gestión del riesgo.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/50.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 c) Vulnerabilidad
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/55.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p La vulnerabilidad corresponde al grado de susceptibilidad o fragilidad que presentan las personas, comunidades, ecosistemas o infraestructuras frente a una amenaza.
        p Un territorio es más vulnerable cuando tiene menor capacidad para prevenir, resistir o recuperarse de los impactos ocasionados por eventos adversos.
        p.mb-0 La vulnerabilidad puede estar relacionada con factores físicos, sociales, económicos, culturales e institucionales.
    
    .mb-4(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 20.
        span Tipos de vulnerabilidad
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th.w-25 Tipo
              th Descripción
              th Ejemplo
          tbody
            tr
              td Física
              td Asociada a las características de las construcciones e infraestructura.
              td Viviendas ubicadas en zonas de inundación o deslizamiento.
            tr
              td Social
              td Relacionada con condiciones de educación, organización y acceso a servicios.
              td Comunidades con limitada capacidad de respuesta ante emergencias.
            tr
              td Económica
              td Vinculada a los recursos disponibles para afrontar situaciones adversas.
              td Familias con bajos ingresos que tienen dificultades para recuperarse después de un desastre.
            tr
              td Ambiental
              td Relacionada con el deterioro de los ecosistemas y recursos naturales.
              td Deforestación que incrementa la susceptibilidad a la erosión.
            tr
              td Institucional
              td Asociada a la capacidad de gestión de las entidades responsables.
              td Ausencia de planes de prevención y atención de emergencias.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos="fade-right")
        p La vulnerabilidad de un territorio puede aumentar debido a diversas condiciones sociales, económicas, ambientales e institucionales que reducen la capacidad de las comunidades para enfrentar y recuperarse de situaciones adversas. Entre los principales factores se encuentra la ocupación de zonas de riesgo, como áreas propensas a inundaciones o deslizamientos; el deterioro ambiental, que disminuye la capacidad de los ecosistemas para mitigar impactos naturales; y la pobreza y desigualdad, que limitan el acceso a recursos y oportunidades para la prevención y recuperación. Asimismo, una débil organización comunitaria puede dificultar la coordinación y respuesta ante emergencias, mientras que la falta de educación ambiental reduce la comprensión de los riesgos y las medidas preventivas. 
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/51.png', alt='')
    
    p.mb-5 Una insuficiente planificación territorial mejora la ocupación inadecuada del suelo y el desarrollo de actividades que incrementan la exposición a amenazas, aumentando así la vulnerabilidad de las comunidades y los ecosistemas.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 d) Resiliencia territorial
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/52.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p La resiliencia territorial es la capacidad que tienen las comunidades, los ecosistemas y las instituciones para adaptarse, responder y recuperarse de manera efectiva frente a eventos adversos, reduciendo sus impactos y fortaleciendo sus condiciones de desarrollo.
        p.mb-0 Un territorio resiliente no es aquel que evita completamente los riesgos, sino aquel que cuenta con capacidades para enfrentarlos, aprender de las experiencias y mejorar continuamente sus mecanismos de adaptación.
    
    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 21.
        span Componentes de la resiliencia territorial
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th.w-25 Componente
              th Descripción
              th Ejemplo
          tbody
            tr
              td Capacidad de adaptación
              td Posibilidad de ajustar prácticas, actividades y formas de gestión frente a nuevas condiciones ambientales, sociales o económicas. Permite reducir los impactos de eventos adversos y aprovechar oportunidades de cambio.
              td Una comunidad agrícola que implementa cultivos resistentes a la sequía y sistemas de riego eficientes ante la disminución de las lluvias causada por el cambio climático.
            tr
              td Capacidad de respuesta
              td Habilidad de una comunidad, organización o institución para actuar de manera rápida y efectiva frente a una emergencia o situación de riesgo. Incluye la disponibilidad de recursos, planes de contingencia y mecanismos de coordinación.
              td Un municipio que cuenta con sistemas de alerta temprana, brigadas comunitarias y rutas de evacuación para atender oportunamente una inundación.
            tr
              td Capacidad de recuperación
              td Posibilidad de restablecer las condiciones normales de funcionamiento después de una afectación, minimizando pérdidas y retomando las actividades sociales, económicas y ambientales.
              td La reconstrucción de viviendas, vías e infraestructura comunitaria después de un deslizamiento de tierra, permitiendo que la población retome sus actividades habituales.
            tr
              td Aprendizaje y mejora
              td Incorporación de experiencias, conocimientos y lecciones aprendidas para fortalecer la gestión del riesgo y evitar que situaciones similares generen los mismos impactos en el futuro.
              td Después de una inundación, una comunidad actualiza sus planes de emergencia, mejora los sistemas de drenaje y desarrolla procesos de capacitación para la población.
            tr
              td Participación comunitaria
              td Vinculación activa de la población en la identificación de riesgos, la toma de decisiones y la implementación de acciones de prevención, mitigación y recuperación.
              td Habitantes de una vereda que participan en jornadas de reforestación, monitoreo de fuentes hídricas y elaboración de mapas comunitarios de riesgo.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 e) Matrices de identificación de riesgos
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/53.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p.mb-0 Las matrices de identificación de riesgos son herramientas utilizadas para reconocer, analizar y valorar las amenazas presentes en un territorio, así como los posibles impactos que pueden generar sobre la población, los ecosistemas y las actividades económicas. Estas matrices facilitan la toma de decisiones y la formulación de medidas de prevención, mitigación y control.
    
    p Elementos que evalúan las matrices de identificación de riesgos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/54.png', alt='')
      .col-lg-9(data-aos="fade-left")
        TabsA.color-acento-botones
          .tarjeta.bg-color-6.p-4(titulo="Amenazas presentes")
            p Corresponden a los fenómenos, eventos o situaciones con potencial de generar daños en un territorio. Las amenazas pueden ser de origen natural, antrópico o socioambiental y representan el factor desencadenante del riesgo. Su identificación permite reconocer los peligros existentes y analizar las posibles afectaciones sobre las comunidades, los ecosistemas y las actividades económicas.
          .tarjeta.bg-color-6.p-4(titulo="Nivel de vulnerabilidad")
            p Hace referencia al grado de susceptibilidad o fragilidad que presentan las personas, comunidades, ecosistemas o infraestructuras frente a una amenaza determinada. La vulnerabilidad depende de factores físicos, sociales, económicos, ambientales e institucionales que pueden aumentar o disminuir la capacidad de respuesta ante una situación adversa.
          .tarjeta.bg-color-6.p-4(titulo="Posibles impactos")
            p Son las consecuencias que podrían generarse como resultado de la ocurrencia de una amenaza. Estos impactos pueden manifestarse en el ámbito ambiental, social, económico o cultural, afectando recursos naturales, infraestructura, actividades productivas, servicios básicos o la calidad de vida de la población.
          .tarjeta.bg-color-6.p-4(titulo="Probabilidad de ocurrencia")
            p Corresponde a la posibilidad de que una amenaza se materialice en un tiempo y lugar determinados. Su análisis considera aspectos como la frecuencia histórica de los eventos, las condiciones ambientales del territorio y los factores que favorecen la ocurrencia del fenómeno.
          .tarjeta.bg-color-6.p-4(titulo="Nivel de riesgo")
            p Es el resultado del análisis conjunto entre la amenaza identificada y el nivel de vulnerabilidad existente. Esta valoración permite determinar el grado de riesgo al que está expuesto un territorio y establecer prioridades para la implementación de acciones de prevención, mitigación o control.
          .tarjeta.bg-color-6.p-4(titulo="Medidas de prevención")
            p Son las acciones, estrategias y mecanismos orientados a reducir la probabilidad de ocurrencia de eventos adversos o minimizar sus posibles impactos. Estas medidas pueden incluir actividades de educación y sensibilización, fortalecimiento organizativo comunitario, obras de mitigación, sistemas de alerta temprana, planificación territorial y conservación de los recursos naturales.
    
    .mb-4(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 22.
        span Ejemplo de matriz de identificación de riesgos
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th Amenaza
              th Elemento expuesto
              th Vulnerabilidad
              th Posible impacto
              th Medida preventiva
          tbody
            tr
              td Inundación
              td Viviendas cercanas al río
              td Alta
              td Pérdida de bienes y afectación a la población
              td Sistemas de alerta temprana y reubicación de viviendas
            tr
              td Deslizamiento
              td Vías rurales
              td Media
              td Interrupción de la movilidad
              td Estabilización de taludes y reforestación
            tr
              td Sequía
              td Cultivos agrícolas
              td Alta
              td Disminución de la producción
              td Uso eficiente del agua y sistemas de almacenamiento
            tr
              td Incendio forestal
              td Cobertura vegetal
              td Media
              td Pérdida de biodiversidad
              td Vigilancia, educación ambiental y manejo preventivo

    p Como complemento al contenido de este tema, se invita a explorar el siguiente pódcast, en el que se explican de manera práctica los conceptos de riesgo, amenaza, vulnerabilidad y resiliencia, así como su importancia para la gestión del territorio, la prevención de desastres y la construcción de comunidades más preparadas y sostenibles. Este recurso permitirá fortalecer la comprensión de los contenidos desarrollados y su aplicación en diferentes contextos territoriales.

    .bg-color-3.mb-4
      img(src='@/assets/curso/temas/t1/podcast.png', alt='')
      .bg-color-1.p-4
        .tarjeta.bg-white.p-4
          TarjetaAudio.color-acento-botones(
          texto="<b>Pódcast:</b> Riesgo, amenaza, vulnerabilidad y resiliencia en la gestión del territorio"
          :audio="require_src('@/assets/actividad/audio/success.mp3')")
          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
