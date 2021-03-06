import React, { useEffect } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdbreact";
import { MapContainer } from "./../../../components/map-container";

import bg from "./../../../assets/images/QueEs.jpg";
import "./Contact.scss";

const Contact = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${bg}')`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    return () => (document.body.style.backgroundImage = "");
  }, []);

  return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contactenos
      </h2>
      <div id="center-p">
        <p
          className="text-center w-responsive mx-auto pb-5"
          style={{ fontSize: 16, fontWeight: 500, color: "black" }}
        >
          Sus preguntas y opiniónes son muy importantes, completa el formulario
          para atenderte lo más pronto posible
        </p>
      </div>

      <MDBRow>
        <MDBCol lg="4" className="lg-0 mb-4 offset-1">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header blue accent-1" id="form-header">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" style={{ color: "white" }} />
                  Escribenos:
                </h3>
              </div>
              <p className="dark-grey-text">
                Escribenos para mejorar nuestro contenido
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Tú nombre"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Tú Email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Objectivo"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Cotenido del mensaje"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue">Enviar Mensaje</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="6">
          <MapContainer />
          <br />
          <MDBRow className="text-center">
            <MDBCol md="2" className="offset-1">
              <MDBBtn tag="a" color="blue" className="accent-1 contabou">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" color="blue" className="accent-1 contabou">
                <MDBIcon icon="phone" />
              </MDBBtn>
            </MDBCol>
            <MDBCol md="3">
              <MDBBtn tag="a" color="blue" className="accent-1 contabou">
                <MDBIcon icon="envelope" />
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default Contact;
