import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Typed from "typed.js";
import signal from "./../../../assets/images/signals/001.jpg";

import "./style.scss";
import { message } from "antd";

const Home = () => {
  const [ld, setLd] = useState(true);
  const {
    success: { ResetPassword },
  } = useSelector((state) => state.Auth);

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

  if (ResetPassword)
    message.success(
      "Se ha enviado la informacion de cambio de contraseña al correo electronico, ",
      5
    );
  return (
    <div id="conthome">
      <div className="content">
        <span id="dintext"></span>
      </div>
    </div>
  );
};

export default Home;
