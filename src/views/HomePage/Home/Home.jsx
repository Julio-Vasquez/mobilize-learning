import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Toast from "./../../../common/toast";
import Typed from "typed.js";

import signal from "./../../../assets/images/signals/001.jpg";
import "./Home.scss";


import { RadioQuest } from './../../DashBoard/EvaluativeTests/components/RadioQuest'
import { ImageQuest } from './../../DashBoard/EvaluativeTests/components/ImageQuest'
import { VideoQuest } from "../../DashBoard/EvaluativeTests/components/VideoQuest";
import { MultipleImageQuest } from "../../DashBoard/EvaluativeTests/components/MultipleImageQuest";

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

    return () => setLd(false);
  }, [ld]);

  useEffect(() => {
    if (ResetPassword)
      Toast(
        "Se ha enviado la informacion de cambio de contraseña al correo electronico, ",
        "success"
      );
  });

  useEffect(() => {
    document.body.style.backgroundImage = `url(${signal})`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    return () => (document.body.style.backgroundImage = "");
  }, []);

  const cont = ["option1", "option2", "option3", "option4"];
  const conte = [
    { image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Brunei_road_sign_-_Traffic_Signal.svg', descriptionImg: 'description', value: '1' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Brunei_road_sign_-_Traffic_Signal.svg', descriptionImg: 'description', value: '2' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Brunei_road_sign_-_Traffic_Signal.svg', descriptionImg: 'description', value: '3' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Brunei_road_sign_-_Traffic_Signal.svg', descriptionImg: 'description', value: '4' },
  ]
  return (
    <div id="conthome">
      <div className="content">
        <span id="dintext"></span>
      </div>

      <div>
        <RadioQuest
          options={cont}
          question="Pregunta problema"
        />
        <ImageQuest
          options={cont}
          question="Pregunta problema2"
          image="https://upload.wikimedia.org/wikipedia/commons/5/5b/Brunei_road_sign_-_Traffic_Signal.svg"
          descriptionImg="signal road"
        />
        <VideoQuest
          options={cont}
          question="Pregunta problema2"
          video="https://cldup.com/NsZiP49zu5.mp4"
        />
        <MultipleImageQuest
          options={conte}
          question="Seleccione imagen"
        />
      </div>
    </div>
  );
};

export default Home;
