export default {
  global: {
    Name: 'Territorio, ecosistemas y planificación',
    Description:
      'Este componente desarrolla los conocimientos necesarios para diagnosticar el territorio mediante la identificación de sus características ecológicas, biofísicas, históricas, socioculturales y organizativas. De igual manera, aborda las relaciones entre las comunidades y los ecosistemas, así como las herramientas e instrumentos de planificación territorial, con el propósito de fortalecer procesos de análisis, participación comunitaria y apropiación ambiental del territorio.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Fundamentos ecológicos y características biofísicas del territorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Ecosistemas, biogeografía y enfoque socioecosistémico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Regiones biogeográficas de Colombia y ecosistemas de especial interés ambiental',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características biofísicas del territorio',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Biodiversidad, bienes y servicios ecosistémicos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Riesgo, amenaza, vulnerabilidad y resiliencia territorial',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Historia territorial, saberes y dinámicas socioculturales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Cosmovisiones y saberes tradicionales y locales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Usos, costumbres y prácticas culturales relacionadas con el entorno',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Grupos poblacionales y dinámicas sociales del territorio',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Organización social y gobernanza territorial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Contexto político nacional, regional y local',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Organizaciones sociales, comunitarias y privadas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Territorio, planificación e instrumentos de gestión territorial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Cartografía y técnicas de producción de información territorial',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Zonificación y representaciones territoriales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Uso, vocación y conflictos del suelo',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Instrumentos de planificación territorial',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo:
              'Planes de vida, manejo y desarrollo sostenible comunitario',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'Fenómeno natural o antrópico con capacidad de causar daños a las personas, los ecosistemas o la infraestructura.',
    },
    {
      termino: 'Biodiversidad',
      significado:
        'Variedad de seres vivos, recursos genéticos y ecosistemas presentes en un territorio.',
    },
    {
      termino: 'Biogeografía',
      significado:
        'Disciplina que estudia la distribución espacial de los seres vivos y los factores que la determinan.',
    },
    {
      termino: 'Cartografía',
      significado:
        'Conjunto de técnicas utilizadas para representar gráficamente el territorio mediante mapas, planos y esquemas.',
    },
    {
      termino: 'Cosmovisión',
      significado:
        'Forma en que una comunidad interpreta, comprende y se relaciona con el mundo y su entorno.',
    },
    {
      termino: 'Ecosistema',
      significado:
        'Sistema conformado por organismos vivos y elementos físicos que interactúan entre sí en un espacio determinado.',
    },
    {
      termino: 'Ecología',
      significado:
        'Ciencia que estudia las relaciones entre los seres vivos y el ambiente en el que habitan.',
    },
    {
      termino: 'Gobernanza territorial',
      significado:
        'Proceso de articulación y toma de decisiones entre actores públicos, comunitarios, sociales y privados para orientar la gestión y el desarrollo del territorio.',
    },
    {
      termino: 'Hidrografía',
      significado:
        'Estudio y descripción de los cuerpos de agua presentes en una región, como ríos, lagunas, humedales y acuíferos.',
    },
    {
      termino: 'Participación comunitaria',
      significado:
        'Intervención activa de la población en los procesos de diagnóstico, planificación, gestión y seguimiento del territorio.',
    },
    {
      termino: 'Planificación territorial',
      significado:
        'Proceso de organización y gestión del territorio para promover un desarrollo equilibrado, sostenible y participativo.',
    },
    {
      termino: 'Resiliencia territorial',
      significado:
        'Capacidad de una comunidad o territorio para adaptarse, recuperarse y fortalecerse frente a situaciones adversas.',
    },
    {
      termino: 'Socioecosistema',
      significado:
        'Sistema integrado en el que las comunidades humanas y los ecosistemas interactúan de manera dinámica e interdependiente, mediante relaciones sociales, culturales, económicas, políticas y ambientales.',
    },
    {
      termino: 'Territorio',
      significado:
        'Espacio geográfico construido y transformado mediante relaciones sociales, culturales, económicas, políticas y ambientales que se desarrollan a lo largo del tiempo.',
    },
    {
      termino: 'Uso del suelo',
      significado:
        'Destinación o utilización que se hace del suelo para actividades como conservación, agricultura, producción forestal, infraestructura o urbanización.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'Grado de susceptibilidad de una comunidad, infraestructura o ecosistema frente a una amenaza determinada.',
    },
  ],
  referencias: [
    {
      referencia:
        'Begon, M., Townsend, C. R., & Harper, J. L. Ecology: From Individuals to Ecosystems. Wiley-Blackwell.',
      link: '',
    },
    {
      referencia:
        'Cuaical Aguilar, F. L., Gil Gómez, J. M. (2022). Lo Campesino, el Territorio y la Identidad: Análisis y Reconfiguraciones Desde el Diálogo de Saberes. Universidad de Antioquia.',
    },
    {
      referencia:
        'Ecología Digital. (s. f.). Fundamentos Ecológicos: Bases para entender los Sistemas Naturales.',
    },
    {
      referencia:
        'Instituto de Investigación de Recursos Biológicos Alexander von Humboldt. (2019). Biodiversidad 2019: Estado y tendencias de la biodiversidad continental de Colombia.',
    },
    {
      referencia:
        'Millennium Ecosystem Assessment. (2003). Ecosystems and Human Well-being: A Framework for Assessment. Island Press.',
      link: '',
    },
    {
      referencia:
        'Millennium Ecosystem Assessment. (2005). Ecosystems and Human Well-being: Synthesis. Island Press.',
      link: '',
    },
    {
      referencia:
        'Pérez Preciado, A. (s. f.). Instrumentos de planeación territorial en Colombia. Sociedad Geográfica de Colombia.',
    },
    {
      referencia:
        'Rodríguez Becerra, M., & Espinoza, G. (2002). Gestión ambiental en América Latina y el Caribe: Evolución, tendencias y principales prácticas. Banco Interamericano de Desarrollo.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga ',
          cargo: 'Experto temático ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez ',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
