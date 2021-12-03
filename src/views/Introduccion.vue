<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.no-radius.bottom.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white
          i.fas.fa-info
      h1 Introducción

  .container.tarjeta.no-radius.top.tarjeta--gradient1.p-4.p-md-5.mb-5
    .row.justify-content-center
      .col-lg-9
        figure.mb-5
          img(src="@/assets/curso/intro-1.svg")
      .col-lg-10
        p.mb-5 El auge de la animación digital ha llevado a que cada vez más aparezcan muchos tipos de programas utilizados para realizar animaciones, aunque estos sirven para dar vida y movimiento tanto a diferentes tipos de objetos o texto, como los utilizados en las infografías y/o personajes como en las caricaturas; la base para estas animaciones se suele realizar en otros programas, principalmente de diseño, en donde los artistas construyen el contenido que luego será animado. Para la producción de estos elementos y el desarrollo de las animaciones trabajaremos con los programas disponible en de la suite de Adobe como lo son Photoshop, Illustrator y After Effects, ya que el SENA dispone de sus licencias, además de que son ampliamente utilizados en la industria en general.

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
