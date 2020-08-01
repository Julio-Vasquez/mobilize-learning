import React, { useEffect } from "react";
import { Col, Row, Form, Button, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux'

import cardBackground from './../../../assets/images/profile/card-background.jpg'
import { FunctionToken } from "./../../../common/token";
import { Loading } from './../../../components/Loading';
import { profile } from './../../../services/account/actions'
import "./Profile.scss";

export default function Profile() {
  const { Item } = Form;
  const dispatch = useDispatch();

  const { profileData, loading } = useSelector(state => state.Account);
  useEffect(() => {
    if (!profileData) dispatch(profile.getProfile(FunctionToken.Decode().result.userName))
  }, [profileData, dispatch]);

  console.log(profileData)


  return loading ? <Loading /> : (
    <Row id="main-content">
      <Col span={8} offset={1}>
        <div className="card-user card">
          <div className="image">
            <img src={cardBackground} alt="cover user!" />
          </div>
          <div className="card-body">
            <div className="author">
              <div className="a-simulator">
                <img
                  src={profileData.avatar}
                  alt=" user"
                  className="avatar"
                />
                <h5 className="full-name">{`${profileData.name} ${profileData.lastName}`}</h5>
              </div>
              <p className="description">{`${profileData.userName} / ${profileData.role}`}</p>
            </div>
            <p></p>
          </div>
          <div className="card-footer">
            El usuario actuamente esta {profileData.state}
          </div>
        </div>
      </Col>
      <Col offset={1} span={13}>
        <div className="card-user card">
          <div className="card-header">
            <h4>Actualiza tu Información</h4>
          </div>
          <div className="card-body">
            <Form>
              <Item
                name="userName"
                rules={[{
                  type: 'string',
                  min: 4,
                  message: "Min 4"
                }]}
                initialValue={profileData.userName}
                label="Usuario"
              >
                <Input disabled />
              </Item>

              <Item
                name="name"
                rules={[{
                  type: 'string',
                  min: 3
                }]}
                initialValue={profileData.name}
                label="Nombre"
              >
                <Input />
              </Item>

              <Item
                name="lastName"
                rules={[{
                  type: 'string',
                  min: 3
                }]}
                initialValue={profileData.lastName}
                label="Apellido"
              >
                <Input />
              </Item>

              <Row>
                <Col span={12}>
                  <Item
                    name="typeDoc"
                    rules={[{
                      type: 'string',
                    }]}
                    initialValue={profileData.typeDoc}
                    label="Tipo Documento"

                  >
                    <Input disabled />
                  </Item>
                </Col>
                <Col span={12} >
                  <Item
                    name="identification"
                    rules={[{
                      type: 'number',
                      min: 4
                    }]}
                    initialValue={profileData.identification}
                    label="# Identificacion"
                    labelCol={{ offset: 2 }}
                  >
                    <Input disabled />
                  </Item>
                </Col>
              </Row>


              <Row>
                <Col span={12}>
                  <Item
                    name="gender"
                    rules={[{
                      type: 'string',
                    }]}
                    initialValue={profileData.gender}
                    label="Genero"
                  >
                    <Select >
                      <Select.Option value="Masculino">Masculino</Select.Option>
                      <Select.Option value="Femenino">Femenino</Select.Option>
                      <Select.Option value="Otro">Otro</Select.Option>
                    </Select>
                  </Item>
                </Col>
                <Col span={12} >
                  <Item
                    name="birthDate"
                    rules={[{
                      type: 'date',
                    }]}
                    initialValue={profileData.birthDate}
                    label="Fecha de Nacimiento"
                  >
                    <Input disabled />
                  </Item>
                </Col>
              </Row>


              <Item>
                <Button htmlType="submit" className="update-btn">
                  Actualizar Datos
                </Button>
              </Item>
            </Form>
          </div>
        </div>
      </Col>
    </Row >
  );
}
