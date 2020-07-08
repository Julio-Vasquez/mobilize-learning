import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Col,
  Row,
  Radio,
  Divider,
  Select,
  DatePicker
} from "antd";
import { useDispatch } from "react-redux";

import { auth } from "./../../../services/auth/actions";
import { TermsAndConditions } from './components/TermsAndConditions';

import bg from "./../../../assets/images/signup/signup.jpg";
import './SignUp.scss';

const SignUp = () => {
  const { Item } = Form;
  const { Option } = Select;
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.backgroundImage = `url(${bg})`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    console.log(accept)
    return () => (document.body.style.backgroundImage = "");
  });

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
  //modal
  const [open, setOpen] = useState(false);
  //terms
  const [accept, setAccept] = useState(false);
  //modal
  const openModal = () => setOpen(!open);
  //term
  const termsAccept = () => {
    setAccept(true);
    openModal(false);
  };

  const onSelect = (e) => { setSelect(e); };
  const onChange = (value) => console.log(`selected ${value}`);
  const onSearch = (val) => console.log("search:", val);
  const onFinish = (e) => {
    console.log(e)
    dispatch(auth.signup({ j: "hola", v: "world" }));
  };
  const onChangeForm = e => {
    console.log(e.target.name + ':' + e.target.value);
    setForm({ ...form, [e.target.name]: [e.target.value] });
  }
  const handleChange = (e) => {
    setFileUpload([...fileUpload, e.target.files[0]]);
  };
  const stringValid = (v, min, max) => {
    return (v !== undefined && v.length >= min && v.length <= max);
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
          <Form onFinish={onFinish} onChange={onChangeForm}>
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
                      message: "Por favor ingresa su identificacion",
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
                  ]}
                >
                  <DatePicker
                    name="dateBirth"
                    placeholder="Fecha de Nacimiento"
                  />
                </Item>
              </Col>
              <Col xs={{ span: 10, offset: 2 }}>
                <Item>
                  <label className="radio-label">Genero : </label>
                  <Radio.Group name="gender">
                    <Radio value="Masculino">Masculino</Radio>
                    <Radio value="Femenino">Femenino</Radio>
                  </Radio.Group>
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
                  <Item noStyle>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      accept="image/png, image/jpeg"
                      onChange={handleChange}
                    />
                    <label htmlFor="file" className="btn-3">
                      <span>avatar!</span>
                    </label>
                  </Item>
                </Item>
              </Col>
            </Row>
            <Divider></Divider>
            <Row>
              <Col xs={{ span: 6, offset: 9 }}>
                <Button type="primary">
                  Registrarse ahora
                </Button>
                <Button type="primary" onClick={() => openModal()}>
                  Registrarse ahora
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