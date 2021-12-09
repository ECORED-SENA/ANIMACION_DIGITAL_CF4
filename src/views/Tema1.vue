<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.no-radius.bottom.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Teoría del color

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/c26mGXek6Fc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 El color es definido por la RAE (2020), como “Sensación producida por los rayos luminosos que impresionan los órganos visuales y que depende de la longitud de onda”. Técnicamente, los objetos o la materia absorben ciertas longitudes de onda (energía electromagnética) de la fuente de luz (sol o bombilla), y otras las hace rebotar. Esas longitudes de onda que rebotan son las que el ojo humano, por medio de los conos y bastones en la retina, perciben como un color. Se puede decir entonces que, sin fuente de luz, sea esta natural o artificial, no se tendría la posibilidad de identificar el color.
      br
      br
      | La teoría del color hace referencia a las reglas para mezclar los colores y conseguir un efecto en concreto.

    Separador

    #t_1_1.titulo-segundo.color-secundario
      h2 1.1  Modelos de color

    p.mb-5 Los modelos de color permiten catalogar los colores y que se pueda trabajar con ellos por medios digitales. A través de los modelos se accede a diferentes sistemas para visualizar y modificar una imagen:

    .row.justify-content-center.colors-list.top.bottom.stroke-2
      .col-lg-10
        .row.align-items-center.colors-list.bottom
          .col
            p.mb-0
              strong Modelo RGB
              br
              | Modelo aditivo que se basa en los colores luz. El ojo humano cuenta con 3 tipos de conos o células foto receptoras que determinan los 3 colores primarios: rojo, verde y azul (RGB por siglas en inglés). De la combinación de estos 3 se obtiene el color blanco y la ausencia de los mismos dará como resultado el negro. Este modelo de color es usado para toda clase de dispositivos como pantallas, celulares, etc.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema1-img1.svg")
        .row.align-items-center.colors-list.bottom
          .col
            p.mb-0
              strong Modelo CMYK
              br
              | Modelo sustractivo basado en los colores pigmento o físicos. Los colores primarios en este modelo son: amarillo, cían y magenta (CMYK por sus siglas en inglés). Al contrario del modelo RGB, la combinación de los 3 primarios genera el color negro (<strong>key</strong> o <strong>black</strong>). Este modelo es usado en pintura, tintes e impresión.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema1-img2.svg")
        .row.align-items-center.colors-list
          .col
            p.mb-0
              strong Modelo HSV
              br
              | Se basa en las propiedades del color (tono , saturación y luminocidad), las cuales se explican en mayor detalle en la siguiente lección.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema1-img3.svg")

    Separador

    #t_1_2.titulo-segundo.color-secundario
      h2 1.2  Propiedades del color

    p.mb-5 Los modelos de color permiten catalogar los colores y que se pueda trabajar con ellos por medios digitales. A través de los modelos se accede a diferentes sistemas para visualizar y modificar una imagen:

  .container.tarjeta.no-radius.top.bottom.tarjeta--pastel.p-4.p-md-5
    .row.justify-content-center
      .col-lg-5
        figure.mb-5
          img(src="@/assets/curso/tema1-img4.svg")
    .tarjeta.tarjeta--pastel-2.p-5
      ol.lista-ol--cuadro.mb-0
        li
          .lista-ol--cuadro__vineta.rounded.color-primario
            span a
          p.mb-0
            strong Tono <i>(Hue)</i>
            br
            | Es el color en concreto y ayuda a diferenciarlos. Por ejemplo, al ver un objeto se dice que tiene un tono azul o anaranjado.
        li
          .lista-ol--cuadro__vineta.rounded.color-primario
            span b
          p.mb-0
            strong Saturación <i>(Saturation)</i>
            br
            | Intensidad o pureza del color. En otras palabras, la cantidad de gris que se le ha agregado a un tono; así entre más saturado es un color, más vibrante es, mientras que, entre menos saturado, dará mayor descanso al ojo.
        li.mb-0
          .lista-ol--cuadro__vineta.rounded.color-primario
            span c
          p.mb-0
            strong Luminosidad o valor <i>(Value)</i>
            br
            | Describe el valor de claridad u oscuridad, en otras palabras, cantidad relativa de blanco o negro en un tono. Si agregamos el blanco a un color, obtendremos valores más claros del tono, llamados tintes. Por otro lado, si el que agregamos es el negro, tendremos valores más oscuros del tono, conocidos como matices. Por ejemplo, decimos que el rosa es un tinte del color rojo primario y el borgoña o rojo oscuro es un matiz (Whelan, 1994).

  .container.tarjeta.no-radius.top.tarjeta--blanca.p-4.p-md-5.mb-5

    Separador

    #t_1_3.titulo-segundo.color-secundario
      h2 1.3  Círculo cromático

    p.mb-5 Se divide en doce segmentos, incluyendo los tonos primarios, secundarios y terciarios. Los tres colores primarios: rojo, amarillo y azul, forman un triángulo equilátero dentro del círculo. Si se mezclan en igual medida dos colores primarios, se obtiene un color secundario; y si se mezcla un primario con un secundario se tiene un terciario.

    .row.justify-content-center
      .col-lg-7
        figure
          img(src="@/assets/curso/tema1-img5.svg")

    Separador

    #t_1_4.titulo-segundo.color-secundario
      h2 1.4  Armonía del color

    p.mb-5 Se debe saber que algunos colores se ven mejor juntos que otros, pero esto puede generar confusión si se trata de recordar cada uno. Por tanto, a continuación, se verán los 6 esquemas más efectivos de la armonía de color:

    LineaTiempoD.color-primario.mb-5
      .row(numero="1" titulo="Monocromático")
        p.mb-4 Es uno de los más fáciles de recordar, ya que es un solo color. Debido a la ausencia de otros colores, el espectador se enfoca en las diferencias de valor y saturación.
        figure
          img(src="@/assets/curso/tema1-img6.jpg")
      .row(numero="2" titulo="Análogo")
        p.mb-4 Se usan colores adyacentes uno del otro. Es un esquema presente en la naturaleza, por ende, crean una sensación de calma, paz y comodidad.
        figure
          img(src="@/assets/curso/tema1-img7.jpg")
      .row(numero="3" titulo="Triada")
        p.mb-4 Quizás es una de las más difíciles de usar correctamente. Son tres colores que son equidistantes. El reto está en el equilibrio de cada uno de los tonos, dado que al usarse en la misma medida generará caos. Suele usarse para escenas con estilo cartoon, orientado al público infantil.
        figure
          img(src="@/assets/curso/tema1-img8.jpg")
      .row(numero="4" titulo="Complementario")
        p.mb-4 Es el esquema más popular, donde se usan colores de lados opuestos del círculo. Naturalmente siempre van bien juntos; sin embargo, como en el esquema de triada, se debe elegir un color predominante y usar el tono complementario para crear contraste o puntos de interés.
        figure
          img(src="@/assets/curso/tema1-img9.jpg")
      .row(numero="5" titulo="Complementario dividido")
        p.mb-4 Similar al complementario, pero este esquema usa tres colores. Se debe seleccionar el tono complementario y dividirlo, es decir, tomar los dos colores adyacentes. Es útil para extender las posibilidades de la paleta de color, cuando dos tonos no son suficientes.
        figure
          img(src="@/assets/curso/tema1-img10.jpg")
      .row(numero="6" titulo="Doble complementario")
        p.mb-4 Justo como el esquema complementario pero doble. Dos pares de colores complementarios (sin importar su posición dentro del círculo). Se debe ser muy cuidadoso con este esquema, pues sin el equilibrio adecuado creará caos. Lo mejor es usar un par en primer plano y el otro en el fondo.
        figure
          img(src="@/assets/curso/tema1-img11.jpg")

    .row.justify-content-center
      .col-lg-8
        .row.cajon.color-primario.background-pastel.p-4.mb-4
          .col-lg-3.mb-lg-0.mb-5
            figure
              img(src="@/assets/curso/tema1-img12.svg")
          .col-lg-8
            p.mb-4 Para crear paletas de color y jugar con diferentes esquemas puede consultar la herramienta creada por Adobe llamada Adobe Color, anteriormente conocida como Kuler desde internet.
            .row.justify-content-center
              .col-lg-8
                a.anexo.white.mb-4.mb-lg-0(href="https://color.adobe.com/es/create/color-wheel" target="_blank")
                  .anexo__icono
                    img(src="@/assets/curso/icon-link.svg")
                  .anexo__texto
                    p.mb-0 <strong>Recurso</strong>. Adobe Color

    Separador

    #t_1_5.titulo-segundo.color-secundario
      h2 1.5  Psicología del color

    p.mb-5 Como lo menciona Bride M. Whelan, “El color es a la vez simple y complejo. Este significa cosas distintas para distintas personas en culturas diferentes. Ningún color es visto del mismo modo por dos personas. El color es personal y universal, y envía mensajes de inagotable variedad”. (Whelan, 1994).

    .row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.white.border-red(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-img13.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h2 Rojo
              .row.justify-content-center
                .col-6
                  p.mb-0
                    strong Positivo
                    br
                    br
                    | Energía
                    br
                    | Excitación
                    br
                    | Pasión
                    br
                    | Coraje
                    br
                    | Atención
                .col-6
                  p.mb-0
                    strong Negativo
                    br
                    br
                    | Enojo
                    br
                    | Peligro
                    br
                    | Desafío
                    br
                    | Agresión
                    br
                    | Tensión
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.white.border-yellow(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-img14.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h2 Amarillo
              .row.justify-content-center
                .col-6
                  p.mb-0
                    strong Positivo
                    br
                    br
                    | Entusiasta
                    br
                    | Oportunidad
                    br
                    | Expontáneo
                    br
                    | Feliz
                    br
                    | Positivo
                .col-6
                  p.mb-0
                    strong Negativo
                    br
                    br
                    | Irracional
                    br
                    | Miedo
                    br
                    | Fragilidad
                    br
                    | Emocional
                    br
                    | Frustración

      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.white.border-blue(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-img15.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h2 Azul
              .row.justify-content-center
                .col-6
                  p.mb-0
                    strong Positivo
                    br
                    br
                    | Confiable
                    br
                    | Responsable
                    br
                    | Honesto
                    br
                    | Leal
                    br
                    | Seguro
                .col-6
                  p.mb-0
                    strong Negativo
                    br
                    br
                    | Frío
                    br
                    | Indiferente
                    br
                    | Distante
                    br
                    | Inmutable
                    br
                    | Inapetente

      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-flip.white.border-orange(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-img16.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h2 Anaranjado
              .row.justify-content-center
                .col-6
                  p.mb-0
                    strong Positivo
                    br
                    br
                    | Optimista
                    br
                    | Indepentiente
                    br
                    | Aventurero
                    br
                    | Creativo
                    br
                    | Divertido
                .col-6
                  p.mb-0
                    strong Negativo
                    br
                    br
                    | Privación
                    br
                    | Frustración
                    br
                    | Frivolidad
                    br
                    | Inmadurez
                    br
                    | Ignorancia

    .row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.white.border-pink(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-img17.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h2 Rosado
              .row.justify-content-center
                .col-6
                  p.mb-0
                    strong Positivo
                    br
                    br
                    | Compasión
                    br
                    | Amor
                    br
                    | Inmaduro
                    br
                    | Divertido
                    br
                    | Admiración
                .col-6
                  p.mb-0
                    strong Negativo
                    br
                    br
                    | Inhibición
                    br
                    | Opresivo
                    br
                    | Ligereza
                    br
                    | Debilidad
                    br
                    | Efímero
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.white.border-purple(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-img18.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h2 Violeta
              .row.justify-content-center
                .col-6
                  p.mb-0
                    strong Positivo
                    br
                    br
                    | Imaginativo
                    br
                    | Espiritual
                    br
                    | Compasivo
                    br
                    | Sensitivo
                    br
                    | Misterioso
                .col-6
                  p.mb-0
                    strong Negativo
                    br
                    br
                    | Introversión
                    br
                    | Decadencia
                    br
                    | Represión
                    br
                    | Inferioridad
                    br
                    | Extravagancia

      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.white.border-green(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-img19.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h2 Verde
              .row.justify-content-center
                .col-6
                  p.mb-0
                    strong Positivo
                    br
                    br
                    | Armonía
                    br
                    | Balance
                    br
                    | Estabilidad
                    br
                    | Seguridad
                    br
                    | Paz
                .col-6
                  p.mb-0
                    strong Negativo
                    br
                    br
                    | Aburrimiento
                    br
                    | Estancamiento
                    br
                    | Insipidez
                    br
                    | Enervación
                    br
                    | Enfermedad

      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-flip.white.border-brown(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-img20.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h2 Marrón
              .row.justify-content-center
                .col-6
                  p.mb-0
                    strong Positivo
                    br
                    br
                    | Estable
                    br
                    | Honesto
                    br
                    | Cálido
                    br
                    | Confortable
                    br
                    | Neutral
                .col-6
                  p.mb-0
                    strong Negativo
                    br
                    br
                    | Aburrido
                    br
                    | Pesado
                    br
                    | Anticuado
                    br
                    | Sucio
                    br
                    | Triste

    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.white.border-gray(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-img21.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h2 Gris
              .row.justify-content-center
                .col-6
                  p.mb-0
                    strong Positivo
                    br
                    br
                    | Neutral
                    br
                    | Práctico
                    br
                    | Conservador
                    br
                    | Formal
                    br
                    | Tranquilo
                .col-6
                  p.mb-0
                    strong Negativo
                    br
                    br
                    | Inseguro
                    br
                    | Depresivo
                    br
                    | Inexpresivo
                    br
                    | Estancado
                    br
                    | Inerte
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.white.border-black(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-img22.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h2 Negro
              .row.justify-content-center
                .col-6
                  p.mb-0
                    strong Positivo
                    br
                    br
                    | Poderoso
                    br
                    | Controlador
                    br
                    | Autoritario
                    br
                    | Disciplinado
                    br
                    | Elegante
                .col-6
                  p.mb-0
                    strong Negativo
                    br
                    br
                    | Opresivo
                    br
                    | Frío
                    br
                    | Amenazante
                    br
                    | Pesado
                    br
                    | Malévolo


</template>

<script>
export default {
  name: 'Tema1',
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
