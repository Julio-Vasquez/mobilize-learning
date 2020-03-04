import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import signal from "./../../../assets/images/signals/01.jpg";

import "./style.scss";

export const Home = () => {
  const [ld, setLd] = useState(true);

  useEffect(() => {
    const text = {
      strings: [
        "¿Conoces los tipos de señales de Tránsito?",
        "¿Sabes los comportamientos básicos en la Vía?",
        "¡Mobilize-Learning Te Ayudará!",
        "¿Qué esperas?"
      ],
      typeSpeed: 105,
      backSpeed: 45,
      loop: true
    };
    new Typed("#dintext", text);
    document.body.style.backgroundImage = `url(${signal})`;
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
