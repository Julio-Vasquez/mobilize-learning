import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
  Upload
} from "antd";
import { UploadOutlined } from '@ant-design/icons';

import { auth } from "./../../../services/auth/actions";
import { TermsAndConditions } from './components/TermsAndConditions';

import './SignUp.scss';

const SignUp = () => {
  const { Item } = Form;
  const { Option } = Select;
  const dispatch = useDispatch();

  const [select, setSelect] = useState();
  const [fileUpload, setFileUpload] = useState([]);
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    typeDoc: '',
    identification: 0,
    dateBirth: '',
    gender: '',
    userName: '',
    password: '',
    email: '',
    avatar: ''
  });
  const [open, setOpen] = useState(false); //modal
  const [accept, setAccept] = useState(false);//terms

  const onRemove = file => {
    setFileUpload([]);
    return true;
  }

  const beforeUpload = file => {
    setFileUpload(...fileUpload, file);
    return false;
  }

  const openModal = () => setOpen(!open);//modal
  const termsAccept = () => {//term
    setAccept(true);
    openModal(false);
  };

  const onSelect = (e) => { setSelect(e); };
  const onChange = (value) => console.log(`selected ${value}`);
  const onSearch = (val) => console.log("search:", val);

  const onFinishForm = () => {
    openModal();
    dispatch(auth.signup({ j: "hola", v: "world" }));
  };

  const onChangeForm = e => {
    console.log(e.target.name + ':' + e.target.value);
    setForm({ ...form, [e.target.name]: [e.target.value] });
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
        <Col className="signup-content-form" xs={{ span: 24 }}>
          <Form onChange={onChangeForm} onFinish={onFinishForm}>
            <h2>Registro de estudiante</h2>
            <Divider orientation="left">Datos Personales</Divider>
            <Row>
              <Col xs={{ span: 10, offset: 1 }}>
                <Item
                  name="nameI"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa su nombre",
                      min: 4,
                      max: 45
                    }
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
                      min: 3,
                      max: 50
                    }
                  ]}
                >
                  <Input placeholder="Apellido" name="lastName" />
                </Item>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 10, offset: 1 }}>
                <Item
                  name="typedocI"
                  rules={[
                    {
                      required: true,
                      message: "Por favor Seleccione tipo de documento",
                    }
                  ]}
                >
                  <Select
                    showSearch
                    placeholder="Seleccione Tipo Documento"
                    onChange={onChange}
                    onSearch={onSearch}
                    onSelect={onSelect}
                    name="typeDoc"
                    value={select}
                  >
                    <Option value="Cédula de Ciudadanía">Cédula de Ciudadanía</Option>
                    <Option value="Tarjeta de Identidad">Tarjeta de Identidad</Option>
                    <Option value="Cédula de Extranjería">Cédula de Extranjería</Option>
                    <Option value="Pasaporte">Pasaporte</Option>
                  </Select>
                </Item>
              </Col>
              <Col xs={{ span: 10, offset: 2 }}>
                <Item
                  name="identificationI"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa una identificacion correcta",
                      min: 6,
                      max: 12
                    },
                  ]}
                >
                  <Input placeholder="Identificacion" name="identification" type="number" />
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
                    () => ({
                      validator(rule, value) {
                        if (value.year() <= 2004) return Promise.resolve()
                        return Promise.reject('Usted debe tener al menos 16 años')
                      }
                    })
                  ]}
                >
                  <DatePicker
                    name="dateBirth"
                    placeholder="Fecha de Nacimiento"
                  />
                </Item>
              </Col>
              <Col xs={{ span: 10, offset: 2 }}>
                <Item
                  name="genderI"
                  rules={[
                    {
                      required: true,
                      message: "Por favor seleccione su genero",
                    },
                  ]}
                >
                  <Item noStyle>
                    <label className="radio-label">Genero : </label>
                    <Radio.Group name="gender">
                      <Radio value="Masculino">Masculino</Radio>
                      <Radio value="Femenino">Femenino</Radio>
                    </Radio.Group>
                  </Item>
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
                      message: "Por favor ingresa su nombre de usuario",
                      min: 8,
                      max: 45
                    },
                  ]}
                >
                  <Input placeholder="Nombre de usuario" name="userName" />
                </Item>
              </Col>
              <Col xs={{ span: 10, offset: 2 }}>
                <Item
                  name="passwordI"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa su constraseña, (8)",
                      min: 8,
                      max: 45
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Contraseña"
                    name="password"
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
                      message: "Por favor ingresa un email correcto",
                      pattern: /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9]{2,})\.([a-z]{2,3})$/
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
                  <Upload
                    onRemove={onRemove}
                    beforeUpload={beforeUpload}
                  >
                    <Button>
                      <UploadOutlined /> Select File
                    </Button>
                  </Upload>
                </Item>
              </Col>
            </Row>
            <Divider></Divider>
            <Row>
              <Col
                xs={{ span: 10, offset: 7 }}
                sm={{ span: 8, offset: 8 }}
                lg={{ span: 6, offset: 9 }}
              >
                <Button type="primary" htmlType="submit" onClick={() => openModal()}>
                  Registrarse ahora!!
                </Button>
              </Col>

            </Row>
          </Form>
        </Col>
      </Row>
      <TermsAndConditions
        open={open}
        close={openModal}
        accept={accept}
        setAccept={termsAccept}
      />
    </Col>
  );
};

export default SignUp;