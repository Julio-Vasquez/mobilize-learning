import React, { useEffect, useState } from "react";
import Typed from "typed.js";

import "./style.scss";

export const Home = () => {
  const [ld, setLd] = useState(true);

  useEffect(() => {
    const text = {
      strings: [
        "¿No sabes nada acerca de señales de transito?",
        "¿Mucho menos del comportamientos de movilidad?",
        "Este es el lugar indicado!!",
        "¿Qué estas esperando?"
      ],
      typeSpeed: 105,
      backSpeed: 45,
      loop: true
    };
    new Typed("#dintext", text);
    document.body.style.backgroundImage =
      "url(./../../../assets/images/signals/01.jpg)";
    return () => setLd(false);
  }, [ld]);

  return (
    <div id="conthome">
      <div className="content">
        <span id="dintext"></span>
      </div>
    </div>
  );
};
