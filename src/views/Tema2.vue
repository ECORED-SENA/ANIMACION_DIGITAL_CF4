<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.no-radius.bottom.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1
        i Concept art

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/8iZoC6KWllA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 Durante la etapa de <i>concept art</i> se desarrollan los <strong>diseños de personajes, <i>props</i> y escenarios</strong> e incluso se hacen fotogramas clave de ciertas acciones importantes de la historia. A pesar de estar relacionado con la ilustración y compartir muchos elementos, corresponden a cosas diferentes, ya que el objetivo de la ilustración consiste en directamente contar historias, mientras que el <i>concept art</i> solo pretende plasmar una visión de forma en que los integrantes de un equipo de producción tengan claridad en cuanto a la forma en que se debe ver algo.

  .container.tarjeta.no-radius.top.bottom.tarjeta--gradient1.px-4.px-md-5.pt-4.pt-md-4
    .row.justify-content-center
      .col-lg-9
        figure.mb-5
          img(src="@/assets/curso/tema2-img1.png")
      .col-lg-10
        p.mb-5 En cuanto a los materiales, lo más importante es una mente nutrida, un cerebro que tenga claro los fundamentos de anatomía, teoría del color, composición, perspectiva, uso de formas, historia del arte y que sobre todo se está nutriendo constantemente de cine, música, pintura, teatro… en general de arte y también del mundo que lo rodea, debido a que la observación del mundo es fundamental para entenderlo y lograr que, al momento de proponer gráficamente ideas, estas sean coherentes y creíbles.
          br
          br
          | Más allá de esto, con un lápiz y una hoja de papel, es suficiente para hacer <i>concept art</i>. Pero básicamente se puede hacer uso de prácticamente cualquier material e instrumento que permita al artista plasmar imágenes como los tradicionales oleos, acrílicos, acuarelas, lápices de color, entre otros. Sin embargo, la evolución tecnológica ha permitido que se desarrollen innumerables alternativas de <i>hardware</i> y <i>software</i> que han causado la preponderancia de los medios digitales en el desarrollo de <i>concept art</i>, gracias a las alternativas que ofrecen para la optimización de tiempos.

    Separador

  .container.tarjeta.no-radius.top.bottom.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-4

    #t_2_1.titulo-segundo.color-secundario
      h2 2.1  Diseño de personajes

  .container.tarjeta.no-radius.top.bottom.tarjeta--gradient1.px-4.px-md-5.pt-4.pt-md-4
    .row.justify-content-center.mb-5
      .col-lg-9
        figure.mb-5
          img(src="@/assets/curso/tema2-img2.png")
      .col-lg-10
        p.mb-0 Así como en las producciones en live action se acostumbra a realizar castings para seleccionar a los actores que mejor se adapten a los atributos físicos y psicológicos, desarrollados al momento de crear los personajes durante las etapas correspondientes al desarrollo de guion; en animación y videojuegos se lleva a cabo un proceso análogo denominado diseño de personajes, donde un equipo de artistas conceptuales se encargan de interpretar los personajes creados por los escritores para generar un casting que permita diseñar los atributos visuales que mejor se adapten a las características de cada uno.
          br
          br
          | Para realizar este proceso con éxito existe una serie de conocimientos indispensables y aspectos a tener en cuenta, los cuales serán descritos a continuación:
  .container.tarjeta.no-radius.top.bottom.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-4
    LineaTiempoD.color-primario.mb-5
      .row(numero="a" titulo="Referencias y documentación")
        .col
          p.mb-4 Para que un personaje funcione correctamente es indispensable tener en cuenta el contexto, la historia dentro de la cual se desarrolla y su propia historia individual que como ya se sabe, ha sido desarrollada desde la etapa del guion por parte de los escritores. Así como hacer un barrido sobre los orígenes del personaje, sus actitudes, aptitudes y motivaciones no solo los desarrollados en la etapa de escritura, sino los que puedan relacionarse con una época o un lugar específico. Por ejemplo, no es lo mismo diseñar un personaje que haya nacido en la década de 1950 en el continente latinoamericano, a uno que lo haya hecho en el siglo XXV en una colonia en Marte. Aunque en esta comparación en apariencia sea más fácil encontrar información sobre el primer caso, no quiere decir que para el segundo no sea relevante hacer una investigación sobre las condiciones conocidas del planeta y la misma historia y proyección de la raza humana, ya que esto permite obtener datos que brindan credibilidad al personaje.
          figure.mb-4
            img(src="@/assets/curso/tema2-img3.jpg")
          p.mb-4 Por otro lado, la recolección de referencias visuales es una práctica indispensable al momento de diseñar, puesto que por mucha experiencia que se tenga, absolutamente nadie tiene almacenados en su cerebro todos los referentes que necesita. Por lo tanto, no está de más construir un banco visual que ayude a alimentar la creatividad y analizar el trabajo que realizaron otros artistas para tratar de entender de qué manera afrontan los retos presentados en sus respectivas producciones.
            br
            br
            | Una buena manera de gestionar las referencias es mediante PureRef, una aplicación gratuita que permite crear tableros y superponerlos a otras aplicaciones para tenerlos siempre a la vista y que puede ser descargada en el siguiente enlace:
          .row.justify-content-center
            .col-lg-8.mb-4
              .row
                .col-lg-6.mb-5.mb-lg-0
                  a.anexo.white.mb-4.mb-lg-0(href="https://www.pureref.com/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/curso/icon-link.svg")
                    .anexo__texto
                      p.mb-0 <strong>Recurso</strong>. PureRef
                .col-lg-6
                  a.anexo.white.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=Be_r_c1zt8w" target="_blank")
                    .anexo__icono
                      img(src="@/assets/curso/icon-link.svg")
                    .anexo__texto
                      p.mb-0 <strong>Recurso</strong>. PureRef - Introducción
            .col-lg-10
              .tabla-a.color-acento-botones.mb-0
                table
                  thead
                    tr
                      th Referente
                      th Sitio web
                  tbody
                    tr
                      td.text-center Carter Goodrich
                      td.text-center
                        a(href="http://www.cartergoodrich.com" target="_blank") www.cartergoodrich.com
                    tr
                      td.text-center Brett Bean
                      td.text-center
                        a(href="https://www.brettbean.com" target="_blank") www.brettbean.com
                    tr
                      td.text-center Anette Marnat
                      td.text-center
                        a(href="https://www.annettemarnat.ultra-book.com/portfolio" target="_blank") www.annettemarnat.ultra-book.com/portfolio
                    tr
                      td.text-center Frank Frazetta
                      td.text-center
                        a(href="https://www.frazettamuseum.com" target="_blank") www.frazettamuseum.com
                    tr
                      td.text-center Creature Box
                      td.text-center
                        a(href="http://www.creaturebox.com" target="_blank") www.creaturebox.com
                    tr
                      td.text-center Syd Mead
                      td.text-center
                        a(href="https://www.sydmead.com" target="_blank") www.sydmead.com
                    tr
                      td.text-center Phil Saunders
                      td.text-center
                        a(href="https://www.artstation.com/philsaunders" target="_blank") www.artstation.com/philsaunders
                    tr
                      td.text-center Shane Glines
                      td.text-center
                        a(href="https://www.instagram.com/shaneglines" target="_blank") www.instagram.com/shaneglines

      .row(numero="b" titulo="Anatomía básica")
        .col
          p.mb-4 Según la RAE la anatomía es la ciencia que estudia la estructura y forma de los seres vivos y las relaciones entre las diversas partes que los constituyen. Aunque se trata de una ciencia derivada de la biología es muy útil en las artes plásticas y visuales pues uno de los conocimientos clave a la hora de diseñar personajes es la anatomía, independientemente de si se trata de un personaje de estilo realista o cartoon. Tener bases fuertes de anatomía ayuda a que la construcción física de los personajes sea creíble y por tanto, funcionen adecuadamente en el universo al que pertenecen.
            br
            br
            | Una buena forma de estudiar el funcionamiento del cuerpo es mediante los atlas médicos de anatomía, ya que presentan un desglose detallado que va desde la estructura ósea que soporta el cuerpo y muestra su relación con los músculos. No es necesario en principio memorizar el nombre de cada uno de los huesos y músculos que conforman el cuerpo, pero sí es sumamente importante saber dónde están ubicados, de dónde parten y a dónde llegan; debido que esto permite comprender su función en el movimiento y así mismo su importancia en la definición de siluetas y volúmenes del cuerpo.
          figure
            img(src="@/assets/curso/tema2-img4.jpg")
      .row(numero="c" titulo="Proporciones del cuerpo humano")
        .col
          p.mb-4 Cada cuerpo posee características únicas que lo diferencian de los demás, sin embargo, desde la antigüedad han sido desarrollados diferentes sistemas de proporción para representar la figura humana de una manera armónica buscando unas proporciones ideales, los egipcios por ejemplo usaban la medida del puño como base para determinar las demás proporciones del cuerpo, determinando que la altura de este correspondía a 18 veces el tamaño del puño usando 2 para el rostro, diez en la distancia que va de los hombros a las rodillas y otros 6 para la distancia comprendida entre las rodillas y los pies.
          figure.mb-4
            img(src="@/assets/curso/tema2-img5.jpg")
          p.mb-0 El sistema más común es el que usa la dimensión de la cabeza como medida de referencia, con el cual muchos artistas han usado en sus obras proporciones basadas en sistemas de 7, 7 ½, 8, 8 1⁄2 y hasta 9 cabezas para determinar la estatura de la figura humana.
            br
            br
            | Estos sistemas de medida y proporción llevan por nombre canon (del griego <i>Χανων</i>, que significa regla). Uno de los cánones más conocidos es el del Hombre de Vitruvio, famoso dibujo de Leonardo da Vinci realizado alrededor de 1490 en el cual se representa una figura masculina inscrita al interior de un cuadrado y una circunferencia con 2 pares de brazos y piernas sobrepuestas, este estudio anatómico fue hecho a partir de textos arquitectónicos de Marco Vitruvio (de donde saca su nombre) y se rige bajo un sistema de proporciones de 8 cabezas.
            br
            br
            | Cabe resaltar que aunque se acepte el uso de un canon anatómico para la representación de las proporciones perfectas, esta es una idealización y las proporciones reales de cada persona varían en función de diversos factores como su origen étnico, genética heredada, condiciones de vida, etc. sin embargo, los cánones son útiles para construir estructuras anatómicas sólidas y su conocimiento nos permite tomar ciertas licencias para poder deformar las proporciones y así generar personajes con estilos más realistas o cartoon.

    h3.titulo-tercero Procedimiento para dibujar un cuerpo humano según el canon de 8 cabezas

  .container.tarjeta.no-radius.top.bottom.tarjeta--pastel-3.px-4.px-md-5
    figure.mb-4
      img(src="@/assets/curso/tema2-img6.png")
    p.mb-4 El canon es una noción que se refiere a las proporciones perfectas o correctas del cuerpo humano y las relaciones de medidas armónicas entre las distintas partes de una representación y tiene los siguientes pasos:
    .tarjeta.tarjeta--pastel-3.p-4
      PasosB.color-primario
        .row(titulo="")
          .col
            figure.mb-4
              img(src='@/assets/curso/tema2-img7.png')
            p Para generar una figura humana usando como base el canon idealizado de 8 cabezas se debe crear una cuadrícula de 8 unidades de alto y 2 de ancho, la unidad de medida corresponde al alto de la cabeza desde el mentón hasta la coronilla.
        .row(titulo="")
          .col
            figure.mb-4
              img(src='@/assets/curso/tema2-img8.png')
            p Seguidamente, en la fila número uno dibujar un círculo desde la línea superior de la cuadrícula y alineando su mitad con la línea central vertical, la circunferencia debe tener por altura 2 tercios del cuadro y en el tercio restante dibujar una semicircunferencia afilada en su parte inferior central que inicie desde el último tercio del círculo ya existente y que termine en la línea inferior del cuadro 1.
        .row(titulo="")
          .col
            figure.mb-4
              img(src='@/assets/curso/tema2-img9.png')
            p En la mitad de la fila 2 hacer una línea horizontal que tenga por ancho el equivalente a 2 unidades del alto de la cabeza; es decir, debe ir trazada de lado a lado de la cuadrícula y servirá para indicar la posición de los hombros. Seguidamente, en la mitad de la fila 4 trazar otra línea horizontal con un ancho de 1 ½ cabezas, esta línea indica la posición de la cadera.
        .row(titulo="")
          .col
            figure.mb-4
              img(src='@/assets/curso/tema2-img10.png')
            p En la intersección de las líneas laterales con la línea inferior de la fila 3, dibujar pequeños círculos con un diámetro de aproximadamente una quinta parte de la altura de la cabeza, estos indican la posición de los codos. Luego sobre la línea inferior de la fila 6 dibujar 2 óvalos con una altura aproximada de un tercio del cuadro con la separación equivalente al ancho de la cabeza, la cual corresponde a la medida del alto de media cabeza. Estos óvalos representan la ubicación de las rodillas.
        .row(titulo="")
          .col
            figure.mb-4
              img(src='@/assets/curso/tema2-img11.png')
            p Generar una línea que conecte desde el extremo de la línea del hombro con la circunferencia del codo la cual representa el brazo y una segunda línea desde la circunferencia del codo hasta el primer quinto de la fila 5 para representar el antebrazo hasta la muñeca.
              br
              br
              | Luego, conectar el extremo de la línea de la cadera con el óvalo de la rodilla generando una línea inclinada que representa la porción superior de la pierna y luego desde el extremo inferior del óvalo de la rodilla proyectar una línea recta hasta la línea inferior de la fila 8 para representar la porción inferior de las piernas.
        .row(titulo="")
          .col
            figure.mb-4
              img(src='@/assets/curso/tema2-img12.png')
            p Desde la línea de la cadera dibujar una línea que suba hasta la base de la fila 3 y llegue casi a la mitad horizontal del cuadro y con esto se marcará la cintura, seguidamente proyectar este punto hasta el inicio del último décimo de la línea de los hombros para marcar el espacio de la caja torácica.
              br
              br
              | Desde los extremos laterales de la cabeza trazar líneas verticales que lleguen al primer cuarto de la fila 2 y a partir de ahí conectar con un semicírculo que llegue a la línea de los hombros, con esto se inscribe un cilindro que representa el cuello. Luego desde la mitad de la vertical del cuello proyectar una línea oblicua que conecte con la línea que define el tórax y de esta forma se obtiene la ubicación de los músculos del trapecio.
              br
              br
              | Para definir las manos trazar una línea horizontal del ancho del codo perpendicular a la línea de la muñeca. Seguidamente trazar una línea paralela un poco por debajo de la mitad de la fila 5 la cual debe tener entre un 25 % y 30 % más de longitud, al conectar los extremos se genera un trapecio que sirve para representar la zona de los huesos carpianos y metacarpianos de la mano, luego generar 2 pequeños paralelepípedos que servirán para indicar la posición de los dedos.
              br
              br
              | Para los pies generar un par de trapecios que inician poco más abajo de la mitad de la octava fila con un ancho superior similar al de las rodillas y un ancho inferior equivalente a la medida de 1 cabeza.
              br
              br
              | Finalmente, realizar un triángulo que conecte los extremos de la línea de la cadera con el primer quinto de la fila 5 para definir la zona de la pelvis.
        .row(titulo="")
          .col
            figure.mb-4
              img(src='@/assets/curso/tema2-img13.png')
            p El siguiente paso corresponde a inscribir una serie de óvalos y gotas para definir los principales grupos musculares, lo que permite tener una estructura completa sobre la cual se podrá empezar a añadir distintos tipos de detalles para obtener una figura definida.
        .row(titulo="")
          .col
            figure.mb-4
              img(src='@/assets/curso/tema2-img14.png')
            p Una vez se tiene una estructura definida, se puede proceder a añadir detalles usando como referencia fotografías y esquemas musculares. Esta última parte del proceso es la que requiere más sensibilidad artística y la que solo se podrá refinar con la práctica; sin embargo, a partir de una construcción geométrica simplificada es más fácil lograr representar formas complejas de manera adecuada como es el caso del cuerpo humano.

  .container.tarjeta.no-radius.top.bottom.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-4
    h3.titulo-tercero Cabeza y rostro
  .container.tarjeta.no-radius.top.bottom.tarjeta--pastel-3.px-4.px-md-5.pt-4.pt-md-5
    figure.mb-4
      img(src="@/assets/curso/tema2-img15.png")
    .row.justify-content-center
      .col-lg-9
        .cajon.color-primario.background-pastel.p-4.mb-4
          p.mb-0 El rostro humano es una de las partes del cuerpo más complicadas de representar, ya que en él se recoge un gran porcentaje de la expresividad que puede tener una persona y debido a la gran variedad de formas interconectadas que contiene, resulta un verdadero reto para el artista novato.
            br
            br
            | A continuación, se presenta un ejemplo representando un rostro masculino y un rostro femenino en vista frontal y ¾ usando el método de Andrew Loomis, un famoso ilustrador estadounidense que a lo largo de su vida escribió varios libros sobre dibujo:
    .tarjeta.tarjeta--pastel-3.p-4
      PasosB.color-primario
        .row(titulo="")
          .col
            figure.mb-4
              img(src='@/assets/curso/tema2-img16.png')
            p El primer paso es dibujar una circunferencia, la cual servirá de base para representar la parte superior de la cabeza.
        .row(titulo="")
          .col
            figure.mb-4
              img(src='@/assets/curso/tema2-img17.png')
            p Para el caso frontal (parte superior) marcar una línea vertical y una horizontal dividiendo el círculo en cuatro partes iguales, luego al costado del círculo marcar una línea vertical aproximadamente a un décimo del ancho total de la circunferencia y repetir al lado opuesto.
              br
              br
              | Conectar los puntos superiores y los inferiores de manera que quede inscrito un cuadrado al interior del círculo, las líneas verticales laterales servirán para definir el ancho del rostro y las líneas horizontales nos marcarán la altura de la línea de cabello, la altura de la línea de las cejas y la altura de la base de la nariz.
              br
              br
              | Seguidamente, trazar una línea horizontal bajo el círculo a una distancia equivalente a la existente entre las otras líneas horizontales. Esta última línea servirá para definir la base del mentón.
              br
              br
              | Para el caso del rostro en ¾ (parte inferior) dibujar un óvalo al interior y a un costado de la circunferencia representando un círculo en perspectiva, este será el equivalente al corte hecho con las líneas verticales en el rostro frontal.
              br
              br
              | Marcar dentro del círculo interior una cruz para dividirlo en 4 partes y proyectar la línea más cercana a la horizontal hacia el resto de la circunferencia para obtener la línea de la mitad de la esfera, la cual servirá para determinar el lugar donde irá la base de la nariz.
              br
              br
              | Luego, paralela a esta línea media trazar una línea superior proyectada sobre la esfera y tangente al punto más alto del circulo interno, la cual servirá para representar la línea de cabello, repetir trazando otra línea tangente al punto más bajo del circulo interno que representará la línea sobre la cual se pondrá la base de la nariz.
        .row(titulo="")
          .col
            figure.mb-4
              img(src='@/assets/curso/tema2-img18.png')
            p Acá se empieza a definir el género sexual del rostro. Para ello, se usan trazos con formas delicadas y curvas para el caso del rostro femenino y trazos rectos y formas gruesas para el caso masculino.
              br
              br
              | En la vista frontal dividir la línea de las cejas al interior del cuadro en 8 partes, 2 partes equivaldrá al ancho de un ojo de esta forma se podrá calcular la posición de los ojos bajo la línea de las cejas.
              br
              br
              | Bajo la línea de las cejas se deben dejar las dos partes centrales vacías y en las 2 siguientes a cada lado dibujar una forma almendrada que servirá de base para dibujar los ojos. Luego se dibuja sobre la línea de las cejas los arcos que las representarán.
              br
              br
              | La nariz tiene el ancho de un ojo, por lo tanto, en la línea de la nariz se dibujan 3 semicírculos, dos pequeños a los costados y uno más grande central, de manera que los 3 juntos equivalgan al ancho de un ojo.
              br
              br
              | Para el caso de la vista ¾ el proceso es básicamente el mismo, con la diferencia que la parte del rostro que se representa más alejada tendrá una ligera reducción con respecto a su parte opuesta como se muestra en la ilustración.
        .row(titulo="")
          .col
            figure.mb-4
              img(src='@/assets/curso/tema2-img19.png')
            p Se traza la línea del maxilar partiendo de las intersecciones verticales en el caso frontal y de la sección transversal de la cruz trazada en el caso de la vista ¾.
              br
              br
              | La oreja se dibuja entre las líneas horizontales de la ceja y la nariz. Para la boca se usa de guía una línea tangente a la parte inferior de la circunferencia inicial dibujando una forma similar a una “m” alargada hacia los costados para el labio superior y una curva para el labio inferior, ambas con un ancho equivalente a 2 ojos.
        .row(titulo="")
          .col
            figure.mb-4
              img(src='@/assets/curso/tema2-img20.png')
            p Acá se define de mejor manera el contorno general del rostro y el cráneo como se muestra en la ilustración y se traza la línea de pelo.
              br
              br
              | Para este momento la forma general del rostro está prácticamente definida y solo es cuestión de dedicar tiempo con el objetivo de generar detalles y obtener un dibujo más logrado.
        .row(titulo="")
          .col
            figure.mb-4
              img(src='@/assets/curso/tema2-img21.png')
            p Con todos los rasgos generales definidos es momento de experimentar con estilos de cabello para dar más personalidad al rostro e incluso experimentar alterando un poco las proporciones, ya que al tener definido el lugar donde se ubica cada parte, se puede jugar alterando el tamaño de los ojos, la nariz, la boca, el alto o ancho de la cara y así generar diferentes propuestas que partan de una estructura anatómica correcta.
        .row(titulo="")
          .col
            figure.mb-4
              img(src='@/assets/curso/tema2-img22.png')
            p Ya con todas las características del rostro definidas, es momento de pasar el dibujo a limpio, ya sea entintado de forma análoga o digital para deshacerse de todas las líneas guías y dejar solo los trazos finales.
              br
              br
              | Como se puede apreciar este método funciona para hacer rostros en cualquier posición y la repetición del ejercicio una y otra vez permitirá no depender tanto de las guías para lograr un dibujo armónico.
              br
              br
              | También cabe aclarar que este método permite dibujar cualquier tipo de rostro, incluso rostros cartoon, la diferencia radica en la necesidad de alterar las proporciones para obtener distintas morfologías. Por ejemplo, en lugar de partir de un círculo perfecto iniciar con un óvalo vertical para obtener un rostro más alto u horizontal para obtener un rostro más ancho; todo es cuestión de explorar y dar rienda suelta a la imaginación.
  .container.tarjeta.no-radius.top.bottom.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-4
    h3.titulo-tercero Lenguaje de formas
    p.mb-5 El uso de las formas otorga diferentes características al diseño de un personaje lo cual contribuye a acentuar rasgos físicos y psicológicos planteados en etapas previas del proceso de creación. Por ejemplo, la decisión de añadir contornos curvos en lugar de contornos afilados en el rostro de un personaje puede evocar en el espectador la percepción de una personalidad amistosa, contrario a lo que pueden denotar los rasgos afilados y angulosos que pueden llegar a ser interpretados como señal de peligro.

    .row.justify-content-center
      .col-lg-10
        figure.mb-5
          img(src="@/assets/curso/tema2-img23.png")

    p.mb-5 Tal es el caso de Mickey Mouse, el personaje más emblemático de la marca registrada Disney que está compuesto casi en su totalidad por formas curvas, lo que ayuda a reforzar en gran medida su carácter amistoso, en contraposición un villano como el Joker a pesar de usar elementos cómicos en su diseño, donde resaltan las figuras triangulares y afiladas, las cuales sirven para marcar el potencial de peligro inherente de un personaje como él.
      br
      br
      | Existen tres grandes grupos de formas que sirven para modelar visualmente las características que posee un personaje, las cuales sin saberlo se tienen inscritas en la mente como espectadores, ya que cada grupo es capaz de evocar diferentes tipos de sensaciones según como sean usadas.

    .row.justify-content-center
      .col-lg-10
        figure.mb-5
          img(src="@/assets/curso/tema2-img24.png")

  .container.tarjeta.no-radius.top.bottom.tarjeta--gradient2.px-4.px-md-5.pt-4.pt-md-5
    .row.justify-content-center.mb-5
      .col-lg-4.mb-5.mb-lg-0
        div
          figure.mb-4
            img(src="@/assets/curso/tema2-img25.png")
          p.mb-0
            strong Formas cuadradas y rectas
            br
            | El primer gran grupo corresponde a las formas cuadradas y rectas, pero con prevalencia de las líneas verticales y horizontales, estas son formas que suelen transmitir sensaciones de estabilidad, fortaleza, solidez, rigidez, uniformidad e incluso quietud especialmente cuando se trata del predominio de líneas horizontales las cuales son una clara analogía a la posición de reposo por excelencia del cuerpo humano. Como contraparte las líneas verticales suelen denotar actividad por ser semejantes a la posición erguida del humano cuando está despierto; sin embargo, al ser totalmente verticales generan sensaciones de quietud.
      .col-lg-4.mb-5.mb-lg-0
        div
          figure.mb-4
            img(src="@/assets/curso/tema2-img26.png")
          p.mb-0
            strong Formas curvas
            br
            | El segundo gran grupo está compuesto por las formas curvas, estas formas se usan principalmente para expresar fluidez, gentileza, suavidad, carisma, calma, diversión, personalidades amistosas o inofensivas; en general es una forma muy orgánica, lo que la provee de gran dinamismo además de ser formas muy fáciles de encontrar en la naturaleza. Por ejemplo, en las ondas que se generan sobre el agua.
      .col-lg-4
        div
          figure.mb-4
            img(src="@/assets/curso/tema2-img27.png")
          p.mb-0
            strong Formas angulares
            br
            | El tercer gran grupo contiene formas angulares, en este grupo también están presentes las líneas rectas con la diferencia de que siempre están inclinadas lo cual sirve para denotar dinamismo, agilidad, rapidez, astucia. Sin embargo, la presencia de ángulos marcados y formas puntiagudas también puede transmitir agresividad, peligro, daño entre otras cualidades. Por ejemplo, los colmillos de un león se asemejan a la forma de un triángulo y el verlos genera alerta inmediata.
  .container.tarjeta.no-radius.top.bottom.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-4
    .row.justify-content-center
      .col-lg-9
        .cajon.color-secundario.background-pastel.p-4.mb-4
          p.mb-0  A pesar de que cada grupo de formas tiene características únicas, esto no quiere decir que sean excluyentes entre sí. Por ejemplo, el Pingüino de Batman tiene un cuerpo que en esencia es una esfera que en principio lo hace parecer inofensivo, pero su cara y accesorios están llenos de formas angulares que denotan claramente su peligrosidad como villano.
            br
            br
            | Para finalizar, es recomendable ver la conferencia dada por el <i>concept artist</i> Óscar Jiménez Vargas en el 17 festival de cine de Málaga donde muestra como fue el proceso de diseño de personajes para Justin y las espadas del valor desde el material complementario denominado “Diseña tus personajes de animación con arte” y la página <i>web</i> del artista.

    h3.titulo-tercero Consejos

    .row.justify-content-center
      .col-lg-11
        ol.lista-ol--cuadro.lista-ol--separador.colors-list.top.bottom.pt-3
          li
            .lista-ol--cuadro__vineta.rounded.color-primario.more-space
              span 1
            p.mb-0
              strong Usar las líneas de acción
              br
              | Las líneas de acción son las que determinan la fluidez del movimiento, si bien es necesario hacer dibujos en los cuales los personajes están en una pose estática de forma que se facilite el proceso posterior de modelado, este es un proceso que se hace cuando el personaje está totalmente definido.
              br
              br
              | En las primeras etapas es fundamental plasmar la personalidad del personaje y para eso las líneas de acción son un elemento muy útil.
          li
            .lista-ol--cuadro__vineta.rounded.color-primario.more-space
              span 2
            p.mb-0
              strong Poses interesantes
              br
              | En conjunto con el consejo anterior, la construcción de poses que ayuden a percibir la personalidad del personaje es importantísimo para la construcción visual de la misma. Si bien muchos atributos son claramente visibles al momento en que el personaje desarrolla su actuación, es una buena práctica tener elementos que insinúan dichos atributos cuando el personaje no está en movimiento.
          li
            .lista-ol--cuadro__vineta.rounded.color-primario.more-space
              span 3
            p.mb-0
              strong Crear siluetas claras
              br
              | Un buen ejercicio para determinar si el personaje está bien construido, es visualizarlo en forma de silueta para de esta forma descubrir si es fácilmente reconocible, ya que de no ser así se deben aplicar los ajustes necesarios como modificar la pose o alterar las formas para garantizar que desde su representación más abstracta sea reconocible.
          li
            .lista-ol--cuadro__vineta.rounded.color-primario.more-space
              span 4
            p.mb-0
              strong Anatomía
              br
              | Ya sea un personaje realista o uno estilizado, partir de una base anatómica sólida siempre es una garantía para el diseño de personajes creíbles.
          li
            .lista-ol--cuadro__vineta.rounded.color-primario.more-space
              span 5
            p.mb-0
              strong Evitar la simetría
              br
              | Salvo que esté sumamente justificado, lo ideal es evitar la simetría a toda costa, porque esto permite desarrollar formas más interesantes sumado al hecho de que por naturaleza la mayoría de animales incluyendo al ser humano no son perfectamente simétricos.
          li
            .lista-ol--cuadro__vineta.rounded.color-primario.more-space
              span 6
            p.mb-0
              strong Color
              br
              | Al igual que la forma, el color también comunica y cada uno tiene sus significados asociados, por ello la correcta selección del color es importante para reforzar lo que se quiera que el personaje represente.

    Separador

    #t_2_2.titulo-segundo.color-secundario
      h2 2.2  Diseño de escenarios

    p.mb-5 El diseño de escenarios es una etapa importante del proceso de creación visual, porque es en esta etapa en la que gestan los espacios y sus decorados que permitirán el desarrollo de la historia. Es el momento en el que es posible resolver rápidamente los problemas y desafíos narrativos que se puedan llegar a presentar.

  .container.tarjeta.no-radius.top.bottom.tarjeta--gradient2.px-4.px-md-5.pt-4.pt-md-5
    figure.mb-5
      img(src="@/assets/curso/tema2-img28.png")
    p.mb-0 Al igual que el diseño de personajes, los escenarios y <i>props</i> parten del proceso de creación literaria lo que brinda un contexto inicial sobre el tipo de ambiente que se debe desarrollar y en él se aplican muchos conceptos ya desarrollados hasta esta etapa. Elementos como el lenguaje audiovisual, composición, perspectiva, teoría del color, el lenguaje de formas e incluso principios anatómicos son fundamentales al plantear los escenarios.
      br
      br
      | Como todo proceso de diseño se debe partir de la investigación, esta etapa es la que siempre dará información para que todos los elementos creados convivan armónicamente en el universo donde van a existir y por tanto, evitar disonancias visuales. Claro está que todo es válido siempre y cuando tenga un propósito claro y bien definido.
  .container.tarjeta.no-radius.top.bottom.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-4
    .row.justify-content-center.mb-4
      .col-lg-9
        figure
          img(src="@/assets/curso/tema2-img29.png")
    p.mb-5 Seguido de la investigación está la recolección de referencias, en esta etapa se recaba información visual que permita aclarar los detalles inherentes al desarrollo de las formas. Por ejemplo, si se trata del diseño de un escenario medieval, es muy posible que no se tengan del todo claros sus elementos en la biblioteca visual almacenada en el cerebro; por tanto, la opción más sencilla es buscar en internet imágenes relativas a la época y lugar requerido e incluso si es posible, dirigirse a un lugar de la época que haya logrado perdurar hasta la actualidad para estudiarlo y recolectar referencias visuales en vivo y en directo.
    .row.justify-content-center.mb-4
      .col-lg-9
        figure
          img(src="@/assets/curso/tema2-img30.png")
    p.mb-5 Superada la etapa de investigación y recolección de referencias, es hora de poner manos a la obra y empezar a generar propuestas en forma de bocetos rápidos para ir acercando el desarrollo visual a las necesidades de la historia, realizando las respectivas iteraciones sobre las propuestas seleccionadas hasta llegar al punto donde se obtengan las imágenes finales.
    .row.justify-content-center.mb-4
      .col-lg-9
        figure
          img(src="@/assets/curso/tema2-img31.png")

</template>

<script>
export default {
  name: 'Tema2',
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
