import React from "react";

import { Button, Icon, message, Row, Col, Card, Comment } from "antd";

import certificate from "./../../../assets/pdf/certificate.png";
import file from "./../../../assets/pdf/Certificate.pdf";

import "./Certificate.scss";

export default function Certificate() {
  const Success = () => {
    setTimeout(() => {
      message.success("Se ha iniciado la descarga de tu certificado", 10);
    }, 300);
  };

  const { Meta } = Card;
  return (
    <div>
      <Row gutter={16}>
        <Col span={14} offset={1}>
          <Card
            style={{
              width: "90%"
            }}
            cover={<img alt="example" src={certificate} />}
          >
            <Meta
              title="Certificado Mobilize Learning - Felicidades por completar todos los cursos"
              description="www.mobilizelearning.com"
            />
          </Card>
        </Col>

        <Col span={8}>
          <Comment
            author={<h3>Mobilize Learning</h3>}
            content={
              <p style={{ marginRight: "10px", fontSize: "15px" }}>
                Has puesto mucho empeño y dedicación para cumplir con esta meta
                y eso es algo que debemos reconocer. Muchas felicitaciones por
                este éxito. Sé que todo te irá bien Leer más en: Has llegado
                lejos, cumplido la meta más alta, has conseguido completar todo
                el curso que orefe mobilize learning. Eso gracias a tu
                disciplina, entrenamiento, el amor y corazón que le pusiste a
                cada curso por eso hoy te destacas entre los demás. Valió la
                pena el sacrificio, mientras otros dormían o se iban de fiesta,
                tú estabas estudiante. ¡Muchas Felicidades!
              </p>
            }
          />
          <a
            href={file}
            download="Certificado.pdf"
            onClick={Success}
            id="btndownload"
          >
            <Button size="large" shape="round" type="primary">
              <Icon type="download" /> Click to Download
            </Button>
          </a>
        </Col>
      </Row>
    </div>
  );
}
