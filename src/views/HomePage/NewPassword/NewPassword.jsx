import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Card, Row, Form, Button, Input } from "antd";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { AlipayOutlined } from "@ant-design/icons";

import { auth } from "./../../../services/auth/actions";
import { FunctionToken } from "./../../../common/token";
import Toast from "./../../../common/toast";

import bg3 from "./../../../assets/images/bg3.jpg";
import "./NewPassword.scss";

export default function NewPassword() {
  const { token } = useParams();
  return FunctionToken.CheckToken(token) ? (
    <SetNewPassword token={token} />
  ) : (
    <ErrorToken />
  );
}

const ErrorToken = () => {
  return <div>token invalido</div>;
};

const SetNewPassword = ({ token }) => {
  const { Item } = Form;

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    document.body.style.backgroundImage = `url('${bg3}')`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    return () => (document.body.style.backgroundImage = "none");
  }, []);

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const equalsPassword = ({ password, confirmPassword }) => {
    if (password !== confirmPassword) Toast("las contraseñas no coinciden");
    else dispatch(auth.newPassword(token, password));
  };

  const onSubmit = (e) => {
    if (
      form.password &&
      form.password.length > 6 &&
      form.confirmPassword &&
      form.confirmPassword.length > 6
    )
      equalsPassword(form);
    else Toast("la contraseña debe contener al menos 6 caracteres", "error");
  };

  return (
    <Col
      xs={{ span: 22, offset: 1 }}
      sm={{ span: 16, offset: 4 }}
      lg={{ span: 12, offset: 6 }}
      xl={{ span: 10, offset: 7 }}
      xxl={{ span: 8, offset: 8 }}
      className="new"
    >
      <Card className="new-password">
        <Row justify="center">
          <Col span={20} className="new-password__R">
            <h2 className="text-center">Nueva contraseña</h2>
            <p className="text-center">Aquí puedes cambiar tu contraseña</p>
            <Form onChange={onChange} onFinish={onSubmit}>
              <Item
                name="passwordI"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa la nueva contraseña",
                  },
                ]}
              >
                <Input
                  prefix={<AlipayOutlined className="site-form-item-icon" />}
                  placeholder="nueva contraseña"
                  type="password"
                  name="password"
                />
              </Item>
              <Item
                name="confirmPasswordI"
                rules={[
                  {
                    required: true,
                    message: "Por favor confirme la nueva contraseña",
                  },
                ]}
              >
                <Input
                  prefix={<AlipayOutlined className="site-form-item-icon" />}
                  placeholder="confirmar nueva contraseña"
                  type="password"
                  name="confirmPassword"
                />
              </Item>
              <div className="new-password__R__btn">
                <Button type="primary" htmlType="submit">
                  Cambiar contraseña
                </Button>
              </div>
            </Form>
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
