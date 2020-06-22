import React from "react";
import { Form, Input, Button, Row, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Lock from "./../../../assets/icons/lock.svg";

import "./ResetPassword.scss";

const ResetPassword = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const { Item } = Form;
  return (
    <div className="forgot-password">
      <Col className="forgot-password__border" span={6} offset={9}>
        <Row className="forgot-password__avatar">
          <Col span={8} offset={8}>
            <Avatar
              size={120}
              icon={<img src={Lock} alt="Reiniciar contrase;a" />}
              shape="square"
            />
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2}>
            <h2 className="text-center">¿Se te olvidó tu contraseña?</h2>
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2}>
            <p className="text-center">Aquí puedes restablecer tu contraseña</p>
          </Col>
        </Row>

        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Row>
            <Col span={16} offset={4}>
              <Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa su nombre de usuario",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Item>
            </Col>
          </Row>

          <Row>
            <Col span={12} offset={6}>
              <Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Restaurar contraseña
                </Button>
              </Item>
            </Col>
          </Row>
        </Form>
      </Col>
    </div>
  );
};

export default ResetPassword;
