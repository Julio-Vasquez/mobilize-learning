import React from "react";
import {
  Form,
  Input,
  Button,
  Col,
  Row,
  Radio,
  Divider,
  Select,
  DatePicker,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { auth } from "./../../../services/auth/actions";
import "./signup.scss";

export const SignUpForm = () => {
  const { Item } = Form;
  const { Option } = Select;
  const dispatch = useDispatch();

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  function finishForm() {
    dispatch(auth.signup({ j: "hola", v: "world" }));
  }

  return (
    <Col
      xs={{ span: 22, offset: 1 }}
      sm={{ span: 18, offset: 3 }}
      lg={{ span: 12, offset: 6 }}
      xl={{ span: 10, offset: 7 }}
      xxl={{ span: 8, offset: 8 }}
      className="signup"
    >
      <Row className="signup-content">
        <Col className="signup-content-form" xl={{ span: 24 }}>
          <Form>
            <h2>Formulario de registro de estudiante</h2>
            <Divider orientation="left">Datos Personales</Divider>
            <Row>
              <Col xs={{ span: 10, offset: 1 }}>
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
              </Col>
              <Col xs={{ span: 10, offset: 2 }}>
                <Item
                  name="lastNameI"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa su Apellido",
                    },
                  ]}
                >
                  <Input placeholder="Apellido" name="lastName" />
                </Item>
              </Col>
            </Row>

            <Row>
              <Col xs={{ span: 10, offset: 1 }}>
                <Item
                  name="typeidentificationI"
                  rules={[
                    {
                      required: true,
                      message: "Por favor Seleccione tipo de documento",
                    },
                  ]}
                >
                  <Select
                    showSearch
                    placeholder="Seleccione Tipo Documento"
                    onChange={onChange}
                    onBlur={onBlur}
                    onSearch={onSearch}
                  >
                    <Option value="CC">CC</Option>
                    <Option value="TI">TI</Option>
                    <Option value="CE">CE</Option>
                    <Option value="PA">PA</Option>
                  </Select>
                </Item>
              </Col>
              <Col xs={{ span: 10, offset: 2 }}>
                <Item
                  name="identificationI"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa su identificacion",
                    },
                  ]}
                >
                  <Input placeholder="Identificacion" name="identification" />
                </Item>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 10, offset: 1 }}>
                <Item
                  name="datebirthI"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa su Fecha de nacimiento",
                    },
                  ]}
                >
                  <DatePicker name="datebirth" size="middle" />
                </Item>
              </Col>
              <Col xs={{ span: 10, offset: 2 }}>
                <Item
                  name="genderI"
                  rules={[
                    {
                      required: true,
                      message: "Por favor Seleccione su genero",
                    },
                  ]}
                >
                  <label className="radio-label">Genero : </label>
                  <Radio.Group name="gender">
                    <Radio value="Masculino">Masculino</Radio>
                    <Radio value="Femenino">Femenino</Radio>
                  </Radio.Group>
                </Item>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 10, offset: 1 }}>
                <Item
                  name="telephoneI"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa su Telefono",
                    },
                  ]}
                >
                  <Input placeholder="Telefono" name="telephone" />
                </Item>
              </Col>
            </Row>
            <Divider orientation="left">Datos de cuenta</Divider>

            <Row>
              <Col xs={{ span: 10, offset: 1 }}>
                <Item
                  name="accountI"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa su Telefono",
                    },
                  ]}
                >
                  <Input placeholder="Nombre de usuario" name="account" />
                </Item>
              </Col>
              <Col xs={{ span: 10, offset: 2 }}>
                <Item
                  name="passwordI"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa su constraseña",
                    },
                  ]}
                >
                  <Input
                    placeholder="Contraseña"
                    name="password"
                    type="password"
                  />
                </Item>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 10, offset: 1 }}>
                <Item
                  name="emailI"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa su email",
                    },
                  ]}
                >
                  <Input placeholder="email" name="email" />
                </Item>
              </Col>
              <Col xs={{ span: 10, offset: 2 }}>
                <Item
                  name="avatarI"
                  rules={[
                    {
                      required: true,
                      message: "Por cargue su imagen",
                    },
                  ]}
                >
                  <Upload name="avatar" accept=".png, .jpg, .bmp">
                    <Button>
                      <UploadOutlined /> Click to Upload
                    </Button>
                  </Upload>
                </Item>
              </Col>
            </Row>
            <Divider></Divider>
            <Row>
              <Col xs={{ span: 6, offset: 9 }}>
                <Button type="primary" onClick={finishForm}>
                  Registrarse
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Col>
  );
};
