import React from "react";
import { Form, Input, Button, Col, Row, Checkbox, Divider } from "antd";

import "./signup.scss";

export const SignUpForm = () => {
  const { Item } = Form;
  return (
    <Col
      xs={{ span: 22, offset: 1 }}
      sm={{ span: 18, offset: 3 }}
      lg={{ span: 14, offset: 5 }}
      xl={{ span: 12, offset: 6 }}
      xxl={{ span: 10, offset: 7 }}
    >
      <Row className="signup-content">
        <Col className="signup-img" xl={{ span: 10 }}>
          <img
            src="https://academiadebellezaglamestilistas.com/susavip/2019/03/Salon-Academia-de-Belleza-GlamEstilistas-2.png"
            width="250"
            alt=""
          />
        </Col>
        <Col className="signup-form" xl={{ span: 14 }}>
          <Form>
            <h2>Formulario de registro de estudiante</h2>
            <Divider orientation="left">Datos Personales</Divider>
            <Row>
              <Item
                name="nameI"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa su nombre",
                  },
                ]}
              >
                <Input placeholder="Nombre" name="name" />
              </Item>

              <Item
                name="lastNameI"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa su Apellido",
                  },
                ]}
              >
                <Input placeholder="Nombre" name="lastName" />
              </Item>
            </Row>
            <Row>
              <Checkbox>M</Checkbox>
            </Row>
            <Row>
              <Button>Registrarse</Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Col>
  );
};
