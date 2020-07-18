import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Button, message, Row, Col, Card, Comment, Modal, Space } from "antd";
import { DownloadOutlined, EyeOutlined } from "@ant-design/icons";

import { Loading } from './../../../components/Loading';
import { FunctionToken } from './../../../common/token';
import { certificate } from './../../../services/certificate/actions';

import "./Certificate.scss";

export default function Certificate() {
  const { Meta } = Card;
  const { token } = useSelector(state => state.Auth);

  const dispatch = useDispatch();

  useEffect(() => {
    const { result: { userName } } = FunctionToken.Decode(token);
    dispatch(certificate.getCertificate(userName));
  }, [dispatch, token]);

  const { certificateData, error } = useSelector(state => state.Certificate);

  const Success = () => {
    setTimeout(() => {
      message.success("Se ha iniciado la descarga de tu certificado", 10);
    }, 300);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(interval)
  }, [loading]);

  const ErrorModal = () => <Modal
    title='Contenido tematico no finalizado'
    visible={true}
    onOk={() => window.location = '/admin'}
    onCancel={() => window.location = '/admin'}
  >
    <h2>{error.type}</h2>
  </Modal>;

  if (certificateData.length < 1) return (
    <Space>
      <ErrorModal />
    </Space>
  );

  return loading ? <Loading /> : (
    <div>
      <Row gutter={16}>
        <Col span={14} offset={1} id="test" onContextMenu={(e) => e.preventDefault()}>
          <Card
            style={{
              width: "90%",
            }}
            cover={<img alt="example" src={certificateData.preview} />}
          >
            <Meta
              title="Certificado Mobilize Learning - Felicidades por completar todos los cursos"
              description="www.mobilizelearning.com"
            />
          </Card>
        </Col>

        <Col span={8}>
          <Comment
            id="text"
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
            href={certificateData.certificate}
            download="Certificado.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => Success()}
            className="btndownload"
          >
            <Button size="large" shape="round" type="primary">
              <DownloadOutlined /> Descargar
            </Button>
          </a>

          <a
            href={certificateData.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="btndownload"
          >
            <Button size="large" shape="round" type="primary" id="red">
              <EyeOutlined /> Vizualizar
            </Button>
          </a>
        </Col>
      </Row>
    </div>
  );
}
