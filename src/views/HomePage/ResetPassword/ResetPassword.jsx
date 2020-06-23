import React, { useEffect } from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Lock from "./../../../assets/images/lock.png";
import BG from "./../../../assets/images/bg3.jpg";

import "./ResetPassword.scss";

const ResetPassword = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(http://html.codedthemes.com/datta-able/bootstrap/assets/images/bg-images/bg4.jpg)`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundColor = "";
    };
  });

  const { Item } = Form;
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Col
      xs={{ span: 22, offset: 1 }}
      sm={{ span: 18, offset: 3 }}
      lg={{ span: 14, offset: 5 }}
      xl={{ span: 10, offset: 7 }}
    >
      <Card className="forgot-password">
        <Row>
          <Col span={12} push={12} className="forgot-password__R">
            <h2 className="text-center">¿Olvidó su contraseña?</h2>
            <p className="text-center">Aquí puedes restablecer tu contraseña</p>
            <Form>
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

              <div className="forgot-password__R__btn">
                <Button type="primary" htmlType="submit">
                  Restaurar contraseña
                </Button>
              </div>
            </Form>
            <p className="forgot-password__R__endP">
              ¿No tienes una cuenta? <Link to="/signup">Regístrate</Link>
            </p>
          </Col>

          <Col span={12} pull={12} className="forgot-password__theme-bg">
            <img src={Lock} alt="Restaurar contraseña" />
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default ResetPassword;
