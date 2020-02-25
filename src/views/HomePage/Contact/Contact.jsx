import React, { useEffect } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput
} from "mdbreact";

import "./style.scss";

export const Contact = () => {
  useEffect(() => {
    document.body.style.backgroundImage =
      "url('https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg')";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  });

  return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
        amet numquam iure provident voluptate esse quasi, veritatis totam
        voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol lg="4" className="lg-0 mb-4 offset-1">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header blue accent-1" id="form-header">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" style={{ color: "white" }} /> Write
                  to us:
                </h3>
              </div>
              <p className="dark-grey-text">
                We'll write rarely, but only the best content.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Icon Prefix"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="6">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "470px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
              title="This is a unique title"
              width="99.9%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
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
