export default {
  global: {
    componenteFormativo: 'Creación de personajes y escenarios',
    descripcionCurso:
      'La primera etapa en donde nuestra historia empieza a tener un aspecto visual es el diseño de personajes; de esta forma sabremos cómo se ven nuestros personajes y en dónde van a actuar. Antes de comenzar con los bocetos, imágenes y dibujos, debemos entender y buscar plasmar la personalidad de cada uno, por medio de su apariencia, vestimenta y forma de moverse, además del ambiente general que la pieza audiovisual animada busca mostrar. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Teoría del color',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Modelos de color',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Propiedades del color',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Círculo cromático',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Armonía del color',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Psicología del color',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<i>Concept art</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Diseño de personajes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Diseño de escenarios',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Preparación de personaje para animación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Introducción práctica a Photoshop',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Introducción práctica a Illustrator',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Introducción práctica a After Effects',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Sintesis',
      //   nombreRuta: 'sintesis',
      // },
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Bancroft, T. (2012). <i>Character mentor: learn by example to use expressions, poses, and staging to bring your characters to life. CRC Press.</i>',
      link: '',
    },
    {
      referencia:
        'Cortés, J. (2020). ¿Qué es la animación? Tipos y técnicas. [Video]. YouTube. Notodoanimacion.  ',
      link: 'https://bit.ly/3gGd7Wh',
    },
    {
      referencia:
        'Cortes, J. (2020). 19 Principios del diseño de personajes. Notodoanimacion.  ',
      link:
        'https://www.notodoanimacion.es/principios-del-diseno-de-personajes/',
    },
    {
      referencia:
        'Gámez, J. (2021). Cómo contar historias con el uso del color. ',
      link: 'https://www.animum3d.com/blog/uso-del-color-en-ilustracion/',
    },
    {
      referencia:
        'González, D. (2015). Diseño de videojuegos: da forma a tus sueños. Ra-Ma.  ',
      link: '',
    },
    {
      referencia:
        'Jiménez, Ó. (2021). Diseña tus personajes de Animación con arte.  ',
      link: 'https://www.animum3d.com/blog/ez-animacion-oscar-jimenez/',
    },
    {
      referencia: 'Real Academia Española (RAE). (2021). Anatomía.  ',
      link: 'https://dle.rae.es/anatom%C3%ADa',
    },
    {
      referencia: 'Real Academia Española (RAE). (2021). Color  ',
      link: 'https://dle.rae.es/color',
    },
    {
      referencia: 'Página de productos Adobe. (s.f.). Adobe After Effects.  ',
      link: 'https://www.adobe.com/la/products/aftereffects.html',
    },
    {
      referencia: 'Vargas, Ó. J. (2020). <i>Character Desing.</i>  ',
      link: 'https://oscarjvargas.com/',
    },
    {
      referencia: '<i>Web Design Inspiration.</i> (2018). Behance,  ',
      link:
        'https://www.behance.net/gallery/68306231/20-Best-Animated-Logos-for-Your-Inspiration',
    },
    {
      referencia:
        'Whelan, B. (1994). La armonía en el color - Nuevas tendencias (Color Harmony 2). México: FinalCopy. ',
      link:
        'https://corazondpapel.files.wordpress.com/2012/10/45547856-salinas-rosario-la-armonia-en-el-color-nuevas-tendencias.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Animación',
      significado:
        'es la técnica que da sensación de movimiento a imágenes, dibujos, figuras, recortes, objetos, personas, imágenes computarizadas, utilizando leves cambios de posición para que se genere la ilusión de un movimiento real.',
    },
    {
      termino: 'Audiovisual',
      significado: 'material conjunto de imágenes y sonidos grabados.',
    },
    {
      termino: 'Creative Commons',
      significado:
        'es una organización internacional estandarizada dedicada a promover el acceso y el intercambio de bienes culturales recreativos comunes.',
    },
    {
      termino: 'Digital',
      significado: 'suministra datos mediante dígitos binarios.',
    },
    {
      termino: 'Gráfico',
      significado:
        'pertenece y es relativo a la representación visual de la escritura y lo impreso.',
    },
    {
      termino: 'Innovación',
      significado:
        'acción de modificar las cosas ya existentes aplicando algo nuevo o creando elementos totalmente nuevos.',
    },
    {
      termino: 'Logotipo',
      significado:
        'símbolo formado por imágenes o letras que identifica a una empresa, institución, producto o marca.',
    },
    {
      termino: 'Multimedia',
      significado: 'difunde o está compuesto por distintos medios.',
    },
    {
      termino: 'Página <i>web</i>',
      significado:
        'conjunto de información que se encuentra publicada en una determinada dirección de internet.',
    },
    {
      termino: 'Post producción',
      significado:
        'conjunto de procesos que se realizan sobre un material audiovisual, digital ya grabado, sea digital o análogo.',
    },
    {
      termino: 'Producción',
      significado:
        'generación de contenido para medios de comunicación audiovisual.',
    },
    {
      termino: 'RGB',
      significado:
        'significa <i>Red, Green</i> y <i>Blue</i> (Rojo, Verde, Azul). Es un modelo de color basado en la síntesis aditiva, en el que se basa la colonización digital, con los cuales, manipulando y sumando en diferentes intensidades se pueden generar más de 16 millones de tonos.',
    },
    {
      termino: 'Sitio <i>web</i>',
      significado: 'página <i>web</i>',
    },
    {
      termino: 'Técnica',
      significado:
        'conjunto de procedimientos, reglas y recursos que se usan en un arte, ciencia o labor determinada. Requiere práctica y habilidad.',
    },
    {
      termino: 'Video <i>Blocking</i>',
      significado:
        'puesta en escena precisa de los actores en una actuación. En términos de cine, es donde colocas a tus actores y elementos importantes en el encuadre.',
    },
    {
      termino: 'YouTube',
      significado:
        'sitio <i>web</i> y red social dedicado exclusivamente a compartir y publicar videos.',
    },
  ],
  complementario: [
    {
      texto: 'Gámez, J. (2021). Cómo contar historias con el uso del color. ',
      tipo: 'Blog',
      link: 'https://www.animum3d.com/blog/uso-del-color-en-ilustracion',
    },
    {
      texto:
        'Cortés, J. (2021).19 Principios del Diseño de Personajes. notodoanimacion.',
      tipo: 'Página <i>web</i>',
      link:
        'https://www.notodoanimacion.es/principios-del-diseno-de-personajes',
    },
    {
      texto: 'Vargas, Ó. (2021). Diseño de personajes. ',
      tipo: 'Página <i>web</i>',
      link: 'https://oscarjvargas.com',
    },
    {
      texto:
        'Cortés, J. (2021). ¿Qué es la animación? Tipos y técnicas. Notodoanimacion',
      tipo: 'Página <i>web</i>',
      link: 'https://bit.ly/3gGd7Wh',
    },
    {
      texto:
        'Jimenez, Ó. (2016). Diseña tus personajes de animación con arte. ExpertZone.',
      tipo: 'Página <i>web</i>',
      link: 'https://www.animum3d.com/blog/ez-animacion-oscar-jimenez',
    },
    {
      texto:
        'Trazos de oso. (2017). Crea un personaje en capas sencillo para animación. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=x78JqwqQ4Kg',
    },
    {
      texto:
        'Villanueva, J. (2020). ¡Video Animado para tu Negocio! Tutorial - After Effects. [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=yB2paQihPVE&ab_channel=Jes%C3%BAsVillanueva%3A%3ATutorialesparaCreativos',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mauricio Sánchez Rengifo',
        cargo: 'Experto temático',
        centro: 'Centro de Servicios y Gestión Empresarial Regional Antioquia ',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Eulises Orduz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Omar Camacho Orduz',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Andrés Giovanni Machado Cerquera',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
