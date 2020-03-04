import pdf from "./../../assets/pdf/Content/test.pdf";
import img from "./../../assets/pdf/Content/test.png";

//comportamientos
import accidente from "./../../assets/images/content/comp/accidente.jpg";
import distractor from "./../../assets/images/content/comp/distractor.jpg";
import enojo from "./../../assets/images/content/comp/enojo.jpg";
import what from "./../../assets/images/content/comp/quee.jpg";

//se;ales
import Qs from "./../../assets/images/content/signal/QueEs.jpg";
import pre from "./../../assets/images/content/signal/Preventiva.jpg";
import reg from "./../../assets/images/content/signal/Reglamentaria.jpg";
import inf from "./../../assets/images/content/signal/Informativa.jpg";
import hrz from "./../../assets/images/content/signal/Horizontal.jpg";
//dnd
import one from "./../../assets/images/content/dnd/left.png";
import two from "./../../assets/images/content/dnd/stop.png";
import cond from "./../../assets/images/content/dnd/condi.webp";

//videos
import video from "./../../assets/videos/test.mp4";

export const BehaviorsData = [
  {
    alt: "Title img alt",
    urlImg: `${what}`,
    url: "whatthis",
    title: "Comportamientos de movilidad vial.",
    description:
      "Conducir es de las cosas más apasionantes que hay sobre la faz de la tierra, y es mucho mejor si lo hacemos de la manera más responsable, bajo buenos habitos de comportamientos de movilidad, En este curso aprenderas comportamientos de movilidad"
  },
  {
    alt: "Prevenciones para accidentes.",
    urlImg: `${accidente}`,
    url: "preventive",
    title: "Prevenciones para accidentes.",
    description:
      "Ser un buen conductor no solo implica conocer el funcionamiento del vehiculo  sino también saber actuar frente a circunstancias en las que se pueda presentar un siniestro vial. En este curso aprenderas la prevención de los siniestros viales"
  },
  {
    alt: "Title img alt",
    urlImg: `${distractor}`,
    url: "distract",
    title: "No lleves elementos distractores.",
    description:
      "Existen reglas a la hora de conducir y cuidar nuestra integridad fisica y de los demas, la mejor forma de cumplirlo, es estar concentrados mientras conducimos, evitando cualquier tipo de elementos distractores. En el curso aprenderas a evitar esos objetos distractores"
  },
  {
    alt: "Title img alt",
    urlImg: `${enojo}`,
    url: "patience",
    title: "La paciencia es la mejor sabiduria.",
    description:
      "En este curso, aprenderás el significado y la aplicacion de las señales informativas, asi, como el comportamiento responsable de un buen conductor frente a situaciones que requieran de un conocimiento suficiente de las señales de transito"
  }
];

export const RoadData = [
  {
    alt: "Title img alt",
    urlImg: `${Qs}`,
    url: "whatthis",
    title: "¿Qué son las señales de transito?.",
    description:
      "En este curso vas ha aprender a reconocer y a clasificar todas las señales de transito, la importancia de cada una de ellas en las vias y en la vida de un gran conductor"
  },
  {
    alt: "Title img alt",
    urlImg: `${pre}`,
    url: "preventive",
    title: "Señales de transito Preventivas",
    description:
      "A traves de este curso desarrollaras competencias de reconocimiento de cada una de las señales de transito preventivas y estarás capacitado para conducir de la manera más responsable"
  },
  {
    alt: "Title img alt",
    urlImg: `${reg}`,
    url: "regulatory",
    title: "Señales de transito Reglamentarias",
    description:
      "a traves de este curso desarrollaras competencias de reconocimiento de cada una de las señales de transito reglamentarias y estarás capacitado para conducir de la manera más responsable"
  },
  {
    alt: "Title img alt",
    urlImg: `${inf}`,
    url: "informative",
    title: "Señales de transito Informativas",
    description:
      "a traves de este curso desarrollaras competencias de reconocimiento de cada una de las señales de transito informativas y estarás capacitado para conducir de la manera más responsable"
  },
  {
    alt: "Title img alt",
    urlImg: `${hrz}`,
    url: "horizontal",
    title: "Señales de transito Horizontales",
    description:
      "a traves de este curso desarrollaras competencias de reconocimiento de cada una de las señales de transito horizontales y estarás capacitado para conducir de la manera más responsable"
  }
];

export const Titles = [
  { title: "Titulo 1", link: "/admin/content" },
  { title: "Titulo 2", link: "/admin/content" },
  { title: "Titulo 3", link: "/admin/content" },
  { title: "Titulo 4", link: "/admin/content" },
  { title: "Titulo 5", link: "/admin/content" },
  { title: "Titulo 6", link: "/admin/content" }
];

export const DataTable = [
  {
    key: "1",
    name: "Julio Alfredo Vasquez Lievano",
    age: 24,
    address: "jul.vasquez@udla.edu.co - jualvalitube@gmail.com",
    theme: "Comportamientos de mobilidad",
    tags: ["Aprobado"],
    cal: 10
  },

  {
    key: "15",
    name: "Julio Alfredo Vasquez Lievano",
    age: 24,
    address: "jul.vasquez@udla.edu.co - jualvalitube@gmail.com",
    theme: "Tipos de señales de transito",
    tags: ["Reprobado"],
    cal: 2
  },
  {
    key: "2",
    name: "Julio Alfredo Vasquez Lievano",
    age: 24,
    address: "jul.vasquez@udla.edu.co - jualvalitube@gmail.com",
    theme: "Reconocimiento de señales Preventivas",
    tags: ["Aceptable"],
    cal: 6
  },
  {
    key: "4",
    name: "Julio Alfredo Vasquez Lievano",
    age: 24,
    address: "jul.vasquez@udla.edu.co - jualvalitube@gmail.com",
    theme: "Elementos distractores",
    tags: ["Reprobado"],
    cal: 2
  },
  {
    key: "5",
    name: "Julio Alfredo Vasquez Lievano",
    age: 24,
    address: "jul.vasquez@udla.edu.co - jualvalitube@gmail.com",
    theme: "Señales de transito preventivas",
    tags: ["Reprobado"],
    cal: 3
  },
  {
    key: "6",
    name: "Julio Alfredo Vasquez Lievano",
    age: 24,
    address: "jul.vasquez@udla.edu.co - jualvalitube@gmail.com",
    theme: "Señales de transito Informativas",
    tags: ["Reprobado"],
    cal: 1
  },
  {
    key: "7",
    name: "Julio Alfredo Vasquez Lievano",
    age: 24,
    address: "jul.vasquez@udla.edu.co - jualvalitube@gmail.com",
    theme: "Señales de transito Reglamentarias",
    tags: ["Reprobado"],
    cal: 2
  },
  {
    key: "8",
    name: "Julio Alfredo Vasquez Lievano",
    age: 24,
    address: "jul.vasquez@udla.edu.co - jualvalitube@gmail.com",
    theme: "Señales de transito Horizontales",
    tags: ["Reprobado"],
    cal: 2
  },
  {
    key: "9",
    name: "Julio Alfredo Vasquez Lievano",
    age: 24,
    address: "jul.vasquez@udla.edu.co - jualvalitube@gmail.com",
    theme: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
    tags: ["Aprovado"],
    cal: 9
  },
  {
    key: "10",
    name: "Julio Alfredo Vasquez Lievano",
    age: 24,
    address: "jul.vasquez@udla.edu.co - jualvalitube@gmail.com",
    theme: "Elementos distractores",
    tags: ["Reprobado"],
    cal: 1
  },
  {
    key: "11",
    name: "Julio Alfredo Vasquez Lievano",
    age: 24,
    address: "jul.vasquez@udla.edu.co - jualvalitube@gmail.com",
    theme: "Elementos distractores",
    tags: ["Reprobado"],
    cal: 0
  },
  {
    key: "12",
    name: "Julio Alfredo Vasquez Lievano",
    age: 24,
    address: "jul.vasquez@udla.edu.co - jualvalitube@gmail.com",
    theme: "Elementos distractores",
    tags: ["Reprobado"],
    cal: 2
  },
  {
    key: "13",
    name: "Julio Alfredo Vasquez Lievano",
    age: 24,
    address: "jul.vasquez@udla.edu.co - jualvalitube@gmail.com",
    theme: "Elementos distractores",
    tags: ["Aceptable"],
    cal: 2
  },
  {
    key: "14",
    name: "Julio Alfredo Vasquez Lievano",
    age: 24,
    address: "jul.vasquez@udla.edu.co - jualvalitube@gmail.com",
    theme: "Elementos distractores",
    tags: ["Aprovado"],
    cal: 2
  }
];

export const DataDnd = [
  {
    value: "preventiva",
    url: `${one}`
  },
  {
    value: "reglamentaria",
    url: `${two}`
  },
  {
    value: "informativa",
    url: `${cond}`
  }
];

export const SpecificContentImg = {
  titulo: "Contenido con Imagen",
  texto:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis? Deleniti tenetur tempora eum magnam atque quis iusto eius facilis, corrupti fuga natus odio quos! A sapiente doloribus illum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis? Deleniti tenetur tempora eum magnam atque quis iusto eius facilis, corrupti fuga natus odio quos! A sapiente doloribus illum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis? Deleniti tenetur tempora eum magnam atque quis iusto eius facilis, corrupti fuga natus odio quos! A sapiente doloribus illum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis? Deleniti tenetur tempora eum magnam atque quis iusto eius facilis, corrupti fuga natus odio quos! A sapiente doloribus illum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis? Deleniti tenetur tempora eum magnam atque quis iusto eius facilis, corrupti fuga natus odio quos! A sapiente doloribus illum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis? Deleniti tenetur tempora eum magnam atque quis iusto eius facilis, corrupti fuga natus odio quos! A sapiente doloribus illum sint.",
  urlmultimedia: `${img}`,
  type: "img"
};

export const SpecificContentPdf = {
  titulo: "Contenido con pdf",
  texto:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis? Deleniti tenetur tempora eum magnam atque quis iusto eius facilis, corrupti fuga natus odio quos! A sapiente doloribus illum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis? Deleniti tenetur tempora eum magnam atque quis iusto eius facilis, corrupti fuga natus odio quos! A sapiente doloribus illum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis? Deleniti tenetur tempora eum magnam atque quis iusto eius facilis, corrupti fuga natus odio quos! A sapiente doloribus illum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis? Deleniti tenetur tempora eum magnam atque quis iusto eius facilis, corrupti fuga natus odio quos! A sapiente doloribus illum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis? Deleniti tenetur tempora eum magnam atque quis iusto eius facilis, corrupti fuga natus odio quos! A sapiente doloribus illum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis? Deleniti tenetur tempora eum magnam atque quis iusto eius facilis, corrupti fuga natus odio quos! A sapiente doloribus illum sint.",
  urlmultimedia: `${pdf}`,
  type: "pdf"
};

export const SpecificContentVideo = {
  titulo: "Contenido con pdf",
  texto:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis? Deleniti tenetur tempora eum magnam atque quis iusto eius facilis, corrupti fuga natus odio quos! A sapiente doloribus illum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis? Deleniti tenetur tempora eum magnam atque quis iusto eius facilis, corrupti fuga natus odio quos! A sapiente doloribus illum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis? Deleniti tenetur tempora eum magnam atque quis iusto eius facilis, corrupti fuga natus odio quos! A sapiente doloribus illum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis? Deleniti tenetur tempora eum magnam atque quis iusto eius facilis, corrupti fuga natus odio quos! A sapiente doloribus illum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis? Deleniti tenetur tempora eum magnam atque quis iusto eius facilis, corrupti fuga natus odio quos! A sapiente doloribus illum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis? Deleniti tenetur tempora eum magnam atque quis iusto eius facilis, corrupti fuga natus odio quos! A sapiente doloribus illum sint.",
  urlmultimedia: `${video}`,
  type: "video"
};
