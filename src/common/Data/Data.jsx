import pdf from "./../../assets/pdf/Content/test.pdf";
import img from "./../../assets/pdf/Content/test.png";

import one from "./../../assets/images/content/dnd/left.png";
import two from "./../../assets/images/content/dnd/stop.png";
import cond from "./../../assets/images/content/dnd/condi.webp";

//videos
import video from "./../../assets/videos/test.mp4";

export const Titles = [
  { title: "Titulo 1", link: "/admin/content" },
  { title: "Titulo 2", link: "/admin/content" },
  { title: "Titulo 3", link: "/admin/content" },
  { title: "Titulo 4", link: "/admin/content" },
  { title: "Titulo 5", link: "/admin/content" },
  { title: "Titulo 6", link: "/admin/content" }
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
