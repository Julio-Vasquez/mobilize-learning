import React from "react";

import SpecificTheme from "./../../../components/admin/SpecificTheme";
import bg from "./../../../assets/images/bann.jpg";

export default function DashBoard() {
  //const arr = ["cont1", "cont1", "cont1", "cont1", "cont1"];
  const arr = [{ title: "ffffff" }, { title: "xxxxxx" }, { title: "zzzzzz" }];
  return (
    <div>
      <SpecificTheme
        bg={bg}
        cover="https://i2.wp.com/libertadbajopalabra.com/wp-content/uploads/2016/02/prohibido.jpg"
        title="Esto es un puto tst"
        description="ya valio madres perro"
        contenido={arr}
      />
    </div>
  );
}
