import React, { useEffect } from "react";
import { Button, message, Row, Col, Card, Comment } from "antd";
import { CloudDownloadOutlined, EyeOutlined } from "@ant-design/icons";

import {
  SpecificContentImg,
  SpecificContentPdf,
  SpecificContentVideo,
} from "./../../../common/Data";

export default function SpecificContent() {
  const array = [SpecificContentImg, SpecificContentPdf, SpecificContentVideo];

  const prop = array[Math.floor(Math.random() * 3)];

  const Success = () => {
    setTimeout(() => {
      message.success("Se ha iniciado la descarga de tu certificado", 10);
    }, 300);
  };

  useEffect(() => {
    let t = document.getElementById("test");
    t.oncontextmenu = () => false;
  });

  const { Meta } = Card;

  const RenderType = (pro) => {
    switch (pro.type) {
      case "pdf":
        return (
          <Col span={12} offset={1} id="test">
            <Card
              style={{
                width: "90%",
              }}
              cover={
                <object
                  data={pro.urlmultimedia}
                  type="application/pdf"
                  aria-labelledby="Esto es un pdf"
                  style={{ height: "45vh" }}
                ></object>
              }
            >
              <Meta title={pro.titulo} />
            </Card>
          </Col>
        );
      case "img":
        return (
          <Col span={12} offset={1} id="test">
            <Card
              style={{
                width: "90%",
              }}
              cover={
                <img
                  alt={`${pro.titulo}`}
                  src={pro.urlmultimedia}
                  style={{ height: "55vh" }}
                />
              }
            >
              <Meta title={pro.titulo} />
            </Card>
          </Col>
        );
      case "video":
        return (
          <Col span={12} offset={1} id="test">
            <Card
              style={{
                width: "90%",
              }}
              cover={
                <video controls>
                  <source src={pro.urlmultimedia} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              }
            >
              <Meta title={pro.titulo} />
            </Card>
          </Col>
        );
      default:
        return "";
    }
  };

  const RenderButtons = (pro) => {
    return pro.type === "pdf" ? (
      <div>
        <a
          href={pro.urlmultimedia}
          download={`${pro.titulo}.pdf`}
          onClick={Success}
          className="btndownload"
        >
          <Button size="large" shape="round" type="primary">
            <CloudDownloadOutlined /> Descargar
          </Button>
        </a>

        <a
          href={pro.urlmultimedia}
          target="_blank"
          rel="noopener noreferrer"
          className="btndownload"
        >
          <Button size="large" shape="round" type="primary" id="red">
            <EyeOutlined /> Vizualizar
          </Button>
        </a>
      </div>
    ) : (
      ""
    );
  };
  //titulo, texto, url-externa, urlmultimedia, type-multimedia=[pdf, img, video]

  return (
    <div>
      <Row gutter={16}>
        {RenderType(prop)}
        <Col span={10}>
          <Comment
            author={<h3>Mobilize Learning</h3>}
            content={
              <p style={{ marginRight: "10px", fontSize: "15px" }}>
                {prop.texto}
              </p>
            }
          />
          {RenderButtons(prop)}
        </Col>
      </Row>
    </div>
  );
}
