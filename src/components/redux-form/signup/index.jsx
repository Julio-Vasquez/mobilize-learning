import React, { useEffect } from "react";

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput
} from "mdbreact";

import "./style.scss";

export const SignUpForm = props => {
  useEffect(() => {
    document.body.style.backgroundImage =
      "url(https://mdbootstrap.com/img/Photos/Others/images/91.jpg)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  });
  return (
    <div id="classicformpage">
      <MDBView>
        <MDBMask className="d-flex justify-content-center align-items-center">
          <MDBContainer>
            <MDBRow>
              <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                <h1 className=" font-weight-bold">
                  ¿Qué estas esperando para registrarte?
                </h1>
              </div>
              <MDBCol md="6" xl="5" className="mb-4">
                <MDBCard id="classic-card">
                  <MDBCardBody className="z-depth-2 white-text">
                    <h3 className="text-center" style={{ color: "white" }}>
                      <MDBIcon icon="user" style={{ color: "white" }} />
                      Register:
                    </h3>
                    <hr className="hr-light" />
                    <MDBInput label="Your name" icon="user" />
                    <MDBInput label="Your email" icon="envelope" />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      type="password"
                    />
                    <div className="text-center mt-4 black-text">
                      <MDBBtn color="indigo">Sign Up</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
    </div>
  );
};
