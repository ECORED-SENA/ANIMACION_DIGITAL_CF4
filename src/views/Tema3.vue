<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.no-radius.bottom.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Preparación de personaje para animación

  .container.tarjeta.no-radius.top.tarjeta--gradient1.px-4.px-md-5
    .row.justify-content-center
      .col-lg-9
        figure.mb-5
          img(src="@/assets/curso/tema3-img1.png")
      .col-lg-10
        p.mb-5 Actualmente existen nuevas formas de crear animación de personajes por medio de los programas diseñados para ello, ya sea por medio del uso orgánico del movimiento de extremidades con pivotes o puntos de rotación o haciendo uso de títeres digitales que generan tensión sobre la malla de la ilustración y ayudan a generar el movimiento, entre las formas más usadas, sin extensiones especiales o pagas. En todo caso es muy importante preparar la ilustración del personaje, despiezando, para que estos movimientos se den sin conflictos con otras piezas o extremidades del personaje.
          br
          br
          | A continuación, veremos varias herramientas y procesos que nos indicarán cómo hacerlo previamente en programas gráficos, previos al paso a After Effects, en el cual ya generamos la animación como tal.
    Separador
  .container.tarjeta.no-radius.top.tarjeta--blanca.px-4.px-md-5

    #t_3_1.titulo-segundo.color-secundario
      h2 3.1  Introducción práctica a Photoshop

    .cajon.color-acento-contenido.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-9.mb-5.mb-lg-0
          p.mb-0 Aunque inicialmente Photoshop nació como un programa para la manipulación y edición de fotografías, hoy en día es utilizado para muchas actividades artísticas que van desde el dibujo o la ilustración, hasta realizar animaciones con una gran variedad de técnicas, como lo puede ser la rotoscopia. Este programa es ampliamente utilizado en la industria del diseño y la animación; por lo cual podrá visualizar una primera práctica a través del siguiente vídeo:
        .col-6.col-sm-8.col-md-5.col-lg-3
          figure.px-4
            img(src="@/assets/curso/tema3-img2.svg")

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/kkfwi6xJfjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.text-center.mb-4.fw-bold Enseguida, para iniciar el proceso se brindarán las indicaciones para digitalizar los dibujos del ciclo de caminado de un personaje dibujado en papel a mano alzada:

    TabsC.color-primario.mb-5
      .px-5.py-3.py-md-4(titulo="Paso 1")
        h3.titulo-tercero Toma de fotografías
        p.mb-4 Primero que todo debemos tomar una fotografía a cada uno de los dibujos, se puede utilizar la cámara de un teléfono celular sin problema. Las ponemos juntas en una carpeta para el proyecto.
        .row.justify-content-center
          .col-lg-10
            figure
              img(src="@/assets/curso/tema3-img3.svg")
      .px-5.py-3.py-md-4(titulo="Paso 2")
        .row.align-items-center
          .col-lg-6
            h3.titulo-tercero Archivo nuevo en Photoshop
            p.mb-0 Al abrir el programa (Photoshop) debemos crear un lienzo o zona de trabajo, la cual crearemos dando clic en “Archivo” en el menú superior y luego en “Nuevo” (Ctrl + N), allí configuraremos las medidas de la siguiente manera: 1.920 píxeles de ancho y 1.080 pixeles de alto con una resolución de 250, entre más resolución tenga la imagen mejor la calidad de esta. Hacemos clic en OK para generar el lienzo. Con el lienzo listo tendremos a disposición todas las herramientas del programa para generar el contenido que necesitemos.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema3-img4.jpg")
      .px-5.py-3.py-md-4(titulo="Paso 3")
        .row.align-items-center
          .col-lg-6
            h3.titulo-tercero Las capas
            p.mb-0 Cómo Photoshop trabaja con capas, esto quiere decir que cada elemento que creemos o utilicemos se ubica uno encima del otro, por lo que se debe estar muy pendiente de tener ubicadas las capas en el orden necesario para poder manipularlas. Normalmente las capas se ubican en un panel al lado derecho de la pantalla y desde allí podemos crear capas nuevas o capas vacías que podremos utilizar posteriormente.
              br
              br
              | Teniendo las fotografías de los dibujos del ciclo de caminado del personaje realizado anteriormente, se jalan con clic sostenido hacia el lienzo en Photoshop, el programa reconocerá la imagen y la ubicará, al principio como una capa o contenido inteligente, por lo que solo debemos apretar la tecla <i>“Enter”</i> para poder utilizar la imagen. Esto mismo lo hacemos con las demás fotografías de los dibujos de todo el ciclo de caminado.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema3-img5.jpg")
      .px-5.py-3.py-md-4(titulo="Paso 4")
        .row.align-items-center
          .col-lg-6
            h3.titulo-tercero Ubicación
            p.mb-0 Con las imágenes dentro del programa las podemos ubicar y manipular de forma y tamaño para que el personaje quede ubicado de la mejor manera con el fin de poder calcar. Para modificar la capa del dibujo seleccionada lo hacemos dando clic en el menú superior “Edición”, “Transformar” (Ctrl + T) escogiendo posteriormente la opción de transformación que necesitemos, cuando realicemos los cambios que se crean necesario simplemente apretamos la tecla <i>“Enter”</i>. Posteriormente crearemos una nueva capa yendo al menú superior “Capa” luego ubicar el ratón en “Nueva” y damos clic en “Capa…”  la cual pondremos por encima de la fotografía del dibujo, no olvidar que al dibujo debemos bajarle la opacidad al 50 % seleccionandolo en el panel de capas, para que el proceso de calcado se realice de manera idónea.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema3-img6.jpg")
      .px-5.py-3.py-md-4(titulo="Paso 5")
        .row.align-items-center
          .col-lg-6
            h3.titulo-tercero Trazado
            p.mb-0 Una vez se tenga la capa nueva se puede utilizar la herramienta pincel (tecla B) o la herramienta Pluma (tecla P) para empezar a realizar el dibujo. Para la pluma, una vez realizado todo el trazado se da clic derecho y se escoge la opción “Contornear trazado” y luego se escoge “Pincel” realizando un trazado más estilizado que con el Pincel a mano alzada.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema3-img7.jpg")
      .px-5.py-3.py-md-4(titulo="Paso 6")
        .row.align-items-center
          .col-lg-6
            h3.titulo-tercero Guardar ciclo
            p.mb-0 Realizados los dibujos, se procede a exportar las imágenes, recuerda que debe ser una por una completando el ciclo de caminado completo. Para esto vamos a Archivo en el menú superior, en la cascada de opciones escogemos “Exportar como…” (Alt+Mayús+Ctrl+W) se abrirá una ventana emergente en donde buscamos la carpeta que tenemos para el proyecto y le ponemos el nombre “ciclo de caminado 1” para la primera imagen y en formato escogemos JPG o PNG y damos clic en “Guardar”. Y así para las demás imágenes diferenciándose en el nombre con el número al final. De esta misma manera podemos guardar el proyecto de Photoshop dejando en la ventana emergente, el formato como sale por defecto (Photoshop .PSD)
          .col-lg-6
            figure
              img(src="@/assets/curso/tema3-img8.jpg")

    p.mb-0.text-center El resultado serán las imágenes disponibles para ser luego utilizadas en un programa de animación como After Effects.

    Separador

    #t_3_2.titulo-segundo.color-secundario
      h2 3.2  Introducción práctica a Photoshop

    .cajon.color-acento-contenido.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-9.mb-5.mb-lg-0
          p.mb-0 Illustrator es un editor de gráficos vectoriales ampliamente utilizado en el diseño gráfico, la ilustración vectorial y en el proceso general de la animación 2D. Su funcionamiento recrea un taller de arte en el que el usuario trabaja sobre una “mesa de trabajo” en la que se crea un “Documento” que se puede modificar según las necesidades que este tenga.
            br
            br
            strong ¿Cómo vectorizar los dibujos del ciclo de caminado del personaje realizado a mano alzada?
            |   A través del siguiente video podrás saberlo:
        .col-6.col-sm-8.col-md-5.col-lg-3
          figure.px-4
            img(src="@/assets/curso/tema3-img9.svg")

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/I7kS61OkPaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 Ahora bien, respaldando cada uno de los elementos del vídeo detallamos el paso a paso descriptivo teniendo las imágenes digitalizadas de los dibujos del ciclo de caminado del personaje y ponerlos a disposición en una carpeta para el proyecto junto con las fotografías para ser importadas al programa con facilidad:

    TabsC.color-primario.mb-5
      .px-5.py-3.py-md-4(titulo="Paso 1")
        .row.align-items-center
          .col-lg-6
            h3.titulo-tercero Documento nuevo en Illustrator
            p.mb-0 Al abrir el programa Illustrator lo primero que hacemos es crear un nuevo “Documento”, para esto damos clic en “Archivo” en el menú superior y luengo en “Nuevo” (Ctrl + N), se abrirá una pequeña ventana en donde podemos modificar las opciones de este nuevo documento. Para este proyecto utilizaremos las siguientes: Anchura 1920 píxeles, altura 1080 pixeles, recuerda poner las unidades en píxeles. Ponemos 1 en Mesa de trabajo. Orientación Horizontal, el resto de opciones las dejamos como están y hacemos clic en OK.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema3-img10.jpg")
      .px-5.py-3.py-md-4(titulo="Paso 2")
        .row.align-items-center
          .col-lg-6
            h3.titulo-tercero Herramientas
            p.mb-0 Una vez creado el documento tendremos a disposición todas las herramientas del programa para empezar a trabajar. Las herramientas más utilizadas son Pluma, Pincel, Selección, Rectángulo, recuerda que dependiendo de la herramienta que se tenga seleccionada aparecerán diferentes opciones en la parte alta de la mesa de trabajo para modificar según las necesidades que tengamos.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema3-img11.jpg")
      .px-5.py-3.py-md-4(titulo="Paso 3")
        .row.align-items-center
          .col-lg-6
            h3.titulo-tercero Importación
            p.mb-0 Teniendo ubicadas las imágenes de los dibujos las podemos importar al programa simplemente seleccionándolas y con clic sostenido las arrastramos al documento, el programa las ubica automáticamente para ser modificadas. Como vamos a realizar una vectorización, este programa también dispone de un panel de capas ubicado generalmente en la parte derecha de la interfaz, allí se creará una capa para cada uno de los elementos creados o importados, recuerda que, dependiendo de la posición de la capa, una sobre otra, se visualizará la que esté por encima, parecido a cómo funciona Photoshop.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema3-img12.jpg")
      .px-5.py-3.py-md-4(titulo="Paso 4")
        .row.align-items-center
          .col-lg-6
            h3.titulo-tercero Vectorización
            p.mb-0 Teniendo la imagen o fotografía en el documento la podemos ubicar en el lugar en dónde se nos facilite de mejor manera el proceso de vectorización con la herramienta “selección”, ya en posición modificamos la opacidad al 50 ß% para que el proceso de calcado se pueda realizar de una mejor manera. Para este proceso utilizaremos la herramienta “Pluma” (Tecla P) ubicada en el panel izquierdo de la pantalla, dependiendo de lo que queramos, en la parte baja del mismo panel de herramientas, encontramos la opción para activar el color del relleno y del contorno o desactivar el relleno si no lo requerimos para el trabajo que estamos realizando. En la opción trazado podemos cambiar el grosor, para esta imagen se puede realizar de 3 puntos o tú eliges el grosor que más se ajuste al estilo que estás buscando.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema3-img13.jpg")
      .px-5.py-3.py-md-4(titulo="Paso 5")
        .row.align-items-center
          .col-lg-8
            h3.titulo-tercero Trazado
            p.mb-0 Con la imagen en posición elijo un punto para comenzar a realizar el trazado, recuerda que la herramienta pluma dispone de precisión y buena destreza, una vez escogido el punto a dónde quiero trazar puedo modificar la curvatura con el clic sostenido e ir ubicando el trazo según la disposición del dibujo base hasta terminar el proceso. Luego puedes cambiar los colores según tu gusto o el estilo buscado desde el panel de herramientas o las diferentes opciones que aparecen en la interfaz del programa. Este proceso lo realizó para cada una de las imágenes del ciclo de caminado hasta tenerlas vectorizadas.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema3-img14.svg")
      .px-5.py-3.py-md-4(titulo="Paso 6")
        .row.align-items-center
          .col-lg-6
            h3.titulo-tercero Mesa de trabajo
            p.mb-0 También es posible al momento de generar el documento nuevo poner en la opción “mesas de trabajo” el número de mesas que disponga todo el ciclo de caminado e ir vectorizando en cada una de ellas las imágenes por separado, esto con el fin de que no se complique luego el proceso de exportación de las imágenes terminadas.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema3-img15.svg")
      .px-5.py-3.py-md-4(titulo="Paso 7")
        .row.align-items-center
          .col-lg-6
            h3.titulo-tercero Exportación
            p.mb-0 Para exportar las imágenes vamos de nuevo al menú superior y accedemos a “Archivo” y damos clic en “Exportar”, se nos abrirá una ventana en dónde buscamos la carpeta del proyecto, espacio en dónde las guardaremos, y en la opción de formato elegimos PNG, para que las guarde con transparencia, o JPG si no es necesaria la transparencia.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema3-img16.svg")

    p.mb-5 Recuerda que según la manera en que vamos a realizar la animación generamos las imágenes; es decir, se puede exportar una imagen con un movimiento definido hasta completar el ciclo de animación, para ponerla en secuencia o también se puede generar un personaje el cual disecciono o exporto por parte, tronco, cabeza, brazos y piernas por separado, para manejarlo como una marioneta luego en el programa de animación (After Effects).

    Separador

    #t_3_3.titulo-segundo.color-secundario
      h2 3.3  Introducción práctica a After Effects

    .cajon.color-acento-contenido.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-9.col-md-7.col-sm-12.mb-5.mb-lg-0
          p.mb-0 After Effects es un programa de animación, efectos especiales digitales y composición digital utilizado en la realización cinematográfica, el diseño infográfico, la televisión y un gran número de utilidades más. Todo depende de las necesidades del usuario. Este programa funciona con una línea de tiempo en dónde se ubican todos los elementos por capas dentro de una composición. Es ampliamente utilizado en el mundo por su versatilidad para proyectos audiovisuales de todo tipo. A continuación, revisemos un video de apropiación de algunas de las herramientas que nos permiten animar:
        .col-6.col-sm-8.col-md-5.col-lg-3
          figure.px-sm-5
            img(src="@/assets/curso/tema3-img17.svg")

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/j_4Cm4ZZWQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.text-center.mb-4.fw-bold Con el fin de realizar una animación del ciclo de caminado del personaje diseñado y/o digitalizado o vectorizado anteriormente realizaremos los siguientes pasos:

    LineaTiempoD.color-primario.mb-5
      .row.justify-content-center(numero="1" titulo="Abrir After Effects")
        .col-12.mb-4
          p.mb-0 Al abrir el programa After Effects lo primero que debemos hacer es crear un “Nuevo proyecto”, por defecto aparecerá en pantalla una ventana en donde podemos acceder a esta opción. Si no nos aparece vamos al menú superior y entramos a la opción “Archivo”, “Nuevo” y escogemos “Nuevo proyecto”.
        .col-lg-8.mb-0
          figure
            img(src="@/assets/curso/tema3-img18.jpg")
      .row.justify-content-center(numero="2" titulo="Crear composición")
        .col-12.mb-4
          p.mb-0 Para comenzar a trabajar debemos crear una “Composición” con los requerimientos que necesitemos, debemos ir al menú superior de la pantalla, damos click en “Composición” y escogemos la opción “Nueva composición” (Ctrl + N), aparecerá una ventana en donde podemos modificar las opciones de esta nueva composición, para el proyecto serán las siguientes: La Anchura 1920 píxeles, la Altura 1080 píxeles, la Velocidad de fotogramas 30, la Duración la podemos dejar en 30 segundos o el tiempo que creamos sea suficiente para el resultado que estemos buscando, en nuestro caso es la animación de un ciclo de caminado completo de un personaje, por lo que 30 segundos es un tiempo más que suficiente. Dejamos las demás opciones como están por defecto y hacemos clic en “aceptar”.
        .col-lg-8.mb-0
          figure
            img(src="@/assets/curso/tema3-img19.jpg")
      .row.justify-content-center(numero="3" titulo="Importación")
        .col-12.mb-4
          p.mb-0 Una vez creada la composición, tenemos a disposición todas las herramientas del programa. En la parte superior izquierda está ubicado el panel del proyecto, en donde podremos ver la composición recién creada, que es la misma en la que estamos trabajando. Desde ese mismo panel podemos importar las imágenes que posteriormente utilizaremos para realizar la animación dando doble clic o vamos al menú superior “Archivo” en la cascada de opciones buscamos “Importar” y elegimos “Importar archivo...” (Ctrl + I), se nos abrirá una ventana en dónde podemos buscar la carpeta que contiene las imágenes generadas para la animación, dependiendo de la opción de animación que queramos realizar estarán las imágenes por cada uno de las poses del personaje para el ciclo de caminado completo, o el personaje diseccionado por partes que funcionará como una marioneta posteriormente.
        .col-lg-10.mb-0
          figure
            img(src="@/assets/curso/tema3-img20.jpg")
      .row.justify-content-center(numero="4" titulo="Organización de los elementos")
        .col-12.mb-4
          p.mb-0 Junto al icono de la Composición se ubicarán  los archivos importados y allí mismo se ubicarán todos los elementos que también se creen dentro del mismo programa. Con clic sostenido podemos llevar las imágenes hacia la línea de tiempo ubicada en la parte baja de la pantalla. Al igual que los demás programas de Adobe, como Photoshop e Illustrator, After Effects trabaja con capas, por lo que cada elemento que esté por encima de otro puede bloquear su aparición en la pantalla de la composición. Cada elemento llevado a la línea de tiempo por defecto ocupará todo el espacio o tiempo de la línea, pero esto lo podemos modificar estirando o encogiendo la barra de cada elemento y ubicándola en el momento (minuto o segundo) en dónde queramos que aparezca, este proceso lo realizamos con el ratón ubicándolo en el inicio o el final de la barra y modificando con clic sostenido.
        .col-lg-6.mb-0
          figure
            img(src="@/assets/curso/tema3-img21.jpg")
      .row.justify-content-center(numero="5" titulo="Secuencia")
        .col-12.mb-4
          p.mb-0 Como la animación se da al momento de generar una secuencia de imágenes, llevamos a la línea de tiempo las imágenes que componen el ciclo de caminado completo y las ubicamos en el orden preestablecido desde el diseño del personaje. Una vez allí modificamos la barra de cada fotografía dándole un tiempo de duración de menos de un segundo para cada una y poniendo a una después de la otra, una vez ubicadas en orden presionando la barra espaciadora del teclado podemos activar la previsualización de lo que estemos animando, con el fin de ir realizando las mejoras que creamos sean convenientes. De esta manera, es decir, con las imágenes de cada pose del ciclo de caminado, podemos realizar la animación base para el personaje.
        .col-lg-7.mb-0
          figure
            img(src="@/assets/curso/tema3-img22.jpg")
      .row.justify-content-center(numero="6" titulo="Composición")
        .col-12.mb-4
          p.mb-0 Si vamos a realizar la animación con la técnica de Marioneta, debemos generar los archivos de tal manera que sea posible efectuar la composición completa del cuerpo del personaje en After Effects, pues cada elemento debe estar independiente para poder generar el movimiento de tal manera que no afecte el proceso en general.
            br
            | Para este caso importamos las partes del cuerpo, las cuáles deben ser archivos PNG, y luego las llevamos a la línea de tiempo, aquí se debe tener en cuenta como van posicionadas las capas para que el personaje quede bien construido. Una vez el personaje esté en posición no importa que las barras de cada uno de los elementos ocupen toda la línea de tiempo, pues es necesitamos que estén disponibles y visibles siempre en la pantalla de la composición.
      .row.justify-content-center(numero="7" titulo="Animación")
        .col-12.mb-4
          p.mb-0 Con el personaje ya en posición debemos modificar el punto de anclaje de las capas que se van a animar, como lo son cada una de las piernas y los brazos, también la cabeza y el torso de ser necesario. En el panel de herramientas ubicado en la parte superior se encuentra la herramienta “Punto de Anclaje”, con esta herramienta seleccionada podemos ubicar el punto de anclaje de cada elemento al lugar que se requiera, por ejemplo, en las piernas se ubica el pivote o punto de anclaje a la altura de la cadera del personaje, en los brazos a la altura del hombro y así con cada elemento que tengamos disponible o que haga parte del diseño general del personaje.
        .col-lg-10.mb-0
          figure
            img(src="@/assets/curso/tema3-img23.jpg")
      .row.justify-content-center(numero="8" titulo="Ligadura")
        .col-12.mb-4
          p.mb-0 Otro paso importante es generar una “ligadura” o “dependencia” para cada elemento, esto se realiza dando clic sostenido en el símbolo de espiral que aparece en la parte derecha de los elementos ubicados en la línea de tiempo y luego escogiendo al elemento al que se quiere que vaya ligado, la idea es que este elemento principal sea el torso, por lo que, siempre con el clic sostenido, ligamos desde el icono de espiral, los brazo, las piernas y la cabeza al torso y así, si en algún momento realizamos una animación a este elemento (torso), todos los demás se moverán con él, ya que se encuentran ligados.
        .col-lg-10.mb-0
          figure
            img(src="@/assets/curso/tema3-img24.jpg")
      .row.justify-content-center(numero="9" titulo="Transformación")
        .col-12.mb-4
          p.mb-0 Con el personaje debidamente dispuesto se puede empezar con la animación, para esto debemos empezar a modificar las propiedades de transformación a cada uno de los elementos que tengamos en la línea de tiempo. En este caso podríamos empezar con las piernas. Cada elemento ubicado en la línea de tiempo dispone de una pequeña flecha ubicada en la parte izquierda que al hacerle clic se desplegarán hacia abajo las opciones de “Transformar” que son “Punto de Anclaje”, “Posición”, “Escala”, “Rotación” y “Opacidad”, en este caso se necesitaría modificar la rotación, que con el punto de anclaje generaría el movimiento de la pierna hacia atrás y hacia adelante, lo mismo que los brazos, recuerda que todo depende del estilo o del gusto del animador, pero la idea es darle al personaje un estilo lo más parecido a la realidad, por lo que se debe trabajar en la animación modificando poco a poco cada elemento hasta dar con el resultado esperado.
        .col-lg-10.mb-0
          figure
            img(src="@/assets/curso/tema3-img25.jpg")
      .row.justify-content-center(numero="10" titulo="Ciclo")
        .col-12.mb-4
          p.mb-0 Una vez modificados los valores de rotación para cada elemento se puede generar un ciclo de caminado completo para el personaje, aunque teniendo muchas más opciones para animar disponible, este ciclo de caminado se puede pulir agregando detalles extras como movimientos de la cabeza, el pelo, las demás articulaciones como las rodillas o los codos y así con el personaje en general, todo depende de la imaginación del animador.
        .col-lg-8.mb-0
          figure
            img(src="@/assets/curso/tema3-img26.jpg")
      .row.justify-content-center(numero="11" titulo="Exportación")
        .col-12.mb-4
          p.mb-0 Ya sea que hayas realizado la animación del ciclo de caminado con la técnica de secuencia de imágenes o por la animación con la marioneta, al final debes realizar la exportación del video del trabajo realizado, para esto, con la línea de tiempo de la composición seleccionada, vamos al menú superior y damos clic en “Composición” en la cascada de opciones escogemos la opción “Procesar” en el panel inferior, mismo sobre el que está ubicada la línea de tiempo, se abrirá una pestaña llamada “Cola de procesamiento” en donde modificaremos las opciones de guardado y exportación fina, allí en la opción “Configuración de procesamiento” la dejamos como “Configuración óptima”, en la opción “Módulo de salida” damos clic en el link en dónde aparecerá una ventana llamada “Ajustes del módulo de salida”, en esta ventana en la opción “Formato” podemos escoger el formato que necesitemos, para este caso puede ser AVI, o cualquier formato de video de preferencia que haya disponible.
      .row.justify-content-center(numero="12" titulo="Modificar salida")
        .col-12.mb-4
          p.mb-0 También se pueden modificar algunos otros atributos como el tamaño del video de salida, poner o quitar el sonido si es necesario, pero lo que nos interesa es solamente el formato de video, para este caso, y hacemos clic en “Aceptar”. Luego vamos a la opción “Salida a” y damos clic, aquí se abre la ventana típica de exportación o guardado en dónde buscamos la carpeta del proyecto y damos clic en “Guardar”.
        .col-lg-8.mb-0
          figure
            img(src="@/assets/curso/tema3-img27.jpg")
      .row.justify-content-center(numero="13" titulo="Procesar")
        .col-12.mb-4
          p.mb-0 Por último, en este mismo panel aparece en la parte derecha el botón “Procesar” y damos clic, aquí el programa realiza el procesado de la animación mostrando el estado y avance de este mediante una línea que aparece en la parte superior del panel “Cola de procesamiento”.
        .col-lg-8.mb-0
          figure
            img(src="@/assets/curso/tema3-img28.svg")
      .row.justify-content-center(numero="14" titulo="Composición")
        .col-12.mb-4
          p.mb-0 Si queremos exportar en el formato de video H.264 debemos ir a la opción “Composición” del menú superior y escoger la opción “Añadir a la cola de Adobe Media Encoder…”  ya que las últimas versiones de After Effects no permiten exportar este formato de vídeo directamente, por lo que se necesita de este programa (Adobe Media Encoder) para poder generarla.
        .col-lg-8.mb-0
          figure
            img(src="@/assets/curso/tema3-img29.jpg")

    .row.justify-content-center
      .col-lg-8
        .tarjeta.tarjeta--gradient3.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/tema3-img30.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Video
                  p.text-small.text-white Finalmente, para profundizar sobre el tema puede consultar el siguiente recurso para crear un personaje en capas de forma sencilla.
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://www.youtube.com/watch?app=desktop&v=x78JqwqQ4Kg&feature=youtu.be" target="_blank")
                    span Ver video
                    i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema3',
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
