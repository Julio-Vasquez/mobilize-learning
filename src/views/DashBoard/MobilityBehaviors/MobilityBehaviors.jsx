import React from "react";
import CardList from "./../../../components/admin/CardList";

export default function MobilityBehaviors() {
  const data = [
    {
      alt: "Title img alt",
      urlImg:
        "https://www.pequeocio.com/wp-content/uploads/2017/07/que-son-las-preposiciones.jpg",
      url: "whatthis",
      title: "Comportamientos de movilidad vial",
      description:
        "En este curso aprenderemos que son los comportamientos de movilidad vial."
    },
    {
      alt: "Title img alt",
      urlImg:
        "https://www.abogados.com/wp-content/uploads/accidente-de-auto.jpg",
      url: "preventive",
      title: "Prevenciones para accidentes",
      description:
        "En este curso aprenderemos tics para evitar accidentes en las vias."
    },
    {
      alt: "Title img alt",
      urlImg: "https://conductavialqualitas.net/images/vista_conduccion_1.jpg",
      url: "distract",
      title: "No lleves elementos distractores",
      description:
        "En este curso aprenderemos que son los elementos distractores"
    },
    {
      alt: "Title img alt",
      urlImg:
        "https://www.lavanguardia.com/r/GODO/LV/p4/WebSite/2017/07/22/Recortada/img_eortiz_20170722-175728_imagenes_lv_terceros_volante_estres-kfoF-U4325871298ywH-992x558@LaVanguardia-Web.jpg",
      url: "patience",
      title: "la paciencia es sabiduria",
      description:
        "En este curso aprenderemos que son las señales de transito informativas"
    }
  ];
  return (
    <div className="card-list-rs">
      <CardList data={data} module="mobilitybehaviors" />
    </div>
  );
}
