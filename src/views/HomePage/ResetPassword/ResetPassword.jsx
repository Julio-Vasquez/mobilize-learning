import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Form, Input, Button, Row, Col, Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "./../../../services/auth/actions";

import Lock from "./../../../assets/images/lock.png";
import bg4 from "./../../../assets/images/bg4.jpg";
import Toast from "./../../../common/toast";

import "./ResetPassword.scss";

const ResetPassword = () => {
  const { Item } = Form;

  const getSize = () => document.body.clientWidth < 833;

  const [lock, setLock] = useState(getSize);
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();

  const handleResize = () => setLock(getSize());

  const onChange = (e) => setUserName(e.target.value);

  const onSubmit = (e) => {
    console.log(userName);
    if (userName && userName.length > 4) {
      dispatch(auth.resetPassword(userName));
    } else {
      Toast(
        "El nombre de usuario debe contener al menos 4 caracteres",
        "warning"
      );
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    document.body.style.backgroundImage = `url('${bg4}')`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    return () => {
      document.body.style.backgroundImage = "none";
      document.body.style.backgroundColor = "";
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Col
      xs={{ span: 22, offset: 1 }}
      sm={{ span: 18, offset: 3 }}
      lg={{ span: 14, offset: 5 }}
      xl={{ span: 12, offset: 6 }}
      xxl={{ span: 10, offset: 7 }}
    >
      <Card className="forgot-password">
        <Row justify="center">
          <Col
            span={lock ? 24 : 12}
            push={lock ? 0 : 12}
            className="forgot-password__R"
          >
            <h2 className="text-center">¿Olvidó su contraseña?</h2>
            <p className="text-center">Aquí puedes restablecer tu contraseña</p>
            <Form onChange={onChange} onFinish={onSubmit}>
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

          <Col
            span={lock ? 0 : 12}
            pull={lock ? 0 : 12}
            className="forgot-password__theme-bg"
            style={lock ? { display: "none" } : {}}
          >
            <img src={Lock} alt="Restaurar contraseña" />
          </Col>
        </Row>
      </Card>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        pauseOnHover={false}
      />
    </Col>
  );
};

export default ResetPassword;
