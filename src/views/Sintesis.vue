<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente integra los principales elementos que permiten comprender el territorio desde una perspectiva ambiental, social, cultural e histórica. Aborda las relaciones entre los ecosistemas y las comunidades, el reconocimiento de las características biofísicas y ecológicas, la biodiversidad, los bienes y servicios ecosistémicos, así como los procesos históricos y socioculturales que han configurado los territorios.
    p Asimismo, desarrolla aspectos relacionados con la organización social, la gobernanza, la participación comunitaria y los instrumentos de planificación territorial. La integración de estos elementos permite al aprendiz interpretar las dinámicas sociales, ecológicas e históricas del territorio como base para la elaboración de diagnósticos territoriales y la formulación de estrategias de conservación, gestión participativa y desarrollo sostenible. 

    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis presenta de manera integrada los principales temas desarrollados en el componente, incluyendo los fundamentos ecológicos y biofísicos del territorio, la biodiversidad, las dinámicas socioculturales, la organización social, la gobernanza y los instrumentos de planificación territorial. Estos elementos permiten comprender el territorio desde un enfoque socioecosistémico y reconocer la importancia de la participación comunitaria y la gestión sostenible para la apropiación ambiental y el desarrollo territorial.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
