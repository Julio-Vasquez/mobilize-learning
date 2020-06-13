import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import signal from "./../../../assets/images/signals/001.jpg";

import "./style.scss";

const Home = () => {
  const [ld, setLd] = useState(true);

  useEffect(() => {
    const text = {
      strings: [
        "¿Conoces los tipos de señales de Tránsito?",
        "¿Sabes los comportamientos básicos en la Vía?",
        "¡Mobilize-Learning Te Ayudará!",
        "¿Qué esperas?",
      ],
      typeSpeed: 105,
      backSpeed: 45,
      loop: true,
    };
    new Typed("#dintext", text);
    document.body.style.backgroundImage = `url(${signal})`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    return () => {
      setLd(false);
      document.body.style.backgroundImage = "";
    };
  }, [ld]);

  return (
    <div id="conthome">
      <div className="content">
        <span id="dintext"></span>
      </div>
    </div>
  );
};

export default Home;
