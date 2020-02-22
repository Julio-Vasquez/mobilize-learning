import React from "react";
import CardList from "./../../../components/admin/CardList";

import "./RoadSigns.scss";

export default function RoadSigns() {
  const data = [
    {
      alt: "Title img alt",
      urlImg:
        "https://www.pequeocio.com/wp-content/uploads/2017/07/que-son-las-preposiciones.jpg",
      url: "whatthis",
      title: "¿Qué son las señales de transito?",
      description: "En este curso aprenderemos que son las señales de transito"
    },
    {
      alt: "Title img alt",
      urlImg:
        "https://www.comparaonline.com.co/blog-statics/co/uploads/2018/06/Se%C3%B1ales-de-tr%C3%A1nsito-preventivas.png",
      url: "preventive",
      title: "Señales de transito Preventivas",
      description:
        "En este curso aprenderemos que son las señales de transito preventivas"
    },
    {
      alt: "Title img alt",
      urlImg:
        "https://www.pruebaderuta.com/wp-content/uploads/2015/06/senales-de-transito-reglamentarias-1.jpg",
      url: "regulatory",
      title: "Señales de transito Reglamentarias",
      description:
        "En este curso aprenderemos que son las señales de transito reglamentarias"
    },
    {
      alt: "Title img alt",
      urlImg:
        "https://www.pruebaderuta.com/wp-content/uploads/2015/06/senales-de-transito-informativas-1.jpg",
      url: "informative",
      title: "Señales de transito Informativas",
      description:
        "En este curso aprenderemos que son las señales de transito informativas"
    },
    {
      alt: "Title img alt",
      urlImg:
        "https://www.pruebaderuta.com/wp-content/uploads/2015/06/senales-de-transito-horizontales-1.jpg",
      url: "horizontal",
      title: "Señales de transito Horizontales",
      description:
        "En este curso aprenderemos que son las señales de transito Horizontales"
    }
  ];
  return (
    <div className="card-list-rs">
      <CardList data={data} module="roadsigns" />
    </div>
  );
}
