<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Territorio, ecosistemas y planificación sociocultural',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los conceptos fundamentales relacionados con la ecología, los ecosistemas, las características biofísicas del territorio, la biodiversidad, la gestión del riesgo, los procesos históricos y socioculturales, la organización social, la gobernanza territorial y los instrumentos de planificación, con el fin de fortalecer las capacidades de los aprendices para realizar diagnósticos territoriales integrales desde una perspectiva ambiental, social y participativa.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué estudia la ecología?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La producción industrial de recursos naturales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las relaciones entre los seres vivos y su ambiente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La organización política de los territorios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La construcción de infraestructura vial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes es una relación ecológica interespecífica?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Territorialidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cooperación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mutualismo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Organización social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es un componente abiótico de un ecosistema?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fauna.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Flora.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Microorganismos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suelo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
        {
          id: 4,
          texto:
            'La biogeografía estudia:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La distribución de los seres vivos en la Tierra.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Las normas ambientales de un territorio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los procesos de urbanización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La organización política de los municipios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
        {
          id: 5,
          texto:
            'El enfoque socioecosistémico reconoce que:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los ecosistemas funcionan sin influencia humana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sociedad y naturaleza interactúan permanentemente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo los factores naturales determinan el territorio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las actividades humanas no modifican los ecosistemas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de las siguientes regiones biogeográficas de Colombia se caracteriza por su alta pluviosidad?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Caribe.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Andina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pacífica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Orinoquía.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes ecosistemas cumple una función clave en la regulación hídrica?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desierto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Páramo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Zona urbana.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Área industrial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes elementos corresponde a una característica biofísica del territorio?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Costumbres culturales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organización social.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Clima.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Normatividad ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
        {
          id: 9,
          texto:
            'La biodiversidad de ecosistemas hace referencia a:',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La variedad genética de una especie.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad de individuos de una población.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los diferentes ecosistemas presentes en un territorio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La clasificación de los suelos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
        {
          id: 10,
          texto:
            'Los bienes ecosistémicos son:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Beneficios culturales generados por las comunidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Productos obtenidos directamente de los ecosistemas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Normas de conservación ambiental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Herramientas de planificación territorial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de los siguientes corresponde a un riesgo antrópico?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inundación natural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sismo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incendio provocado por actividades humanas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Erupción volcánica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
        {
          id: 12,
          texto:
            'La vulnerabilidad territorial corresponde a:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La capacidad de recuperación de una comunidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El potencial de daño de un fenómeno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El grado de susceptibilidad frente a una amenaza.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La cantidad de recursos naturales disponibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
        {
          id: 13,
          texto:
            '¿Qué son los procesos históricos de poblamiento?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La distribución de especies en un ecosistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El establecimiento y organización de comunidades en un territorio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La creación de leyes ambientales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La clasificación de los recursos naturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
        {
          id: 14,
          texto:
            'Los saberes tradicionales son conocimientos que:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo se encuentran en documentos oficiales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se transmiten de generación en generación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Son elaborados exclusivamente por instituciones académicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se aplican únicamente en zonas urbanas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
        {
          id: 15,
          texto:
            '¿Cuál de las siguientes expresiones corresponde a una práctica cultural relacionada con el territorio?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cartografía digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Zonificación ambiental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Festividades tradicionales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Gestión del riesgo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es la función principal del Poder Legislativo?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Administrar justicia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ejecutar políticas públicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Coordinar proyectos ambientales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaborar y aprobar leyes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
        {
          id: 17,
          texto:
            'Las Juntas de Acción Comunal son ejemplos de:',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizaciones internacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizaciones sociales y comunitarias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Entidades judiciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Empresas privadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
        {
          id: 18,
          texto:
            'La cartografía social se caracteriza por:',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser elaborada exclusivamente por expertos en SIG.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Representar información económica nacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limitarse a mapas digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Construirse participativamente con las comunidades.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
        {
          id: 19,
          texto:
            '¿Qué instrumento orienta el desarrollo físico y la organización del territorio municipal?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'PGIRS.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'POMCA.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Plan de Manejo Ambiental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'POT.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el propósito principal de los planes de vida comunitarios?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Orientar el desarrollo integral de las comunidades desde su propia visión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar la explotación de recursos naturales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Regular el transporte regional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar el sistema judicial local.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos del territorio, ecosistemas y planificación sociocultural.',
        },
      ],
      mensaje_final_aprobado: 'Ha superado la actividad y demuestra sólidos conocimientos sobre los fundamentos del territorio, ecosistemas y planificación sociocultural.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>